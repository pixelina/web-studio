<template>
    <div :class="menuState === true ? 'mobile-menu mobile-menu--open' : 'mobile-menu'">

        <button class="mobile-menu__close" @click="closeMenuInBurgerComponent">
            <svg width="19" height="19">
                <use href="@/assets/images/symbol-defs.svg#icon-close"></use>
            </svg>
        </button>

        <ul class="mobile-menu__list">
            <li>
                <router-link to="/" class="mobile-menu__link" @click="closeMenuInBurgerComponent">Студія</router-link>
            </li>
            <li>
                <router-link to="/portfolio" class="mobile-menu__link" @click="closeMenuInBurgerComponent">Портфоліо</router-link>
            </li>
            <li>
                <router-link to="/contacts" class="mobile-menu__link" @click="closeMenuInBurgerComponent">Контакти</router-link>
            </li>
        </ul>
        <div class="mobile-menu__inner">
            <ul class="mobile-menu__contacts">
                <li>
                    <a href="#" class="mobile-menu__contact">
                        <span class="mobile-menu__contact-number">+38 096 111 11 11</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="mobile-menu__contact">
                        <span class="mobile-menu__contact-email">info@devstudio.com</span>
                    </a>
                </li>
            </ul>
            <ul class="mobile-menu__socials">
                <li>
                    <a href="#" class="mobile-menu__item">Instagram</a>
                </li>
                <li>
                    <a href="#" class="mobile-menu__item">Twitter</a>
                </li>
                <li>
                    <a href="#" class="mobile-menu__item">Facebook</a>
                </li>
                <li>
                    <a href="#" class="mobile-menu__item">LinkedIn</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    menuState: {
        required: true
    }
})

const emit = defineEmits(['after-click-close'])

const closeMenuInBurgerComponent =() => {
    emit('after-click-close', false)
}
</script>

<style lang="scss" scoped>
.mobile-menu {
    display: flex;
    margin: auto;
    width: 100%;
    height: 100vh;
    background-color: $white;
    position: fixed;
    top: 0;
    z-index: 1000;
    padding: 48px 40px;
    flex-flow: column;
    justify-content: space-between;
    transform: translateX(100%);

    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &--open {
        transform: translateX(0%);
    }

    &__close {
        fill: $black;
        border: none;
        position: absolute;
        top: 21px;
        right: 21px;
    }

    &__list {
        display: flex;
        flex-flow: column;
        gap: 35px;
    }

    &__link {
        color: $black;
        font-size: 40px;
        font-family: 'Roboto Medium';
    }

    &__contacts {
        display: flex;
        flex-flow: column;
        gap: 30px;
        margin-bottom: 65px;
    }

    &__contact-number {
        color: $blue;
        font-size: 34px;
        font-family: 'Roboto Medium';
    }

    &__contact-email {
        color: $dark-grey;
        font-size: 24px;
        font-family: 'Roboto Medium';
    }

    &__socials {
        display: flex;
        flex-flow: row;
        gap: 10px;
    }

    &__item {
        color: $blue;
        font-size: 18px;
        font-family: 'Roboto Medium';
    }
}
</style>