<template>
    <div class="modal-bg">
        <div class="modal">
            <button class="modal__close" @click="closeModal">
                <svg width="11" height="11">
                    <use href="@/assets/images/symbol-defs.svg#icon-close"></use>
                </svg>
            </button>
            <h2 class="modal__heading">Залиште свої дані, ми вам передзвонимо</h2>
            <form class="modal__form">
                <div class="modal__form-item">
                    <div class="modal__input-label">Ім'я</div>
                    <label for="person" class="modal__input-container">
                        <MyInput type="text" class="modal__input" id="person" v-model:value="userInfo.name"
                            @input="checkName" :isValid="tests.name"
                            :message="`Ім'я повинно складатись з більше ніж з однієї літери`" />
                        <svg class="modal__svg" width="12" height="12">
                            <use href="@/assets/images/symbol-defs.svg#icon-person"></use>
                        </svg>
                    </label>
                </div>
                <div class="modal__form-item">
                    <div class="modal__input-label">Телефон</div>
                    <label for="phone" class="modal__input-container">
                        <MyInput type="text" class="modal__input" id="phone" v-model:value="userInfo.phone" />
                        <svg class="modal__svg" width="13" height="13">
                            <use href="@/assets/images/symbol-defs.svg#icon-oldphone"></use>
                        </svg>
                    </label>
                </div>
                <div class="modal__form-item">
                    <div class="modal__input-label">Пошта</div>
                    <label for="email" class="modal__input-container">
                        <MyInput type="text" class="modal__input" id="email" v-model:value="userInfo.email"
                            @input="checkEmail" :isValid="tests.email"
                            :message="`Пошта повинна закінчуватись на @gmail.com, @ukr.net і т.д.`" />
                        <svg class="modal__svg" width="15" height="12">
                            <use href="@/assets/images/symbol-defs.svg#icon-emailtwo"></use>
                        </svg>
                    </label>
                </div>
                <div class="modal__form-item">
                    <div class="modal__input-label">Коментар</div>
                    <MyComment class="modal__textarea" placeholder="Введіть текст" v-model:value="userInfo.comment">
                    </MyComment>
                </div>
                <div class="modal__form-item--checkbox">
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox" class="modal__text">
                        Погоджуюся з розсилкою та приймаю 
                        <a class="modal__link">Умови договору</a>
                    </label>
                </div>
                <button type="button" class="modal__button button" @click="sendData">Відправити</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import MyInput from '@/components/UI/MyInput'
import MyComment from '@/components/UI/MyComment'
import { ref } from 'vue'
const emit = defineEmits(['after-click-close'])

const userInfo = ref({
    name: '',
    phone: '',
    email: '',
    comment: ''
})

const regExps = ref({
    name: /^[A-Za-z]{2,20}$/,
    email: /^[A-Za-z]\w+[@][A-Za-z]{2,}[.][A-Za-z]{2,}$/
})

const tests = ref({
    name: true,
    email: true
})

const closeModal = () => {
    emit('after-click-close', false);
}

const sendData = () => {
    tests.value.name = regExps.value.name.test(userInfo.value.name);
    tests.value.email = regExps.value.email.test(userInfo.value.email);
    if (tests.value.name && tests.value.email && (userInfo.value.name !== '' && userInfo.value.email !== '')) {
        emit('after-click-close', false);
        console.log('Ваше повідомлення відправлене');
        console.log('Ваше імя', userInfo.value.name);
        console.log('Ваш телефон', userInfo.value.phone);
        console.log('Ваша пошта', userInfo.value.email);
        console.log('Ваш коментар', userInfo.value.comment);
        userInfo.value.name = '';
        userInfo.value.phone = '';
        userInfo.value.email = '';
        userInfo.value.comment = '';
    }
}

const checkName = (valueFromInput) => {
    tests.value.name = regExps.value.name.test(valueFromInput);
}

const checkEmail = (valueFromInput) => {
    tests.value.email = regExps.value.email.test(valueFromInput);
}
</script>

<style lang="scss" scoped>
.modal {
    position: relative;
    width: 100%;
    border-radius: 5px;
    background-color: $white;
    padding: 40px;
    max-width: 450px;
    margin: 90px auto;

    &__form {
        display: flex;
        flex-flow: column;
        gap: 20px;
    }

    &__form-item {

        &--checkbox {
            margin-top: 10px;
            display: flex;
            flex-flow: row;
            align-items: center;
            gap: 8px;
        }
    }

    &__text {
        font-size: 12px;
        font-family: 'Roboto Regular';
        color: $dark-grey;
    }

    &__link {
        display: inline-block;
        color: $blue;
        text-decoration: underline;
    }

    &__close {
        fill: $black;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        border: 1px solid $icon-grey;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 8px;
        right: 8px;
    }

    &__heading {
        font-size: 20px;
        font-family: 'Roboto Bold';
        line-height: 30px;
        color: $black;
        text-align: center;
        margin-bottom: 12px;
    }

    &__input-container {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    &__input-label {
        font-size: 12px;
        font-family: 'Roboto Regular';
        color: $dark-grey;
        margin-bottom: 5px;
    }

    &__input {
        width: 100%;
    }

    &__svg {
        position: absolute;
        left: 14px;
        top: 14px;
    }

    &__input:hover {
        border-color: $blue;
    }

    &__input:focus {
        border-color: $blue;
    }

    &__input:focus+&__svg {
        fill: $blue;
    }

    &__button {
        margin: auto;
        margin-top: 20px;
        cursor: pointer;
    }
}

.modal-bg {
    display: block;
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 15px;
    overflow: scroll;
    z-index: 1000;
}
</style>