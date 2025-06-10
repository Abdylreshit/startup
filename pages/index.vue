<script setup lang="ts">
import { useLocalePath, navigateTo } from "#imports";

const localePath = useLocalePath();
navigateTo(localePath("home"));
</script>
<template>
    <div />
</template>
