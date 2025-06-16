<script setup lang="ts">
import { ref, computed } from "vue";

const projects = ref([
    {
        id: 1,
        image: "/images/course1.webp",
        title: "Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak",
        excerpt:
            "Bu ýöriteleşme, çeýe we ölçegärlikli programmalary döretmek üçin iň gowy tejribeleri öwredýär.",
        partner: "Edara",
        sector: "Sanly Tehnologiýa",
        status: "Kabul Edildi",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 2,
        image: "/images/course1.webp",
        title: "Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak",
        excerpt:
            "Bu ýöriteleşme, çeýe we ölçegärlikli programmalary döretmek üçin iň gowy tejribeleri öwredýär.",
        partner: "Şahsy Adam",
        sector: "Sanly Tehnologiýa",
        status: "Kabul Edildi",
        date: "26.02.2025",
        link: "#",
    },
]);

const total = computed(() => projects.value.length);

// удаление проекта
function removeProject(id: number) {
    projects.value = projects.value.filter((p) => p.id !== id);
}
</script>

<template>
    <div>
        <!-- Шапка: количество + кнопка -->
        <div class="mb-6 flex items-center justify-between">
            <h2 class="text-xl font-semibold text-gray-800">
                Taslamalaryň sany: <span class="text-green-600">{{ total }}</span>
            </h2>
        </div>

        <!-- Список проектов -->
        <div class="space-y-4">
            <div
                v-for="proj in projects"
                :key="proj.id"
                class="grid grid-cols-12 items-center gap-4 rounded-lg bg-white p-4 shadow"
            >
                <!-- Изображение -->
                <div class="col-span-12 sm:col-span-4 md:col-span-3">
                    <img :src="proj.image" alt="" class="h-28 w-full rounded-md object-cover" />
                </div>

                <!-- Название и отрывок -->
                <div class="col-span-12 sm:col-span-8 md:col-span-5">
                    <h3 class="text-lg font-semibold text-gray-800">{{ proj.title }}</h3>
                    <p class="mt-1 line-clamp-3 text-sm text-gray-600">{{ proj.excerpt }}</p>
                </div>

                <!-- Метаданные -->
                <div class="col-span-12 border-l border-gray-200 pl-4 sm:col-span-6 md:col-span-2">
                    <div class="text-xs text-gray-500 uppercase">Status</div>
                    <div
                        class="font-medium"
                        :class="{
                            'text-green-600': proj.status === 'Kabul Edildi',
                            'text-orange-500': proj.status === 'Barlagda',
                            'text-red-600': proj.status === 'Gaýtarylan',
                        }"
                    >
                        {{ proj.status }}
                    </div>
                    <div class="mt-2 text-xs text-gray-500 uppercase">Ugry</div>
                    <div class="font-medium text-gray-700">{{ proj.sector }}</div>
                    <div class="mt-2 text-xs text-gray-500 uppercase">Ýüklenen senesi</div>
                    <div class="font-medium text-gray-700">{{ proj.date }}</div>
                </div>

                <!-- Кнопки действий -->
                <div
                    class="col-span-12 flex flex-col items-stretch gap-2 sm:col-span-6 md:col-span-2 lg:items-end"
                >
                    <NuxtLink
                        :to="proj.link"
                        class="flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-white transition hover:bg-green-700"
                    >
                        <UIcon name="i-lucide-eye" class="mr-2 h-4 w-4" />
                        Girişleýin Okamak
                    </NuxtLink>
                    <button
                        class="flex cursor-not-allowed items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-gray-400"
                        disabled
                    >
                        <UIcon name="i-lucide-edit-2" class="mr-2 h-4 w-4" />
                        Üýtgetmäge Girizmek
                    </button>
                    <button
                        class="flex items-center justify-center rounded-md bg-red-50 px-3 py-2 text-red-600 transition hover:bg-red-100"
                        @click="removeProject(proj.id)"
                    >
                        <UIcon name="i-lucide-trash" class="mr-2 h-4 w-4" />
                        Taslamany Aýyrmak
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
