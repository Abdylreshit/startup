<template>
    <section class="py-12">
        <!-- Заголовок страницы -->
        <h1 class="mb-8 text-center text-3xl font-semibold text-green-600">
            Inženerçilik we maslahat beriş hyzmatlary
        </h1>

        <div class="mx-auto max-w-7xl px-4 md:grid md:grid-cols-2 md:gap-16">
            <!-- Левая колонка -->
            <div class="space-y-6">
                <p class="leading-relaxed text-gray-700">
                    Inženerçilik we maslahat hyzmatlary — geljege gurýan innowasion çözgütleri
                    hödürleýäris!
                </p>
                <p class="leading-relaxed text-gray-700">
                    Bilermenler toparymyz bilen inženerçilik we maslahat hyzmatlarynda ygtybarly,
                    dowamly we täsirli çözgütleri öndürýäris. Taslamany dolandyrmakdan başlap
                    tehniki maslahat berişe, ylmy barlag işlerinden infrastruktura çözgütlerine
                    çeňňi dürli hyzmatlar bilen işiňiziň işlerine laýyk gelýän çözgütleri
                    hödürleýäris.
                </p>
                <p class="text-gray-700">Hyzmatlarymyz:</p>
                <ul class="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                        <strong>Inženerçilik çözgütleri</strong> – Taslamany dizaýn etmek, tehniki
                        derňew we durmuşa geçiriş işlerindäki hünär goldawy.
                    </li>
                    <li>
                        <strong>Maslahat beriş hyzmatlary</strong> – Senagata mahsus strategiki
                        görkezmeler we amaly netijeli çözgütler.
                    </li>
                    <li>
                        <strong>Taslamany dolandyrmak</strong> – Çeşmeleriň has gowy ulanmagy üçin
                        meýilleşdirmek, gözegçilik we utgaşdyrmak.
                    </li>
                    <li>
                        <strong>Durnukly çözgütler</strong> – Gəljekde ekologiya taýdan arassa we
                        innowasiýa inženerçilik hyzmatlary bilen maýa goýmak.
                    </li>
                </ul>
                <p class="leading-relaxed text-gray-700">
                    Inženerçilik we maslahat beriş ulgamlarynda iň amatly we innowasion çözgütler
                    üçin bize ýüz tutuň!
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
