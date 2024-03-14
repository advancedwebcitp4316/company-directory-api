<script setup>
import axios from 'axios';
import { ref } from 'vue';

const instance = axios.create({
    baseURL: 'https://node-app-zupl.onrender.com/',
})

const empfirstName = ref('')
const emplastName = ref('')
const empuserName = ref('')
const emptitle = ref('')
const empquote = ref('')

const addEmployee = async () => {
    const { data } = await instance.post('api/employees/create', {
        userName: empuserName.value,
        firstName: empfirstName.value,
        lastName: emplastName.value,
        title: emptitle.value,
        quote: empquote.value
    })

    var inputs = document.querySelectorAll('input')
    inputs.forEach(singleInput => singleInput.value='')
}

</script>

<template>
    <form class="mx-auto mt-10 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg"
        @submit.prevent="addEmployee">
        <input v-model="empuserName" type="text" placeholder="userName"
            class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300" />
        <input v-model="empfirstName" type="text" placeholder="firstName"
            class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300" />
        <input v-model="emplastName" type="text" placeholder="lastName"
            class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300" />
        <input v-model="emptitle" type="text" placeholder="title"
            class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300" />
        <input v-model="empquote" type="text" placeholder="quote"
            class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300" />
        <button type="submit" class="bg-green-500 px-4 py-2">Submit</button>
    </form>
</template>