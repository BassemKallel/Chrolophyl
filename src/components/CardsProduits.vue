<template>
  <div 
    class="flex flex-col items-center bg-white border border-gray-200 rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
    v-for="produit in produits" 
    :key="produit.id"
  >
    <RouterLink :to="{ name: 'ProductDetail', params: { id: produit.id } }">
      <img 
        class="w-full h-64 object-cover rounded-md mb-4" 
        :src="require(`@/assets/images/${produit.images[produit.indice]}`)"
        alt="Produit image"
      />
    </RouterLink>
    <div class="text-center">
      <h3 class="text-gray-700 font-semibold text-sm mb-1">{{ produit.nom }}</h3>
      <p class="text-gray-500 text-xs truncate">{{ produit.description1 }}</p>
      <p class="text-gray-800 font-bold text-sm mt-2">{{ produit.prix }} TND</p>
    </div>
    <RouterLink 
      :to="{ name: 'ProductDetail', params: { id: produit.id } }"
      class="mt-4 text-green text-sm flex items-center space-x-1 hover:underline"
    >
      <span>Détails</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    produits: {
      type: Array,
      required: true,
    },
  },
};
</script>
