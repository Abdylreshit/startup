<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted } from "vue";
import { useLocalePath } from "#imports";
import ContactForm from "~/components/app/ContactForm.vue";
import MainCard from "~/components/app/MainCard.vue";

// Локальный роутер
const localePath = useLocalePath();

// Фильтры
const filterCategory = ref("Ähli mowzuklar");
const filterLevel = ref("Ähli derejeler");
const filterCertificate = ref("Ähli şahadatnamalar");

// Опции
const categoryOptions = ["Ähli mowzuklar", "Sanly Tehnologiýa", "Dil öwrenmek", "Işewürlik"];
const levelOptions = ["Ähli derejeler", "Başlangyç dereje", "Orta dereje", "Ýokary dereje"];
const certificateOptions = [
    "Ähli şahadatnamalar",
    "Türkmenistanda ykrar edilen",
    "Halkara şahadatnama",
];

// Массив проектов
const projects = ref([
    {
        id: 1,
        image: "/images/course1.webp",
        title: "Programma üçpüňçiligini dizaýn etmek we arhitekturalaşdyrmak",
        excerpt:
            "Bu ýöriteleşme, çeýe we ölçegärlikli programmalary döretmek üçin iň gowy tejribeleri öwredýär.",
        author: "Türkmenistanyň Bilim Ministrligi",
        level: "Orta dereje",
        category: "Sanly Tehnologiýa",
    },
    {
        id: 2,
        image: "/images/course2.webp",
        title: "Taslamany dolandyrmagyň esaslary",
        excerpt:
            "Bu kurs taslamalary netijeli meýilleşdirmek, guramak we dolandyrmak boýunça başlangyç bilimleri berýär.",
        author: "TDY we DI",
        level: "Başlangyç dereje",
        category: "Işewürlik",
    },
    {
        id: 3,
        image: "/images/course3.webp",
        title: '"Iňlis dili öwrenmek: Başlangyç grammatika"',
        excerpt:
            "Bu ýöriteleşme, iňlis diliniň başlangyç grammatikasyny öwrenmek isleýänler üçin niýetlenendir.",
        author: "DAT TMDDI",
        level: "Başlangyç dereje",
        category: "Dil öwrenmek",
    },
    {
        id: 4,
        image: "/images/course4.webp",
        title: "Java programmirlleme we programma inženerçiligiň esaslary",
        excerpt:
            "Esasy prinsiplerini öwredip, başlangyçlara we orta derejeli programmistlere kod ýazmak, maglumat gurluşlaryny ulanmak.",
        author: "Türkmen-Hindi Maglumat Merkezi",
        level: "Başlangyç dereje",
        category: "Sanly Tehnologiýa",
    },

    {
        id: 5,
        image: "/images/course1.webp",
        title: "Programma üçpüňçiligini dizaýn etmek we arhitekturalaşdyrmak",
        excerpt:
            "Bu ýöriteleşme, çeýe we ölçegärlikli programmalary döretmek üçin iň gowy tejribeleri öwredýär.",
        author: "Türkmenistanyň Bilim Ministrligi",
        level: "Orta dereje",
        category: "Sanly Tehnologiýa",
    },
    {
        id: 6,
        image: "/images/course2.webp",
        title: "Taslamany dolandyrmagyň esaslary",
        excerpt:
            "Bu kurs taslamalary netijeli meýilleşdirmek, guramak we dolandyrmak boýunça başlangyç bilimleri berýär.",
        author: "TDY we DI",
        level: "Başlangyç dereje",
        category: "Işewürlik",
    },
    {
        id: 7,
        image: "/images/course3.webp",
        title: '"Iňlis dili öwrenmek: Başlangyç grammatika"',
        excerpt:
            "Bu ýöriteleşme, iňlis diliniň başlangyç grammatikasyny öwrenmek isleýänler üçin niýetlenendir.",
        author: "DAT TMDDI",
        level: "Başlangyç dereje",
        category: "Dil öwrenmek",
    },
    {
        id: 8,
        image: "/images/course4.webp",
        title: "Java programmirlleme we programma inženerçiligiň esaslary",
        excerpt:
            "Esasy prinsiplerini öwredip, başlangyçlara we orta derejeli programmistlere kod ýazmak, maglumat gurluşlaryny ulanmak.",
        author: "Türkmen-Hindi Maglumat Merkezi",
        level: "Başlangyç dereje",
        category: "Sanly Tehnologiýa",
    },

    {
        id: 9,
        image: "/images/course1.webp",
        title: "Programma üçpüňçiligini dizaýn etmek we arhitekturalaşdyrmak",
        excerpt:
            "Bu ýöriteleşme, çeýe we ölçegärlikli programmalary döretmek üçin iň gowy tejribeleri öwredýär.",
        author: "Türkmenistanyň Bilim Ministrligi",
        level: "Orta dereje",
        category: "Sanly Tehnologiýa",
    },
    {
        id: 10,
        image: "/images/course2.webp",
        title: "Taslamany dolandyrmagyň esaslary",
        excerpt:
            "Bu kurs taslamalary netijeli meýilleşdirmek, guramak we dolandyrmak boýunça başlangyç bilimleri berýär.",
        author: "TDY we DI",
        level: "Başlangyç dereje",
        category: "Işewürlik",
    },
    {
        id: 11,
        image: "/images/course3.webp",
        title: '"Iňlis dili öwrenmek: Başlangyç grammatika"',
        excerpt:
            "Bu ýöriteleşme, iňlis diliniň başlangyç grammatikasyny öwrenmek isleýänler üçin niýetlenendir.",
        author: "DAT TMDDI",
        level: "Başlangyç dereje",
        category: "Dil öwrenmek",
    },
    {
        id: 12,
        image: "/images/course4.webp",
        title: "Java programmirlleme we programma inženerçiligiň esaslary",
        excerpt:
            "Esasy prinsiplerini öwredip, başlangyçlara we orta derejeli programmistlere kod ýazmak, maglumat gurluşlaryny ulanmak.",
        author: "Türkmen-Hindi Maglumat Merkezi",
        level: "Başlangyç dereje",
        category: "Sanly Tehnologiýa",
    },

    {
        id: 13,
        image: "/images/course1.webp",
        title: "Programma üçpüňçiligini dizaýn etmek we arhitekturalaşdyrmak",
        excerpt:
            "Bu ýöriteleşme, çeýe we ölçegärlikli programmalary döretmek üçin iň gowy tejribeleri öwredýär.",
        author: "Türkmenistanyň Bilim Ministrligi",
        level: "Orta dereje",
        category: "Sanly Tehnologiýa",
    },
    {
        id: 14,
        image: "/images/course2.webp",
        title: "Taslamany dolandyrmagyň esaslary",
        excerpt:
            "Bu kurs taslamalary netijeli meýilleşdirmek, guramak we dolandyrmak boýunça başlangyç bilimleri berýär.",
        author: "TDY we DI",
        level: "Başlangyç dereje",
        category: "Işewürlik",
    },
    {
        id: 15,
        image: "/images/course3.webp",
        title: '"Iňlis dili öwrenmek: Başlangyç grammatika"',
        excerpt:
            "Bu ýöriteleşme, iňlis diliniň başlangyç grammatikasyny öwrenmek isleýänler üçin niýetlenendir.",
        author: "DAT TMDDI",
        level: "Başlangyç dereje",
        category: "Dil öwrenmek",
    },
    {
        id: 16,
        image: "/images/course4.webp",
        title: "Java programmirlleme we programma inženerçiligiň esaslary",
        excerpt:
            "Esasy prinsiplerini öwredip, başlangyçlara we orta derejeli programmistlere kod ýazmak, maglumat gurluşlaryny ulanmak.",
        author: "Türkmen-Hindi Maglumat Merkezi",
        level: "Başlangyç dereje",
        category: "Sanly Tehnologiýa",
    },
]);

