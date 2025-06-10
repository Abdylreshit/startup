<script setup lang="ts">
import { ref, computed } from "vue";

// Статичный список ваших проектов
const projects = ref([
    {
        id: 1,
        image: "/images/project1.webp",
        title: "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasynyň taslamasy",
        excerpt:
            "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasy häzirki zaman binagärlik ýörelgelerine we innowasion tehnologiýalara esaslanýar.",
        status: "Kabul Edildi",
        sector: "Gurluşyk we Binagärlik",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 2,
        image: "/images/project1.webp",
        title: "Täze binanyň energetika derňew taslamasy",
        excerpt:
            "Bu taslama binanyň energiýa sarp edilişini optimizirlemek we innowasion güneş paneli ulgamlaryny ornaşdyrmak üçin işlenip düzüldi.",
        status: "Barlagda",
        sector: "Energiýa we Tehnologiýa",
        date: "26.02.2025",
        link: "#",
    },
    {
        id: 3,
        image: "/images/project1.webp",
        title: "Oba hojalyk üçin akylly suwaryş ulgamy",
        excerpt:
            "Akylly sensörler we awtomatiki suwaryş sapaklary, ekinleriň üstünde real-waqt maglumat toplap, suwy tygşytlamaga kömek edýär.",
        status: "Gaýtarylan",
        sector: "Agrosenagat",
        date: "26.02.2025",
        link: "#",
    },

    {
        id: 4,
        image: "/images/project1.webp",
        title: "Sanly platforma arkaly işewürlik hyzmatdaşlygy",
        excerpt:
            "Bu taslama, işewürler üçin sanly platforma döredip, hyzmatdaşlygy we maglumat alyş-çalyşyny ýeňilleşdirýär.",
        status: "Kabul Edildi",
        sector: "Işewürlik we Tehnologiýa",
        date: "26.02.2025",
        link: "#",
    },

    {
        id: 5,
        image: "/images/project1.webp",
        title: "Energiýa tygşytlaýjy bina taslamasy",
        excerpt:
            "Bu taslama, binanyň energiýa sarp edilişini azaltmak üçin innowasion izolýasiýa we energiýa tygşytlaýjy tehnologiýalary ulanýar.",
        status: "Kabul Edildi",
        sector: "Gurluşyk we Energiýa",
        date: "26.02.2025",
        link: "#",
    },

    {
        id: 6,
        image: "/images/project1.webp",
        title: "Akylly şäher taslamasy",
        excerpt:
            "Bu taslama, şäheriň infrastrukturasy üçin akylly tehnologiýalary ulanmak arkaly ýaşaýyş hilini ýokarlandyrmagy maksat edinýär.",
        status: "Barlagda",
        sector: "Şäher gurluşygy",
        date: "26.02.2025",
        link: "#",
    },

    {
        id: 7,
        image: "/images/project1.webp",
        title: "Eko-ýaşyl meýdança taslamasy",
        excerpt:
            "Bu taslama, şäherde ýaşyl meýdançalary we ekologiýa taýdan arassa ýerleri döretmek arkaly ekologiýa taýdan arassa ýaşaýyş gurmagy maksat edinýär.",
        status: "Gaýtarylan",
        sector: "Ekologiýa we Şäher gurluşygy",
        date: "26.02.2025",
        link: "#",
    },

    {
        id: 8,
        image: "/images/project1.webp",
        title: "Akylly ulag ulgamy taslamasy",
        excerpt:
            "Bu taslama, şäherde ulag akymyny dolandyrmak we howpsuzlygy ýokarlandyrmak üçin akylly ulag ulgamlaryny ulanmagy maksat edinýär.",
        status: "Kabul Edildi",
        sector: "Ulag we Tehnologiýa",
        date: "26.02.2025",
        link: "#",
    },

    {
        id: 9,
        image: "/images/project1.webp",
        title: "Akylly öý taslamasy",
        excerpt:
            "Bu taslama, öýüň içindäki akylly tehnologiýalary ulanmak arkaly ýaşaýyş hilini ýokarlandyrmagy maksat edinýär.",
        status: "Barlagda",
        sector: "Gurluşyk we Tehnologiýa",
        date: "26.02.2025",
        link: "#",
    },

    {
        id: 10,
        image: "/images/project1.webp",
        title: "Akylly saglyk merkezi taslamasy",
        excerpt:
            "Bu taslama, saglyk hyzmatlaryny gowulandyrmak we maglumat alyş-çalyşyny ýeňilleşdirmek üçin akylly saglyk merkezini döretmegi maksat edinýär.",
        status: "Gaýtarylan",
        sector: "Saglyk we Tehnologiýa",
        date: "26.02.2025",
        link: "#",
    },
]);

