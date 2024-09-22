<template>
    <section class="team">
        <my-container class="team__container">
            <h2 class="team__heading">Наша команда</h2>
            <TeamList :list="teamList" />
        </my-container>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import MyContainer from '@/components/UI/MyContainer'
import TeamList from '@/components/elements/TeamList'

const teamList = ref([
    {
        key: 0,
        name: "Ігор Дем'яненко",
        position: "Product Designer",
        contacts: [
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
            },
        ],
        image: {
            mobile: require("@/assets/images/mobile/team1.png"),
            tablet: require("@/assets/images/tablet/team1.png"),
            desktop: require("@/assets/images/desktop/team1.png")
        },
    },
    {
        key: 1,
        name: "Ольга Репіна",
        position: "Frontend Developer",
        contacts: [
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
            },
        ],
        image: {
            mobile: require("@/assets/images/mobile/team2.png"),
            tablet: require("@/assets/images/tablet/team2.png"),
            desktop: require("@/assets/images/desktop/team2.png")
        },
    },
    {
        key: 2,
        name: "Микола Тарасенко",
        position: "Marketing",
        contacts: [
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
            },
        ],
        image: {
            mobile: require("@/assets/images/mobile/team3.png"),
            tablet: require("@/assets/images/tablet/team3.png"),
            desktop: require("@/assets/images/desktop/team3.png")
        },
    },
    {
        key: 3,
        name: "Михайло Єрмаковський",
        position: "UI Designer",
        contacts: [
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
            },
        ],
        image: {
            mobile: require("@/assets/images/mobile/team4.png"),
            tablet: require("@/assets/images/tablet/team4.png"),
            desktop: require("@/assets/images/desktop/team4.png")
        },
    },
])
</script>

<style lang="scss" scoped>
.team {
    background-color: $light-grey;
    padding: 60px 0;

    &__heading {
        font-size: 28px;
        text-align: center;
        margin-bottom: 30px;
    }

    @media screen and (min-width: 1200px) {
        padding: 94px 0;

        &__heading {
            font-size: 36px;
            margin-bottom: 50px;
        }
    }
}
</style>