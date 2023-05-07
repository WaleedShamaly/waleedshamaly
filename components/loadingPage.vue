<!-- components/LoadingPage.vue -->
<template>
    <div v-if="isLoading" class="loading-page">
      <!-- إضافة رمز التحميل أو التصميم المفضل لديك هنا -->
      <div class="spinner">
  <span class="spinner-part-0"></span>
  <span class="spinner-part-1"></span>
  <span class="spinner-part-2"></span>
  <span class="spinner-part-3"></span>
  <span class="spinner-part-0"></span>
  <span class="spinner-part-1"></span>
  <span class="spinner-part-2"></span>
  <span class="spinner-part-3"></span>
</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true,
      };
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, ); // إخفاء صفحة التحميل بعد 2 ثانية
    },
  };
  </script>
  
  <style scoped>
  /* إضافة الأنماط الخاصة بصفحة التحميل هنا */
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--backgroung-color);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .spinner {
 --accent: #08fdd8;
 --max-scale: 4;
 --speed: 0.2;
 display: flex;
 gap: 0.3em;
 transform: skew(15deg, 10deg);
}

.spinner span {
 display: block;
 background-color: var(--accent);
 box-shadow: 1px 1px 5px 0.2px var(--accent);
 width: 0.7px;
 height: 0.6em;
}

.spinner .spinner-part-0 {
 animation: load432 calc(1s/var(--speed)) linear infinite;
}

.spinner .spinner-part-1 {
 animation: load432 calc(0.16s/var(--speed)) linear infinite;
}

.spinner .spinner-part-2 {
 animation: load432 calc(0.4s/var(--speed)) linear infinite;
}

.spinner .spinner-part-3 {
 animation: load432 calc(0.5s/var(--speed)) linear infinite;
}

@keyframes load432 {
 50% {
  transform: scaleY(var(--max-scale));
 }
}
  </style>