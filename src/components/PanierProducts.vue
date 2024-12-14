<template>
    <section class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Checkout</h1>
        <div class="space-y-6">
            <div v-if="product" class="flex items-center gap-4 border-b border-gray-200 pb-4">
                <img
                    :src="productImage"
                    alt="Product Image"
                    class="w-24 h-24 object-cover rounded-lg"
                />
                <div class="flex-1">
                    <h2 class="text-lg font-medium text-gray-800">{{ product.name }}</h2>
                    <p class="text-sm text-gray-600">{{ product.description }}</p>
                </div>
                <span class="text-lg font-semibold text-gray-900">{{ product.prix }} TND</span>
            </div>
            <div v-else class="text-center text-gray-500">Loading product...</div>
        </div>
  
        <div v-if="product" class="mt-8 space-y-4 border-t border-gray-200 pt-6">
          <div class="flex justify-between items-center">
            <span class="text-gray-600">Quantité:</span>
            <div class="flex items-center gap-2">
                <button
                    @click="updateQuantity(-1)"
                    class="px-2 py-1 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
                    :disabled="quantity <= 1"
                >
                -
                </button>
                <input
                    v-model="quantity"
                    type="number"
                    min="1"
                    id="qte"
                    class="w-16 text-center border border-gray-300 rounded-lg p-2"
                />
                <button
                @click="updateQuantity(1)"
                    class="px-2 py-1 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
                >
                +
                </button>
                </div>
            </div>
        <div class="flex justify-between">
            <span class="text-gray-600">Prix:</span>
            <span class="font-medium text-gray-900">{{ product.prix * quantity }} TND</span>
        </div>
        <div class="flex justify-between">
            <span class="text-gray-600">Livraison:</span>
            <span class="font-medium text-gray-900">7 TND</span>
        </div>
        <div class="flex justify-between border-t border-gray-200 pt-4">
            <span class="font-semibold text-gray-900">Total:</span>
            <span class="font-semibold text-gray-900">{{ total }} TND</span>
        </div>
        </div>
 
            <div class="mt-8 flex justify-between items-center">
                <router-link to="/products" class="text-sm text-green hover:underline">
                    Back to Product
                </router-link>
                <router-link to="/Confirmation" @click="update()" class="px-6 py-3 bg-green text-white text-sm font-medium rounded-lg hover:bg-gray-700">
                    Confirm Order
                </router-link>
            </div>
            </div>
        </section>
</template>
  
<script>
    import ProduitService from "@/services/ProduitService.js";

    export default {
        props: ["id"],
        data() {
            return {
                product: null,
                quantity: 1,
            };
        },
        created() {
        ProduitService.getProduit(this.id)
            .then((response) => {
            console.log(response.data);
            this.product = response.data;
            })
            .catch((error) => {
            console.log("There was an error:", error.response);
        });
        },
        computed: {
            total() {
                return this.product.prix*this.quantity + 7;
            },
            productImage() {
                return require(`@/assets/images/${this.product.images[0]}`);
            },
            prix(){
                return this.product.prix*this.quantity;
            }

        },
        methods: {
            updateQuantity(value) {
            this.quantity += value;
        },
        update() {
            this.product.quantité -= this.quantity;
        }
    }
};
  </script>
  

  