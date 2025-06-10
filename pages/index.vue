<script setup lang="ts">
const localePath = useLocalePath();

onMounted(() => {
    navigateTo(localePath("home"));
});
</script>

<template>
    <div />
</template>