<template>
    <section class="work">
        <my-container class="work__container">
            <h2 class="work__heading">Чим ми займаємося</h2>
            <WorkList :list="workList" />
        </my-container>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import MyContainer from '@/components/UI/MyContainer'
import WorkList from '@/components/elements/WorkList'

const workList = ref([
    {
        key: 0,
        title: "Десктопні додатки",
        image: require("@/assets/images/desktop/work1.png")
    },
    {
        key: 1,
        title: "Мобільні додатки",
        image: require("@/assets/images/desktop/work2.png")
    },
    {
        key: 2,
        title: "Дизайнерські рішення",
        image: require("@/assets/images/desktop/work3.png")
    }
])
</script>

<style lang="scss" scoped>
.work {
    display: none;
    padding: 0 0 94px;

    &__heading {
        font-size: 36px;
        text-align: center;
        margin-bottom: 50px;
    }

    @media screen and (min-width: 1200px) {
        display: block;
    }
}
</style>