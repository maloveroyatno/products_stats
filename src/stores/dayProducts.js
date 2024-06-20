// Utilities
import { defineStore } from 'pinia'
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./src/config.json', 'utf8'));

export const useAppStore = defineStore('app', {
  state: () => ({
    dayPage: [
      { id: 1, date: '2022-01-01', breakfast: [], lunch: [], dinner: [] },
      { id: 2, date: '2022-01-02', breakfast: [], lunch: [], dinner: [] },
      { id: 3, date: '2022-01-03', breakfast: [], lunch: [], dinner: [] },
      { id: 4, date: '2022-01-04', breakfast: [], lunch: [], dinner: [] },
    ],
    productsAll: [config],
  }),

  actions: {
    addProduct(product) {
      this.productsAll.push(product)
    },
  },
})
