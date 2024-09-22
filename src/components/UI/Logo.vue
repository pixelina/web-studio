<template>
    <router-link to="/"  :class="theme === 'dark' ? 'logo logo--dark' : 'logo'">
        <span class="logo__blue">Web</span><span>Studio</span>
    </router-link>
</template>

<script setup>
const props = defineProps({
    theme: {
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.logo {
    color: $black;
    font-family: 'Raleway';
    font-size: 24px;
    font-weight: 700;

    &--dark {
        color: $white;
    }

    &__blue {
        color: $blue;
        font-family: 'Raleway';
        font-size: 24px;
        font-weight: 700;
    }
}
</style>