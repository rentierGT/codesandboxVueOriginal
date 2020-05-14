<template>
  <div class="buttonbar">
    <router-link to="/articles" active-class="activepath" exact>
      <div class="button">
        <font-awesome-icon icon="newspaper" size="2x"/>
      </div>
    </router-link>
    <router-link to="/profile" active-class="activepath" exact>
      <div class="button">
        <font-awesome-icon :icon="['far', 'address-book']" size="2x"/>
      </div>
    </router-link>
    <router-link to="/help" active-class="activepath" exact>
      <div class="button">
        <font-awesome-icon :icon="['far', 'question-circle']" size="2x"/>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>