<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <form @submit="onSubmit">
      <input type="text" name="name" placeholder="Enter a name" />
      <input type="email" name="email" placeholder="Enter a email" />
      <input type="phone" name="phone" placeholder="Enter a phone" />
      <input type="text" name="job_positon" placeholder="Enter a job_positon" />
      <input type="number" name="salary" placeholder="Enter a salary" />
      <input type="date" name="hire_date" placeholder="Enter a hire_date" />
      <input type="date" name="birthday" placeholder="Enter a birthday" />
      <input type="radio" name="gender" value="male" /> Male
      <input type="radio" name="gender" value="female" /> Female
      <button type="submit">Submit</button>
    </form>
    <emplyoee-list :emplyoees="emplyoees.data" />
  </div>
</template>

<script>
import EmplyoeeList from '../components/EmplyoeeList.vue'
import {
  ALL_EMPLOYEES_QUERY,
  CREATE_EMPLOYEE_MUTATION,
} from '../graphql/emplyoee-graphql'
export default {
  components: { EmplyoeeList },
  name: 'IndexPage',
  apollo: {
    emplyoees: {
      query: ALL_EMPLOYEES_QUERY,
      prefetch: true,
    },
  },
  data() {
    return {
      emplyoees: {},
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      const formData = Object.fromEntries(new FormData(e.target))
      console.log(formData)
      this.createEmplyoee({ ...formData, salary: parseInt(formData.salary) })
    },
    createEmplyoee(formData) {
      this.$apollo
        .mutate({
          mutation: CREATE_EMPLOYEE_MUTATION,
          variables: formData,
          update: (store, { data: { createEmplyoee } }) => {
            const data = store.readQuery({ query: ALL_EMPLOYEES_QUERY })
            data.emplyoees.data.push(createEmplyoee)
            store.writeQuery({ query: ALL_EMPLOYEES_QUERY, data })
          },
        })
        .then((response) => {
          // redirect to all posts
          // this.$router.replace('/')
        })
    },
  },
}
</script>
