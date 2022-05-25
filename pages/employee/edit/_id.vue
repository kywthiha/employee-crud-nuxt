<template>
  <div class="flex flex-col">
    <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-gray-100 shadow">
      <div class="flex-1 px-4 flex justify-between items-center">
        <div class="flex-1 flex text-lg font-bold items-center">
          Edit Emplyoee
        </div>
      </div>
    </div>
    <div class="p-5">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit="onSubmit">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="text-lg font-bold">Emplyoee Info</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="col-span-1">
                  <div class="mt-3">
                    <label for="name" class="block text-sm font-semibold">
                      Name
                      <span class="text-red-700 ml-2 text-xs">
                        (Required)
                      </span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      v-model="emplyoee.name"
                      autoComplete="given-name"
                      class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <form-input-error :error="error" name="name" />
                  </div>
                  <div class="mt-3">
                    <label for="email" class="block text-sm font-semibold">
                      Email
                      <span class="text-red-700 ml-2 text-xs">
                        (Required)
                      </span>
                    </label>
                    <input
                      v-model="emplyoee.email"
                      required
                      type="email"
                      name="email"
                      id="email"
                      class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <form-input-error :error="error" name="email" />
                  </div>
                  <div class="mt-3">
                    <label for="phone" class="block text-sm font-semibold">
                      Phone
                      <span class="text-red-700 ml-2 text-xs">
                        (Required)
                      </span>
                    </label>
                    <input
                      v-model="emplyoee.phone"
                      required
                      type="text"
                      name="phone"
                      id="phone"
                      class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <form-input-error :error="error" name="phone" />
                  </div>

                  <div class="mt-3">
                    <label for="birthday" class="block text-sm font-semibold">
                      Birthday
                      <span class="text-red-700 ml-2 text-xs">
                        (Required)
                      </span>
                    </label>
                    <input
                      v-model="emplyoee.birthday"
                      required
                      type="date"
                      name="birthday"
                      id="birthday"
                      class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <form-input-error :error="error" name="birthday" />
                  </div>
                  <div class="block">
                    <div class="mt-3">
                      <label for="gender" class="block text-sm font-semibold">
                        Gender
                        <span class="text-red-700 ml-2 text-xs">
                          (Required)
                        </span>
                      </label>
                      <div>
                        <label class="inline-flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            v-model="emplyoee.gender"
                            value="male"
                            required
                          />
                          <span class="ml-2">Male</span>
                        </label>
                        <label class="inline-flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            required
                            v-model="emplyoee.gender"
                          />
                          <span class="ml-2">Female</span>
                        </label>
                      </div>
                      <form-input-error :error="error" name="gender" />
                    </div>
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="mt-3">
                    <label
                      for="job_positon"
                      class="block text-sm font-semibold"
                    >
                      Job Position
                      <span class="text-red-700 ml-2 text-xs">
                        (Required)
                      </span>
                    </label>
                    <input
                      v-model="emplyoee.job_positon"
                      required
                      type="text"
                      name="job_positon"
                      id="job_positon"
                      class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <form-input-error :error="error" name="job_positon" />
                  </div>
                  <div class="mt-3">
                    <label for="name" class="block text-sm font-semibold">
                      Salary
                      <span class="text-red-700 ml-2 text-xs">
                        (Required)
                      </span>
                    </label>
                    <input
                      v-model="emplyoee.salary"
                      required
                      type="number"
                      name="salary"
                      id="salary"
                      class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <form-input-error :error="error" name="salary" />
                  </div>
                  <div class="mt-3">
                    <label for="hire_date" class="block text-sm font-semibold">
                      Hire Date
                      <span class="text-red-700 ml-2 text-xs">
                        (Required)
                      </span>
                    </label>
                    <input
                      v-model="emplyoee.hire_date"
                      required
                      type="date"
                      name="hire_date"
                      id="hire_date"
                      class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <form-input-error :error="error" name="hire_date" />
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 sm:px-6">
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 bg-cyan-700 border border-transparent rounded-md font-semibold text-xs text-white active:bg-cyan-900 transition ease-in-out duration-150"
                v-bind:class="{ 'opacity-50': updateProcessing }"
                :disabled="updateProcessing"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormInputError from '../../../components/FormInputError.vue'
import {
  EMPLOYEE_QUERY,
  UPDATE_EMPLOYEE_MUTATION,
} from '../../../graphql/emplyoee-graphql'

export default {
  components: { FormInputError },
  name: 'EditEmployee',
  apollo: {
    emplyoee: {
      query: EMPLOYEE_QUERY,
      prefetch: true,
      variables() {
        return {
          id: Number(this.$route.params.id),
        }
      },
      fetchPolicy: 'network-only',
    },
  },
  data() {
    return {
      updateProcessing: false,
      error: {},
      emplyoee: {},
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      try {
        this.error = {}
        this.updateProcessing = true
        const formData = Object.fromEntries(new FormData(e.target))
        await this.$apollo.mutate({
          mutation: UPDATE_EMPLOYEE_MUTATION,
          variables: {
            ...formData,
            salary: Number(formData.salary),
            id: Number(this.$route.params.id),
          },
        })
        this.$router.push('/employee')
      } catch (error) {
        const { graphQLErrors } = error
        if (graphQLErrors[0]?.extensions.category === 'validation') {
          this.error = graphQLErrors[0].extensions.validation
        } else {
          this.$toast.error('Error while updating employee')
        }
        this.updateProcessing = false
      }
    },
  },
}
</script>
