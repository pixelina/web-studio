<template>
    <section class="main-screen">
        <my-container class="main-screen__container">
            <h1 class="main-screen__heading">Ефективні рішення для вашого бізнесу</h1>
            <MyButton class="main-screen__button" @click="openModal">Замовити послугу</MyButton>
        </my-container>
        <ModalWindow v-if="isOpen" @after-click-close="closeModal"/>
    </section>
</template>

<script setup>
import MyContainer from '@/components/UI/MyContainer'
import MyButton from '@/components/UI/MyButton'
import ModalWindow from '@/components/elements/ModalWindow'
import { ref } from 'vue';

const isOpen = ref(false)

const openModal = () => {
    isOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeModal = (emitValue) => {
    isOpen.value = emitValue
    document.body.style.overflow = 'scroll'
}
</script>

<style lang="scss" scoped>
.main-screen {
    height: 400px;
    background-image: linear-gradient(to right, rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.4)), url(@/assets/images/mobile/header-img.png);
    background-size: cover;
    padding: 118px 0;

    &__heading {
        max-width: 360px;
        font-size: 26px;
        font-family: 'Roboto Black';
        line-height: 42px;
        color: $white;
        text-align: center;
        text-transform: uppercase;
        margin: auto;
        margin-bottom: 30px;
    }

    &__button {
        margin: auto;
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        background-image: linear-gradient(to right, rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.4)), url(@/assets/images/tablet/header-img.png);
    }

    @media screen and (min-width: 1200px) {
        height: 600px;
        background-image: linear-gradient(to right, rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.4)), url(@/assets/images/desktop/header-img.png);
        padding: 200px 0;

        &__heading {
            max-width: 696px;
            font-size: 44px;
            line-height: 60px;
            color: $white;
        }
    }
}
</style>