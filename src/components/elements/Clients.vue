<template>
    <section class="clients">
        <my-container class="clients__container">
            <h2 class="clients__heading">Постійні клієнти</h2>
            <ClientsList :list="clientList" />
        </my-container>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import MyContainer from '@/components/UI/MyContainer'
import ClientsList from '@/components/elements/ClientsList'

const clientList = ref([
    {
        key: 0,
        name: "client",
        iconName: "#icon-client1",
        width: "41",
        height: "46.7",
    },
    {
        key: 1,
        name: "client",
        iconName: "#icon-client2",
        width: "40",
        height: "52",
    },
    {
        key: 2,
        name: "client",
        iconName: "#icon-client3",
        width: "43.46",
        height: "41.18",
    },
    {
        key: 3,
        name: "client",
        iconName: "#icon-client4",
        width: "84.44",
        height: "40.62",
    },
    {
        key: 4,
        name: "client",
        iconName: "#icon-client5",
        width: "62.54",
        height: "45.43",
    },
    {
        key: 5,
        name: "client",
        iconName: "#icon-client6",
        width: "93.79",
        height: "43.93",
    },
])
</script>

<style lang="scss" scoped>
.clients {
    background-color: $white;
    padding: 60px 0;

    &__heading {
        font-size: 28px;
        text-align: center;
        margin-bottom: 30px;
    }

    @media screen and (min-width: 1200px) {
        padding: 94px 0;

        &__heading {
            font-size: 36px;
            margin-bottom: 50px;
        }
    }

}
</style>