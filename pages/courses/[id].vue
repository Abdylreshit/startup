<template>
    <div>
        <section class="mb-8">
            <div class="mx-auto max-w-7xl px-4">
                <div class="md:flex md:gap-8">
                    <!-- Левая, основная колонка -->
                    <article class="space-y-6 md:flex-1">
                        <!-- Главное изображение -->
                        <div class="mb-6 flex items-center justify-between">
                            <h2 class="text-2xl font-semibold text-green-600">
                                Okuw barada giňişleýin maglumat
                            </h2>
                            <button
                                class="rounded-md border border-green-600 px-4 py-1 text-green-600 transition hover:bg-green-50"
                            >
                                Okuwa Ýazylmak
                            </button>
                        </div>
                        <img
                            src="/images/course1.webp"
                            alt="Taslama lead"
                            class="w-full rounded-xl object-cover"
                        />

                        <!-- Заголовок + мета -->
                        <div>
                            <h1 class="mt-4 text-3xl font-semibold text-gray-600">
                                Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak
                            </h1>
                            <div class="mt-1 text-sm">
                                <span>Sanly Tehnologiýa</span>
                                <span class="mx-2">·</span>
                                <span>Orta dereje</span>
                                <span class="mx-2">·</span>
                                <span class="text-green-600">Türkmenistanyň Bilim Ministrligi</span>
                            </div>
                        </div>

                        <!-- Текстовый контент -->
                        <div class="prose prose-gray mt-4">
                            <p class="pb-2">
                                Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak,
                                programma üpjünçiliginiň gurluşyny, işleýşini we giňeldilip
                                bilinmegini üpjün etmek üçin möhüm tapgyrdyr. Bu prosesde iş
                                talaplary göz öňünde tutulyp, optimal çözgütler döredilýär.
                            </p>
                            <p class="pb-2 font-bold">Esasy ugurlar:</p>
                            <ul class="list-inside list-disc space-y-2 pl-4 text-gray-700">
                                <li>
                                    Arhitektura dizaýny – Müşderiniň talaplaryna we tehniki şertlere
                                    laýyk gelýän gurluşy emele getirmek.
                                </li>
                                <li>
                                    Modulizasiýa – Koduň düşnükli, täzeden ulanyp bolýan we
                                    giňeldilip bilinýän bolmagyny üpjün etmek.
                                </li>
                                <li>
                                    Tehnologiýa saýlamak – Maksat bilen gabat gelýän framework we
                                    diller bilen işlenip düzülmegi.
                                </li>
                                <li>
                                    Howpsuzlyk we öndürijilik – Kiberhowpsuzlyk çärelerini ýerine
                                    ýetirmek we ýokary öndürijiligi gazanmak.
                                </li>
                            </ul>
                            <img
                                src="/images/course3.webp"
                                alt="Taslama detail"
                                class="mt-6 mb-6 w-full rounded-xl object-cover"
                            />
                            <p>
                                Programma üpjünçiliginiň arhitekturasy we dizaýny diňe bir häzirki
                                zerurlyklara däl, eýsem, geljekde giňeldilip bilinmegini hem göz
                                öňünde tutmalydyr. Çeýe, ygtybarly we ýokary öndürijilikli
                                çözgütleri üpjün etmek bu tapgyryň esasy maksady bolup durýar.
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
                            link="/courses/2"
                        />

                        <MainCard
                            image="/images/course1.webp"
                            title="Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak"
                            excerpt="Bu ýöriteleşme, çeýe we ölçeýärlikli programmalary döretmek üçin iň gowy tejribeleri, dizaýn ýörelgelerini we arhitektura usullaryny öwredýär."
                            author="Türkmenistanyň Bilim Ministrligi"
                            date="Orta dereje"
                            category="Sanly Tehnologiýa"
                            link="/courses/3"
                        />

                        <MainCard
                            image="/images/course1.webp"
                            title="Programma üpjünçiligini dizaýn etmek we arhitekturalaşdyrmak"
                            excerpt="Bu ýöriteleşme, çeýe we ölçeýärlikli programmalary döretmek üçin iň gowy tejribeleri, dizaýn ýörelgelerini we arhitektura usullaryny öwredýär."
                            author="Türkmenistanyň Bilim Ministrligi"
                            date="Orta dereje"
                            category="Sanly Tehnologiýa"
                            link="/courses/4"
                        />
                    </aside>
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
