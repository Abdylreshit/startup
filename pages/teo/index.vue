<template>
    <section class="py-12">
        <!-- Заголовок страницы -->
        <h1 class="mb-8 text-center text-3xl font-semibold text-green-600">
            Tehniki-ykdysady esaslandyrşy sargamak
        </h1>

        <div class="mx-auto max-w-7xl px-4 md:grid md:grid-cols-2 md:gap-16">
            <!-- Левая колонка -->
            <div class="space-y-6">
                <p class="leading-relaxed text-gray-700">
                    Bu resminama taslamanyň tehniki we ykdysady taraplaryny seljerip, onuň
                    maksatdalylygyny, girdejililigini we durmuşga geçirilmeginiň geljegini
                    kesgitleýär.
                </p>
                <p class="text-gray-700">TEO adatça aşakdaky bölümleri öz içine alýar:</p>
                <ul class="list-inside list-disc space-y-2 text-gray-700">
                    <li>Taslamanyň beýany we maksatlary</li>
                    <li>Bazar we bäsdeşlik gurşawynyň derňewi</li>
                    <li>Tehnologiýalaryň saýlanylmagy we tehniki çözgütleriň bahalandyrylyşy</li>
                    <li>Zerur maýa goýumlarynyň hasaplamasy</li>
                    <li>Öz-özüni ödeme möhletiniň bahalandyrylyşy</li>
                    <li>Maliýe we ykdysady çaklamalar</li>
                </ul>
                <p class="leading-relaxed text-gray-700">
                    TEO taslamanyň maliýeleşdirilmegi, maýadar çekmek we durmuşa geçirmegiň
                    maksatdalylygyny esaslandyrmak üçin ulanylýar.
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
