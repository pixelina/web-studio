<template>
    <ul class="list">
        <li class="list__item" v-for="card in list">
            <img class="list__item-img" :src="card.image" width="370" height="294">
            <p class="list__item-description">{{ card.title }}</p>
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
        flex-flow: row;
        gap: 30px;

    &__item {
        position: relative;
    }

    &__item-description {
        width: 370px;
        height: 70px;
        position: absolute;
        background: rgba(47, 48, 58, 0.8);
        bottom: 0;
        padding: 27px;
        color: $white;
        font-size: 14px;
        font-family: 'Roboto Bold';
        text-transform: uppercase;
        text-align: center;
    }
}
</style>