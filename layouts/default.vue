<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const isSelected = ref(false)
const model = ref(null)
onClickOutside(model, () => (isSelected.value = false))
</script>
<template>
   <NuxtLoadingIndicator color="#08fdd8"  />
  <div>
    <div ref="progress" id="progress" class="progress">
        <span id="progress-value">
          <Icon name="ion:arrow-up-outline" color="fff" size="25" />
        </span>
      </div>
    <nav class="navbar navbar-dark " aria-label="First navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"> Waleed Shamaly</a>
      <button class="navbar-toggler" @click="isSelected = !isSelected" >
        <span class="navbar-toggler-icon"></span>
      </button>
      <transition name="customCard" >
      <div class="collapse navbar-collapse show" v-if="isSelected" id="navbarsExample01" >
        <div class="www" ref="model">
          <img src="../assets/waleed-shamaly-logo.png" alt="">
          <hr>
        <ul class="navbar-nav me-auto mb-2">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contact">Contact Me</nuxt-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
        <div class="social-media">
          <a href="https://www.facebook.com/waleedshamaly963/" target="_blank"><Icon name="ion:logo-facebook"/></a>
                <a href="https://www.instagram.com/waleed_shamaly/" target="_blank"><Icon name="ion:logo-instagram"/></a>
                <a href="https://wa.me/963957349566" target="_blank"><Icon name="ion:logo-whatsapp"/></a>
                <a href="https://www.linkedin.com/in/waleed-shamaly-397230194/" target="_blank"><Icon name="ion:logo-linkedin"/></a>
                <a href="https://github.com/WaleedShamaly" target="_blank"><Icon name="ion:logo-github"/></a>

              </div>
       
        </div>
      </div>
      </transition>
    </div>
  </nav>
  
   <div>
    <slot/>
   </div>
  </div>

</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.calcScrollValue);
  },
  methods: {
    calcScrollValue() {
      let scrollProgress = this.$refs.progress;
      let pos = window.pageYOffset;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
      scrollProgress.style.background = `conic-gradient(var(--primary-color)${scrollValue}%, #d7d7d721 ${scrollValue}%)`;
    },
  },
};
</script> 



<style scoped>
.customCard-enter-active {
  transition: all .25s ease;
}

.customCard-leave-active {
  transition: all .25s ease;
}

.customCard-enter-from,
.customCard-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.animate__fadeIn{
  --animate-duration: 0.5s;
}
#progress {
  -webkit-animation: fadeIn .8s;
  animation: fadeIn .8s;
  z-index: 3;
  position: fixed;
  bottom: 20px;
  right: 10px;
  height: 60px;
  width: 60px;
  display: none;
  place-items: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#progress-value {
  display: block;
  height: calc(100% - 15px);
  width: calc(100% - 15px);
  background: rgb(29, 29, 29);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 30px;

}
.navbar{
  --bs-bg-opacity: 0!important;
}
.navbar-toggler{
 background: #262626;
   position: fixed;
   z-index: 1000;
   right: 2rem;

}
.navbar-collapse {
  background: rgba(255, 255, 255, 0.5);
  /* background: url(../assets/overlay.png) repeat 0 0; */
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    text-align: center;
    place-items: center;
    display: grid;
    position: fixed;
    min-width: 100%;
   z-index: 1000;
}
.www{
  background: #262626;
    padding: 3rem;
    border-radius: 20px;
    width: 50%;
    box-shadow: 0 0 1rem var(--primary-color);
}
.www img{
width: 80px;
}
.www hr{
  margin: 1rem 7rem;
}

.social-media{
  margin-top: 2rem;
  margin-bottom: -4rem;
}

.social-media a{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: 2px solid #08fdd8;
  border-radius: 50%;
  font-size: 1.2rem;
  color: #08fdd8;
  margin: 1rem 0.5rem 3rem 0;
}


.router-link-exact-active{
  color: var(--primary-color) !important;
}
.router-link-active{
  color: var(--primary-color) !important;
}
.nav-link:hover{
  color: var(--primary-color) !important;
}
@media only screen and (max-width: 768px) {
  .www{
    width: 90% !important;
    padding: 3rem 2rem !important;
  }
  .social-media{
    margin-bottom: -3rem !important;
  }
}
</style>