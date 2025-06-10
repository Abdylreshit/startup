<script setup lang="ts">
defineOptions({
    name: "BaseLoading",
});

const loading = useLoadingStore();
</script>

<template>
    <div
        v-if="loading.globalLoading"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 backdrop-blur-[1px]"
    >
        <svg
            class="text-primary-600"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <g>
                <circle
                    stroke="currentColor"
                    cx="12"
                    cy="2.5"
                    r="1.5"
                    opacity=".14"
                    fill="currentColor"
                />
                <circle
                    stroke="currentColor"
                    cx="16.75"
                    cy="3.77"
                    r="1.5"
                    opacity=".29"
                    fill="currentColor"
                />
                <circle
                    stroke="currentColor"
                    cx="20.23"
                    cy="7.25"
                    r="1.5"
                    opacity=".43"
                    fill="currentColor"
                />
                <circle
                    stroke="currentColor"
                    cx="21.50"
                    cy="12.00"
                    r="1.5"
                    opacity=".57"
                    fill="currentColor"
                />
                <circle
                    stroke="currentColor"
                    cx="20.23"
                    cy="16.75"
                    r="1.5"
                    opacity=".71"
                    fill="currentColor"
                />
                <circle
                    stroke="currentColor"
                    cx="16.75"
                    cy="20.23"
                    r="1.5"
                    opacity=".86"
                    fill="currentColor"
                />
                <circle stroke="currentColor" cx="12" cy="21.5" r="1.5" fill="currentColor" />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="discrete"
                    dur="0.75s"
                    values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
                    repeatCount="indefinite"
                />
            </g>
        </svg>
    </div>
</template>
