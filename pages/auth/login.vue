<script setup lang="ts">
// import * as z from "zod";
// import type { FormSubmitEvent } from "@nuxt/ui";
// import type { ILogin } from "~/types/endpoint/ILogin";
//
// const { $toast, $http } = useNuxtApp();
// const auth = useAuthStore();
//
// const localePath = useLocalePath();
// const loading = useLoadingStore();
//
// const schema = z.object({
//     phone: z.string().min(6),
//     password: z.string().min(6),
// });
//
// type Schema = z.output<typeof schema>;
//
// const state = reactive<Partial<Schema>>({
//     phone: undefined,
//     password: undefined,
// });
//
// const show = ref(false);
//
// async function onSubmit(event: FormSubmitEvent<Schema>) {
//     await loading.withLoading(async () => {
//         event.preventDefault();
//
//         const validationResult = schema.safeParse(state);
//         if (validationResult.success) {
//             const response = await $http.post<ILogin>("api/v1/admin/auth/login", {
//                 phone: state.phone!,
//                 password: state.password!,
//             });
//
//             auth.login(response.staff, response.token);
//
//             $toast.success("Успешный вход");
//
//             await navigateTo(localePath("home"));
//         } else {
//             $toast.error("Validation failed");
//         }
//     }, 500);
// }

definePageMeta({
    name: "login",
    layout: false,
});
</script>

<template>
    <div>Login</div>
</template>
