<script setup lang="ts">
import {state} from "@/socket";
import Warrior from "@/components/Warrior.vue";
import {onMounted, reactive, ref} from "vue";
import p1 from '../md/p1.md'
import http from '../md/http.md'
import ajax from '../md/ajax.md'
import websockets from '../md/websockets.md'
import websockets_2 from '../md/websockets_2.md'

const krigere = reactive(state.warriors);

const page = ref(1);

function tilbage() {
  if (page.value >= 2) {
    page.value -= 1
  }
}

function fremad() {
  page.value += 1
}

onMounted(() => {
  addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      tilbage();
    } else if (event.key === 'ArrowRight') {
      fremad();
    }
  })
})
</script>
<template>
  <main>
    <div class="header">
      <div class="sidetal"> side {{ page }}</div>
    </div>
    <div class="footer">
      <div class="pil arrow-left icon" @click.prevent="tilbage"></div>
      <div class="pil arrow-right icon" @click.prevent="fremad"></div>
    </div>
    <p1 class="page" v-show="page === 1"/>
    <http class="page" v-show="page === 2"/>
    <ajax class="page" v-show="page === 3"/>
    <websockets class="page" v-show="page === 4"/>
    <websockets_2 class="page" v-show="page === 5"/>

    <Warrior :warrior="state.kriger" :isPlayer="true"/>
    <div v-for="kriger of krigere.values()">
      <Warrior v-if="kriger.id !== state.kriger.id" :warrior="kriger"/>
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
  overflow: hidden;
}

.page {
  padding: 10px;
  margin: auto;
  width: 80vw;
  height: 100vh;
  overflow: hidden;
}

.footer {
  position: absolute;
  bottom: 50px;
  width: 100vw;
}

.header {
  position: absolute;
  top: 10px;
  width: 100vw;
}

.arrow-right {
  position: absolute;
  right: 50px;
}

.arrow-left {
  position: absolute;
  left: 50px;
}

.sidetal {
  position: absolute;
  right: 30px;
}

.arrow-right.icon {
  color: #000;
  position: absolute;
  margin-left: 2px;
  margin-top: 10px;
  width: 16px;
  height: 1px;
  background-color: currentColor;
}

.arrow-right.icon:before {
  content: '';
  position: absolute;
  right: 1px;
  top: -5px;
  width: 10px;
  height: 10px;
  border-top: solid 1px currentColor;
  border-right: solid 1px currentColor;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.arrow-left.icon {
  color: #000;
  position: absolute;
  margin-left: 3px;
  margin-top: 10px;
  width: 16px;
  height: 1px;
  background-color: currentColor;
}

.arrow-left.icon:before {
  content: '';
  position: absolute;
  left: 1px;
  top: -5px;
  width: 10px;
  height: 10px;
  border-top: solid 1px currentColor;
  border-right: solid 1px currentColor;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>
