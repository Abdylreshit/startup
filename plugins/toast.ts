class Toast {
    private toast;

    constructor() {
        this.toast = useToast();
    }

    success(title: string, description?: string) {
        this.toast.add({
            title: title,
            description: description,
            color: "success",
            ui: {
                progress: "hidden",
                root: "bg-primary-100 ring ring-primary-800",
            },
            close: {
                class: "cursor-pointer",
            },
        });
    }

    error(title: string, description?: string) {
        this.toast.add({
            title: title,
            description: description,
            color: "error",
            ui: {
                progress: "hidden",
                root: "bg-red-100 ring ring-red-700",
            },
            close: {
                class: "cursor-pointer",
            },
        });
    }

    warning(title: string, description?: string) {
        this.toast.add({
            title: title,
            description: description,
            color: "warning",
            ui: {
                progress: "hidden",
                root: "bg-cyan-100 ring ring-cyan-600",
            },
            close: {
                class: "cursor-pointer",
            },
        });
    }

    info(title: string, description?: string) {
        this.toast.add({
            title: title,
            description: description,
            color: "info",
            ui: {
                progress: "hidden",
                root: "bg-orange-100 ring ring-orange-500",
            },
            close: {
                class: "cursor-pointer",
            },
        });
    }
}

export default defineNuxtPlugin(() => {
    const toast = new Toast();

    return {
        provide: {
            toast: toast,
        },
    };
});
