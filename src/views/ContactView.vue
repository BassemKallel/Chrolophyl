<template>
  <div class="bg-gray-50 min-h-screen flex flex-col items-center py-12">
    <div class="max-w-4xl text-center mb-8">
      <h1 class="text-4xl font-bold text-green-600">Contact Us</h1>
      <p class="mt-4 text-gray-700 text-lg">
        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
      </p>
    </div>

    <div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
      <form @submit.prevent="handleSubmit">
        <!-- Name Field -->
        <div class="mb-4">
          <label for="name" class="block text-lg font-medium text-gray-700">Name</label>
          <input type="text" id="name" v-model="form.name" required
            class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="Your Name" />
        </div>

        <!-- Email Field -->
        <div class="mb-4">
          <label for="email" class="block text-lg font-medium text-gray-700">Email</label>
          <input type="email" id="email" v-model="form.email" required
            class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="Your Email" />
        </div>

        <!-- Message Field -->
        <div class="mb-4">
          <label for="message" class="block text-lg font-medium text-gray-700">Message</label>
          <textarea id="message" v-model="form.message" required
            class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="Your Message" rows="5"></textarea>
        </div>

        <!-- Submit Button -->
        <div class="mb-4 text-center bg-green ">
          <button type="submit" class="w-full bg-green-600 p-3 rounded-lg hover:bg-green-700 transition-colors">
            Send Message
          </button>
        </div>
      </form>
    </div>

       <!-- Display the Message Below the Form -->
     <messageDisplay v-if="submittedMessage" :name="form.name" :message="submittedMessage" />
</div>
</template>

<script>
// Import the MessageDisplay component
import messageDisplay from "../components/messageDisplay.vue";

export default {
  name: "ContactView",
  components: {
    messageDisplay,
  },
  data() {
    return {
      form: {
        name: "",
        message: "",
      },
      submittedMessage: "", // Stores the submitted message to pass to the component
    };
  },
  methods: {
    handleSubmit() {
      // Store the submitted message to pass to the MessageDisplay component
      this.submittedMessage = this.form.message;

      // Clear the message field (optional)
      this.form.message = "";

      // Optionally display a success message
      alert("Your message has been sent!");
    },
  },
};
</script>