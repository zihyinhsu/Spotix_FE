<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="container my-6 md:my-12">
    <h1>id: {{ route.params.id }}</h1>
  </div>
</template>
