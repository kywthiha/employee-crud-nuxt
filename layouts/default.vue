<template>
  <div>
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div class="flex items-center flex-shrink-0">
          <h1 class="text-white text-center p-5 w-full font-semibold text-xl">
            Emplyoee CRUD
          </h1>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-2 py-4 space-y-1">
            <NuxtLink
              to="/employee"
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >Emplyoee</NuxtLink
            >
          </nav>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col">
      <main>
        <Nuxt />
      </main>
    </div>
  </div>
</template>
