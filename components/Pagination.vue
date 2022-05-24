<template>
  <ul class="flex">
    <li v-if="pagination.current_page > 1">
      <NuxtLink
        class="hover:text-white hover:bg-gray-500 rotate-180 relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5"
        :to="fullPath(pagination.current_page - 1)"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </NuxtLink>
    </li>
    <li v-else>
      <span
        class="relative inline-flex rotate-180 items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 opacity-50 cursor-not-allowed"
        aria-hidden="true"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </li>
    <li v-for="page in pagination.last_page" :key="page">
      <NuxtLink
        :to="fullPath(page)"
        :class="[
          page == pagination.current_page
            ? 'text-white bg-gray-500 '
            : ' text-gray-500 bg-white ',
          'relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium border border-gray-300 leading-5',
        ]"
      >
        {{ page }}
      </NuxtLink>
    </li>
    <li v-if="pagination.current_page < pagination.last_page">
      <NuxtLink
        class="hover:text-white hover:bg-gray-500 relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5"
        :to="fullPath(pagination.current_page + 1)"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </NuxtLink>
    </li>
    <li v-else>
      <span
        class="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 opacity-50 cursor-not-allowed"
        aria-hidden="true"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    change: {
      type: Function,
    },
    offset: {
      type: Number,
      default: 4,
    },
  },
  methods: {
    fullPath(page) {
      const searchParams = this.searchParams
      searchParams.set('page', page)
      return `${this.$route.path}?${searchParams.toString()}`
    },
  },
  computed: {
    searchParams() {
      return new URLSearchParams(this.$route.query)
    },
  },
}
</script>
