<script setup lang="ts">
import { ref } from "vue";

const form = ref({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    file: /** @type File|null */ null,
});

function onFileChange(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    form.value.file = files?.[0] ?? null;
}

function submit() {
    console.log("TEO request submitted:", form.value);
    // TODO: отправить form.value на сервер
}
</script>

<template>
    <div class="rounded-xl bg-white p-6 shadow-md">
        <form @submit.prevent="submit">
            <!-- Четыре поля в две колонки -->
            <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <!-- Adyňyz -->
                <div>
                    <label for="firstName" class="mb-1 block text-sm font-medium text-gray-800">
                        Adyňyz
                    </label>
                    <input
                        id="firstName"
                        v-model="form.firstName"
                        type="text"
                        class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                    >
                </div>
                <!-- Familiýanyňyz -->
                <div>
                    <label for="lastName" class="mb-1 block text-sm font-medium text-gray-800">
                        Familiýanyňyz
                    </label>
                    <input
                        id="lastName"
                        v-model="form.lastName"
                        type="text"
                        class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                    >
                </div>
                <!-- Telefon Belginiňiz -->
                <div>
                    <label for="phone" class="mb-1 block text-sm font-medium text-gray-800">
                        Telefon Belginiňiz
                    </label>
                    <input
                        id="phone"
                        v-model="form.phone"
                        type="text"
                        class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                    >
                </div>
                <!-- E-mail poçtaňyz -->
                <div>
                    <label for="email" class="mb-1 block text-sm font-medium text-gray-800">
                        E-mail poçtaňyz
                    </label>
                    <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="h-10 w-full rounded-md bg-gray-200 px-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                    >
                </div>
            </div>

            <!-- Teswir (textarea) -->
            <div class="mb-4">
                <label for="message" class="mb-1 block text-sm font-medium text-gray-800">
                    Teswir
                </label>
                <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    class="w-full resize-none rounded-md bg-gray-200 p-4 placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
            </div>

            <!-- Загрузка файла и кнопка -->
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex-1">
                    <label class="mb-1 block text-sm font-medium text-gray-800">
                        Faýl ýüklemek
                    </label>
                    <input
                        type="file"
                        class="block w-full rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        @change="onFileChange"
                    >
                </div>
                <button
                    type="submit"
                    class="rounded-md bg-green-600 px-6 py-2 font-medium text-white transition-colors hover:bg-green-700"
                >
                    Ugratmak
                </button>
            </div>

            <!-- Примечание -->
            <p class="mt-4 text-xs text-gray-500">
                * Siziň ugradan maglumatlaryňyz 24 sagadyň içinde işlenilip, Siz bilen habarlaşylar.
                Sargydyňyzyň ýagdaýyny şahsy otagda görüp bilersiňiz.
            </p>
        </form>
    </div>
</template>
