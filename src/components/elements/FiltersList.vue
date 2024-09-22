<template>
    <ul class="filters">
        <li class="filters__filter" v-for="item in list">
            <button class="filters__button">{{ item.name }}</button>
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
.filters {
    width: 330px;
    display: flex;
    flex-flow: wrap;
    gap: 15px 8px;
    margin-bottom: 40px;

    &__button {
        background-color: $light-grey;
        border: none;
        border-radius: 5px;
        padding: 6px 25px;
        display: flex;
        justify-content: center;
        font-size: 16px;
        line-height: 26px;
        font-family: 'Roboto Medium';
        color: $black;
        cursor: pointer;
        transition-property: color, background-color;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            background-color: $blue;
            color: $white;
        }
    }

    @media screen and (min-width: 768px) {
        width: fit-content;
        flex-flow: row;
        gap: 8px;
        margin: 30px auto;
    }

}
</style>