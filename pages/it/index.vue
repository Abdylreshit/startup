<template>
    <section class="py-12">
        <!-- Заголовок страницы -->
        <h1 class="mb-8 text-center text-3xl font-semibold text-green-600">IT Hyzmatlary</h1>

        <div class="mx-auto max-w-7xl px-4 md:grid md:grid-cols-2 md:gap-16">
            <!-- Левая колонка -->
            <div class="space-y-6">
                <p class="leading-relaxed text-gray-700">
                    Häzirki zaman iş dünýäsinde IT hyzmatlary kompaniýanyňyñ ösüşi we bäsdeşlige
                    ukyplylygy üçin möhüm rol oýnaýar. Biz size ýokary hilli we häzirki zaman sanly
                    çözgütleri hödürleýäris:
                </p>
                <ul class="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                        <strong>Web Saýtar:</strong> Korporatiw web sahypalar, e-commerce
                        platformalar, CRM ulgamlary, we beýleki sanly web hyzmatlary.
                    </li>
                    <li>
                        <strong>Mobil Programmalar:</strong> iOS we Android üçin amaly programmalary
                        (App Store, Google Play) ýerleşdirmek.
                    </li>
                    <li>
                        <strong>UI/UX Dizaýn:</strong> Ulanyjylaryň tejribesini gowulandyrmak üçin
                        özboluşly interfeýs we dizaýn çözüwleri.
                    </li>
                    <li>
                        <strong>Brending we Grafik Dizaýn:</strong> Logotip döretmek, marka stilini
                        işläp düzmek.
                    </li>
                    <li>
                        <strong>Tehniki Goldaw:</strong> Döredilen taslamalar üçin tehniki kömek we
                        post-launch hyzmatlar.
                    </li>
                </ul>
                <p class="leading-relaxed text-gray-700">
                    Işiňizi täze derejä çykarmak üçin sanly çözgütler bilen üp-jün edýäris!
                </p>
            </div>

            <!-- Правая колонка -->
            <div class="flex flex-col space-y-4 pb-6">
                <!-- Заголовок над формой -->
                <h2 class="text-right text-base leading-snug font-medium text-green-600 md:text-lg">
                    Sargyt etmek üçin maglumatlary dolduryň we gerekli resminamalaryňyzy faýl
                    görnüşinde berkidip ugradyň
                </h2>

                <!-- Карточка с формой -->
                <MainCardForm />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import MainCardForm from "~/components/app/MainCardForm.vue";
</script>
