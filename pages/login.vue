<template>
  <div>
    <h1 class="text-center text-2xl font-semibold">Login</h1>
    <form @submit="onSubmit">
      <div>
        <label for="email" class="block font-medium text-sm text-gray-700">
          Email
        </label>
        <div class="flex flex-col items-start">
          <input
            id="email"
            type="text"
            name="email"
            required
            class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            autoComplete="username"
          />
        </div>
        <span class="text-red-700 text-xs" v-if="error">
          {{ error }}
        </span>
      </div>

      <div class="mt-4">
        <label for="password" class="block font-medium text-sm text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          required
          class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
          autoComplete="current-password"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <button
          class="w-full text-center px-4 py-3 bg-cyan-700 border border-transparent font-semibold text-xs text-white uppercase tracking-widest active:bg-cyan-900 transition ease-in-out duration-150"
          v-bind:class="{ 'opacity-50': loginProcessing }"
          :disabled="loginProcessing"
          type="submit"
        >
          Log in
        </button>
      </div>
      <div class="flex justify-center text-xs gap-1 mt-4">
        <span>Don't have an account?</span>
        <nuxt-link
          to="/register"
          class="text-center text-xs text-blue-500 underline"
        >
          Register
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'guest',
  data() {
    return {
      loginProcessing: false,
      error: null,
    }
  },
  methods: {
    async login({ email, password }) {
      try {
        await this.$auth.loginWith('local', {
          data: {
            grant_type: 'password',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            scope: '*',
            username: email,
            password,
          },
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async onSubmit(e) {
      this.loginProcessing = true
      e.preventDefault()
      const formData = Object.fromEntries(new FormData(e.target))
      await this.login(formData)
      this.loginProcessing = false
    },
  },
}
</script>
