<template>
  <div>
    <Child
      v-bind:foo="'Test'"
      v-bind:bar="' the world'"
      v-on:child-notification="handleNotification"
    />
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "Help",
  data: function() {
    return {
      childMessage: ""
    };
  },
  components: {
    Child
  },
  methods: {}
};
</script>