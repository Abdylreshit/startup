<script setup lang="ts">
import { ref } from "vue";

// ваш динамический список компаний
const companies = ref([
    {
        id: 1,
        image: "/images/taze-ay.png",
        title: "Täze Aý",
        excerpt: "“Täze Aý” şöhýetli et we konditer önümleriniň iri önümçiligi…",
        type: "Edara",
        sector: "Azyk Önümleri",
        date: "26.02.2025",
        status: "Kabul Edildi",
        link: "#",
    },
    {
        id: 2,
        image: "/images/begler-yoly.png",
        title: "Begler Ýoly",
        excerpt: "“Begler Ýoly” hususy kärhana plastik gaplar we…",
        type: "Edara",
        sector: "Plastik Önümleri",
        date: "26.02.2025",
        status: "Kabul Edildi",
        link: "#",
    },
]);

// количество для шапки
const total = computed(() => companies.value.length);

// модалка «Kompaniýa Goşmak»
const isOpen = ref(false);

function openModal() {
    isOpen.value = true;
}

function closeModal() {
    isOpen.value = false;
}

function save() {
    /* логика сохранения */
    closeModal();
}
</script>

<template>
    <div>
        <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-gray-800">
                Kompaniýalaryň sany: <span class="text-green-600">{{ total }}</span>
            </h2>
            <UModal v-model:open="isOpen" title="Kompaniýa Goşmak" :width="'600px'">
                <UButton color="success" @click="openModal">Kompaniýa Goşmak</UButton>

                <template #body>
                    <!-- сюда ваша форма -->
                </template>
                <template #footer="{ close }">
                    <UButton variant="outline" @click="close">Yatyr</UButton>
                    <UButton color="success" @click="save">Ýatda Sakla</UButton>
                </template>
            </UModal>
        </div>

        <!-- Сетка карточек -->
        <div class="space-y-4">
            <div
                v-for="c in companies"
                :key="c.id"
                class="grid grid-cols-12 gap-4 rounded-lg bg-white p-4 shadow"
            >
                <!-- Пример одной колонки: -->
                <div class="col-span-12 md:col-span-4 lg:col-span-3">
                    <img
                        :src="c.image"
                        alt=""
                        class="h-28 w-full rounded-md bg-gray-100 object-cover"
                    >
                </div>
                <div class="col-span-12 md:col-span-5 lg:col-span-6">
                    <h3 class="text-lg font-semibold">{{ c.title }}</h3>
                    <p class="mt-1 line-clamp-3 text-sm text-gray-600">{{ c.excerpt }}</p>
                </div>
                <div class="col-span-12 border-l border-gray-200 pl-4 md:col-span-3 lg:col-span-3">
                    <div class="text-xs text-gray-500 uppercase">Status</div>
                    <div class="font-medium text-green-600">{{ c.status }}</div>
                    <div class="mt-2 text-xs text-gray-500 uppercase">Ugry</div>
                    <div class="font-medium">{{ c.sector }}</div>
                    <div class="mt-2 text-xs text-gray-500 uppercase">Sene</div>
                    <div class="font-medium">{{ c.date }}</div>
                </div>
                <div class="col-span-12 flex justify-end gap-2 md:col-span-12 lg:col-span-12">
                    <UButton variant="outline" :to="c.link">
                        <UIcon name="i-lucide-eye" class="mr-1" />
                        Girişleýin Okamak
                    </UButton>
                    <UButton variant="outline" class="text-red-600">
                        <UIcon name="i-lucide-trash" class="mr-1" />
                        Aýyrmak
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>
