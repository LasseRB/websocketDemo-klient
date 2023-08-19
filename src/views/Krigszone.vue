<script setup lang="ts">
import Warriors from "@/components/Konsol.vue";
import {state} from "@/socket";
import Warrior from "@/components/Warrior.vue";
import {reactive} from "vue";

const krigere = reactive(state.warriors);
</script>
<template>
  <main>
    <h1>Hej</h1>
    <Warrior :warrior="state.kriger" :isPlayer="true"/>
    <div v-for="kriger of krigere.values()">
      <Warrior v-if="kriger.id !== state.kriger.id" :warrior="kriger" />
    </div>
  </main>
</template>
<style>
main {
  cursor: none;
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
