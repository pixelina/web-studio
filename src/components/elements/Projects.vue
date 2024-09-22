<template>
    <section class="projects">
        <MyContainer class="projects__container">
            <FiltersList :list="filtersList"></FiltersList>
            <ProjectsList :list="portfolioList"></ProjectsList>
        </MyContainer>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import MyContainer from '@/components/UI/MyContainer'
import FiltersList from '@/components/elements/FiltersList'
import ProjectsList from '@/components/elements/ProjectsList'

const filtersList = ref([
    {
        key: 0,
        name: "Усі"
    },
    {
        key: 1,
        name: "Веб-сайти"
    },
    {
        key: 2,
        name: "Додатки"
    },
    {
        key: 3,
        name: "Дизайн"
    },
    {
        key: 4,
        name: "Маркетинг"
    }
])

const portfolioList = ref([
    {
        key: 0,
        title: "Технокряк",
        postTitle: "Веб-сайт",
        description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        image: {
            mobile: require("@/assets/images/mobile/project1.png"),
            tablet: require("@/assets/images/tablet/project1.png"),
            desktop: require("@/assets/images/desktop/project1.png")
        }
    },
    {
        key: 1,
        title: "Постер New Orlean vs Golden Star",
        postTitle: "Дизайн",
        description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        image: {
            mobile: require("@/assets/images/mobile/project2.png"),
            tablet: require("@/assets/images/tablet/project2.png"),
            desktop: require("@/assets/images/desktop/project2.png")
        }
    },
    {
        key: 2,
        title: "Ресторан Seafood",
        postTitle: "Додаток",
        description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        image: {
            mobile: require("@/assets/images/mobile/project3.png"),
            tablet: require("@/assets/images/tablet/project3.png"),
            desktop: require("@/assets/images/desktop/project3.png")
        }
    },
    {
        key: 3,
        title: "Проєкт Prime",
        postTitle: "Маркетинг",
        description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        image: {
            mobile: require("@/assets/images/mobile/project4.png"),
            tablet: require("@/assets/images/tablet/project4.png"),
            desktop: require("@/assets/images/desktop/project4.png")
        }
    },
    {
        key: 4,
        title: "Проєкт Boxes",
        postTitle: "Додаток",
        description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        image: {
            mobile: require("@/assets/images/mobile/project5.png"),
            tablet: require("@/assets/images/tablet/project5.png"),
            desktop: require("@/assets/images/desktop/project5.png")
        }
    },
    {
        key: 5,
        title: "Inspiration has no Borders",
        postTitle: "Веб-сайт",
        description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        image: {
            mobile: require("@/assets/images/mobile/project6.png"),
            tablet: require("@/assets/images/tablet/project6.png"),
            desktop: require("@/assets/images/desktop/project6.png")
        }
    },
    {
        key: 6,
        title: "Видання Limited Edition",
        postTitle: "Дизайн",
        description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        image: {
            mobile: require("@/assets/images/mobile/project7.png"),
            tablet: require("@/assets/images/tablet/project7.png"),
            desktop: require("@/assets/images/desktop/project7.png")
        }
    },
    {
        key: 7,
        title: "Проєкт LAB",
        postTitle: "Маркетинг",
        description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        image: {
            mobile: require("@/assets/images/mobile/project8.png"),
            tablet: require("@/assets/images/tablet/project8.png"),
            desktop: require("@/assets/images/desktop/project8.png")
        }
    },
    {
        key: 8,
        title: "Growing Business",
        postTitle: "Додаток",
        description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        image: {
            mobile: require("@/assets/images/mobile/project9.png"),
            tablet: require("@/assets/images/tablet/project9.png"),
            desktop: require("@/assets/images/desktop/project9.png")
        }
    },
])
</script>

<style lang="scss" scoped>
.projects {
    padding: 60px 0;
}
</style>