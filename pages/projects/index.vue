<script setup lang="ts">
import { ref, computed } from "vue";
import { useLocalePath } from "#imports";
import ContactForm from "~/components/app/ContactForm.vue";
import MainCard from "~/components/app/MainCard.vue";

// 1) Локальный роутер
const localePath = useLocalePath();

// 2) Селекты (фильтры)
const filterCategory = ref("Ähli pudaklar");
const filterStatus = ref("Taslamanyň işlendi…");
const filterBudget = ref("İslendik maýa goýum mukdary");

// 3) Опции для селектов
const categoryOptions = [
    "Ähli pudaklar",
    "Binagärlik we Gurluşyk",
    "IT we Robototehnika",
    "Lukmançylyk",
    "Agrosenagat",
];
const statusOptions = ["Taslamanyň işlendi…", "Täzelenýär", "Gözden geçirilýär", "Çap edilýär"];
const budgetOptions = [
    "İslendik maýa goýum mukdary",
    "< 10 000 USD",
    "10 000 – 50 000 USD",
    "> 50 000 USD",
];

// 4) Массив карточек (проекты)
const projects = ref([
    {
        id: 1,
        image: "/images/project1.webp",
        title: "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasynyň taslamasy",
        excerpt:
            "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasy döwürüň talaplaryna görä işlenip taýýarlanyldy. Onda şäherimiziň umumy…",
        author: "Merdan Amanow",
        date: "26.02.2025",
        category: "Binagärlik we Gurluşyk",
    },
    {
        id: 2,
        image: "/images/project2.webp",
        title: "Robototehnikany gündelik durmuşymyza ornaşdyrmak",
        excerpt:
            "Robototehnika – bu, awtomatlaşdyrylan ulgamlary we robotlary işläp ýerlilik ulanýan ulgam. OI in engineering…",
        author: "Ahmet Babaýew",
        date: "24.02.2025",
        category: "IT we Robototehnika",
    },
    {
        id: 3,
        image: "/images/project3.webp",
        title: '"AgroSmart: Akyly Oba Hojaçylyk Ulgamy"',
        excerpt:
            "Bu taslama oba hojalygyna sanly tehnologiýalary we IoT enjamlaryny ulanmak arkaly ekinleriň hasyllylygyny…",
        author: "Bahar Kulyýewa",
        date: "19.02.2025",
        category: "Agrosenagat",
    },
    {
        id: 4,
        image: "/images/project4.webp",
        title: "Lukmançylyk pudagynda nobata ýazylmagy sanly ulgama geçirmek",
        excerpt:
            "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasy döwürüň talaplaryna görä işlenip taýýarlanyldy. Onda şäherimiziň umumy…",
        author: "Merjen Meredowa",
        date: "21.02.2025",
        category: "Lukmançylyk",
    },
    {
        id: 5,
        image: "/images/project1.webp",
        title: "Ýene-de bir taslama №5",
        excerpt: "Gysgaça we beýik taslama №5 barada düşündiriş. Bu taslama dunýada meşhur…",
        author: "Somebody",
        date: "15.02.2025",
        category: "IT we Robototehnika",
    },
    {
        id: 6,
        image: "/images/project2.webp",
        title: "Türkmenistanyň täze IT merkezi",
        excerpt: "Bu taslama Bilim we Ylymlar Ministrligi tarapyndan maliýeleşdirildi…",
        author: "Another Person",
        date: "10.02.2025",
        category: "IT we Robototehnika",
    },
    {
        id: 7,
        image: "/images/project3.webp",
        title: "Ekologik toprak durnuklylygy",
        excerpt: "Ilkinji bolup toprak durnuklylygyny ýokarlandyrmak ugrunda…",
        author: "Environmental Team",
        date: "05.02.2025",
        category: "Agrosenagat",
    },
    {
        id: 8,
        image: "/images/project4.webp",
        title: "Energiýa netijeliligi programmasy",
        excerpt: "Saglyk we energiýa ulgamyny birleşdirýän täze iş meýilnamasy…",
        author: "Energy Dept",
        date: "01.02.2025",
        category: "Binagärlik we Gurluşyk",
    },

    {
        id: 9,
        image: "/images/project1.webp",
        title: "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasynyň taslamasy",
        excerpt:
            "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasy döwürüň talaplaryna görä işlenip taýýarlanyldy. Onda şäherimiziň umumy…",
        author: "Merdan Amanow",
        date: "26.02.2025",
        category: "Binagärlik we Gurluşyk",
    },
    {
        id: 10,
        image: "/images/project2.webp",
        title: "Robototehnikany gündelik durmuşymyza ornaşdyrmak",
        excerpt:
            "Robototehnika – bu, awtomatlaşdyrylan ulgamlary we robotlary işläp ýerlilik ulanýan ulgam. OI in engineering…",
        author: "Ahmet Babaýew",
        date: "24.02.2025",
        category: "IT we Robototehnika",
    },
    {
        id: 11,
        image: "/images/project3.webp",
        title: '"AgroSmart: Akyly Oba Hojaçylyk Ulgamy"',
        excerpt:
            "Bu taslama oba hojalygyna sanly tehnologiýalary we IoT enjamlaryny ulanmak arkaly ekinleriň hasyllylygyny…",
        author: "Bahar Kulyýewa",
        date: "19.02.2025",
        category: "Agrosenagat",
    },
    {
        id: 12,
        image: "/images/project4.webp",
        title: "Lukmançylyk pudagynda nobata ýazylmagy sanly ulgama geçirmek",
        excerpt:
            "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasy döwürüň talaplaryna görä işlenip taýýarlanyldy. Onda şäherimiziň umumy…",
        author: "Merjen Meredowa",
        date: "21.02.2025",
        category: "Lukmançylyk",
    },
    {
        id: 13,
        image: "/images/project1.webp",
        title: "Ýene-de bir taslama №5",
        excerpt: "Gysgaça we beýik taslama №5 barada düşündiriş. Bu taslama dunýada meşhur…",
        author: "Somebody",
        date: "15.02.2025",
        category: "IT we Robototehnika",
    },
    {
        id: 14,
        image: "/images/project2.webp",
        title: "Türkmenistanyň täze IT merkezi",
        excerpt: "Bu taslama Bilim we Ylymlar Ministrligi tarapyndan maliýeleşdirildi…",
        author: "Another Person",
        date: "10.02.2025",
        category: "IT we Robototehnika",
    },
    {
        id: 15,
        image: "/images/project3.webp",
        title: "Ekologik toprak durnuklylygy",
        excerpt: "Ilkinji bolup toprak durnuklylygyny ýokarlandyrmak ugrunda…",
        author: "Environmental Team",
        date: "05.02.2025",
        category: "Agrosenagat",
    },
    {
        id: 16,
        image: "/images/project4.webp",
        title: "Energiýa netijeliligi programmasy",
        excerpt: "Saglyk we energiýa ulgamyny birleşdirýän täze iş meýilnamasy…",
        author: "Energy Dept",
        date: "01.02.2025",
        category: "Binagärlik we Gurluşyk",
    },
]);

