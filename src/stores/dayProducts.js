// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'


export const useAppStore = defineStore('app', {
  state: () => ({
    dayPage: [
      { id: 1, date: '20.06.2024', breakfast: ["asd"], lunch: ["asdasd"], dinner: ["asdasd"] },
      { id: 2, date: '21.06.2024', breakfast: ["2"], lunch: ["2222"], dinner: ["222222"] },
      { id: 3, date: '22.06.2024', breakfast: [], lunch: [], dinner: [] },
      { id: 4, date: '23.06.2024', breakfast: [], lunch: [], dinner: [] },
    ],
    productsAll: [],
  }),

  actions: {
    addProduct(product) {
      this.productsAll.push(product)
    },
    async fillAllProductsFromBase() {
      const response = await axios.get('../assets/food_base.json');
      this.productsAll = response.data;
      console.log(this.productsAll)
    },
    getProdsPerDay(date, type) {
      this.fillAllProductsFromBase();
      const foundProduct = this.dayPage.find((day) => day.date === date);
      if (foundProduct!==undefined && foundProduct!==null) {
        if (type === 'breakfast') {
          return JSON.parse(JSON.stringify(foundProduct.breakfast));
        }
        else if (type === 'lunch') {
          return JSON.parse(JSON.stringify(foundProduct.lunch));
        }
        else if (type === 'dinner') {
          return JSON.parse(JSON.stringify(foundProduct.dinner));
        } 
      }
    },
  },
})
