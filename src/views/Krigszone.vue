<script setup lang="ts">
import Warriors from "@/components/Konsol.vue";
import {state} from "@/socket";
import Warrior from "@/components/Warrior.vue";
import {reactive} from "vue";
import p1 from '../md/p1.md'
const krigere = reactive(state.warriors);

</script>
<template>
  <main >
    <title>Den definitive guide til websockets</title>
    <p1 class="page"/>
    <p1 class="page"/>
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
  padding: 0;
  color: #222222;
}

.page {
  padding: 100px;
  margin: 0 auto;
  width: 800px;
  height: 100vh;
}

h1 {
  text-align: center;
}
</style>
