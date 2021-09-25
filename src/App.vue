<script lang="ts" setup>
import { manuSteps } from './data/steps'
import { Step } from '@/models/step'
import { ref } from '@vue/reactivity'
import Column from './components/Column.vue'
import { computed } from 'vue'

const manu = computed(() => [...manuSteps].reverse())
const steps = ref<Step[]>(manu.value)

const stepLabel: Step = {
  name: 'Step',
  prerequisites: ['prerequisites'],
  outputs: ['outputs'],
  people: ['people'],
  redBins: ['red bins']
}
</script>

<template>
  <main>
    <Column :step="stepLabel" styled />

    <template v-for="(step, index) in steps" :key="step.name">
      <Column class="column" :step="step" />
      <div class="separator" v-if="index !== steps.length - 1"></div>
    </template>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.5rem;
}

main {
  display: flex;
  justify-content: space-around;
  flex: 1;
  height: 80vh;
}

.column {
  flex: 1;
}

h2 {
  font-size: 1.8rem;
}

.separator {
  width: 2px;
  background-color: #d7cece;
}
</style>
