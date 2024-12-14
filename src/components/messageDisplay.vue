<template>
    <div class="bg-gray-100 mt-8 p-6 rounded-lg shadow-md w-full max-w-3xl">
      <h2 class="text-2xl font-bold text-green-600">Message from {{ name }}</h2>
      <p class="mt-4 text-gray-700">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "messageDisplay",
    props: {
      name: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  