const total = computed(() => projects.value.length);

function removeProject(id: number) {
    projects.value = projects.value.filter((p) => p.id !== id);
}

// 1) Состояние модалки
const open = ref(false);

// 2) Данные формы
const form = reactive({
    name: "",
    short: "",
    content: "",
    sector: "",
    file: /** @type File|null */ null,
});

// 3) Опции для селекта
const sectorOptions = [
    "Gurluşyk we Binagärlik",
    "IT we Robototehnika",
    "Agrosenagat",
    "Lukmançylyk",
    "Energiýa we Tehnologiýa",
];

function onFileChange(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    form.file = files?.[0] ?? null;
}

function save() {
    console.log("Сохранить форму:", { ...form });
    open.value = false;
}
</script>

<template>
    <div>
        <div class="mb-6 flex items-center justify-between">
            <h2 class="text-xl font-semibold text-gray-800">
                Taslamalaryň sany: <span class="text-green-600">{{ total }}</span>
            </h2>
            <UModal
                v-model:open="open"
                title="Taslama Goşmak"
                description="Formany dolduryp, taslamany goşuň"
                :ui="{ footer: 'justify-end space-x-2' }"
                :width="'640px'"
            >
                <!-- Trigger кнопка -->

                <UButton label="Taslama Goşmak" color="success" @click="open = true" />

                <!-- Тело модалки -->
                <template #body>
                    <form class="space-y-4" @submit.prevent="save">
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label
                                    for="name"
                                    class="mb-1 block text-sm font-medium text-gray-800"
                                >
                                    Taslamanyň ady
                                </label>
                                <input
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    placeholder="Ady"
                                    class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    for="short"
                                    class="mb-1 block text-sm font-medium text-gray-800"
                                >
                                    Gysga Mazmuny
                                </label>
                                <textarea
                                    id="short"
                                    v-model="form.short"
                                    rows="3"
                                    class="w-full resize-none rounded-md bg-gray-200 p-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                />
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    for="content"
                                    class="mb-1 block text-sm font-medium text-gray-800"
                                >
                                    Girişleýin Mazmuny
                                </label>
                                <textarea
                                    id="content"
                                    v-model="form.content"
                                    rows="5"
                                    class="w-full resize-none rounded-md bg-gray-200 p-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                />
                            </div>

                            <div class="md:col-span-2">
                                <label
                                    for="sector"
                                    class="mb-1 block text-sm font-medium text-gray-800"
                                >
                                    Ugry
                                </label>
                                <select
                                    id="sector"
                                    v-model="form.sector"
                                    class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                >
                                    <option disabled value="">Ugry saýlaň</option>
                                    <option v-for="opt in sectorOptions" :key="opt">
                                        {{ opt }}
                                    </option>
                                </select>
                            </div>

                            <div class="md:col-span-2">
                                <label class="mb-1 block text-sm font-medium text-gray-800">
                                    Faýl saýlamak
                                </label>
                                <input
                                    type="file"
                                    class="block w-full rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                    @change="onFileChange"
                                />
                            </div>
                        </div>
                    </form>
                </template>

                <!-- Footer модалки -->
                <template #footer="{ close }">
                    <UButton label="Yatyr" color="neutral" variant="outline" @click="close" />
                    <UButton label="Ýatda Sakla" color="success" @click="save" />
                </template>
            </UModal>
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
