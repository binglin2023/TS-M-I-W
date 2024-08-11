<template>
    <div class="map-content">
        <div id="map-content"></div>
        <!-- longtitude and latitude -->
        <div class="long-lat">{{ lonlat[0] }}°E,{{ latLong[1] }}°N</div>
    </div>
</template>

<script setup lang="ts">

const lonlat = ref([0,0])
 onMounted(async() => {
    
 }),
</script>

<style scoped>

</style>