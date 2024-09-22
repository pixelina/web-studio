<template>
    <my-header>
    </my-header>

    <main>
      <RouterView></RouterView>
    </main>

    <footer>
      <MyFooter />
    </footer>
</template>

<script setup>
import MyHeader from '@/components/elements/MyHeader'
import MyFooter from '@/components/elements/MyFooter'
</script>

<style lang="scss">
@import '@/assets/scss/base/_modern-normalize';
@import '@/assets/scss/base/_default-settings';
</style>