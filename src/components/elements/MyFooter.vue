<template>
    <footer class="footer">
        <my-container class="footer__container">
            <div class="footer__top">
                <div class="footer__info">
                    <Logo :theme="'dark'" class="footer__link"/>
                    <p class="footer__address">м. Київ, пр-т Лесі Українки, 26</p>
                    <p class="footer__contact-text">info@devstudio.com</p>
                    <p class="footer__contact-text">+38 096 111 11 11</p>
                </div>
                <div class="footer__socials">
                    <h3 class="footer__heading">Приєднуйтесь</h3>
                    <SocialsList :list="socialsList" :theme="'dark'" />
                </div>
            </div>
            <div class="footer__subscribe">
                <h3 class="footer__heading">Підпишіться на розсилку</h3>
                <div class="footer__insider">
                    <input type="text" class="footer__input" placeholder="E-mail">
                    <MyButton class="footer__button">
                        <p class="footer__button-text">Підписатися</p>
                        <svg class="footer__button-svg">
                            <use href="@/assets/images/symbol-defs.svg#icon-telegram"></use>
                        </svg>
                    </MyButton>
                </div>
            </div>
        </my-container>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
import MyContainer from '@/components/UI/MyContainer'
import Logo from '@/components/UI/Logo'
import MyButton from '@/components/UI/MyButton'
import SocialsList from '@/components/elements/SocialsList'

const socialsList = ref([
    {
        key: 0,
        name: "instagram",
        iconName: "#icon-instagram",
        link: "https://uk.wikipedia.org/wiki/Instagram",
    },
    {
        key: 1,
        name: "twitter",
        iconName: "#icon-twitter",
        link: "https://uk.wikipedia.org/wiki/Twitter",
    },
    {
        key: 2,
        name: "facebook",
        iconName: "#icon-facebook",
        link: "https://uk.wikipedia.org/wiki/Facebook",
    },
    {
        key: 3,
        name: "linkedin",
        iconName: "#icon-linkedin",
        link: "https://uk.wikipedia.org/wiki/LinkedIn",
    }
])
</script>

<style lang="scss" scoped>
.footer {
    padding: 60px 0;
    background-color: $darkest-grey;

    &__info,
    &__socials,
    &__subscribe {
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    &__info,
    &__socials {
        margin-bottom: 60px;
    }

    &__link {
        max-width: max-content;
        margin-bottom: 20px;
    }

    &__address {
        font-size: 14px;
        color: $white;
        line-height: 24px;
        margin-bottom: 8px;
    }

    &__contact-text {
        font-size: 14px;
        color: $text-grey;
        line-height: 24px;
        margin-bottom: 8px;
        cursor: pointer;
        transition-property: color;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    &__contact-text:hover {
        color: $white;
    }

    &__heading {
        font-size: 14px;
        color: $white;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    &__insider {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    &__input {
        width: 100%;
        height: 50px;
        border: 1px solid $circle-grey;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0);
        font-family: 'Roboto Regular';
        font-size: 16px;
        color: $circle-grey;
        padding: 15px;
        margin-bottom: 20px;
    }

    &__button {
        width: 200px;
        height: 50px;
        background-color: $blue;
        border: none;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 12px;
        cursor: pointer;
    }

    &__button-text {
        font-size: 16px;
        font-family: 'Roboto Bold';
        color: $white;
        line-height: 30px;
    }

    &__button-svg {
        width: 24px;
        height: 24px;
        fill: $white;
    }

    @media screen and (min-width: 768px) {
        &__container {
            display: flex;
            flex-flow: column;
            gap: 60px;
        }

        &__top {
            display: flex;
            flex-flow: row;
            justify-content: center;
            gap: 165px;
        }

        &__info,
        &__socials {
            margin-bottom: 0;
        }

        &__input {
            width: 450px;
        }
    }

    @media screen and (min-width: 1200px) {
        &__container {
            display: flex;
            flex-flow: row;
            justify-content: space-between;
        }

        &__top {
            display: flex;
            flex-flow: row;
            gap: 70px;
        }

        &__info,
        &__socials,
        &__subscribe {
            align-items: flex-start
        }

        &__address {
            margin-bottom: 9px;
        }

        &__contact-text {
            margin-bottom: 9px;
        }

        &__insider {
            flex-flow: row;
            gap: 12px;
        }

        &__input {
            width: 358px;
            margin-bottom: 0px;
        }
    }
}
</style>