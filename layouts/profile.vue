<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const i18n = useI18n();
const locale = ref(i18n.locale.value);
const { $toast, $http } = useNuxtApp();
const loading = useLoadingStore();

const currentLocale = computed(() => {
    return locale.value === "en" ? "us" : locale.value;
});

async function changeLanguage(lang: string, message: string) {
    await loading.withLoading(async () => {
        locale.value = lang !== "ru" && lang !== "en" && lang !== "tm" ? "en" : lang;
        navigateTo(switchLocalePath(locale.value));
        $toast.success(message);
    }, 500);
}

const locales = computed(() => [
    {
        label: "English",
        value: "en",
        icon: "flag:us-1x1",
        type: "checkbox" as const,
        checked: currentLocale.value === "us",
        onSelect: () => {
            changeLanguage("en", "Language changed to English");
        },
    },
    {
        label: "Russian",
        value: "ru",
        icon: "flag:ru-1x1",
        type: "checkbox" as const,
        checked: currentLocale.value === "ru",
        onSelect: () => {
            changeLanguage("ru", "Язык изменен на русский");
        },
    },
    {
        label: "Turkmen",
        value: "tm",
        icon: "flag:tm-1x1",
        type: "checkbox" as const,
        checked: currentLocale.value === "tm",
        onSelect: () => {
            changeLanguage("tm", "Dil türkmen diline üýtgedildi");
        },
    },
]);

const auth = useAuthStore();
// const user = computed(() => auth.user);

async function logout() {
    await loading.withLoading(async () => {
        try {
            await $http.post("api/v1/admin/auth/logout");
        } catch {
            /* empty */
        } finally {
            auth.logout();
            $toast.success("Вы вышли из системы");
            await navigateTo(localePath("/auth/login"));
        }
    }, 500);
}

onMounted(() => {});
</script>

