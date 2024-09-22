<template>
    <ul class="socialsList">
        <li class="socialsList__item" v-for="item in list">
            <a :href="item.link" :class="theme === 'dark' ? 'socialsList__circle socialsList__circle--dark' : 'socialsList__circle'">
                <svg class="socialsList__svg">
                    <use :href="require('@/assets/images/symbol-defs.svg') + item.iconName"></use>
                </svg>
            </a>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    list: {
        required: true
    },
    theme: {
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.socialsList {
    display: flex;
    flex-flow: row;
    gap: 10px;

    &__circle {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: $white;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: $icon-grey;
        transition-property: background-color, fill;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    &__circle--dark {
        background-color: $circle-grey;
        fill: $white;
    }

    &__svg {
        width: 20px;
        height: 20px;
    }

    &__circle:hover {
        background-color: $blue;
        fill: $white;
    }
}
</style>