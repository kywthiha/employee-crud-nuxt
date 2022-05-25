<template>
  <div class="flex flex-col">
    <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-gray-100 shadow">
      <div class="flex-1 px-4 flex justify-between items-center">
        <div class="flex-1 flex text-lg font-bold items-center">
          Emplyoee List
        </div>
        <div>
          <NuxtLink
            to="/employee/create"
            class="inline-flex items-center px-4 py-2 bg-cyan-700 border border-transparent rounded-md font-semibold text-xs text-white active:bg-cyan-900 transition ease-in-out duration-150"
            >Create</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="p-5">
      <emplyoee-list
        :emplyoees="emplyoees.data"
        :deleteEmplyoee="deleteEmplyoee"
      />
      <div class="mt-5">
        <pagination :pagination="emplyoees" />
      </div>
    </div>
  </div>
</template>

<script>
import EmplyoeeList from '../../components/EmplyoeeList.vue'
import Pagination from '../../components/Pagination.vue'
import {
  ALL_EMPLOYEES_QUERY,
  DELETE_EMPLOYEE_MUTATION,
} from '../../graphql/emplyoee-graphql'

export default {
  components: { EmplyoeeList, Pagination },

  name: 'IndexPage',
  apollo: {
    emplyoees: {
      query: ALL_EMPLOYEES_QUERY,
      prefetch: true,
      variables() {
        return {
          page: this.page,
        }
      },
      fetchPolicy: 'network-only',
    },
  },
  data() {
    return {
      emplyoees: {
        data: [],
      },
    }
  },
  computed: {
    page() {
      return Number(this.$route.query.page) || 1
    },
  },

  methods: {
    deleteEmplyoee(id) {
      const result = confirm('Are you sure you want to delete this emplyoee?')
      if (result) {
        this.$apollo.mutate({
          mutation: DELETE_EMPLOYEE_MUTATION,
          variables: {
            id,
          },
          refetchQueries: [
            {
              query: ALL_EMPLOYEES_QUERY,
              variables: {
                page: this.page,
              },
            },
          ],
        })
      }
    },
  },
}
</script>
