<template>
    <ul class="list">
        <li class="list__item" v-for="card in list">
            <div class="list__item-frame">
                <svg class="list__svg">
                    <use :href="require('@/assets/images/symbol-defs.svg') + card.iconName"></use>
                </svg>
            </div>
            <h3 class="list__item-heading">{{ card.title }}</h3>
            <p class="list__item-description">{{ card.description }}</p>
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

    &__item-frame {
        width: 100%;
        height: 120px;
        border-radius: 5px;
        background-color: $light-grey;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }

    &__svg {
        width: 70px;
        height: 70px;
    }

    &__item-heading {
        font-size: 14px;
        text-transform: uppercase;
        text-align: center;
        color: $black;
        margin-bottom: 10px;
    }

    &__item-description {
        width: 100%;
        font-size: 14px;
        color: $dark-grey;
        line-height: 24px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-flow: wrap;
        gap: 30px;

        &__item {
            width: calc((100% - 30px) / 2);
        }

        &__item-heading {
            text-align: left;
        }
    }

    @media screen and (min-width: 1200px) {
        flex-flow: row;

        &__item {
            width: calc((100% - 90px) / 4);
        }
    }
}
</style>