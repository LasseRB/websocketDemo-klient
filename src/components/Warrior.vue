<script setup lang="ts">
import {Kriger} from "../lib";
import cat from "@/assets/cat.png"
import mouse from "@/assets/mouse.png"
import vue from "@/assets/vue.svg"
import {computed, onMounted, ref} from "vue";
import { emitMouseMove } from "@/socket";

const props = defineProps({
  warrior: Kriger,
  isPlayer: Boolean
})

function avatar() {
  if (props.warrior) {
    switch (props.warrior.type) {
      case 'vue':
        return vue;
      case 'kat':
        return cat;
      case 'mus':
        return mouse;
    }
  }
}

let mouseRef = ref({x: 0, y: 0});
let lastScroll = 0;
onMounted(() => {
  window.addEventListener("mousemove", (mouse) => {
    mouseRef.value = {x: mouse.clientX, y: mouse.clientY}
    emitMouseMove(mouseRef.value)
  });


})

const position = computed(() => {
  if (props.isPlayer) {
    return `left:${mouseRef.value.x}px; top: ${mouseRef.value.y}px;`
  } else {
    return `left:${props.warrior?.position.x}px; top: ${props.warrior?.position.y}px;`
  }
});

</script>

<template>
  <div class="kriger" :style="position" ref="mouse">
    <img :src="avatar()" class="avatar"/>
    <div class="navn">{{ warrior.name }}</div>
  </div>
</template>

<style scoped>
.kriger {
  pointer-events: none;
  position: fixed;
  filter: drop-shadow(18px 12px 27px rgba(0, 0, 0, 0.23));
}

.avatar {
  width: 50px;
  height: auto;
}
.navn {
  text-align: center;
}

</style>
