<script setup lang="ts">
import ContactForm from "~/components/app/ContactForm.vue";
import MainCard from "~/components/app/MainCard.vue";

const items = [
    {
        title: "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasynyň taslamasy",
        excerpt:
            "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasy döwürüň talaplaryna görä işlenip taýýarlanyldy. Onda şäherimiziň umumy…",
        image: "/images/project1.webp", // замените на свои пути/URL
        author: "Merdan Amanow",
        date: "26.02.2025",
        category: "Binagärlik we Gurluşyk",
        link: "/projects/1",
    },
    {
        title: "Robototehnikany gündelik durmuşyňyza ornaşdyrmak",
        excerpt:
            "Robototehnika – bu, awtomatlaşdyrylan ulgamlary we robotlary işläp ýerlikli ulanýan ulgam. OI in engineering…",
        image: "/images/project2.webp",
        author: "Ahmet Babaýew",
        date: "24.02.2025",
        category: "IT we Robototehnika",
        link: "/projects/2",
    },
    {
        title: "Lukmançylyk pudagynda nobata ýazylmagy sanly ulgama geçirmek",
        excerpt:
            "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasy döwürüň talaplaryna görä işlenip taýýarlanyldy. Onda şäherimiziň umumy…",
        image: "/images/project3.webp",
        author: "Merjen Meredowa",
        date: "21.02.2025",
        category: "Lukmançylyk",
        link: "/projects/3",
    },
    {
        title: '"AgroSmart: Akyly Oba Hojaçylyk Ulgamy"',
        excerpt:
            "Bu taslama oba hojalygyna sanly tehnologiýalary we IoT enjamlaryny ulanmak arkaly ekinleriň hasyllylygyny…",
        image: "/images/project4.webp",
        author: "Bahar Kulyýewa",
        date: "19.02.2025",
        category: "Agrosenagat",
        link: "/projects/4",
    },
    {
        title: "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasynyň taslamasy",
        excerpt:
            "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasy döwürüň talaplaryna görä işlenip taýýarlanyldy. Onda şäherimiziň umumy…",
        image: "/images/project1.webp", // замените на свои пути/URL
        author: "Merdan Amanow",
        date: "26.02.2025",
        category: "Binagärlik we Gurluşyk",
        link: "/projects/1",
    },
    {
        title: "Robototehnikany gündelik durmuşyňyza ornaşdyrmak",
        excerpt:
            "Robototehnika – bu, awtomatlaşdyrylan ulgamlary we robotlary işläp ýerlikli ulanýan ulgam. OI in engineering…",
        image: "/images/project2.webp",
        author: "Ahmet Babaýew",
        date: "24.02.2025",
        category: "IT we Robototehnika",
        link: "/projects/2",
    },
    {
        title: "Lukmançylyk pudagynda nobata ýazylmagy sanly ulgama geçirmek",
        excerpt:
            "Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasy döwürüň talaplaryna görä işlenip taýýarlanyldy. Onda şäherimiziň umumy…",
        image: "/images/project3.webp",
        author: "Merjen Meredowa",
        date: "21.02.2025",
        category: "Lukmançylyk",
        link: "/projects/3",
    },
    {
        title: '"AgroSmart: Akyly Oba Hojaçylyk Ulgamy"',
        excerpt:
            "Bu taslama oba hojalygyna sanly tehnologiýalary we IoT enjamlaryny ulanmak arkaly ekinleriň hasyllylygyny…",
        image: "/images/project4.webp",
        author: "Bahar Kulyýewa",
        date: "19.02.2025",
        category: "Agrosenagat",
        link: "/projects/4",
    },
];

const partners = [
    {
        src: "/images/partners/1.png",
        alt: "TG we BM",
    },
    {
        src: "/images/partners/2.png",
        alt: "Türkmenistanyň Senagat we Gurluşyk Uniwersiteti",
    },
    {
        src: "/images/partners/3.png",
        alt: "Türkmengaz",
    },
    {
        src: "/images/partners/4.png",
        alt: "Aşgabat Geňeşlik Lyk Alym merkezi",
    },
    {
        src: "/images/partners/5.png",
        alt: "Министерство Малык Маглымат",
    },
    {
        src: "/images/partners/6.png",
        alt: "GAP İnşaat",
    },
    {
        src: "/images/partners/7.png",
        alt: "Petronas",
    },
    {
        src: "/images/partners/8.png",
        alt: "Dragon Oil",
    },
    {
        src: "/images/partners/9.png",
        alt: "Rönesans Holding",
    },
    {
        src: "/images/partners/10.png",
        alt: "Çalık Holding",
    },
];

