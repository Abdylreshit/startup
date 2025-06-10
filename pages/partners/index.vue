<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted } from "vue";
import ContactForm from "~/components/app/ContactForm.vue";
import MainCard from "~/components/app/MainCard.vue";

// роутер
const localePath = useLocalePath();

// фильтры
const filterEntity = ref<"Edaralar we adamlar" | "Edaralar" | "Adamlar">("Edaralar we adamlar");
const filterSector = ref("Ähli ugurlar");
const filterCountry = ref("Ähli ýurtlar");

// опции фильтров
const entityOptions = ["Edaralar we adamlar", "Edaralar", "Adamlar"];
const sectorOptions = ["Ähli ugurlar", "Azyk Önümleri", "Sanly Tehnologiýa", "Hünär", "Öňdebaryjy"];
const countryOptions = [
    "Ähli ýurtlar",
    "Türkmenistan",
    "Türkiýe Respublikasy",
    "Hytaý",
    "Türkmen-Hindi",
];

// данные партнёров
const partners = ref([
    // организации
    {
        id: 1,
        image: "/images/partner1.webp",
        title: "Türkmen Gaz",
        excerpt:
            "«Türkmen­gaz» döwlet konserni dünýäde iri energetika kärhanalarynyň biri bolup, onuň işleri tebigy gazy gözlemek we öndürmek…",
        author: "Edara",
        level: "Nebit we Gaz",
        category: "Türkmenistan",
    },
    {
        id: 2,
        image: "/images/partner2.webp",
        title: "Rönesans Türkmen",
        excerpt:
            "Rönesans Holding is a Turkish contracting and investment company operating in construction, energy, and infrastructure…",
        author: "Edara",
        level: "Gurluşyk we Binagärlik",
        category: "Türkiýe Respublikasy",
    },
    // люди
    {
        id: 3,
        image: "/images/partner3.webp",
        title: "Aman Amanow",
        excerpt: "Salam! Men JavaScript dilinde web-saýtlar we programmalar döretmegi bilýärin.",
        author: "Adam",
        level: "Sanly Tehnologiýalar Programmist",
        category: "Türkmenistan",
    },
    {
        id: 4,
        image: "/images/partner4.webp",
        title: "Meret Meredow",
        excerpt: "Salam! Men edaranyň ýa-da telekeçiniň işi­niň hasabyny çykaryp bilýärin.",
        author: "Adam",
        level: "Iqtisadiýa we Maliýe Hasapçy",
        category: "Türkmenistan",
    },
    {
        id: 5,
        image: "/images/partner1.webp",
        title: "Türkmen Gaz",
        excerpt:
            "«Türkmen­gaz» döwlet konserni dünýäde iri energetika kärhanalarynyň biri bolup, onuň işleri tebigy gazy gözlemek we öndürmek…",
        author: "Edara",
        level: "Nebit we Gaz",
        category: "Türkmenistan",
    },
    {
        id: 6,
        image: "/images/partner2.webp",
        title: "Rönesans Türkmen",
        excerpt:
            "Rönesans Holding is a Turkish contracting and investment company operating in construction, energy, and infrastructure…",
        author: "Edara",
        level: "Gurluşyk we Binagärlik",
        category: "Türkiýe Respublikasy",
    },
    // люди
    {
        id: 7,
        image: "/images/partner3.webp",
        title: "Aman Amanow",
        excerpt: "Salam! Men JavaScript dilinde web-saýtlar we programmalar döretmegi bilýärin.",
        author: "Adam",
        level: "Sanly Tehnologiýalar Programmist",
        category: "Türkmenistan",
    },
    {
        id: 8,
        image: "/images/partner4.webp",
        title: "Meret Meredow",
        excerpt: "Salam! Men edaranyň ýa-da telekeçiniň işi­niň hasabyny çykaryp bilýärin.",
        author: "Adam",
        level: "Iqtisadiýa we Maliýe Hasapçy",
        category: "Türkmenistan",
    },
    {
        id: 9,
        image: "/images/partner1.webp",
        title: "Türkmen Gaz",
        excerpt:
            "«Türkmen­gaz» döwlet konserni dünýäde iri energetika kärhanalarynyň biri bolup, onuň işleri tebigy gazy gözlemek we öndürmek…",
        author: "Edara",
        level: "Nebit we Gaz",
        category: "Türkmenistan",
    },
    {
        id: 10,
        image: "/images/partner2.webp",
        title: "Rönesans Türkmen",
        excerpt:
            "Rönesans Holding is a Turkish contracting and investment company operating in construction, energy, and infrastructure…",
        author: "Edara",
        level: "Gurluşyk we Binagärlik",
        category: "Türkiýe Respublikasy",
    },
    // люди
    {
        id: 11,
        image: "/images/partner3.webp",
        title: "Aman Amanow",
        excerpt: "Salam! Men JavaScript dilinde web-saýtlar we programmalar döretmegi bilýärin.",
        author: "Adam",
        level: "Sanly Tehnologiýalar Programmist",
        category: "Türkmenistan",
    },
    {
        id: 12,
        image: "/images/partner4.webp",
        title: "Meret Meredow",
        excerpt: "Salam! Men edaranyň ýa-da telekeçiniň işi­niň hasabyny çykaryp bilýärin.",
        author: "Adam",
        level: "Iqtisadiýa we Maliýe Hasapçy",
        category: "Türkmenistan",
    },

    {
        id: 13,
        image: "/images/partner1.webp",
        title: "Türkmen Gaz",
        excerpt:
            "«Türkmen­gaz» döwlet konserni dünýäde iri energetika kärhanalarynyň biri bolup, onuň işleri tebigy gazy gözlemek we öndürmek…",
        author: "Edara",
        level: "Nebit we Gaz",
        category: "Türkmenistan",
    },
    {
        id: 14,
        image: "/images/partner2.webp",
        title: "Rönesans Türkmen",
        excerpt:
            "Rönesans Holding is a Turkish contracting and investment company operating in construction, energy, and infrastructure…",
        author: "Edara",
        level: "Gurluşyk we Binagärlik",
        category: "Türkiýe Respublikasy",
    },
    // люди
    {
        id: 15,
        image: "/images/partner3.webp",
        title: "Aman Amanow",
        excerpt: "Salam! Men JavaScript dilinde web-saýtlar we programmalar döretmegi bilýärin.",
        author: "Adam",
        level: "Sanly Tehnologiýalar Programmist",
        category: "Türkmenistan",
    },
    {
        id: 16,
        image: "/images/partner4.webp",
        title: "Meret Meredow",
        excerpt: "Salam! Men edaranyň ýa-da telekeçiniň işi­niň hasabyny çykaryp bilýärin.",
        author: "Adam",
        level: "Iqtisadiýa we Maliýe Hasapçy",
        category: "Türkmenistan",
    },
]);

