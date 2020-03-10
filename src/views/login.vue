<template lang="html">
  <div>
  <h1>log in</h1>
  <div class="row">
    <div class="card mx-auto">
      <div class="card-header text-white">
        <h4>Log in</h4>
        <div class="card-body">
          <form @submit.prevent="loginuser">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" placeholder="Username" name="username" v-model="username" id="username">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="password" name="password" v-model="password" id="password">
            </div>
            <input type="submit" class="btn btn-primary" style="color: white" value="Log in" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/register" class="card-link">Register an Account?</router-link>
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
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    loginuser() {
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
      .then(res => {
        if(res.data.success){
          this.$router.push('/add');
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
.card{
  width: 60%;
}
</style>