// 5) Отфильтрованный массив
const filteredProjects = computed(() => {
    return projects.value.filter((p) => {
        const okCategory =
            filterCategory.value === "Ähli pudaklar" ? true : p.category === filterCategory.value;
        return okCategory;
    });
});

const isLoading = ref(true);
const page = ref(5);

onBeforeMount(() => {
    // Если важно, чтобы остановка произошла до mount
    // loading.start()
    isLoading.value = true;
});

onMounted(() => {
    // Если не важно, произойдёт ли остановка чуть позже, после mount
    // setTimeout(() => {
    //     loading.stop()
    // }, 500)

    setTimeout(() => {
        isLoading.value = false;
    }, 500);
});
</script>

<template>
    <div>
        <section class="mx-auto max-w-7xl px-4 py-8">
            <!-- 1) Заголовок -->
            <h2 class="mb-8 text-center text-3xl font-semibold text-green-600">Soňky Taslamalar</h2>

            <!-- 2) Фильтры + кнопка -->
            <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex flex-wrap gap-4">
                    <USelect
                        v-model="filterCategory"
                        :items="categoryOptions"
                        class="min-w-[180px]"
                        placeholder="Kategoriýa"
                    />
                    <USelect
                        v-model="filterStatus"
                        :items="statusOptions"
                        class="min-w-[180px]"
                        placeholder="Status"
                    />
                    <USelect
                        v-model="filterBudget"
                        :items="budgetOptions"
                        class="min-w-[180px]"
                        placeholder="Maýa Mukdary"
                    />
                </div>
                <NuxtLink
                    :to="localePath('/projects/create')"
                    class="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
                >
                    Taslama Ýerlestirmek
                </NuxtLink>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                        :date="proj.date"
                        :category="proj.category"
                        :link="localePath(`/projects/${proj.id}`)"
                    />
                </template>
            </div>

            <div class="mt-6 flex items-center justify-center">
                <UPagination v-model:page="page" show-edges :sibling-count="1" :total="100" />
            </div>
        </section>
        <ContactForm />
    </div>
</template>

<style scoped>
/* Проверяйте, что у вас подключён tailwindcss-плагин line-clamp,
   чтобы работал класс `line-clamp-3`.
   Если нет — либо уберите `line-clamp-3`, либо замените его на
   `overflow-hidden truncate` (но тогда обрезка будет всего на одну строку).
*/
</style>
