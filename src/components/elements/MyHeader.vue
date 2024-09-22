<template>
    <header class="header">
        <my-container class="header__container">
            <nav class="header__navigation">
            <Logo />
                <ul class="header__pages">
                    <li class="header__item">
                        <router-link to="/" exact-active-class="header__page--active" class="header__page">Студія</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/portfolio" exact-active-class="header__page--active" class="header__page">Портфоліо</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/contacts" exact-active-class="header__page--active" class="header__page">Контакти</router-link>
                    </li>
                </ul>
                <ul class="header__contacts">
                    <li>
                        <a class="header__contact">
                            <svg class="header__contact-svg" width="14" height="10">
                                <use href="@/assets/images/symbol-defs.svg#icon-envelope"></use>
                            </svg>
                            <span class="header__contact-text">info@devstudio.com</span>
                        </a>
                    </li>
                    <li>
                        <a class="header__contact">
                            <svg class="header__contact-svg" width="10" height="14">
                                <use href="@/assets/images/symbol-defs.svg#icon-smartphone"></use>
                            </svg>
                            <span class="header__contact-text">+38 096 111 11 11</span>
                        </a>
                    </li>
                </ul>
                
                <button class="header__button" @click="openMenu">
                    <svg class="header__menu">
                        <use href="@/assets/images/symbol-defs.svg#icon-menu"></use>
                    </svg>
                </button>
            </nav>
        </my-container>

        <BurgerMenu :menuState="isOpen" @after-click-close="closeMenu" />
    </header>
</template>

<script setup>
import MyContainer from '@/components/UI/MyContainer'
import Logo from '@/components/UI/Logo'
import BurgerMenu from '@/components/elements/BurgerMenu'
import { ref } from 'vue';

const isOpen = ref(false);

const openMenu = () => {
    isOpen.value = true
    document.body.style.overflowY = 'hidden';
}

const closeMenu = (emitValue) => {
    isOpen.value = emitValue  
    document.body.style.overflowY = 'scroll';
}
</script>

<style lang="scss" scoped>
.header {
    height: 80px;
    background-color: $white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $icon-grey;

    &__navigation {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
    }

    &__pages {
        display: none;
    }

    &__contacts {
        display: none;
    }

    &__button {
        border: none;
    }

    &__menu {
        width: 40px;
        height: 40px;
        fill: $black;
    }

    @media screen and (min-width: 768px) {

        &__pages {
            display: flex;
            flex-flow: row;
            gap: 50px;
        }

        &__page {
            font-size: 14px;
            font-family: 'Roboto Medium';
            color: $black;
            cursor: pointer;
            transition-property: color;
            transition-duration: 250ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        &__page--active {
            color: $blue;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                bottom: -32px;
                display: block;
                width: 100%;
                height: 4px;
                border-radius: 2px;
                background-color: $blue;
            }
        }

        &__page:hover {
            color: $blue;
        }

        &__contacts {
            display: flex;
            flex-flow: column;
            gap: 10px;
        }

        &__contact {
            fill: $dark-grey;
            color: $dark-grey;
            display: flex;
            flex-flow: row;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition-property: color, fill;
            transition-duration: 250ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

            &:hover {
            fill: $blue;
            color: $blue;
        }
        }

        &__contact-text {
            font-size: 12px;
            font-family: 'Roboto Medium';
        }

        &__menu {
            display: none;
        }
    }

    @media screen and (min-width: 1200px) {
        &__contacts {
            display: flex;
            flex-flow: row;
            align-items: center;
            gap: 30px;
        }
    }
}
</style>