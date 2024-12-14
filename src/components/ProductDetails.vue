<template>
    <section class="bg-white py-12" v-if="product">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Section image -->
                <div class="flex flex-col items-center">
                    <!-- Image principale avec transition -->
                    <div class="relative w-96 h-96">
                        <img
                            :key="product.indice"
                            :src="productImage"
                            alt="Product Image"
                            class="w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-500 ease-in-out opacity-100"
                        />
                    </div>

                    <!-- Miniatures -->
                    <div class="flex mt-6 space-x-4">
                        <img
                            v-for="(image, index) in product.images"
                            :key="index"
                            :src="require(`@/assets/images/${image}`)"
                            alt="Miniature"
                            class="w-20 h-20 object-contain border border-gray-300 rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300"
                            @mouseover="changeImage(index)"
                        />
                    </div>
                </div>

                <!-- Section détails du produit -->
                <div class="flex flex-col justify-center">
                    <h1 class="text-3xl font-bold text-gray-900">{{ product.nom }}</h1>
                    <p class="mt-4 text-lg text-gray-700">
                        {{ product.description }}
                    </p>
                    <p class="mt-6 text-2xl font-semibold text-green-600">{{ product.prix }} TND</p>

                    <div class="my-4">
                        <p v-if="product.quantité > 10" class=" text-green">In Stock</p>
                        <p v-else-if="product.quantité > 0 && product.quantité <= 10" class="text-yellow-500">
                            Almost out of stock
                        </p>
                        <p v-else class="text-red-500">Out of stock</p>
                    </div>
                    <!-- Boutons -->
                    <div class="mt-6 flex items-center gap-4">
                        <RouterLink :to="{ name: 'Panier', params: { id: product.id } }" >
                            <button
                                class="rounded-md bg-white px-6 py-3 text-black text-sm font-medium hover:bg-green-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" :disabled="!enStock"
                                >Buy now
                            </button>
                        </RouterLink>
                        
                        <button
                            class="rounded-md bg-gray-200 px-6 py-3 text-gray-700 text-sm font-medium hover:bg-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" :disabled="!enStock"
                            @click="addToCart()"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 flex items-center border-t border-gray-200 pt-4">
    <div class=" w-2/4 flex justify-center">
      <img 
        src="@/assets/images/farmer.jpg" 
        alt="Image de plante" 
        class=" w-80 h-60 object-contain rounded-m"
      />
    </div>

    <div class="w-3/4 px-4">
        <h2 class="text-2xl font-bold text-green">Astuce</h2>
      <p class="text-m text-black">
        {{ product.astuce }}
      </p>
    </div>
  </div>

    </section>
    <div v-else class="text-center py-12">
        <p class="text-lg text-gray-700">Chargement...</p>
    </div>
</template>

<script>
import ProduitService from "@/services/ProduitService.js";

export default {
    props: ["id"],
    data() {
        return {
            product: null,
            panier: [],
        };
    },
    computed: {
        productImage() {
            if (this.product) {
                return require(`@/assets/images/${this.product.images[this.product.indice]}`) || '';
            }
            return "";
        },
        enStock() {
            if (!this.product || this.product.quantité <= 0) {
                return false;
            }
            return true;
        }
    },
    methods: {
        addToCart(){
            this.$emit("add-to-cart");
        },
        changeImage(indice) {
            if (this.product) {
                this.product.indice = indice;
            }
        },
        
    },
    created() {
        ProduitService.getProduit(this.id)
            .then((response) => {
                this.product = response.data;
                this.product.indice = 0;
            })
            .catch((error) => {
                console.log("There was an error:", error.response);
            });
    },
};
</script>

<style>
</style>
