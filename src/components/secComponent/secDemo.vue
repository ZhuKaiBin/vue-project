<template>
<h2>{{ a }}</h2>
</template>

<script setup lang="ts">
const a:number = 3;
defineExpose({ a });
</script>