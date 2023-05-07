<!-- <script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const isSelected = ref(false)
const model = ref(null)
onClickOutside(model, () => (isSelected.value = false))

</script> -->
<template>
  <div>

 <SectionPortfolio></SectionPortfolio>
  </div>
</template>


<style>
  .section-portfolio{
    padding-bottom: 3rem;
    padding-top: 2rem !important;
    background-color: var(--backgroung-color) !important;
    color: #fff !important;
  }
</style>



