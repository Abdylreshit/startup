<script setup lang="ts">
const localePath = useLocalePath();

if (import.meta.client) {
    navigateTo(localePath("home"));
}
</script>
<template>
    <div />
</template>