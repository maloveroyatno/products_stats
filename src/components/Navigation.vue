<template>
    <div class="navbar">
    <div>
        <v-btn @click="$router.push('/')">Главная страница</v-btn></div>
    <div class="navbar__btns">
        <v-btn @click="$router.push('/config')">Меню продуктов</v-btn>
    </div>
    </div>
</template>

<script>
export default {
mounted() {
    window.addEventListener('beforeunload', this.showConfirmation);
},
beforeUnmount() {
    window.removeEventListener('beforeunload', this.showConfirmation);
},
methods: {
    showConfirmation(event) {
        event.preventDefault();
        event.returnValue = '';
    }
}
};
</script>

<style lang="scss" scoped>
.navbar {
height: 50px;
background-color: rgb(238, 250, 219);
box-shadow: 2px 2px 4px rgb(221, 218, 218);
display: flex;
align-items: center;
padding: 15px;
border-radius: 15px;
min-width: 320px;
}
.v-btn {
padding: 0 10px;
font-size: 20px;
font-family: "Yanone Kaffeesatz", sans-serif;
font-optical-sizing: auto;
font-weight: 300;
font-style: normal;
border-radius: 5px;
min-width: 10px;
}
.navbar__btns {
margin-left: auto;
display: flex;
align-items: space-between;
}
</style>