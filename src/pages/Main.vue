<template>
  <v-container class="fill-height">
    <v-container class="navigation">
      <Navigation />
    </v-container>
    <v-container class="calendar">
      <v-date-picker show-adjacent-months hide-header v-model="selectedDay">
      </v-date-picker>
      <h3>{{ console.log(selectedDay.toLocaleDateString()) }}</h3>
      <h1>{{ getDayProds() }}</h1>

      <v-container class="page_prods">
      <span class="food_title">Завтрак:<br></span>
        <span v-for="prodBreak in dayBreakfast" :key="prodBreak" class="food">{{ prodBreak.name }}<br></span>
      <span class="food_title">Обед:<br></span>
        <span v-for="prodLunch in dayLunch" class="food">{{ prodLunch.name}}<br></span>
      <span class="food_title">Ужин:<br></span>
        <span v-for="prodDinner in dayDinner" class="food">{{ prodDinner.name}}<br></span>
    </v-container>
  </v-container>
  </v-container>
</template>

<script setup>
  import { useAppStore } from '@/stores/dayProducts';
  const appStore = useAppStore();
  import {ref} from 'vue'
  const selectedDay = ref(new Date())
  const dayBreakfast=ref();
  const dayLunch=ref();
  const dayDinner=ref();
  const getDayProds = () => {
    dayBreakfast.value = appStore.getProdsPerDay(selectedDay.value.toLocaleDateString(), 'breakfast');
    dayLunch.value = appStore.getProdsPerDay(selectedDay.value.toLocaleDateString(), 'lunch');
    dayDinner.value = appStore.getProdsPerDay(selectedDay.value.toLocaleDateString(), 'dinner');
  }
</script>

<style lang="scss" scoped>
.food_title{
  border-bottom: 1px solid black;
}
.food{
  width: 100%;
  margin-top: 5px;
  font-size: 25px;
  font-weight: 300;
}
.fill-height {
  padding: 10px;
  min-width: 70%;
  max-width: 70%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.calendar {
  flex-wrap: wrap;
  display: flex;
  flex-direction:row;
  width: 100%;
  padding-left: 55px;
  padding-right: 55px;
  margin-top: 0px;
  margin-bottom: 0px;
  justify-content: space-between;
}
.navigation {
  width: 100%;
}
.v-date-picker {
  min-width: 380px;
  max-width: 40%;
}
.page_prods {
  min-width: 380px;
  max-width: 50%;
  min-height: 100%;
  max-height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.253);
  border-radius: 15px;
  padding: 10px;
  margin-right: 0px;
  background-color: rgba(255, 228, 196, 0.425);
  font-size: 30px;
  font-weight: 800;
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

</style>
