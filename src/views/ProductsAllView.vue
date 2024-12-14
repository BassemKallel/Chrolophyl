<template>
  <div>
    <img :src="require('@/assets/images/pp1.png')" class=" w-screen h-96">
    <ListeProducts :categories="All"/>
  </div>
</template>
<script>

  import ListeProducts from "@/components/ListeProducts.vue";
  export default {
    name: "ProductsAllView",
    components: {
      ListeProducts,
    },
    data() {
      return {}
    }
  };

</script>
