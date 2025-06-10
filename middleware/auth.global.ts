export default defineNuxtRouteMiddleware(async (to) => {
    return;
    const auth = useAuthStore();
    const localeRoute = useLocaleRoute();
    const loginRoute = localeRoute({ name: "login" });

    if (to.path.endsWith("/auth/login") || to.path.endsWith("/auth/register")) return;

    await auth.initAuth();

    if (!auth.token) {
        return navigateTo(loginRoute!.fullPath);
    }
});
