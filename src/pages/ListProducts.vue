<template>
    <v-container class="fill-height">
        <v-container class="navigation">
            <Navigation />
        </v-container>
        <v-container class="list_cards">
            <v-cointainer class="card" v-for="(product, index) in slicedProducts" :key="index">
                <h1 class="name"> {{ product.name }}</h1>
                <v-container class="info">
                    <span class="pfc">{{ product.calories }}</span>
                    <span class="pfc">{{ product.proteins }}</span>
                    <span class="pfc">{{ product.fats }}</span>
                    <span class="pfc">{{ product.carbs }}</span>
                </v-container>
            </v-cointainer>
            <h1><button @click="showLess"> < </button> {{ currentPage }} <button @click="showMore"> > </button></h1>
        </v-container>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navigation from '@/components/Navigation.vue';
import { useAppStore } from '@/stores/dayProducts';

const appStore = useAppStore();
const pageSize = 8;
const currentPage = ref(1);
const slicedProducts = ref([]);

const showMore = () => {
    currentPage.value++;
    sliceProducts();
}
const showLess = () => {
    if (currentPage.value === 1) { return; }
    currentPage.value--;
    sliceProducts();
}

const sliceProducts = () => {
    const start = (currentPage.value - 1) * pageSize;
    const end = start + pageSize;
    slicedProducts.value = appStore.productsAll.slice(start, end);
}

onMounted(() => {
    sliceProducts();
});
</script>

<style lang="scss" scoped>
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
.navigation {
    width: 100%;
}
.list_cards {
    flex-wrap: wrap;
    display: flex;
    flex-direction:column;
    width: 100%;
    padding-left: 55px;
    padding-right: 55px;
    justify-content: space-between;

}
.card{ 
    flex-wrap: wrap;
    display: flex;
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: rgba(194, 233, 211, 0.692);
    border: 1px solid rgba(0, 0, 0, 0.253);
    border-radius: 15px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.info{
    padding: 0px;
    display: flex;
    flex-direction: row;
    align-items: right;
    justify-content:right;
    width: 50%;
}
.name{
    width: 40%;
    font-size: 20px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    margin-left: 25px;
}
.span{
    margin-left: 25px;
    margin-right: 25px;
}
.pfc{
    width: 25%;
    margin-right: 15px;
}
</style>