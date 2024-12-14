<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <router-link class="block" to="/">
            <img src="@/assets/Jnina.png" alt="Logo" class="logo" />
          </router-link>
        </div>

        <div class="md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <router-link
                  to="/"
                  class="items text-gray-500 hover:text-green transition-all"
                  >Home</router-link
                >
              </li>

              <li>
                <router-link
                  to="/products"
                  class="items text-gray-500 hover:text-green transition-all"
                  >Product</router-link
                >
              </li>

              <li>
                <router-link
                  to="/team"
                  class="items text-gray-500 hover:text-green transition-all"
                  >Team</router-link
                >
              </li>

              <li>
                <router-link
                  to="/contact"
                  class="items text-gray-500 hover:text-green transition-all"
                  >Contact</router-link
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="block md:hidden">
            <button
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <!--cart-->
        <div class="relative">
          <button class="px-3 rounded-md">
            🛒
            <!-- Counter -->
            <span
              v-if="cartCount > 0"
              class="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartCount }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <router-view @add-to-cart="incrementCart" />
  <footer class="bg-gray-100">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex justify-center">
        <img class="logo" src="@/assets/Jnina.png" alt="" />
      </div>
      <p
        class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500"
      >
        CHROLOPHYL your partner for a greener lifestyle! Explore our unique
        collection of plants suitable for all spaces and all levels of care.
        <br />
        Find the perfect plant to create a natural and soothing atmosphere at
        home.
      </p>

      <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
            About
          </a>
        </li>

        <li>
          <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
            Products
          </a>
        </li>

        <li>
          <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
            Services
          </a>
        </li>
      </ul>

      <ul class="mt-12 flex justify-center gap-6 md:gap-8">
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:text-gray-700/75"
          >
            <span class="sr-only">Facebook</span>
            <svg
              class="size-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:text-gray-700/75"
          >
            <span class="sr-only">Instagram</span>
            <svg
              class="size-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:text-gray-700/75"
          >
            <span class="sr-only">GitHub</span>
            <svg
              class="size-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
      <br />
      <hr />
      <div class="mt-16 border-t border-gray-100 pt-8">
        <p class="text-center text-xs/relaxed text-gray-500">
          © Chlorophyl 2024. All rights reserved.

          <br />

          Created with
          <a
            href="https://vuejs.org/"
            class="text-gray-700 underline transition hover:text-gray-700/75"
            >Vue Js</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<style>
* {
  font-family: "Poppins", sans-serif;
}

.logo {
  height: 50px;
}

.green {
  color: #10b982;
}

.bg {
  background-color: rgb(255, 255, 255);
}

.bg-btn {
  background-color: #10b982;
}

.bg-btn:hover {
  background-color: #047857;
}

.items {
  font-size: medium;
  margin-right: 20px;
}

.items:hover {
  font-size: large;
  border-bottom: #10b982 1px solid;
}
</style>
<script>
export default {
  data() {
    return {
      cartCount: 0,
    };
  },
  methods: {
    incrementCart() {
      this.cartCount++;
    },
  },
};
</script>
