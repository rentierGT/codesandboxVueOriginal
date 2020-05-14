<template>
  <div>
    <button>Click</button>
    <div>{{ concatMsg }}</div>
  </div>
</template>

<script>
export default {
  name: "Child",
  computed: {
    concatMsg: function() {
      return this.testB(this.test(this.foo + this.bar));
    }
  },
  props: ["foo", "bar"],
  methods: {
    test: function(a) {
      return a;
    },
    testB: function(b) {
      return b;
    }
  }
};
</script>
