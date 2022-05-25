<template>
  <div>
    <div class="flex w-40 flex-col fixed inset-y-0">
      <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div class="flex items-center flex-shrink-0">
          <h1 class="text-white text-center p-5 w-full font-semibold text-xl">
            Emplyoee CRUD
          </h1>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-2 py-4 space-y-1">
            <NuxtLink
              v-bind:class="{ 'bg-gray-700': $route.path.split('/')[1] == '' }"
              to="/"
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white"
              >Home</NuxtLink
            >
            <NuxtLink
              v-bind:class="{
                'bg-gray-700': $route.path.split('/')[1] == 'employee',
              }"
              to="/employee"
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white"
              >Emplyoee</NuxtLink
            >
            <button
              @click="logout"
              v-bind:class="{ 'opacity-50': logoutProcessing }"
              :disabled="logoutProcessing"
              class="group flex items-center px-2 py-2 w-full text-sm font-medium rounded-md text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white"
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
    </div>
    <div class="pl-40 flex flex-col">
      <main>
        <Nuxt />
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data() {
    return {
      logoutProcessing: false,
    }
  },
  methods: {
    async logout() {
      try {
        this.logoutProcessing = true
        await this.$auth.logout()
        this.$router.push('/login')
      } catch (e) {
        console.log(e)
        this.logoutProcessing = false
      }
    },
  },
}
</script>
<style scoped>
a.nuxt-link-exact-active {
  background-color: rgb(55, 65, 81);
  color: #fff;
}
</style>
