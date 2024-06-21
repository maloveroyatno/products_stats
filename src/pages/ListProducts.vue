<template>
    <v-container class="fill-height">
        <v-container class="navigation">
            <Navigation />
        </v-container>
        <v-container>
            
        </v-container>
    </v-container>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import { useAppStore } from '@/stores/dayProducts';

const appStore = useAppStore();
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
</style>