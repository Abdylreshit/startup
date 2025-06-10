<script setup lang="ts">
defineProps<{
    loading?: boolean;
    image?: string;
    title?: string;
    excerpt?: string;
    author?: string;
    date?: string;
    category?: string;
    link?: string;
}>();
</script>

<template>
    <!-- ЗАГЛУШКА (скелетон) -->
    <div
        v-if="loading"
        class="flex max-w-[260px] min-w-[260px] animate-pulse flex-col space-y-2 overflow-hidden rounded-xl bg-gray-200 p-4"
    >
        <!-- ЗАГЛУШКА: изображение (192px высота) -->
        <div class="h-[192px] w-full rounded-lg bg-gray-300" />

        <!-- ЗАГЛУШКА: заголовок -->
        <div class="h-6 w-3/4 rounded bg-gray-300" />

        <!-- ЗАГЛУШКА: текст (2 строки) -->
        <div class="h-4 w-full rounded bg-gray-300" />
        <div class="h-4 w-[90%] rounded bg-gray-300" />

        <!-- ЗАГЛУШКА: автор/дата -->
        <div class="mt-4 flex space-x-2">
            <div class="h-4 w-1/2 rounded bg-gray-300" />
            <div class="h-4 w-1/4 rounded bg-gray-300" />
        </div>

        <!-- ЗАГЛУШКА: категория/ссылка -->
        <div class="mt-2 h-4 w-1/2 rounded bg-gray-300" />
    </div>

    <!-- РЕАЛЬНАЯ КАРТОЧКА -->
    <NuxtLink
        v-else
        :to="link || '#'"
        class="flex h-[480px] flex-col overflow-hidden rounded-xl bg-white shadow-md"
    >
        <img :src="`/startup/${image}`" alt="" class="h-[192px] w-full object-cover" />

        <div class="flex flex-1 flex-col justify-between px-4 py-3">
            <div class="flex-1">
                <h3 class="mb-2 text-lg font-semibold break-words text-gray-800">
                    {{ title }}
                </h3>
                <p class="line-clamp-3 text-sm text-gray-600">
                    {{ excerpt }}
                </p>
            </div>

            <div
                class="mt-4 flex flex-col justify-end border-t border-gray-200 pt-3 text-xs text-gray-500"
            >
                <div>
                    <span class="font-medium text-gray-700">{{ author }}</span>
                    <span class="ml-2">· {{ date }}</span>
                </div>
                <div class="mt-1">
                    <span class="text-gray-700">{{ category }}</span>
                </div>
                <span class="mt-2 font-medium text-green-600"> Girişleýin → </span>
            </div>
        </div>
    </NuxtLink>
</template>