<template>
    <div class="flex h-screen flex-col">
        <header
            class="fixed top-0 z-10 flex h-[70px] w-full flex-nowrap items-center justify-between border-b-2 border-neutral-100 bg-stone-50 px-[16px] text-gray-800"
        >
            <NuxtLink
                :to="localePath('home')"
                class="hidden items-center space-x-2 text-2xl font-semibold md:flex"
            >
                <img src="/images/logo.png" alt="Logo" class="w-[100px]" >
            </NuxtLink>
            <UDrawer direction="left">
                <UButton variant="link" class="block cursor-pointer md:hidden">
                    <UIcon name="i-main-menu" />
                </UButton>
                <template #title>
                    <NuxtLink :to="localePath('prf')">
                        <img src="/images/logo.png" alt="Logo" class="w-[100px]" >
                    </NuxtLink>
                </template>
                <template #description>
                    <USeparator />
                </template>
                <template #body>
                    <nav class="flex flex-col space-y-4 p-4">
                        <NuxtLink
                            :to="localePath('/prf/projects')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-rocket" class="text-primary-600 size-5" />
                            Taslamalar
                        </NuxtLink>

                        <NuxtLink
                            :to="localePath('/prf/courses')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-school" class="text-primary-600 size-5" />
                            Hünäri ýokarlandyrmak
                        </NuxtLink>

                        <NuxtLink
                            :to="localePath('/prf/companies')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-earth" class="text-primary-600 size-5" />
                            Made in Turkmenistan
                        </NuxtLink>

                        <NuxtLink
                            :to="localePath('/prf/teo')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-reader" class="text-primary-600 size-5" />
                            TEO işläp taýýarlamak
                        </NuxtLink>

                        <NuxtLink
                            :to="localePath('/prf/partners')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-briefcase" class="text-primary-600 size-5" />
                            Hyzmatdaş tapmak
                        </NuxtLink>
                    </nav>
                </template>
            </UDrawer>
            <NuxtLink
                :to="localePath('home')"
                class="flex items-center space-x-2 text-2xl font-semibold md:hidden"
            >
                <img src="/images/logo.png" alt="Logo" class="w-[100px]" >
            </NuxtLink>

            <div class="flex items-center gap-[5px] space-x-2 font-semibold">
                <UDropdownMenu
                    :items="locales"
                    :content="{
                        align: 'end',
                        side: 'bottom',
                        sideOffset: 8,
                    }"
                    :ui="{
                        content: 'ring-0',
                    }"
                >
                    <button
                        class="flex cursor-pointer items-center space-x-1 text-base font-medium text-gray-800 hover:text-gray-600"
                    >
                        <div class="h-[16px] w-[16px]">
                            <UIcon :name="`flag:${currentLocale}-1x1`" class="h-full w-full" />
                        </div>
                        <UIcon name="i-lucide-chevron-down" class="h-4 w-4" />
                    </button>
                </UDropdownMenu>

                <!--            <UDropdownMenu-->
                <!--                :items="items"-->
                <!--                :content="{ align: 'end', side: 'bottom', sideOffset: 6 }"-->
                <!--                :ui="{ content: 'ring-0' }"-->
                <!--            >-->
                <NuxtLink
                    :to="localePath('/prf')"
                    class="hover:text-primary-600 flex cursor-pointer items-center text-gray-800"
                >
                    <UIcon name="i-lucide-user" class="!h-4 !w-4" />
                </NuxtLink>
                <!--            <button class="hover:text-primary-600 flex cursor-pointer items-center text-gray-800">-->
                <!--                -->
                <!--            </button>-->
                <!--            </UDropdownMenu>-->
            </div>
        </header>

        <div class="mt-[90px] px-5">
            <aside
                class="fixed hidden h-[calc(100vh-110px)] w-[300px] flex-shrink-0 flex-col border-r border-gray-200 bg-white md:flex"
            >
                <!--                <aside-->
                <!--                    class="fixed left-0 top-[70px] z-20 flex h-[calc(100vh-70px)] w-[260px] flex-col border-r border-gray-200 bg-white"-->
                <!--                >-->
                <div class="flex flex-col overflow-y-auto px-4 py-6">
                    <!-- Заголовок -->
                    <div class="mb-4 px-4 text-lg font-bold text-green-600">Şahsy Otag</div>

                    <!-- Разделитель -->
                    <hr class="mb-6 border-gray-200" >

                    <!-- Меню -->
                    <nav class="flex flex-col space-y-2">
                        <NuxtLink
                            :to="localePath('/prf/projects')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-rocket" class="text-primary-600 size-5" />
                            Taslamalar
                        </NuxtLink>

                        <NuxtLink
                            :to="localePath('/prf/courses')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-school" class="text-primary-600 size-5" />
                            Hünäri ýokarlandyrmak
                        </NuxtLink>

                        <NuxtLink
                            :to="localePath('/prf/companies')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-earth" class="text-primary-600 size-5" />
                            Made in Turkmenistan
                        </NuxtLink>

                        <NuxtLink
                            :to="localePath('/prf/teo')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-reader" class="text-primary-600 size-5" />
                            TEO Sargamak
                        </NuxtLink>

                        <NuxtLink
                            :to="localePath('/prf/partners')"
                            class="hover:text-primary-600 flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
                            active-class="!text-primary-600 !bg-gray-100 font-bold"
                        >
                            <UIcon name="i-main-briefcase" class="text-primary-600 size-5" />
                            Hyzmatdaş bolmak
                        </NuxtLink>
                    </nav>

                    <!-- Нижняя часть -->
                    <div class="space-y-2 border-t border-gray-200 pt-6">
                        <button
                            type="button"
                            class="hover:text-primary-600 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-600 transition-colors duration-200 hover:bg-red-50"
                            @click="logout"
                        >
                            <UIcon name="i-lucide-log-out" class="size-4 text-red-600" />
                            Hasapdan çykmak
                        </button>
                    </div>
                </div>
            </aside>

            <main class="m-0 md:ml-[320px]">
                <slot />
            </main>
        </div>
    </div>
</template>
