<template>
    <UApp
        :toaster="{
            position: 'bottom-right',
            duration: 2000,
        }"
    >
        <BaseLoading />
        <NuxtLayout>
            <NuxtRouteAnnouncer />
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
