<template>
    <section class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Order Confirmed</h1>
  
        <div class="text-center text-gray-600 mb-6">
          <p class="text-lg">Thank you for your purchase! Your order has been confirmed and will be processed shortly.</p>
        </div>
  
        <div class="flex justify-center gap-4">
          <router-link to="/" class="px-6 py-3 bg-green text-white text-sm font-medium rounded-lg hover:bg-dark-green">
            Back to Home
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ConfirmationView',
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles personnalisés ici si nécessaire */
  </style>
  