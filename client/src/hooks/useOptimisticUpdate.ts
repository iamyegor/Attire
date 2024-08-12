import { MutationFunction, useMutation, useQueryClient } from "@tanstack/react-query";

export function useOptimisticUpdate<T>(
    queryKey: string[],
    mutationFn: MutationFunction<unknown, void>,
    desiredOutcome: (data: T) => T,
) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn,
        async onMutate() {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<T>(queryKey);

            queryClient.setQueryData<T>(queryKey, (data) => {
                if (!data) return previousData;

                return desiredOutcome(data);
            });

            return { previousData };
        },
        onError(_, __, context) {
            if (context?.previousData !== undefined) {
                queryClient.setQueryData(queryKey, context.previousData);
            }
        },
        onSettled() {
            queryClient.invalidateQueries({ queryKey });
        },
    });
}
