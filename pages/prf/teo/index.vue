<script setup lang="ts">
import { ref, computed } from "vue";

// Статичный список заявок
const requests = ref([
    { id: 1, fileName: "Prezentasiya.excel", status: "Kabul Edildi", link: "#" },
    { id: 2, fileName: "Prezentasiya.excel", status: "Barlagda", link: "#" },
    { id: 3, fileName: "Prezentasiya.excel", status: "Gaýtarylan", link: "#" },
    { id: 4, fileName: "Prezentasiya.excel", status: "Barlagda", link: "#" },
    { id: 5, fileName: "Prezentasiya.excel", status: "Gaýtarylan", link: "#" },
    { id: 6, fileName: "Prezentasiya.excel", status: "Kabul Edildi", link: "#" },
]);

// Общее число
const total = computed(() => requests.value.length);

// Удалить запрос по id
function removeRequest(id: number) {
    requests.value = requests.value.filter((r) => r.id !== id);
}
</script>

<template>
    <div>
        <!-- Заголовок и линия -->
        <h2 class="mb-2 text-xl font-semibold text-gray-800">
            TEO Sargytlarynyň sany: <span class="text-green-600">{{ total }}</span>
        </h2>
        <hr class="mb-6 border-gray-200" />

        <!-- Сетка карточек -->
        <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
            <div
                v-for="req in requests"
                :key="req.id"
                class="flex flex-col justify-between rounded-lg bg-white p-4 shadow"
            >
                <!-- Область иконки -->
                <div class="mb-4 flex h-40 items-center justify-center rounded-md bg-gray-100">
                    <UIcon name="i-lucide-file-text" class="h-10 w-10 text-gray-400" />
                </div>

                <!-- Информация о файле -->
                <div class="mb-4 space-y-1">
                    <div class="text-sm text-gray-700">Faýlyñ Ady</div>
                    <a :href="req.link" class="text-sm font-medium text-green-600 hover:underline">
                        {{ req.fileName }}
                    </a>
                    <div class="text-xs text-gray-500 uppercase">Status</div>
                    <div
                        class="font-medium"
                        :class="{
                            'text-green-600': req.status === 'Kabul Edildi',
                            'text-orange-500': req.status === 'Barlagda',
                            'text-red-600': req.status === 'Gaýtarylan',
                        }"
                    >
                        {{ req.status }}
                    </div>
                </div>

                <!-- Кнопки -->
                <div class="flex flex-col gap-2">
                    <UButton
                        variant="outline"
                        color="neutral"
                        class="flex items-center justify-center"
                        :to="req.link"
                    >
                        <UIcon name="i-lucide-eye" class="mr-2 h-4 w-4" />
                        Faýly Açmak
                    </UButton>
                    <UButton
                        variant="outline"
                        color="neutral"
                        class="flex items-center justify-center"
                        @click="removeRequest(req.id)"
                    >
                        <UIcon name="i-lucide-trash" class="mr-2 h-4 w-4" />
                        Faýly Aýyrmak
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>
