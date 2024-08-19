<template>
    <n-config-provider :theme-overrides="themeOverrides" abstract :locale="zhCN" :date-locale="dateZhCN">
        <div class="mutil-icon-weather">
            <Map />
            
        </div>
    </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN } from "naive-ui";
import { themeOverrides } from "@/styles/themes/naive-ui-theme-overrides";
</script>

<style lang="scss" scoped>
.mutil-icon-weather {
    flex: 1;
    width: 100%;
    position: relative;

    &.map-content {
        width: 100%;
        height: 100%;
    }
}
</style>