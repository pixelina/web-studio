<template>
    <textarea class="myComment" :value="inputValue" @input="changeInputValue"></textarea>
</template>

<script setup>
const inputValue = defineModel('value');

const changeInputValue = (event) => {
    inputValue.value = event.target.value;
}
</script>

<style lang="scss" scoped>
.myComment {
    width: 100%;
    height: 138px;
    border: 1px solid $icon-grey;
    padding: 12px 16px;
}
</style>