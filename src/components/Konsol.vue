<script setup>
import {state} from "@/socket";
import {reactive} from "vue";
import Warrior from "@/components/Warrior.vue";
import {Kriger} from "../../../../lib";


const krigere = reactive(state.warriors);

</script>

<template>
  <div class="konsol">
  <h1>Aktive krigere</h1>
  </div>
</template>


<style>

</style>
