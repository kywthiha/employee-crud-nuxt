<template>
  <div>
    <h1 class="text-center text-2xl font-semibold">Register</h1>
    <form @submit="onSubmit">
      <div>
        <label for="name" class="block font-medium text-sm text-gray-700">
          Name
        </label>
        <div class="flex flex-col items-start">
          <input
            id="name"
            type="text"
            name="name"
            required
            class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            autoComplete="username"
          />
        </div>
        <form-input-error :error="error" name="name" />
      </div>
      <div class="mt-4">
        <label for="email" class="block font-medium text-sm text-gray-700">
          Email
        </label>
        <div class="flex flex-col items-start">
          <input
            id="email"
            type="email"
            name="email"
            required
            class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            autoComplete="username"
          />
        </div>
        <form-input-error :error="error" name="email" />
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
        <form-input-error :error="error" name="password" />
      </div>

      <div class="mt-4">
        <label
          for="password_confirmation"
          class="block font-medium text-sm text-gray-700"
        >
          Password Confirmation
        </label>
        <input
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          required
          class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
          autoComplete="current-password"
        />
        <form-input-error :error="error" name="password_confirmation" />
      </div>

      <div class="flex items-center justify-end mt-4">
        <button
          class="text-center w-full px-4 py-3 bg-cyan-700 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest active:bg-cyan-900 transition ease-in-out duration-150"
          v-bind:class="{ 'opacity-50': registerProcessing }"
          :disabled="registerProcessing"
          type="submit"
        >
          Register
        </button>
      </div>
       <div class="flex justify-center text-xs gap-1 mt-4">
        <span>Already have an account?</span>
        <nuxt-link
          to="/login"
          class="text-center text-xs text-blue-500 underline"
        >
          Login
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
import { CREATE_USER_MUTATION } from '../graphql/user-graphql'
export default {
  layout: 'guest',
  auth: 'guest',
  apollo: {
    $client: 'auth',
  },
  data() {
    return {
      registerProcessing: false,
      error: {},
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      try {
        this.error = {}
        this.registerProcessing = true
        const formData = Object.fromEntries(new FormData(e.target))
        await this.$apollo.mutate({
          mutation: CREATE_USER_MUTATION,
          variables: formData,
        })
        await this.$auth.loginWith('local', {
          data: {
            grant_type: 'password',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            scope: '*',
            username: formData.email,
            password: formData.password,
          },
        })
        this.$router.push('/')
      } catch (error) {
        const { graphQLErrors } = error
        if (graphQLErrors[0]?.extensions.category === 'validation') {
          this.error = graphQLErrors[0].extensions.validation
        } else {
          this.$toast.error('Error while registering')
        }
        this.registerProcessing = false
      }
    },
  },
}
</script>
