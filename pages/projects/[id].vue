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
                                Taslama barada giňişleýin maglumat
                            </h2>
                            <button
                                class="rounded-md border border-green-600 px-4 py-1 text-green-600 transition hover:bg-green-50"
                            >
                                Taslama boýunça habarlaşmak
                            </button>
                        </div>
                        <img
                            src="/images/project1.webp"
                            alt="Taslama lead"
                            class="w-full rounded-xl object-cover"
                        >

                        <!-- Заголовок + мета -->
                        <div>
                            <h1 class="mt-4 text-3xl font-semibold text-gray-600">
                                Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasynyň
                                taslamasy
                            </h1>
                            <div class="mt-1 text-sm">
                                <span>26.02.2025</span>
                                <span class="mx-2">·</span>
                                <span>Gurluşyk we Binagärlik</span>
                                <span class="mx-2">·</span>
                                <span class="text-green-600">Merdan Amanow</span>
                            </div>
                        </div>

                        <!-- Текстовый контент -->
                        <div class="prose prose-gray mt-4">
                            <p class="pb-2">
                                Türkmen döwlet binagärlik-gurluşyk institutynyň täze binasynyň
                                taslamasy häzirki zaman binagärlik ýörelgelerine we innowasion
                                tehnologiýalara esaslanýar. Bu täze bina ýokary bilim standartlaryna
                                laýyklykda gurlup, talyplara, mugallymlara we ylmy işgärlere iň
                                amatly şertleri döretmegi maksat edinýär. Taslama ýurdumyzyň ösüş
                                strategiýasybilen utgaşykly alnyp barylyp, bilim ulgamynda döwrebap
                                şertleri üpjün etmeklige gönükdirilendir.
                            </p>
                            <p class="pb-2 font-bold">Binanyň umumy gurluşy we aýratynlyklary:</p>
                            <p>
                                Täze bina öz içine birnäçe okuw we ylmy-barlag binalaryny alýar.
                                Onuň arhitekturasy milli binagärlik ýörelgelerini häzirki zaman stil
                                bilen sazlaşykly utgaşdyrýar. Binanyň esasy aýratynlyklary şulardan
                                ybarat:
                            </p>
                            <ul class="list-inside list-disc space-y-2 pl-4 text-gray-700">
                                <li>
                                    Okuw otaglary we auditoriwalar – häzirki zaman enjamlar bilen
                                    üpjün edilen giň we ýagty otaglar.
                                </li>
                                <li>
                                    Laboratoriýalar we ylmy-barlag merkezleri – inženerçilik,
                                    gurluşyk, binagärlik we şähergurluşyk ugurlary boýunça döredilen
                                    durnukly merkezler.
                                </li>
                                <li>
                                    Kitaphana we elektron maglumatyň merkezi – müňlerçe kitaptan we
                                    sanly maglumat çeşmelerinden ybarat.
                                </li>
                                <li>
                                    Konferensiýa zaly we amfiteatr – halkara we milli derejede
                                    geçirilýän ylmy maslahatlar we okuw çäreleri üçin giňişlik.
                                </li>
                                <li>
                                    Sport we dynç alyş merkezleri – sport zallary, açyk sport
                                    meýdançalary we türgenleşik enjamlar.
                                </li>
                                <li>
                                    Talyp ýaşaýyş jaýlary we umumy ýaşaýyş binalary – ýaşamak üçin
                                    ähli amatlyklar bolan ýaşaýyş toplumlary.
                                </li>
                            </ul>
                            <img
                                src="/images/project2.webp"
                                alt="Taslama detail"
                                class="mt-6 w-full rounded-xl object-cover"
                            >
                            <p class="py-2 font-bold">
                                Innowasion tehnologiýalar we ekologiýa taýdan durnuklylyk
                            </p>
                            <p>
                                Taslama ekologiýa taýdan arassa tehnologiýalary we energiýa
                                tygşytlaýjy çözgütleri öz içine alýar. Binada gün panelleri,
                                ýagtylandyryş ulgamynda LED tehnologiýalary, howa çalşygy we ýylylyk
                                izolýasiýasy bilen baglanyşykly häzirki zaman çözgütleri ulanylar.
                            </p>
                            <p class="py-2 font-bold">Jemgyýetçilik we dolandyryş ulgamy</p>
                            <p>
                                Täze binanyň düzüminde administratiw bölümler, professor-mugallymlar
                                üçin aýratyn iş otaglary hem ýerleşýär. Mundan başga-da, institutyň
                                sanly dolandyryş ulgamy arkaly ähli resminamalar elektron görnüşde
                                alnyp barylar. Türkmen döwlet binagärlik-gurluşyk institutynyň täze
                                binasy diňe bir bilim edarasy bolmak bilen çäklenmän, ol ýurdumyzyň
                                binagärlik we gurluşyk pudagynyň ösmegine hem uly goşant goşjak
                                döwrebap ylmy-bilim merkezleriniň biri bolar.
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
                            image="/images/project1.webp"
                            title="Robototehnikany gündelik durmuşymyza ornaşdyrmak"
                            excerpt="Robototehnika – awtomatlaşdyrylan ulgamlary we robotlary…"
                            author="Ahmet Babaýew"
                            date="24.02.2025"
                            category="IT we Robototehnika"
                            link="/projects/2"
                        />

                        <MainCard
                            image="/images/project1.webp"
                            title="“AgroSmart: Akyly Oba Hojaçylyk Ulgamy”"
                            excerpt="Oba hojalygyna sanly tehnologiýalary we IoT enjamlaryny ulanmak…"
                            author="Bahar Kulyýewa"
                            date="19.02.2025"
                            category="Agrosenagat"
                            link="/projects/3"
                        />

                        <MainCard
                            image="/images/project1.webp"
                            title="Lukmançylyk pudagynda nobata ýazylmagy sanly ulgama geçirmek"
                            excerpt="Nobat ýazylmagyny sanly ulgam arkaly dolandyrmak üçin çözgüt…"
                            author="Merjen Meredowa"
                            date="21.02.2025"
                            category="Lukmançylyk"
                            link="/projects/4"
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
