import type { $Fetch, NitroFetchRequest } from "nitropack";
import { useAuthStore } from "@/stores/auth";
import type { FetchError } from "ofetch";
import { useLocalePath } from "#imports";

class HttpService {
    private http: $Fetch<unknown, NitroFetchRequest>;
    private authStore = useAuthStore();
    private localePath = useLocalePath();

    constructor() {
        const config = useRuntimeConfig();
        this.http = $fetch.create({
            baseURL: config.public.apiUrl,
            headers: {
                Accept: "application/json",
            },
        });
    }

    private async request<RT>(
        method: "GET" | "POST" | "PUT" | "DELETE",
        url: string,
        body?: Record<string, unknown> | FormData | null,
        query: Record<string, unknown> = {},
        headers: Record<string, string> = {}
    ): Promise<RT> {
        const token = useCookie<string | null>("auth_token").value;

        if (token) {
            headers = {
                Authorization: `Bearer ${token}`,
                ...headers,
            };
        }

        // auto content-type, кроме multipart
        if (!(body instanceof FormData)) {
            headers["Content-Type"] = "application/json";
        }

        // this.loadingStore.start();

        // await new Promise((resolve) => setTimeout(resolve, 2000));

        if (method === "GET") {
            body = undefined;
        }

        try {
            return await this.http<RT>(url, {
                method,
                body,
                params: query,
                headers,
            });
        } catch (error) {
            const err = error as FetchError;

            const { $toast } = useNuxtApp();

            $toast.error(err.data!.message);

            if (err.response?.status === 401) {
                this.authStore.logout();
                navigateTo(this.localePath("auth/login"));
            }

            if (err.response?.status === 500) {
                throw createError({ statusCode: 500, statusMessage: "Internal Server Error" });
            }
            throw err;
        } finally {
            // this.loadingStore.stop();
        }
    }

    get<RT>(
        url: string,
        query: Record<string, unknown> = {},
        options: { headers?: Record<string, string> } = {}
    ) {
        return this.request<RT>("GET", url, null, query, options.headers || {});
    }

    post<RT>(
        url: string,
        body: Record<string, unknown> = {},
        options: { headers?: Record<string, string> } = {}
    ) {
        return this.request<RT>("POST", url, body, {}, options.headers || {});
    }

    put<RT>(
        url: string,
        body: Record<string, unknown> = {},
        options: { headers?: Record<string, string> } = {}
    ) {
        return this.request<RT>("PUT", url, body, {}, options.headers || {});
    }

    delete<RT>(url: string, options: { headers?: Record<string, string> } = {}) {
        return this.request<RT>("DELETE", url, {}, {}, options.headers || {});
    }
}

export default defineNuxtPlugin(() => {
    const api = new HttpService();

    return {
        provide: {
            http: api,
        },
    };
});
