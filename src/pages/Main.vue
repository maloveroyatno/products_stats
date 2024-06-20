<template>
  <Navigation />
  <v-container class="fill-height">
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :view-mode="type"
        :weekdays="weekday"
        @dayclick="getDate"
      ></v-calendar>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import {ref} from 'vue'
  const value = ref()
  const type = ref('month')
  const events = ref([])
  const weekday = ref([0, 1, 2, 3, 4, 5, 6])
  const getDate = (date) => {
    this.selectedDate=date
    console.log(this.selectedDate)
  }
</script>
