<template>
    <div class="mx-10 my-20">
      <h1 class="text-5xl text-center my-8 text-green">{{ msg }}</h1>
      <div class="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8">
        <CardsProduits :produits="filteredProduits"/>
      </div>
    </div>
  </template>
  
  <script>
  import CardsProduits from './CardsProduits.vue';
  import ProduitService from '@/services/ProduitService.js';  
  export default {
    name: "GridProduits",
    components: {
      CardsProduits,
    },
    props: {
      msg: {
        type: String,
        default: 'Our Products'
      },
      nombreProduits:{
        type: Number,
      },
      categories:{
        type:String,
        default: 'All'
      },
        
    },
    data() {
      return {
        Produits: [],
      };
    },
    created(){
      try {
        ProduitService.getProduits()
        .then(response => {
          this.Produits = response.data;
        });
      } catch (error) {
        console.log('error:', error);
      }
    },
    computed: {
      filteredProduits() {
        if(this.nombreProduits == 3){
          return this.Produits.slice(0,3);
        }
        else{
          return this.Produits;
        }
      }
    }
  };
  </script>
  