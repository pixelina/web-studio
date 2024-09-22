<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.button {
    width: 200px;
    height: 50px;
    background-color: $blue;
    color: $white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto Bold';
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
}
</style>