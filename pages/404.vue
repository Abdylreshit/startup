<template>
    <div class="flex min-h-screen flex-col items-center justify-center text-center">
        <h1 class="text-5xl font-bold text-red-600">404</h1>
        <p class="mt-4 text-xl text-gray-600">Page not found.</p>
        <NuxtLink
            to="/"
            class="mt-6 inline-block rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
            Go to Home
        </NuxtLink>
    </div>
</template>
