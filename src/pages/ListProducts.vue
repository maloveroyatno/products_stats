<template>
    <v-container class="fill-height">
        <v-container class="navigation">
            <Navigation />
        </v-container>
        <v-container class="search">
            <v-text-field label="Поиск" variant="underlined" v-model="search" ></v-text-field>
        </v-container>
        <v-container v-if="slicedProducts.length > 0" class="list_cards">
            <v-cointainer class="card_info">
                <span class="info_name">Название <span class="pfc">КБЖУ(на 100 г.): </span></span>
                <v-container class="info">
                    <span class="pfc">Калории</span>
                    <span class="pfc">Белки</span>
                    <span class="pfc">Жиры</span>
                    <span class="pfc">Углеводы</span>
                </v-container>  
            </v-cointainer>
            <v-cointainer class="card" v-for="(product, index) in slicedProducts" :key="index" >
                <h1 class="name"> {{ product.name }}</h1>
                <v-container class="info">
                    <span class="pfc">{{ product.calories }}</span>
                    <span class="pfc">{{ product.proteins }}</span>
                    <span class="pfc">{{ product.fats }}</span>
                    <span class="pfc">{{ product.carbs }}</span>
                </v-container>
            </v-cointainer>
                <v-btn class ="add_card" @click="addCard">Добавить продукт</v-btn>
            <v-pagination :length="Math.ceil(filteredProducts.length / pageSize)" v-model="currentPage" total-visible="8" @click="sliceProducts" > </v-pagination>
        </v-container>
        <v-container v-else class="nothing">
            <span>По вашему запросу ничего не найдено</span>
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
const search = ref('');

const filteredProducts = computed(() => {
if (search.value.trim() === '') {
    return appStore.productsAll;
}
const lowerCaseSearch = search.value.toLowerCase();
return appStore.productsAll.filter((product) => {
    const lowerCaseName = product.name.toLowerCase();
    return lowerCaseName.includes(lowerCaseSearch);
});
});

const sliceProducts = () => {
    const start = (currentPage.value - 1) * pageSize;
    const end = start + pageSize;
    slicedProducts.value = filteredProducts.value.slice(start, end);
}
watch(search, (newValue) => {
    sliceProducts();
});
onMounted(() => {
    sliceProducts();
});
</script>

<style lang="scss" scoped>

.nothing{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
    font-family: "Yanone Kaffeesatz", sans-serif;
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
.navigation {
    width: 100%;
}
.list_cards {
    margin-top: 0px;
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
.add_card{
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: rgba(205, 240, 220, 0.692);
    border: 1px solid rgba(0, 0, 0, 0.253);
    border-radius: 15px;
    padding: 10px;
    height: 52px;
    font-size: 20px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
}
.card_info{
    display: flex;
    padding: 10px;
    justify-content: space-between;
    flex-direction: row;
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    margin-right: 25px;
}
.info{
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content:right;
    width: 50%;
}
.info_pfc{
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content:center;
    width: 10%;
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
.info_name{
    width: 40%;
    font-size: 20px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    margin-left: 25px;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-wrap:nowrap;
}
.span{
    margin-left: 25px;
    margin-right: 25px;
}
.pfc{
    font-size: 20px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    width: 25%;
    margin-right: 15px;
}
.search{
    width: 85%;
    padding-bottom: 0px;
}
</style>