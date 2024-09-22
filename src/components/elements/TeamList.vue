<template>
    <ul class="teamList">
        <li class="teamList__item" v-for="item in list">
            <picture>
                <source :srcset="item.image.desktop" media="(min-width: 1200px)" />
                <source :srcset="item.image.tablet" media="(min-width: 768px)" />
                <img class="teamList__item-img" :src="item.image.mobile" width="100%">
            </picture>
            <div class="teamList__item-content">
                <p class="teamList__item-name">{{ item.name }}</p>
                <p class="teamList__item-position">{{ item.position }}</p>
                <SocialsList :list="item.contacts" />
            </div>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'
import SocialsList from '@/components/elements/SocialsList'

const props = defineProps({
    list: {
        required: true
    }
})
</script>

<style lang="scss" scoped>
.teamList {
    display: flex;
    flex-flow: column;
    gap: 30px;

    &__item {
        width: 100%;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    }

    &__item-content {
        width: 100%;
        background-color: $white;
        padding: 30px 0 24px;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    &__item-name {
        font-size: 16px;
        font-family: 'Roboto Medium';
        color: $black;
        margin-bottom: 10px;
    }

    &__item-position {
        font-size: 16px;
        color: $dark-grey;
        margin-bottom: 16px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-flow: wrap;
        gap: 30px;

        &__item {
            width: calc((100% - 30px) / 2);
        }
    }

    @media screen and (min-width: 1200px) {
        &__item {
            width: calc((100% - 90px) / 4);
        }
    }
}
</style>