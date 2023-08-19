<template>
  <div>
    <h1>Velkommen kriger</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Your Name:</label>
      <input v-model="name" name="name"/>
      <label for="warrior">Mus, Kat eller Vue?</label>
      <select v-model="selectedWarrior" name="warrior">
        <option value="" disabled>Select a warrior</option>
        <option v-for="warrior in warriors" :key="warrior.id" :value="warrior.id">{{ warrior.name }}</option>
      </select>
      <button type="submit">Hop ind!</button>
      {{ errors }}
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import router from "@/router";
import { socket, state, emitWarrior } from "@/socket";

const name = ref('');
const selectedWarrior = ref('');
const warriors = [
  {id: 'mus', name: 'Musmesteren'},
  {id: 'kat', name: 'KatteDaym'},
  {id: 'vue', name: 'Vueify'}
];

const errors = ref({});

const submitForm = async () => {
  try {

    console.log('Form submitted with name:', name.value);
    console.log('Selected warrior:', selectedWarrior.value);
    if (name.value && selectedWarrior.value) {
      state.kriger.name = name.value
      state.kriger.type = selectedWarrior.value
      emitWarrior(state.kriger)
      // await router.push({ path: '/krigszone', query: { navn: name.value, kriger: selectedWarrior.value}})
      await router.push('/krigszone')

      name.value = '';
      selectedWarrior.value = '';
      errors.value = {};
    }
    // Reset the form after submission if needed
    errors.value = 'Du skal sguda vælge noget!'

  } catch (error) {
    console.error(error)
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
