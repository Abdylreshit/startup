<script setup lang="ts">
import AppHeader from "~/components/app/AppHeader.vue";
</script>

<template>
    <div class="h-screen">
        <AppHeader />

        <UContainer class="mt-[100px]">
            <main>
                <slot />
            </main>
        </UContainer>

        <AppFooter />
    </div>
</template>
