<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import type { ILogin } from "~/types/endpoint/ILogin";

const { $toast, $http } = useNuxtApp();
const auth = useAuthStore();

const localePath = useLocalePath();
const loading = useLoadingStore();

const schema = z.object({
    phone: z.string().min(6),
    password: z.string().min(6),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
    phone: undefined,
    password: undefined,
});

const show = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
    await loading.withLoading(async () => {
        event.preventDefault();

        const validationResult = schema.safeParse(state);
        if (validationResult.success) {
            const response = await $http.post<ILogin>("api/v1/admin/auth/login", {
                phone: state.phone!,
                password: state.password!,
            });

            auth.login(response.staff, response.token);

            $toast.success("Успешный вход");

            await navigateTo(localePath("home"));
        } else {
            $toast.error("Validation failed");
        }
    }, 500);
}

definePageMeta({
    name: "login",
    layout: false,
});
</script>

<template>
    <div
        class="flex h-screen w-full flex-wrap bg-[url('http://localhost:9000/laravel/demo/login-img.jpg')] bg-cover bg-center bg-no-repeat"
    >
        <div
            class="flex h-screen w-[50%] flex-wrap items-center justify-center overflow-auto bg-white/95 p-[24px]"
        >
            <UForm :schema="schema" :state="state" class="w-[70%]" @submit="onSubmit">
                <div class="login-userset">
                    <div class="flex justify-center">
                        <NuxtLink
                            :to="localePath('home')"
                            class="brand flex items-center space-x-2 text-[50px] font-semibold"
                        >
                            <BaseIcon name="logo" class="h-24 w-24" />
                            <span>Hasabym</span>
                        </NuxtLink>
                    </div>

                    <UFormField name="phone" class="mb-3">
                        <template #label>
                            <span class="text-green-vogue-950 mb-[.5rem] text-[14px] font-medium"
                                >Phone</span
                            >
                            <span class="text-red-800"> *</span>
                        </template>

                        <UInput v-model="state.phone" class="w-full">
                            <template #trailing>
                                <Icon name="lucide:phone" />
                            </template>
                        </UInput>
                    </UFormField>

                    <UFormField name="password" class="mb-3">
                        <template #label>
                            <span class="text-green-vogue-950 mb-[.5rem] text-[14px] font-medium"
                                >Password</span
                            >
                            <span class="text-red-800"> *</span>
                        </template>
                        <UInput
                            v-model="state.password"
                            class="w-full"
                            :type="show ? 'text' : 'password'"
                            :ui="{ trailing: 'pe-1' }"
                        >
                            <template #trailing>
                                <UButton
                                    class="cursor-pointer"
                                    color="neutral"
                                    variant="link"
                                    size="sm"
                                    :aria-label="show ? 'Hide password' : 'Show password'"
                                    :aria-pressed="show"
                                    aria-controls="password"
                                    @click="show = !show"
                                >
                                    <template #trailing>
                                        <Icon :name="show ? 'lucide:eye' : 'lucide:eye-off'" />
                                    </template>
                                </UButton>
                            </template>
                        </UInput>
                    </UFormField>

                    <UButton
                        type="submit"
                        class="mt-3 w-full cursor-pointer items-center justify-center"
                    >
                        Submit
                    </UButton>

                    <div
                        class="d-flex justify-content-center align-items-center copyright-text my-4"
                    >
                        <p>Copyright © 2025 Hasabym</p>
                    </div>
                </div>
            </UForm>
        </div>
    </div>
</template>
