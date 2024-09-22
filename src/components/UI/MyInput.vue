<template>
    <div class="myInput__div">
        <input :class="isValid ? 'myInput' : 'myInput myInput--wrong'" v-model="inputValue" @input="change" />
        <p class="myInput__text" v-if="!isValid && inputValue !== ''">{{ message }}</p>
        <p class="myInput__text" v-if="!isValid && inputValue == ''">Це поле є обов'язковим для заповнення</p>
    </div>
</template>

<script setup>
const emit = defineEmits(['input']);
const inputValue = defineModel('value');

const props = defineProps({
    isValid: {
        default: true
    },
    message: String
})

const change = (event) => {
    emit('input', event.target.value);
}
</script>

<style lang="scss" scoped>
.myInput {
    width: 100%;
    height: 40px;
    border: 1px solid $icon-grey;
    border-radius: 5px;
    padding: 0 15px 0 40px;
    outline: none;
    position: relative;

    &--wrong {
        border: none;
        outline: 1px solid rgb(163, 18, 18);
    }

    &__div {
        display: flex;
        flex-flow: column;
    }

    &__text {
        color: rgb(163, 18, 18);
        font-size: 13px;
        margin-top: 10px;
    }
}
</style>