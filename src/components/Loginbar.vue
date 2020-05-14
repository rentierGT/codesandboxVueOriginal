<template>
  <div v-if="!isLoggedIn" class="sessionbar">
    <div v-on:click="handleLoginClick" class="sessionbutton">
      <font-awesome-icon icon="sign-in-alt" size="2x"/>
      <span class="label">Login</span>
    </div>
    <div v-if="isDropdownActive" class="dropdownoverlay">
      <input v-model="nameInput" type="text" placeholder="Name">
      <input v-model="firstnameInput" type="text" placeholder="Firstname">
      <Button v-on:click="handleSubmitClick">Submit</Button>
    </div>
  </div>
  <div v-else class="sessionbar">
    <div v-on:click="handleLogoutClick" class="sessionbutton">
      <font-awesome-icon icon="sign-out-alt" size="2x"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loginbar",
  data: function() {
    return {
      isLoggedIn: false,
      isDropdownActive: false,
      nameInput: "",
      firstnameInput: ""
    };
  },
  methods: {
    handleLoginClick: function() {
      this.isDropdownActive = !this.isDropdownActive;
    },
    handleLogoutClick: function() {
      this.isLoggedIn = false;
    },
    handleSubmitClick: function() {
      if (
        this.validateNameInput(this.nameInput) &&
        this.validateNameInput(this.firstnameInput)
      ) {
        this.isLoggedIn = true;
        this.clearForm();
      }
    },
    validateNameInput: function(name) {
      if (typeof name === "string" && name.length > 0) {
        return true;
      }
    },
    clearForm: function() {
      this.isDropdownActive = false;
      this.firstnameInput = "";
      this.nameInput = "";
    }
  }
};
</script>