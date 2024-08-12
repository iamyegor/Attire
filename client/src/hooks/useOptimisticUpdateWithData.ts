import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useOptimisticUpdateWithData<TMutationData>(
    queryKey: string[],
    mutationFn: (data: TMutationData) => Promise<void>,
    onMutate: (data: TMutationData) => Promise<{ previousData: any }>,
) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn,
        onMutate,
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
