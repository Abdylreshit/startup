<script setup lang="ts">
// Пустой <script setup>, здесь можно добавить логику в будущем (v-model, отправка и т.п.)
</script>

<template>
    <section class="mb-16">
        <!-- Заголовок и подзаголовок -->
        <div class="mx-auto mb-8 max-w-2xl px-4 text-center">
            <h2 class="text-3xl font-semibold text-green-600">Biz bilen Habarlaşmak</h2>
            <p class="mt-2 text-gray-700">Maglumatlaryňyzy iberiň we biz Siz bilen habarlaşarys</p>
        </div>

        <!-- Блок с формой -->

        <div class="rounded-xl bg-white p-6 shadow-sm">
            <!-- Две колонки: слева — поля Name/Family/Телефон/E-mail, справа — поле Teswir -->
            <div class="flex flex-col lg:flex-row lg:space-x-6">
                <!-- Левая часть (Name, Family, Phone, Email) -->
                <div class="flex-1">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <!-- Adyňyz -->
                        <div>
                            <label
                                class="mb-1 block text-sm font-medium text-gray-800"
                                for="firstName"
                            >
                                Adyňyz
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder=""
                                class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                            />
                        </div>
                        <!-- Familiýanyňyz -->
                        <div>
                            <label
                                class="mb-1 block text-sm font-medium text-gray-800"
                                for="lastName"
                            >
                                Familiýanyňyz
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder=""
                                class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                            />
                        </div>
                        <!-- Telefon Belginiňiz -->
                        <div>
                            <label class="mb-1 block text-sm font-medium text-gray-800" for="phone">
                                Telefon Belginiňiz
                            </label>
                            <input
                                id="phone"
                                type="text"
                                placeholder=""
                                class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                            />
                        </div>
                        <!-- E-mail poçtaňyz -->
                        <div>
                            <label class="mb-1 block text-sm font-medium text-gray-800" for="email">
                                E-mail poçtaňyz
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder=""
                                class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <!-- Правая часть (Teswir — textarea) -->
                <div class="mt-6 flex-1 lg:mt-0">
                    <label class="mb-1 block text-sm font-medium text-gray-800" for="message">
                        Teswir
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder=""
                        class="w-full resize-none rounded-md bg-gray-200 p-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                    />
                </div>
            </div>

            <!-- Нижний ряд: примечание слева и кнопка «Ugratmak» справа -->
            <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <!-- Примечание -->
                <p class="text-xs text-gray-500">
                    * Siziň ugradan maglumatlaryňyz 24 sagadyň içinde işlenilip, Siz bilen
                    habarlaşylar. Özüňiz we maksadyňyz barada doly we dogry maglumatyňyzy
                    bermegiňizi haýyş edýäris.
                </p>
                <!-- Кнопка отправки -->
                <button
                    type="submit"
                    class="mt-2 rounded-md bg-green-600 px-6 py-2 font-medium text-white transition-colors hover:bg-green-700 sm:mt-0"
                >
                    Ugratmak
                </button>
            </div>
        </div>
    </section>
</template>
