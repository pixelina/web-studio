<template>
    <ul class="list">
        <li class="list__item" v-for="item in list">
            <a href="#" class="list__link">
                <div class="list__wrap-img">
                    <picture>
                        <source :srcset="item.image.desktop" media="(min-width: 1200px)" />
                        <source :srcset="item.image.tablet" media="(min-width: 768px)" />
                        <img class="projects__item-img" :src="item.image.mobile" width="100%">
                    </picture>
                    <div class="list__blue">{{ item.description }}</div>
                </div>
                <div class="list__item-content">
                    <p class="list__item-name">{{ item.title }}</p>
                    <p class="list__item-field">{{ item.postTitle }}</p>
                </div>
            </a>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    list: {
        required: true
    }
})
</script>

<style lang="scss" scoped>
.list {
    display: flex;
    flex-flow: column;
    gap: 30px;

    &__item {
        width: 100%;
    }

    &__item-content {
        width: 100%;
        padding: 20px 24px;
        background-color: $white;
        border-bottom: 1px solid $light-grey;
        border-left: 1px solid $light-grey;
        border-right: 1px solid $light-grey;
    }

    &__item-name {
        font-size: 18px;
        font-family: 'Roboto Bold';
        color: $black;
        line-height: 36px;
        margin-bottom: 4px;
    }

    &__item-field {
        font-size: 16px;
        font-family: 'Roboto Regular';
        color: $dark-grey;
        line-height: 30px;
    }

    &__wrap-img {
            position: relative;
            overflow: hidden;
        }

        &__blue {
            background-color: rgba(33, 150, 243, 0.75);
            width: 100%;
            height: 100%;
            color: $white;
            font-size: 18px;
            line-height: 28px;
            padding: 24px;
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            transform: translateY(100%);
            transition-property: transform;
            transition-duration: 250ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        &__link:hover &__blue {
            transform: translateY(0);
        }

    @media screen and (min-width: 768px) {
        flex-flow: wrap;
        gap: 30px;

        &__item {
            width: calc((100% - 30px) / 2);
        }
    }

    @media screen and (min-width: 1200px) {
        &__item {
            width: calc((100% - 60px) / 3);
        }
    }
}
</style>