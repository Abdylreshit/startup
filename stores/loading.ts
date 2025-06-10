export const useLoadingStore = defineStore("loading", {
    state: () => ({
        globalLoading: false,
    }),

    actions: {
        start() {
            this.globalLoading = true;
        },
        stop() {
            this.globalLoading = false;
        },

        async withLoading<T>(callback: () => Promise<T>, delay = 0): Promise<T> {
            this.start();
            await new Promise((resolve) => setTimeout(resolve, delay));
            try {
                return await callback();
            } finally {
                this.stop();
            }
        },
    },
});
