<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted } from "vue";
import { useLocalePath } from "#imports";
import MainCard from "~/components/app/MainCard.vue";
import ContactForm from "~/components/app/ContactForm.vue";

// Локальный роутер
const localePath = useLocalePath();

// Фильтры
const filterCategory = ref("Ähli ugurlar");
const filterMarket = ref("Ähli bazarlar üçin");
const filterType = ref("Edaraňyň ähli görnüşleri");

// Опции фильтров
const categoryOptions = ["Ähli ugurlar", "Azyk Önümleri", "Plastik Önümleri"];
const marketOptions = [
    "Ähli bazarlar üçin",
    "Içeri bazar",
    "Daşary bazar",
    "Içeri we Daşary bazarlar",
];
const typeOptions = ["Edaraňyň ähli görnüşleri", "Hojalyk Jemgyýeti", "Döwlet kärhanasy"];

// Компании
const companies = ref([
    {
        id: 1,
        image: "/images/company1.webp",
        title: "Täze Aý",
        excerpt:
            "“Täze Aý” kärhanalar topary – süýt, konditer we azyk önümleriniň iri öndürijileriniň biri bolup, 500 dürli görnüş öndürýär.",
        author: "Azyk Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 2,
        image: "/images/company2.webp",
        title: "Begler Ýoly",
        excerpt:
            "“Begler Ýoly” hususy kärhanasy plastik gaplar, miwe, içgi, konditer üçin gaplar we beýleki önümler üçin çözümler hödürleýär.",
        author: "Plastik Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    // Дублируем для примера
    {
        id: 3,
        image: "/images/company1.webp",
        title: "Täze Aý",
        excerpt:
            "“Täze Aý” kärhanalar topary – süýt, konditer we azyk önümleriniň iri öndürijileriniň biri bolup, 500 dürli görnüş öndürýär.",
        author: "Azyk Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 4,
        image: "/images/company2.webp",
        title: "Begler Ýoly",
        excerpt:
            "“Begler Ýoly” hususy kärhanasy plastik gaplar, miwe, içgi, konditer üçin gaplar we beýleki önümler üçin çözümler hödürleýär.",
        author: "Plastik Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 5,
        image: "/images/company1.webp",
        title: "Täze Aý",
        excerpt:
            "“Täze Aý” kärhanalar topary – süýt, konditer we azyk önümleriniň iri öndürijileriniň biri bolup, 500 dürli görnüş öndürýär.",
        author: "Azyk Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 6,
        image: "/images/company2.webp",
        title: "Begler Ýoly",
        excerpt:
            "“Begler Ýoly” hususy kärhanasy plastik gaplar, miwe, içgi, konditer üçin gaplar we beýleki önümler üçin çözümler hödürleýär.",
        author: "Plastik Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    // Дублируем для примера
    {
        id: 7,
        image: "/images/company1.webp",
        title: "Täze Aý",
        excerpt:
            "“Täze Aý” kärhanalar topary – süýt, konditer we azyk önümleriniň iri öndürijileriniň biri bolup, 500 dürli görnüş öndürýär.",
        author: "Azyk Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 8,
        image: "/images/company2.webp",
        title: "Begler Ýoly",
        excerpt:
            "“Begler Ýoly” hususy kärhanasy plastik gaplar, miwe, içgi, konditer üçin gaplar we beýleki önümler üçin çözümler hödürleýär.",
        author: "Plastik Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },

    {
        id: 9,
        image: "/images/company1.webp",
        title: "Täze Aý",
        excerpt:
            "“Täze Aý” kärhanalar topary – süýt, konditer we azyk önümleriniň iri öndürijileriniň biri bolup, 500 dürli görnüş öndürýär.",
        author: "Azyk Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 10,
        image: "/images/company2.webp",
        title: "Begler Ýoly",
        excerpt:
            "“Begler Ýoly” hususy kärhanasy plastik gaplar, miwe, içgi, konditer üçin gaplar we beýleki önümler üçin çözümler hödürleýär.",
        author: "Plastik Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    // Дублируем для примера
    {
        id: 11,
        image: "/images/company1.webp",
        title: "Täze Aý",
        excerpt:
            "“Täze Aý” kärhanalar topary – süýt, konditer we azyk önümleriniň iri öndürijileriniň biri bolup, 500 dürli görnüş öndürýär.",
        author: "Azyk Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 12,
        image: "/images/company2.webp",
        title: "Begler Ýoly",
        excerpt:
            "“Begler Ýoly” hususy kärhanasy plastik gaplar, miwe, içgi, konditer üçin gaplar we beýleki önümler üçin çözümler hödürleýär.",
        author: "Plastik Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 13,
        image: "/images/company1.webp",
        title: "Täze Aý",
        excerpt:
            "“Täze Aý” kärhanalar topary – süýt, konditer we azyk önümleriniň iri öndürijileriniň biri bolup, 500 dürli görnüş öndürýär.",
        author: "Azyk Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 14,
        image: "/images/company2.webp",
        title: "Begler Ýoly",
        excerpt:
            "“Begler Ýoly” hususy kärhanasy plastik gaplar, miwe, içgi, konditer üçin gaplar we beýleki önümler üçin çözümler hödürleýär.",
        author: "Plastik Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    // Дублируем для примера
    {
        id: 15,
        image: "/images/company1.webp",
        title: "Täze Aý",
        excerpt:
            "“Täze Aý” kärhanalar topary – süýt, konditer we azyk önümleriniň iri öndürijileriniň biri bolup, 500 dürli görnüş öndürýär.",
        author: "Azyk Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
    {
        id: 16,
        image: "/images/company2.webp",
        title: "Begler Ýoly",
        excerpt:
            "“Begler Ýoly” hususy kärhanasy plastik gaplar, miwe, içgi, konditer üçin gaplar we beýleki önümler üçin çözümler hödürleýär.",
        author: "Plastik Önümleri",
        level: "Içeri we Daşary bazarlar",
        category: "Hojalyk Jemgyýeti",
    },
]);

// Фильтрованные компании
const filteredCompanies = computed(() => {
    return companies.value.filter((c) => {
        const okCategory =
            filterCategory.value === "Ähli ugurlar" ? true : c.author === filterCategory.value;
        const okMarket =
            filterMarket.value === "Ähli bazarlar üçin" ? true : c.level === filterMarket.value;
        const okType =
            filterType.value === "Edaraňyň ähli görnüşleri"
                ? true
                : c.category === filterType.value;

        return okCategory && okMarket && okType;
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
            <!-- 1) Заголовок -->
            <h2 class="mb-8 text-center text-3xl font-semibold text-green-600">
                Made in Turkmenistan
            </h2>

            <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex flex-wrap gap-4">
                    <USelect
                        v-model="filterCategory"
                        :items="categoryOptions"
                        class="min-w-[180px]"
                        placeholder="Kategoriýa"
                    />
                    <USelect
                        v-model="filterMarket"
                        :items="marketOptions"
                        class="min-w-[180px]"
                        placeholder="Status"
                    />
                    <USelect
                        v-model="filterType"
                        :items="typeOptions"
                        class="min-w-[180px]"
                        placeholder="Maýa Mukdary"
                    />
                </div>
                <NuxtLink
                    :to="localePath('/companies/create')"
                    class="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
                >
                    Kompaniýa Goşmak
                </NuxtLink>
            </div>

            <!-- Сетка карточек -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <!-- Skeleton -->
                <template v-if="isLoading">
                    <MainCard v-for="n in 8" :key="`skeleton-${n}`" :loading="true" />
                </template>

                <!-- Реальные карточки -->
                <template v-else>
                    <MainCard
                        v-for="comp in filteredCompanies"
                        :key="comp.id"
                        :image="comp.image"
                        :title="comp.title"
                        :excerpt="comp.excerpt"
                        :author="comp.author"
                        :level="comp.level"
                        :category="comp.category"
                        :link="localePath(`/companies/${comp.id}`)"
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
