import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useOptimisticUpdateWithoutData<TMutationData>(
    queryKey: string[],
    mutationFn: () => Promise<void>, 
    onMutate: () => Promise<{ previousData: any }>, 
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
