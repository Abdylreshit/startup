<script setup lang="ts">
// В данном случае скрипта практически не требуется.
// Если вам нужно будет динамически подгружать данные (например, из runtimeConfig),
// вы можете добавить логику сюда.
</script>

<template>
    <footer class="bg-green-600 text-white">
        <UContainer>
            <div
                class="flex flex-col items-center justify-center py-2 md:flex-row md:items-center md:justify-between"
            >
                <!-- Левая часть: логотип + название -->
                <div class="mb-6 flex items-center md:mb-0">
                    <!-- Логотип -->
                    <img
                        src="/images/logo-white.svg"
                        alt="Senagat StartUp Logo"
                        class="mr-3 h-[100px] w-[100px]"
                    >
                </div>

                <!-- Правая часть: контакты -->
                <div class="flex flex-col space-y-2 text-sm">
                    <!-- Телефон -->
                    <div class="flex items-center">
                        <UIcon name="i-lucide-phone" class="mr-2 h-5 w-5" />
                        <a href="tel:+99365656565" class="hover:underline">+993 65 65-65-65</a>
                    </div>
                    <!-- Электронная почта -->
                    <div class="flex items-center">
                        <UIcon name="i-lucide-mail" class="mr-2 h-5 w-5" />
                        <a href="mailto:startup@sanly.tm" class="hover:underline"
                            >startup@sanly.tm</a
                        >
                    </div>
                    <!-- Адрес -->
                    <div class="flex items-center">
                        <UIcon name="i-lucide-map-pin" class="mr-2 h-5 w-5" />
                        <span> Aşgabat ş. G.Kulýýew köç. 36</span>
                    </div>
                </div>
            </div>
        </UContainer>
    </footer>
</template>

<style scoped>
/* Если у вас нет SVG-логотипа в белом варианте,
   вы можете положить его в папку /public/images/logo-white.svg или использовать PNG:
   src="/images/logo-white.png". */
</style>
