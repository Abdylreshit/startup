import { defineNuxtRouteMiddleware } from "#app";
import { useLoadingStore } from "~/stores/loading";

export default defineNuxtRouteMiddleware(() => {
    return;
    // Запускаем индикатор Загрузка **до** того, как Nuxt поменяет компонент страницы
    const loading = useLoadingStore();
    loading.start();

    // Если нужно, можно проверять `if (!from.name)` – чтобы при первой загрузке (когда `from.name` нет)
    // индикатор не включался. Но обычно это не критично.
});
