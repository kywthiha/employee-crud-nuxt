<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-1">Id</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Phone</th>
          <th scope="col" class="px-6 py-3">Job Position</th>
          <th scope="col" class="px-6 py-3">Salary</th>
          <th scope="col" class="px-6 py-3">Hire Date</th>
          <th scope="col" class="px-6 py-3">Birthday Date</th>
          <th scope="col" class="px-6 py-3">Gender</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="emplyoee in emplyoees"
          :key="emplyoee.id"
          class="border-b odd:bg-white even:bg-gray-100"
        >
          <td scope="row" class="px-6 py-1">#{{ emplyoee.id }}</td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900">
            {{ emplyoee.name }}
          </th>
          <td class="px-6 py-4">{{ emplyoee.email }}</td>
          <td class="px-6 py-4">{{ emplyoee.phone }}</td>
          <td class="px-6 py-4">{{ emplyoee.job_positon }}</td>
          <td class="px-6 py-4">{{ Number(emplyoee.salary).toLocaleString() }}</td>
          <td class="px-6 py-4">{{ emplyoee.hire_date }}</td>
          <td class="px-6 py-4">{{ emplyoee.birthday }}</td>
          <td class="px-6 py-4">{{ emplyoee.gender }}</td>
          <td class="px-6 py-4 text-right">
            <NuxtLink
              :to="`/employee/edit/${emplyoee.id}`"
              class="font-medium text-blue-600 hover:underline"
              >Edit</NuxtLink
            >
            <button
              class="font-medium text-red-600 hover:underline"
              @click="deleteEmplyoee(emplyoee.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  props: {
    emplyoees: {
      type: Array,
      required: true,
    },
    deleteEmplyoee: {
      type: Function,
      required: true,
    },
  },
}
</script>
