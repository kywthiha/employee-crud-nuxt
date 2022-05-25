<template>
  <ul class="text-red-700 text-xs" v-if="error[name]">
    <li v-for="value in error[name]" :key="value">
      {{ value }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FormInputError',
  props: {
    error: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