// отфильтрованный список
const filtered = computed(() => {
    return partners.value.filter((p) => {
        const okEntity =
            filterEntity.value === "Edaralar we adamlar"
                ? true
                : filterEntity.value === "Edaralar"
                  ? p.author === "Edara"
                  : p.author === "Adam";

        const okSector =
            filterSector.value === "Ähli ugurlar" ? true : p.level === filterSector.value;
        const okCountry =
            filterCountry.value === "Ähli ýurtlar" ? true : p.category === filterCountry.value;

        return okEntity && okSector && okCountry;
    });
});

// skeleton + пагинация
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
    <section class="mx-auto max-w-7xl px-4 py-8">
        <!-- Заголовок -->
        <h2 class="mb-8 text-center text-3xl font-semibold text-green-600">Hyzmatdaş tapmak</h2>

        <!-- Фильтры + кнопка -->
        <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex flex-wrap gap-4">
                <USelect
                    v-model="filterEntity"
                    :items="entityOptions"
                    class="min-w-[180px]"
                    placeholder="Edaralar we adamlar"
                />
                <USelect
                    v-model="filterSector"
                    :items="sectorOptions"
                    class="min-w-[180px]"
                    placeholder="Ugurlar"
                />
                <USelect
                    v-model="filterCountry"
                    :items="countryOptions"
                    class="min-w-[180px]"
                    placeholder="Ýurtdar"
                />
            </div>
            <NuxtLink
                :to="localePath('/partners/create')"
                class="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
            >
                Hyzmatdaş bolmak
            </NuxtLink>
        </div>

        <!-- Сетка карточек -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <!-- skeleton -->
            <template v-if="isLoading">
                <MainCard v-for="n in 8" :key="`skeleton-${n}`" :loading="true" />
            </template>

            <!-- реальные карточки -->
            <template v-else>
                <MainCard
                    v-for="p in filtered"
                    :key="p.id"
                    :image="p.image"
                    :title="p.title"
                    :excerpt="p.excerpt"
                    :author="p.author"
                    :level="p.level"
                    :category="p.category"
                    :link="localePath(`/partners/${p.id}`)"
                />
            </template>
        </div>

        <!-- Пагинация -->
        <div class="mt-6 flex justify-center">
            <UPagination v-model:page="page" show-edges :sibling-count="1" :total="100" />
        </div>

        <!-- Контактная форма внизу -->
        <ContactForm />
    </section>
</template>

<style scoped>
/* не забыть подключить плагин tailwindcss line-clamp, если нужен */
</style>