// const loading = useLoadingStore()

const isLoading = ref(true);

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
        <img v-if="!isLoading" src="/images/main.webp" class="h-[500px] w-full object-cover" >
        <USkeleton v-if="isLoading" class="h-[500px] w-full rounded" />
        <section class="mb-8">
            <div v-if="isLoading" class="my-[40px] flex flex-col gap-6 md:flex-row">
                <!-- Левая колонка (1/3) -->
                <div class="md:w-1/3">
                    <!-- Скелетон-полоса вместо заголовка -->
                    <USkeleton class="h-6 w-3/4 rounded" />
                </div>

                <!-- Правая колонка (2/3) -->
                <div class="space-y-2 md:w-2/3">
                    <!-- Несколько полосок разной длины вместо цитаты -->
                    <USkeleton class="h-4 w-full rounded" />
                    <USkeleton class="h-4 w-[90%] rounded" />
                    <USkeleton class="h-4 w-[95%] rounded" />
                    <USkeleton class="h-4 w-[85%] rounded" />
                    <USkeleton class="h-4 w-[80%] rounded" />
                </div>
            </div>

            <div v-else class="my-[40px] flex flex-col gap-6 md:flex-row">
                <!-- Левая колонка (заголовок) -->
                <div class="md:w-1/3">
                    <p class="text-lg font-semibold text-gray-900">
                        Türkmenistanyň Prezidenti Serdar Berdimuhamedow:
                    </p>
                </div>

                <!-- Правая колонка (цитата) -->
                <div class="md:w-2/3">
                    <p class="text-base leading-relaxed text-gray-700">
                        “Sanly ulgamy we tehnologiýalary ornaşdyrmak durnukly ykdysady ösüş we
                        döwleti dolandyrmagyň netijeliliginiň ýokarlanmagy üçin ileri tutulýan ugur
                        bolup durýar. Geljekde sanly tehnologiýalary dolandyryp biljek we dürli
                        pudaklarda innowasion prosesleri ýöretjek bilimli işgärleri taýýarlamagyň
                        wajyplygyna aýratyn üns çekmek gerek.”
                    </p>
                </div>
            </div>

            <div class="w-full border-t-[2px] border-solid border-white" />
        </section>

        <!-- 2) Заголовок секции -->
        <section class="mb-16">
            <div class="mb-[25px] text-center">
                <h2 class="font-roboto-flex mb-2 text-2xl font-bold text-green-600">
                    Senagat Start-UP Platformasy barada
                </h2>
                <p class="font-roboto-flex text-base text-gray-600">Biz näme hödürleýäris</p>
            </div>

            <div
                v-if="isLoading"
                class="grid animate-pulse grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
                <!-- Карточка 1: занимает 2 колонки на lg -->
                <div
                    class="relative flex h-[240px] flex-col overflow-hidden rounded-lg bg-gray-200 lg:col-span-2"
                >
                    <div class="flex h-full flex-col md:flex-row">
                        <!-- Левая половина -->
                        <div class="flex w-full flex-col justify-between space-y-4 p-6 md:w-1/2">
                            <USkeleton class="h-6 w-1/3 rounded" />
                            <USkeleton class="h-4 w-full rounded" />
                            <USkeleton class="h-4 w-[90%] rounded" />
                            <USkeleton class="h-4 w-[80%] rounded" />
                            <USkeleton class="h-8 w-8 rounded-full" />
                        </div>
                        <!-- Правая половина (картинка) -->
                        <div class="hidden h-full bg-gray-300 md:block md:w-1/2" />
                    </div>
                </div>

                <!-- Карточка 2: обычная 1 колонка -->
                <div
                    class="flex h-[240px] flex-col space-y-4 overflow-hidden rounded-lg bg-gray-200 p-6"
                >
                    <USkeleton class="h-6 w-1/2 rounded" />
                    <USkeleton class="h-4 w-full rounded" />
                    <USkeleton class="h-4 w-[90%] rounded" />
                    <USkeleton class="h-8 w-8 rounded-full" />
                </div>

                <!-- Карточка 3: обычная 1 колонка -->
                <div
                    class="flex h-[240px] flex-col space-y-4 overflow-hidden rounded-lg bg-gray-200 p-6"
                >
                    <USkeleton class="h-6 w-1/2 rounded" />
                    <USkeleton class="h-4 w-full rounded" />
                    <USkeleton class="h-4 w-[90%] rounded" />
                    <USkeleton class="h-8 w-8 rounded-full" />
                </div>

                <!-- Карточка 4: обычная 1 колонка -->
                <div
                    class="flex h-[240px] flex-col space-y-4 overflow-hidden rounded-lg bg-gray-200 p-6"
                >
                    <USkeleton class="h-6 w-1/2 rounded" />
                    <USkeleton class="h-4 w-full rounded" />
                    <USkeleton class="h-4 w-[90%] rounded" />
                    <USkeleton class="h-8 w-8 rounded-full" />
                </div>

                <!-- Карточка 5: обычная 1 колонка -->
                <div
                    class="flex h-[240px] flex-col space-y-4 overflow-hidden rounded-lg bg-gray-200 p-6"
                >
                    <USkeleton class="h-6 w-1/2 rounded" />
                    <USkeleton class="h-4 w-full rounded" />
                    <USkeleton class="h-4 w-[90%] rounded" />
                    <USkeleton class="h-8 w-8 rounded-full" />
                </div>

                <!-- Карточка 6: занимает 2 колонки на lg -->
                <div
                    class="relative flex h-[240px] flex-col overflow-hidden rounded-lg bg-gray-200 lg:col-span-2"
                >
                    <div class="flex h-full flex-col md:flex-row">
                        <!-- Левая половина -->
                        <div class="flex w-full flex-col justify-between space-y-4 p-6 md:w-1/2">
                            <USkeleton class="h-6 w-1/3 rounded" />
                            <USkeleton class="h-4 w-full rounded" />
                            <USkeleton class="h-4 w-[90%] rounded" />
                            <USkeleton class="h-4 w-[80%] rounded" />
                            <USkeleton class="h-8 w-8 rounded-full" />
                        </div>
                        <!-- Правая половина (картинка) -->
                        <div class="hidden h-full bg-gray-300 md:block md:w-1/2" />
                    </div>
                </div>
            </div>

            <!-- ========== НАСТОЯЩАЯ СЕТКА (Grid) ========== -->
            <!-- 2) Сетка карточек с переменными span-ами -->
            <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <!-- Карточка 1: Taslamalar (занимает 2 колонки на lg) -->
                <!--                <div-->
                <!--                    class="relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm lg:col-span-2"-->
                <!--                >-->
                <NuxtLink
                    :to="$localePath('/projects')"
                    class="relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm lg:col-span-2"
                >
                    <div class="flex h-full flex-col md:flex-row">
                        <div class="flex w-full flex-col justify-between p-6 md:w-1/2">
                            <div>
                                <h3
                                    class="font-roboto-flex mb-2 text-lg font-semibold text-gray-900"
                                >
                                    Taslamalar
                                </h3>
                                <p class="font-roboto-flex text-sm leading-relaxed text-gray-600">
                                    Taslamalar – bu täzeligi we ösüşi öňe sürýän başlangyçlar bolup,
                                    dürli ugurlar boýunça innowasion çözgütleri durmuşa geçirmäge
                                    gönükdirilendir.
                                </p>
                            </div>
                            <div class="mt-4 w-fit">
                                <UIcon class="!text-primary-600 !size-10" name="i-main-rocket" />
                            </div>
                        </div>

                        <!-- Правый блок с картинкой (появляется на md+) -->
                        <div class="hidden h-auto overflow-hidden md:block md:w-1/2">
                            <img
                                src="/images/taslamalar.webp"
                                alt="Taslamalar"
                                class="clip-diagonal-left h-full w-full object-cover"
                            >
                        </div>
                    </div>
                </NuxtLink>
                <!--                </div>-->

                <!-- Карточка 2: TEO işläp taýýarla­­mak (обычная 1 колонка) -->
                <NuxtLink
                    :to="$localePath('/teo')"
                    class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm"
                >
                    <div class="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <h3 class="font-roboto-flex mb-2 text-lg font-semibold text-gray-900">
                                TEO işläp taýýarlamak
                            </h3>
                            <p class="font-roboto-flex text-sm leading-relaxed text-gray-600">
                                (Taslamanyň ykdysady esaslandyrmasy) – bu taslamanyň ykdysady we
                                tehniki tar­dan amatlylygyny anyklamak üçin geçirilýän düýpli
                                seljeriş işidir.
                            </p>
                        </div>
                        <div class="mt-4 w-fit">
                            <UIcon name="i-main-reader" class="!text-primary-600 !size-10" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Карточка 3: Hyzmatdaş Tapmak (обычная 1 колонка) -->

                <NuxtLink
                    :to="$localePath('/partners')"
                    class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm"
                >
                    <div class="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <h3 class="font-roboto-flex mb-2 text-lg font-semibold text-gray-900">
                                Hyzmatdaş Tapmak
                            </h3>
                            <p class="font-roboto-flex text-sm leading-relaxed text-gray-600">
                                Dogry hyzmatdaşlyk, taraplaryň birek-birege peýdaly şertlerde
                                işlemegini we bilelikde ösmegini üpjün edýär.
                            </p>
                        </div>
                        <div class="mt-4 w-fit">
                            <UIcon name="i-main-briefcase" class="!text-primary-600 !size-10" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Карточка 4: IT Hyzmatlar (обычная 1 колонка) -->

                <NuxtLink
                    :to="$localePath('/it')"
                    class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm"
                >
                    <div class="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <h3 class="font-roboto-flex mb-2 text-lg font-semibold text-gray-900">
                                IT Hyzmatlar
                            </h3>
                            <p class="font-roboto-flex text-sm leading-relaxed text-gray-600">
                                Biz dürli ugurlar boýunça IT hyzmatlary hödürläp, kompaniýalaryň
                                işini awtomatlaşdyrmaga, sanly çözgütleri ornaşdyrmaga kömek
                                berýäris.
                            </p>
                        </div>
                        <div class="mt-4 w-fit">
                            <UIcon name="i-main-chip" class="!text-primary-600 !size-10" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Карточка 5: Made in Turkmenistan (обычная 1 колонка) -->

                <NuxtLink
                    :to="$localePath('/companies')"
                    class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm"
                >
                    <div class="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <h3 class="font-roboto-flex mb-2 text-lg font-semibold text-gray-900">
                                Made in Turkmenistan
                            </h3>
                            <p class="font-roboto-flex text-sm leading-relaxed text-gray-600">
                                Made in Turkmenistan – bu ýurdumyzda öndürilýän ýokary hilli,
                                ekologik taýdan arassa we netijeli önümçiligiň nyşanydyr.
                            </p>
                        </div>
                        <div class="mt-4 w-fit">
                            <UIcon name="i-main-earth" class="!text-primary-600 !size-10" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Карточка 6: Hünäri ýokarlandyrmak (занимает 2 колонки на lg) -->
                <NuxtLink
                    :to="$localePath('/courses')"
                    class="relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm lg:col-span-2"
                >
                    <div class="flex h-full flex-col md:flex-row">
                        <!-- Левый блок с текстом -->
                        <div class="flex w-full flex-col justify-between p-6 md:w-1/2">
                            <div>
                                <h3
                                    class="font-roboto-flex mb-2 text-lg font-semibold text-gray-900"
                                >
                                    Hünäri ýokarlandyrmak
                                </h3>
                                <p class="font-roboto-flex text-sm leading-relaxed text-gray-600">
                                    Hünäri ýokarlandyrmak — işgärleriň we hünärmenleriň bilim
                                    derejesini, başarnyklaryny we tejribesini yzygiderli
                                    ýokarlandyrmaklyga gönükdirilen möhüm ädimdir.
                                </p>
                            </div>
                            <div class="mt-4 w-fit">
                                <UIcon class="!text-primary-600 !size-10" name="i-main-school" />
                            </div>
                        </div>

                        <!-- Правый блок с картинкой (появляется на md+) -->
                        <div class="hidden h-auto overflow-hidden md:block md:w-1/2">
                            <img
                                src="/images/hunar-yokarlandyrmak.webp"
                                alt="Taslamalar"
                                class="clip-diagonal-left h-full w-full object-cover"
                            >
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <section class="mb-16">
            <!-- Заголовок секции -->
            <div class="mx-auto mb-8 max-w-4xl px-4 text-center">
                <h2 class="mb-2 text-3xl font-semibold text-green-600">Soňky Taslamalar</h2>
                <p class="text-gray-600">Ulanyjylaryň ýüklän soňky taslamalary bilen tanyş boluň</p>
            </div>

            <div v-if="isLoading" class="flex gap-4 overflow-x-auto pb-4">
                <MainCard v-for="n in 4" :key="`skeleton-${n}`" :loading="true" />
            </div>

            <UCarousel
                v-else
                v-slot="{ item }"
                loop
                arrows
                auto-scroll
                :items="items"
                :ui="{
                    item: 'px-2 basis-full sm:basis-1/2 lg:basis-1/4',
                }"
            >
                <MainCard
                    :image="item.image"
                    :title="item.title"
                    :excerpt="item.excerpt"
                    :author="item.author"
                    :date="item.date"
                    :category="item.category"
                    :link="item.link"
                />
            </UCarousel>
        </section>

        <section class="mb-16">
            <!-- Заголовок секции -->
            <div class="mx-auto mb-12 max-w-4xl text-center">
                <h2 class="mb-2 text-3xl font-semibold text-green-600">Biziň Maksadymyz</h2>
                <p class="text-base text-gray-600">Biz utuş-utuş gatnaşyklaryň taraplary</p>
            </div>

            <div
                v-if="isLoading"
                class="grid animate-pulse grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <!-- Карточка-заглушка 1 -->
                <div class="overflow-hidden rounded-lg bg-gray-200">
                    <!-- Заглушка-изображение -->
                    <div class="h-[240px] w-full bg-gray-300" />
                    <div class="space-y-2 px-4 py-6">
                        <!-- Заглушка-заголовок -->
                        <USkeleton class="h-6 w-3/4 rounded" />
                        <!-- Заглушка-текст: две строки -->
                        <USkeleton class="h-4 w-full rounded" />
                        <USkeleton class="h-4 w-[90%] rounded" />
                        <!-- Дополнительная строка -->
                        <USkeleton class="h-4 w-[85%] rounded" />
                    </div>
                </div>

                <!-- Карточка-заглушка 2 -->
                <div class="overflow-hidden rounded-lg bg-gray-200">
                    <div class="h-[240px] w-full bg-gray-300" />
                    <div class="space-y-2 px-4 py-6">
                        <USkeleton class="h-6 w-3/4 rounded" />
                        <USkeleton class="h-4 w-full rounded" />
                        <USkeleton class="h-4 w-[90%] rounded" />
                        <USkeleton class="h-4 w-[85%] rounded" />
                    </div>
                </div>

                <!-- Карточка-заглушка 3 -->
                <div class="overflow-hidden rounded-lg bg-gray-200">
                    <div class="h-[240px] w-full bg-gray-300" />
                    <div class="space-y-2 px-4 py-6">
                        <USkeleton class="h-6 w-3/4 rounded" />
                        <USkeleton class="h-4 w-full rounded" />
                        <USkeleton class="h-4 w-[90%] rounded" />
                        <USkeleton class="h-4 w-[85%] rounded" />
                    </div>
                </div>
            </div>

            <!-- Сетка из трёх карточек -->
            <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Карточка #1 -->
                <div class="overflow-hidden">
                    <img
                        src="/images/goal1.webp"
                        alt="Zeһinli ýaşylar"
                        class="h-[240px] w-full object-cover"
                    >
                    <div class="py-6">
                        <h3 class="mb-3 text-xl font-semibold text-gray-900">
                            Zehinli ýaşlarymyzyň oýlap-tapyşlaryny goldamak.
                        </h3>
                        <p class="mb-4 text-sm leading-relaxed text-gray-600">
                            Biz ýaş zehinleriň täze taslamalaryny ösdürmegi, tehnologiki oýlap
                            tapyşlaryny durmuşa geçirmegi üçin mümkinçilik döretmegi maksat
                            edinýäris.
                        </p>
                        <p class="text-sm leading-relaxed text-gray-600">
                            Bu ugurda bilim, maliýe we taslama dolandyryş ugurlarynda goldaw berip,
                            olaryň döredijilik potensialyny has doly açmagyňa ýardam berýäris.
                        </p>
                    </div>
                </div>

                <!-- Карточка #2 -->
                <div class="overflow-hidden">
                    <img
                        src="/images/goal2.webp"
                        alt="Täze nesliň döredijilik we innowasiýa"
                        class="h-[240px] w-full object-cover"
                    >
                    <div class="py-6">
                        <h3 class="mb-3 text-xl font-semibold text-gray-900">
                            Täze nesliň döredijilik we innowasiýa mümkinçiliklerini ösdürmek.
                        </h3>
                        <p class="mb-4 text-sm leading-relaxed text-gray-600">
                            Biz ýaş zehinleriň täze taslamalaryny ösdürmegi, tehnologiki oýlap
                            tapyşlaryny durmuşa geçirmegi üçin mümkinçilik döretmegi maksat
                            edinýäris.
                        </p>
                        <p class="text-sm leading-relaxed text-gray-600">
                            Bu ugurda bilim, maliýe we taslama dolandyryş ugurlarynda goldaw berip,
                            olaryň döredijilik potensialyny has doly açmagyňa ýardam berýäris.
                        </p>
                    </div>
                </div>

                <!-- Карточка #3 -->
                <div class="overflow-hidden">
                    <img
                        src="/images/goal3.webp"
                        alt="Ýurdumyzyň senagat we ykdysady kuwwatyny artdyrmak"
                        class="h-[240px] w-full object-cover"
                    >
                    <div class="py-6">
                        <h3 class="mb-3 text-xl font-semibold text-gray-900">
                            Ýurdumyzyň senagat we ykdysady kuwwatyny artdyrmak.
                        </h3>
                        <p class="mb-4 text-sm leading-relaxed text-gray-600">
                            Ýurdumyzyň senagat we ykdysady kuwwatyny artdyrmak, durnukly ösüşi üpjün
                            etmek we milli ykdysadyýetiň ösdürilmegine mynasyp goşant goşmak üçin
                            möhüm wezipeleriniň biridir.
                        </p>
                        <p class="text-sm leading-relaxed text-gray-600">
                            Bu maksat bilen, täze tehnologiyalary ornaşdyrmak, innowasion çözgütleri
                            durmuşa geçirmek we ýerli önümçiligi ösdürmek boýunça tagallalar
                            edilýär.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div class="mb-16 w-full border-t-[2px] border-solid border-white" />

        <section class="mb-16">
            <!-- Заголовок -->
            <div class="mx-auto mb-8 max-w-3xl px-4 text-center">
                <h2 class="text-3xl font-semibold text-green-600">Hyzmatdaşlarymyz</h2>
                <p class="mt-2 text-gray-700">Ýurdumyz we dünýäniň iň uly kompaniýalary</p>
            </div>

            <!-- Сетка логотипов -->
            <div class="mx-auto max-w-6xl px-4">
                <div
                    class="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-5"
                >
                    <div
                        v-for="(partner, idx) in partners"
                        :key="idx"
                        class="flex w-full justify-center"
                    >
                        <img
                            :src="partner.src"
                            :alt="partner.alt"
                            class="max-h-16 object-contain filter transition duration-300 hover:filter-none"
                        >
                    </div>
                </div>
            </div>
        </section>

        <div class="mb-16 w-full border-t-[2px] border-solid border-white" />

        <ContactForm />
    </div>
</template>

<style scoped>
.clip-diagonal-left {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 40% 20%);
}
</style>
