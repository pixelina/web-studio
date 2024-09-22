<template>
    <ul class="list">
        <li class="list__item" v-for="card in list">
            <a href="#" class="list__link">
                <svg class="list__svg">
                    <use :href="require('@/assets/images/symbol-defs.svg') + card.iconName"></use>
                </svg>
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
    flex-flow: wrap;
    gap: 30px;

    &__item {
        width: calc((100% - 30px) / 2);
    }

    &__link {
        fill: $icon-grey;
        border: 1px solid $icon-grey;
        border-radius: 5px;
        padding: 16px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition-property: border-color, fill;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    &__svg {
        width: 106px;
        height: 60px;
    }

    &__link:hover {
        border-color: $blue;
        fill: $blue;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-flow: wrap;
        gap: 30px;

        &__item {
            width: calc((100% - 60px) / 3);
        }
    }

    @media screen and (min-width: 1200px) {
        display: flex;
        flex-flow: row;
        gap: 30px;

        &__item {
            width: calc((100% - 150px) / 6);
        }
    }

}
</style>