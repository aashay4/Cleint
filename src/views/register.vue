<template lang="html">
  <div>
  <h1>Register</h1>
  <div class="row">
    <div class="card mx-auto">
      <div class="card-header text-white">
        <h4>Register</h4>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" placeholder="Username" name="username" v-model="username" id="username">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="password" name="password" v-model="password" id="password">
            <label for="cpassword">Confirm Password</label>
            <input type="cpassword" class="form-control" placeholder="confirm password" name="cpassword" v-model="confirm_password" id="cpassword">
            <label for="email">Email ID</label>
            <input type="email" class="form-control" placeholder="email ID" name="email" v-model="email" id="email">
            <label for="name">Name</label>
            <input type="name" class="form-control" placeholder="Name" name="name" v-model="name" id="name">
            </div>
            <input type="submit" class="btn btn-primary" style="color: white" name="Submit" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link">Already Have an Account?</router-link>
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      confirm_password: '',
      name: ''
    }
  },
  methods:{
    ...mapActions(['register']),
    registerUser() {
      console.log(this.username);
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name
      }
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("login");
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
