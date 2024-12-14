<template>
  <!--
    Heads up! 👋
  
    This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  -->
  
  <section
    class="relative bg-hero-pattern bg-cover bg-center bg-no-repeat bg-local sm:bg-fixed"
  >
    <div
      class="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
          Let's CHOOSE your
  
          <strong class="block font-extrabold green"> FAVORITE PLANT. </strong>
        </h1>
  
        <p class="mt-4 max-w-lg text-white text-sm text-left  font-bold">
          CHLOROPHYL opens the doors to a trendy and modern plant world. Simple to set up and easy to adjust according to your desires, our resin pots bring a real plus to your interior or exterior decoration. You will find in this selection many flower pots available in different sizes and colors, as practical as they are decorative.
        </p>
  
        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            class="block w-full rounded bg-green px-12 py-3 text-sm font-medium text-white shadow hover:bg-dark-green focus:outline-none focus:ring active:bg-dark-green sm:w-auto"
          >
            Get Started
          </a>
  
          <a
            href="#"
            class="block w-full rounded bg-white px-12 py-3 text-sm font-medium green shadow hover:text-dark-green focus:outline-none focus:ring active:text-dark-green sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  <BestProducts :categories="All" ></BestProducts>

</template>

<style scoped>
.green {
  color: #10b981;
}
.dark-green {
  color: #047857;
}
</style>
<script>
import BestProducts from '@/components/BestProducts.vue'
export default {
  name: 'HomeView',
  components: {
    BestProducts,
  }
} 

</script>