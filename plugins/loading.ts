export default defineNuxtPlugin(() => {
    const isLoading = ref(false);

    const start = () => (isLoading.value = true);
    const stop = () => (isLoading.value = false);

    async function fetch<T>(callback: () => Promise<T>, delay = 1000): Promise<T> {
        start();
        try {
            await new Promise((resolve) => setTimeout(resolve, delay));
            return await callback();
        } finally {
            stop();
        }
    }

    return {
        provide: {
            loading: {
                isLoading,
                start,
                stop,
                fetch, // Добавляем новый метод
            },
        },
    };
});
