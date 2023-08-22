<script setup lang="ts">
import {Kriger} from "../lib";
import {computed} from "vue";

const props = defineProps({
  warrior: Kriger
})

const position = computed(() => '`top: ${props.warrior?.position.y}px;`')
</script>

<template>
  <div class="krigernavn" :style="position">{{ warrior?.name || 'ehj'}}</div>
</template>
<style scoped>
.krigernavn {
  position: fixed;
}
</style>
