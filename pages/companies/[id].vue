<template>
    <div>
        <section class="mb-8">
            <div class="mx-auto max-w-7xl px-4">
                <div class="md:flex md:gap-8">
                    <!-- Левая, основная колонка -->
                    <article class="space-y-6 md:flex-1">
                        <!-- Главное изображение -->
                        <div class="mb-6 flex items-center justify-center">
                            <h2 class="text-2xl font-semibold text-green-600">
                                Kärhanalar barada giňişleýin maglumat
                            </h2>
                        </div>
                        <img
                            src="/images/course1.webp"
                            alt="Taslama lead"
                            class="w-full rounded-xl object-cover"
                        />

                        <!-- Заголовок + мета -->
                        <div>
                            <h1 class="mt-4 text-3xl font-semibold text-gray-600">Täze aý</h1>
                            <div class="mt-1 text-sm">
                                <span>Hojalyk Jemgyýeti</span>
                                <span class="mx-2">·</span>
                                <span>Içeri we daşary bazarlar</span>
                                <span class="mx-2">·</span>
                                <span class="text-green-600">Azyk Önümleri</span>
                            </div>
                        </div>

                        <!-- Текстовый контент -->
                        <div class="prose prose-gray mt-4">
                            <p class="pb-2">
                                Täze Aý” kärhanalar topary – şöhlat önümleriniň, konditer we süýt
                                önümleriniň iň iri önüdirijileriniň biri bolmak bilen azyk
                                önümleriniň jemi 500 golaý görnüşlerini öndürýär. Önümçilik
                                obýektleri azyk önümleriniň hil we howpsuzlyk halkara standartlaryna
                                laýyklykda sertifisirlenendir. Kärhanalarda ISO 9001:2015
                                talaplaryna laýyk gelýän hili dolandyrmak ulgamy we ISO 22000:2018
                                azyk önümleriniň howpsuzlygyny dolandyryş ulgamyny işleýärler, bu
                                her bir önümçilik kärhanalarynda laýyklyk şahadatnamalarynyň bar
                                bolmagy bilen tassyklanýar.
                            </p>
                            <p class="pb-2 font-bold">Et we şöhlat önümlerini öndirýän zawod</p>
                            <p>
                                Bu günki gün “Täze Aý” et kombinaty Türkmenistanda bar bolan eti
                                gaýtadan işleýän önümçiliginiň gürrüňsiz öňde baryjysy bolup durýar.
                                Biziň kompaniýamyz et önümleriniň bazarynda 2005-nji ýyldan bäri
                                üstünlikli işläp gelýär, şunda önümçiligiň ekologiki taýdan arassa
                                aýlawyny üpjün edip gelýär. Kompaniýanyň düýbi tutulan wagtyndan
                                başlap, onuň esasy maksady iň ýokary hilli tebigy, ekologiki taýdan
                                arassa et önümlerini öndürmek boldy.
                            </p>
                            <img
                                src="/images/course3.webp"
                                alt="Taslama detail"
                                class="mt-6 mb-6 w-full rounded-xl object-cover"
                            />
                            <p>
                                Häzirki zaman taslamasy boýunça döredilen “Täze Aý” konditer
                                fabrikasy ýokary hilli import awtomatiki enjamlar bilen
                                enjamlaşdyrylandyr. Onuň önümçilik kuwwatlary bir günde 123 tonna
                                konditer önümlerini öndürip bilýärler. Fabrikanyň goýberýän esasy
                                önümleri: köke, keksler, wafli önümleri, tortlar we onuň kiçi
                                bölekleri.
                            </p>
                        </div>

                        <!-- Второе изображение -->
                    </article>

                    <!-- Правая колонка – рекомендованные проекты -->
                    <aside class="hidden space-y-6 md:block md:w-80">
                        <h2 class="text-lg font-medium text-green-600">
                            Sizi gyzyklandyryp biljek taslamalar
                        </h2>

                        <MainCard
                            image="/images/course1.webp"
                            title="Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak"
                            excerpt="Bu ýöriteleşme, çeýe we ölçeýärlikli programmalary döretmek üçin iň gowy tejribeleri, dizaýn ýörelgelerini we arhitektura usullaryny öwredýär."
                            author="Türkmenistanyň Bilim Ministrligi"
                            date="Orta dereje"
                            category="Sanly Tehnologiýa"
                            link="/companies/2"
                        />

                        <MainCard
                            image="/images/course1.webp"
                            title="Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak"
                            excerpt="Bu ýöriteleşme, çeýe we ölçeýärlikli programmalary döretmek üçin iň gowy tejribeleri, dizaýn ýörelgelerini we arhitektura usullaryny öwredýär."
                            author="Türkmenistanyň Bilim Ministrligi"
                            date="Orta dereje"
                            category="Sanly Tehnologiýa"
                            link="/companies/3"
                        />

                        <MainCard
                            image="/images/course1.webp"
                            title="Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak"
                            excerpt="Bu ýöriteleşme, çeýe we ölçeýärlikli programmalary döretmek üçin iň gowy tejribeleri, dizaýn ýörelgelerini we arhitektura usullaryny öwredýär."
                            author="Türkmenistanyň Bilim Ministrligi"
                            date="Orta dereje"
                            category="Sanly Tehnologiýa"
                            link="/companies/4"
                        />
                    </aside>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-8">
            <!-- Заголовок секции -->
            <h2 class="mb-6 text-3xl font-semibold text-green-600">Kärhananyň önümleri</h2>

            <!-- Сетка карточек -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <img src="/images/oguz-salami.webp" alt="" class="h-48 w-full object-cover" />

                    <div class="p-4">
                        <p class="text-gray-800">
                            “OGUZ” haryt nyşanly, Göle etinden ýarym kakadylan şöhlat. Halal önüm.
                        </p>
                    </div>
                </div>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <img src="/images/waffle.webp" alt="" class="h-48 w-full object-cover" />

                    <div class="p-4">
                        <p class="text-gray-800">
                            “Wafli” haryt nyşanly, dürli tagamly wafli. 3 gurluşykda. Eksport üçin.
                        </p>
                    </div>
                </div>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <img src="/images/borek.webp" alt="" class="h-48 w-full object-cover" />

                    <div class="p-4">
                        <p class="text-gray-800">Ýarymfabrikat etli, ýeralmaly börek.</p>
                    </div>
                </div>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <img src="/images/adalat-salami.webp" alt="" class="h-48 w-full object-cover" />

                    <div class="p-4">
                        <p class="text-gray-800">
                            “ADALAT” haryt nyşanly Göle etinden gaýnadylan şöhlat. Halal önüm.
                        </p>
                    </div>
                </div>

                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <img src="/images/oguz-salami.webp" alt="" class="h-48 w-full object-cover" />

                    <div class="p-4">
                        <p class="text-gray-800">
                            “OGUZ” haryt nyşanly, Göle etinden ýarym kakadylan şöhlat. Halal önüm.
                        </p>
                    </div>
                </div>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <img src="/images/waffle.webp" alt="" class="h-48 w-full object-cover" />

                    <div class="p-4">
                        <p class="text-gray-800">
                            “Wafli” haryt nyşanly, dürli tagamly wafli. 3 gurluşykda. Eksport üçin.
                        </p>
                    </div>
                </div>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <img src="/images/borek.webp" alt="" class="h-48 w-full object-cover" />

                    <div class="p-4">
                        <p class="text-gray-800">Ýarymfabrikat etli, ýeralmaly börek.</p>
                    </div>
                </div>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <img src="/images/adalat-salami.webp" alt="" class="h-48 w-full object-cover" />

                    <div class="p-4">
                        <p class="text-gray-800">
                            “ADALAT” haryt nyşanly Göle etinden gaýnadylan şöhlat. Halal önüm.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <ContactForm />
    </div>
</template>

<script setup>
// ничего не нужно
import MainCard from "~/components/app/MainCard.vue";
import ContactForm from "~/components/app/ContactForm.vue";
</script>

<style scoped>
/* Подключите плагин Tailwind Typography для .prose, если требуется */
</style>
