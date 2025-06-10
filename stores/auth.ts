import type { IUser } from "~/types/IUser";
import type { IAuthMe } from "~/types/endpoint/IAuthMe";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        user: null as IUser | null,
        token: null as string | null,
    }),

    getters: {
        isLoggedIn: (state) => !!state.token,
    },

    actions: {
        login(user: IUser, authToken: string) {
            this.isAuthenticated = true;
            this.user = user;
            this.token = authToken;

            useCookie("auth_token", { path: "/", sameSite: "lax" }).value = authToken;
        },

        logout() {
            this.isAuthenticated = false;
            this.user = null;
            this.token = null;

            useCookie("auth_token", { path: "/", sameSite: "lax" }).value = null;
        },

        async initAuth() {
            const token = useCookie<string | null>("auth_token").value;

            console.log("token", token);
            console.log("user", this.user);

            if (token && !this.user) {
                this.token = token;
                this.isAuthenticated = true;

                try {
                    const { $http } = useNuxtApp();
                    const user = await $http.get<IAuthMe>("api/v1/admin/auth/me");
                    this.user = user.staff;
                } catch (error) {
                    console.error("auth error", error);
                    this.logout();
                }
            }
        },
    },
});
