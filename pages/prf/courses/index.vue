<script setup lang="ts">
const courses = ref([
    {
        id: 1,
        image: "/images/course1.webp",
        title: "Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak",
        excerpt:
            "Bu ýöriteleşme, çeýe we ölçeýärlikli programmalary döretmek üçin iň gowy tejribeleri,…",
        status: "Kabul Edildi",
        sector: "Sanly Tehnologiýalar",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 2,
        image: "/images/course2.webp",
        title: "Taslamany dolandyrmagyň esaslary",
        excerpt:
            "Bu kurs taslamalary netijeli meýilleşdirmek, guramak we dolandyrmak boýunça başlangyç bilimleri berýär.…",
        status: "Barlagda",
        sector: "Işewürlik",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 3,
        image: "/images/course3.webp",
        title: '"Iňlis dili öwrenmek: Başlangyç grammatika"',
        excerpt:
            "Bu ýöriteleşme, iňlis diliniň başlangyç grammatikasyny öwrenmek isleýänler üçin niýetlenendir.…",
        status: "Gaýtarylan",
        sector: "Dil öwrenmek",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 4,
        image: "/images/course4.webp",
        title: "Java programmirlleme we programma inženerçiligiň esaslary",
        excerpt:
            "Esasy prinsiplerini öwredip, başlangyçlara we orta derejeli programmistlere kod ýazmak,…",
        status: "Kabul Edildi",
        sector: "Sanly Tehnologiýalar",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 5,
        image: "/images/course1.webp",
        title: "Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak",
        excerpt:
            "Bu ýöriteleşme, çeýe we ölçeýärlikli programmalary döretmek üçin iň gowy tejribeleri,…",
        status: "Kabul Edildi",
        sector: "Sanly Tehnologiýalar",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 6,
        image: "/images/course2.webp",
        title: "Taslamany dolandyrmagyň esaslary",
        excerpt:
            "Bu kurs taslamalary netijeli meýilleşdirmek, guramak we dolandyrmak boýunça başlangyç bilimleri berýär.…",
        status: "Barlagda",
        sector: "Işewürlik",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 7,
        image: "/images/course3.webp",
        title: '"Iňlis dili öwrenmek: Başlangyç grammatika"',
        excerpt:
            "Bu ýöriteleşme, iňlis diliniň başlangyç grammatikasyny öwrenmek isleýänler üçin niýetlenendir.…",
        status: "Gaýtarylan",
        sector: "Dil öwrenmek",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 8,
        image: "/images/course4.webp",
        title: "Java programmirlleme we programma inženerçiligiň esaslary",
        excerpt:
            "Esasy prinsiplerini öwredip, başlangyçlara we orta derejeli programmistlere kod ýazmak,…",
        status: "Kabul Edildi",
        sector: "Sanly Tehnologiýalar",
        date: "26.02.2025",
        link: "#",
    },
]);

// Стилизация статуса
function statusClass(status: string) {
    switch (status) {
        case "Kabul Edildi":
            return "text-green-600";
        case "Barlagda":
            return "text-orange-500";
        case "Gaýtarylan":
            return "text-red-600";
        default:
            return "text-gray-700";
    }
}

// Функция удаления
function remove(id: number) {
    // Можно добавить подтверждение
    courses.value = courses.value.filter((c) => c.id !== id);
}
</script>

<template>
    <div>
        <!-- Заголовок с количеством курсов -->
        <div class="mb-6 flex items-center justify-between">
            <h2 class="text-xl font-semibold text-gray-800">
                Okuwlaryň sany: <span class="text-green-600">{{ courses.length }}</span>
            </h2>
            <!-- Здесь могла быть кнопка "Täzeden ýazylmak" или другая -->
        </div>

        <!-- Список курсов -->
        <div class="space-y-4">
            <div
                v-for="course in courses"
                :key="course.id"
                class="grid grid-cols-12 items-center gap-4 rounded-lg bg-white p-4 shadow"
            >
                <!-- Изображение -->
                <div class="col-span-12 sm:col-span-3 lg:col-span-2">
                    <img :src="course.image" alt="" class="h-24 w-full rounded-md object-cover" />
                </div>

                <!-- Название + описание -->
                <div class="col-span-12 sm:col-span-9 lg:col-span-4">
                    <h3 class="text-lg font-semibold text-gray-800">{{ course.title }}</h3>
                    <p class="mt-1 line-clamp-3 text-sm text-gray-600">{{ course.excerpt }}</p>
                </div>

                <!-- Метаданные -->
                <div class="col-span-12 border-l border-gray-200 pl-4 sm:col-span-6 lg:col-span-3">
                    <div class="text-xs text-gray-500 uppercase">Status</div>
                    <div :class="statusClass(course.status)" class="font-medium">
                        {{ course.status }}
                    </div>
                    <div class="mt-2 text-xs text-gray-500 uppercase">Ugry</div>
                    <div class="font-medium text-gray-700">{{ course.sector }}</div>
                    <div class="mt-2 text-xs text-gray-500 uppercase">Tabşyrylan senesi</div>
                    <div class="font-medium text-gray-700">{{ course.date }}</div>
                </div>

                <!-- Кнопки действий -->
                <div
                    class="col-span-12 flex flex-col gap-2 sm:col-span-6 lg:col-span-3 lg:items-end"
                >
                    <NuxtLink
                        :to="course.link"
                        class="flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
                    >
                        <UIcon name="i-lucide-eye" class="mr-2 h-4 w-4" />
                        Girişleýin Okamak
                    </NuxtLink>
                    <button
                        class="flex cursor-not-allowed items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-400"
                        disabled
                    >
                        <UIcon name="i-lucide-edit-2" class="mr-2 h-4 w-4" />
                        Üýtgetmäge Girizmek
                    </button>
                    <button
                        class="flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-red-600 transition hover:bg-red-100"
                        @click="remove(course.id)"
                    >
                        <UIcon name="i-lucide-trash" class="mr-2 h-4 w-4" />
                        Okuwy Aýyrmak
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
