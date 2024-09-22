<template>
  <section class="advantages">
    <my-container class="advantages__container">
      <advantages-list :list="advantagesCards" />
    </my-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import MyContainer from '@/components/UI/MyContainer'
import AdvantagesList from '@/components/elements/AdvantagesList'

const advantagesCards = ref([
  {
    key: 0,
    title: "Увага до деталей",
    description:
      "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.",
    iconName: "#icon-antenna",
  },
  {
    key: 1,
    title: "Пунктуальність",
    description:
      "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.",
    iconName: "#icon-clock",
  },
  {
    key: 2,
    title: "Планування",
    description:
      "Так само консультація з широким активом значною мірою зумовлює.",
    iconName: "#icon-diagram",
  },
  {
    key: 3,
    title: "Сучасні технології",
    description:
      "Значимість цих проблем настільки очевидна, що реалізація планових завдань.",
    iconName: "#icon-astronaut",
  },
])
</script>

<style lang="scss" scoped>
.advantages {
  background-color: $white;
  padding: 60px 0;

  @media screen and (min-width: 1200px) {
    padding: 94px 0;
  }
}
</style>