// Отфильтрованный массив
const filteredProjects = computed(() => {
    return projects.value.filter((p) => {
        const okCategory =
            filterCategory.value === "Ähli mowzuklar" ? true : p.category === filterCategory.value;
        const okLevel =
            filterLevel.value === "Ähli derejeler" ? true : p.level === filterLevel.value;
        // (пока certificate нет в данных — пропустим фильтр)
        return okCategory && okLevel;
    });
});

// Загрузка
const isLoading = ref(true);
const page = ref(1);

onBeforeMount(() => {
    isLoading.value = true;
});

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 500);
});
</script>

<template>
    <div>
        <section class="mx-auto max-w-7xl px-4 py-8">
            <!-- Заголовок -->
            <h2 class="mb-8 text-center text-3xl font-semibold text-green-600">
                Hünäri ýokarlandyrmak
            </h2>

            <!-- Фильтры -->
            <div
                class="mb-6 flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center sm:justify-start"
            >
                <USelect
                    v-model="filterCategory"
                    :items="categoryOptions"
                    class="min-w-[200px]"
                    placeholder="Kategoriýa"
                />
                <USelect
                    v-model="filterLevel"
                    :items="levelOptions"
                    class="min-w-[200px]"
                    placeholder="Dereje"
                />
                <USelect
                    v-model="filterCertificate"
                    :items="certificateOptions"
                    class="min-w-[200px]"
                    placeholder="Şahadatnama"
                />
            </div>

            <!-- Сетка карточек -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <!-- Если isLoading — рендерим skeleton карточки -->
                <template v-if="isLoading">
                    <MainCard v-for="n in 16" :key="`skeleton-${n}`" :loading="true" />
                </template>

                <!-- Если не loading — рендерим реальные карточки -->
                <template v-else>
                    <MainCard
                        v-for="proj in filteredProjects"
                        :key="proj.id"
                        :image="proj.image"
                        :title="proj.title"
                        :excerpt="proj.excerpt"
                        :author="proj.author"
                        :category="proj.category"
                        :link="localePath(`/courses/${proj.id}`)"
                    />
                </template>
            </div>

            <!-- Пагинация -->
            <div class="mt-6 flex items-center justify-center">
                <UPagination v-model:page="page" show-edges :sibling-count="1" :total="100" />
            </div>
        </section>
        <ContactForm />
    </div>
</template>
