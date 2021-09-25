<script lang="ts" setup>
import { Step } from '@/models/step'

defineProps<{
  step: Step
  styled?: boolean
}>()
</script>

<template>
  <div class="step" :class="{ title: styled }">
    <h2>
      {{ step.name }}
    </h2>
    <section>
      <div v-for="prerequisite in step.prerequisites" :key="prerequisite">
        <span v-if="!styled">-</span> {{ prerequisite }}
      </div>
    </section>
    <section>
      <div v-for="output in step.outputs" :key="output">
        <span v-if="!styled">-</span> {{ output }}
      </div>
    </section>
    <section>
      <div v-for="people in step.people" :key="people">
        <span v-if="!styled">-</span> {{ people }}
      </div>
    </section>
    <section class="red-bin">
      <div v-for="redBin in step.redBins" :key="redBin">
        <span class="red-bin"><span v-if="!styled">-</span> {{ redBin }} </span>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.step {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.title {
    font-style: italic;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    border-top: 2px solid #d7cece;

    &.red-bin {
      color: #b33939;
      span.red-bin {
        background-color: rgb(248, 216, 216);
        padding: 0 10px;
      }
    }
  }
}
</style>
