<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const i18n = useI18n();
const locale = ref(i18n.locale.value);
const { $toast } = useNuxtApp();
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

// const auth = useAuthStore();
// const user = computed(() => auth.user);
//
// async function logout() {
//     await loading.withLoading(async () => {
//         try {
//             await $http.post("api/v1/admin/auth/logout");
//         } catch {
//             /* empty */
//         } finally {
//             auth.logout();
//             $toast.success("Вы вышли из системы");
//             await navigateTo(localePath("/auth/login"));
//         }
//     }, 500);
// }

onMounted(() => {});
</script>

<template>
    <header
        class="fixed top-0 z-10 flex h-[70px] w-full flex-nowrap items-center justify-between border-b-2 border-neutral-100 bg-stone-50 px-[16px] text-gray-800"
    >
        <NuxtLink
            :to="localePath('home')"
            class="hidden items-center space-x-2 text-2xl font-semibold md:flex"
        >
            <img src="/images/logo.png" alt="Logo" class="w-[100px]"/>
        </NuxtLink>
        <UDrawer direction="left">
            <UButton variant="link" class="block cursor-pointer md:hidden">
                <UIcon name="i-main-menu" />
            </UButton>
            <template #title>
                <NuxtLink :to="localePath('home')">
                    <img src="/images/logo.png" alt="Logo" class="w-[100px]"/>
                </NuxtLink>
            </template>
            <template #description>
                <USeparator />
            </template>
            <template #body>
                <nav class="flex flex-col space-y-4 p-4">
                    <NuxtLink
                        :to="localePath('home')"
                        class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                        active-class="text-primary-600"
                    >
                        Esasy
                    </NuxtLink>
                    <NuxtLink
                        :to="localePath('projects')"
                        class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                        active-class="text-primary-600"
                    >
                        Taslamalar
                    </NuxtLink>
                    <NuxtLink
                        :to="localePath('courses')"
                        class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                        active-class="text-primary-600"
                    >
                        Hünari ýokarlandyrmak
                    </NuxtLink>
                    <NuxtLink
                        :to="localePath('companies')"
                        class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                        active-class="text-primary-600"
                    >
                        Made in Turkmenistan
                    </NuxtLink>
                    <NuxtLink
                        :to="localePath('teo')"
                        class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                        active-class="text-primary-600"
                    >
                        TEO işläp taýýarlamak
                    </NuxtLink>
                    <UCollapsible class="flex w-48 flex-col gap-2">
                        <!-- Trigger -->

                        <template #default>
                            <div
                                class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                            >
                                Beylekiler
                                <UIcon name="i-lucide-chevron-down" class="inline-block h-4 w-4" />
                            </div>
                        </template>

                        <!-- Content -->
                        <template #content>
                            <div class="flex flex-col space-y-2 p-2">
                                <NuxtLink
                                    :to="localePath('partners')"
                                    class="hover:text-primary-600 block text-sm text-gray-700"
                                    active-class="text-primary-600"
                                >
                                    Hyzmatdaş tapmak
                                </NuxtLink>
                                <NuxtLink
                                    :to="localePath('it')"
                                    class="hover:text-primary-600 block text-sm text-gray-700"
                                    active-class="text-primary-600"
                                >
                                    It Hyzmatlary
                                </NuxtLink>

                                <NuxtLink
                                    :to="localePath('engineering')"
                                    class="hover:text-primary-600 block text-sm text-gray-700"
                                    active-class="text-primary-600"
                                >
                                    Inženerçilik
                                </NuxtLink>
                            </div>
                        </template>
                    </UCollapsible>
                </nav>
            </template>
        </UDrawer>
        <NuxtLink
            :to="localePath('home')"
            class="flex items-center space-x-2 text-2xl font-semibold md:hidden"
        >
            <img src="/images/logo.png" alt="Logo" class="w-[100px]"/>
        </NuxtLink>

        <nav class="hidden flex-1 justify-center space-x-8 md:flex">
            <NuxtLink
                :to="localePath('home')"
                class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                active-class="text-primary-600"
            >
                Esasy
            </NuxtLink>
            <NuxtLink
                :to="localePath('projects')"
                class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                active-class="text-primary-600"
            >
                Taslamalar
            </NuxtLink>
            <NuxtLink
                :to="localePath('courses')"
                class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                active-class="text-primary-600"
            >
                Hünari ýokarlandyrmak
            </NuxtLink>
            <NuxtLink
                :to="localePath('companies')"
                class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                active-class="text-primary-600"
            >
                Made in Turkmenistan
            </NuxtLink>
            <NuxtLink
                :to="localePath('teo')"
                class="hover:text-primary-600 cursor-pointer text-base font-medium text-gray-800"
                active-class="text-primary-600"
            >
                TEO işläp taýýarlamak
            </NuxtLink>

            <UPopover
                mode="hover"
                :popper="{ placement: 'bottom-end', offset: 6 }"
                :ui="{ content: 'ring-0' }"
            >
                <!-- Кастомный trigger -->
                <template #default>
                    <button
                        class="flex items-center space-x-1 text-base font-medium text-gray-800 hover:text-green-600"
                    >
                        <span>Beylekiler</span>
                        <UIcon name="i-lucide-chevron-down" class="h-4 w-4" />
                    </button>
                </template>

                <!-- Контент popover -->
                <template #content>
                    <div class="flex flex-col space-y-2 p-4">
                        <NuxtLink
                            :to="localePath('partners')"
                            class="hover:text-primary-600 flex items-center space-x-2 text-sm font-medium text-gray-700 transition-colors duration-200"
                            active-class="text-primary-600"
                        >
                            Hyzmatdaş tapmak
                        </NuxtLink>
                        <NuxtLink
                            :to="localePath('it')"
                            class="hover:text-primary-600 flex items-center space-x-2 text-sm font-medium text-gray-700 transition-colors duration-200"
                            active-class="text-primary-600"
                        >
                            IT Hyzmatlary
                        </NuxtLink>
                        <NuxtLink
                            :to="localePath('engineering')"
                            class="hover:text-primary-600 block text-sm text-gray-700"
                        >
                            Inženerçilik
                        </NuxtLink>
                    </div>
                </template>
            </UPopover>
        </nav>

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
</template>
