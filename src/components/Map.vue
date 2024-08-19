<template>
    <div class="map-content">
      <div id="map-content"></div>
      <!-- 经纬度 -->
      <div class="map-lat-long" :style="{ right: MAP_TOOLS.right + 40 + 'px' }">{{ latLong[0] }}°E,{{ latLong[1] }}°N</div>
    </div>
  </template>
  <script lang="ts" setup>
  import { mapInit, showPopupInfo } from "../map/index";
//   import { mapLayers, popups, searchMapLayer } from "@/function/maps";
//   import { popupString } from "@/function";
  import { GlobalModule } from "@/store/modules/global";
  import { storeToRefs } from "pinia";
  
  const latLong = ref([0, 0]);
  // const { setPanelDetails } = GlobalModule();
  const { MAP_TOOLS, MAP_LOAD, MAP } = storeToRefs(GlobalModule());
  onMounted(async () => {
    MAP.value = await mapInit({
      animate: false,
      mode: (import.meta as { env: { VITE_MODE?: string } }).env.VITE_MODE,
      baseUrl: (import.meta as { env: { VITE_APP_BASE_API?: string } }).env.VITE_APP_BASE_API,
      mapDiv: "map-content",
      token: (import.meta as { env: { VITE_APP_MAP_TOKEN?: string } }).env.VITE_APP_MAP_TOKEN,
      zoom: 6.1,
      center: [113.7, 38.8],
      mousemoveCallback: (e: number[]) => {
        latLong.value = e;
      },
      popupCallback: () => {}
    });
    MAP_LOAD.value = true;
  });
  onBeforeUnmount(() => {
    MAP.value.remove();
    MAP_LOAD.value = false;
  });
  </script>
  <style lang="scss" scoped>
  .map-content {
    width: 100%;
    height: 100%;
    position: relative;
  }
  #map-content {
    width: 100%;
    height: 100%;
  }
  .map-lat-long {
    position: absolute;
    bottom: 20px;
    right: 80px;
    background: var(--color--light);
    padding: 4px 10px;
    width: 140px;
    z-index: 0;
    transition: right 0.3s ease;
    border-radius: 2px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    font-family: monospace;
    color: var(--color);
    font-size: 16px;
  }
  </style>
  