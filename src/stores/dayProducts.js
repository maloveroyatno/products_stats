// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'
import data from '../assets/food_base.json'


export const useAppStore = defineStore('app', {
  state: () => ({
    dayPage: [
      { id: 1, date: '20.06.2024', breakfast: [{"name": "Arome Framboise","calories": "37 кКал","proteins": "4,3 г","fats": "0,1 г","carbs": "4,7 г"},{"name": "Arome Framboise","calories": "37 кКал","proteins": "4,3 г","fats": "0,1 г","carbs": "4,7 г"}], lunch: [{"name": "Arome Framboise","calories": "37 кКал","proteins": "4,3 г","fats": "0,1 г","carbs": "4,7 г"}], dinner: [{"name": "Arome Framboise","calories": "37 кКал","proteins": "4,3 г","fats": "0,1 г","carbs": "4,7 г"}] },
      { id: 2, date: '21.06.2024', breakfast: ["2"], lunch: ["2222"], dinner: ["222222"] },
      { id: 3, date: '22.06.2024', breakfast: ["ddd"], lunch: ["dddd"], dinner: ["ddddd"] },
      { id: 4, date: '23.06.2024', breakfast: ["vvv"], lunch: ["vvvv"], dinner: ["vvvvv"] },
    ],
    productsAll: [],
  }),

  actions: {
    addProduct(product) {
      this.productsAll.push(product)
    },
    async fillAllProductsFromBase() {
      this.productsAll = data
    },
    getProdsPerDay(date, type) {
      const foundProduct = this.dayPage.find((day) => day.date === date);
      if (foundProduct!==undefined && foundProduct!==null) {
        if (type === 'breakfast') {
          return foundProduct.breakfast;
        }
        else if (type === 'lunch') {
          return foundProduct.lunch;
        }
        else if (type === 'dinner') {
          return foundProduct.dinner;
        } 
      }
    },
  },
})
