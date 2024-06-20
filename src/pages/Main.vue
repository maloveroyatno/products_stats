<template>
  <Navigation />
  <v-container class="fill-height">
      <v-date-picker show-adjacent-months v-model="selectedDay">
      </v-date-picker>
      <h3>{{ selectedDay.toISOString().slice(0, 10) }}</h3>
      <h1>{{ appStore.productsAll }}</h1>
  </v-container>
</template>

<script setup>
  import { useAppStore } from '@/stores/dayProducts';
  const appStore = useAppStore();
  import {ref} from 'vue'
  const selectedDay = ref(new Date())

</script>
