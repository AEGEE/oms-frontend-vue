<template>
  <div>
    <h1>
      Please login
    </h1>
    <input type="text" v-model="login">Login</input><br/>
    <input type="password" v-model="password">Password</input><br/>
    <button @click="tryLogin()">Login</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    tryLogin() {
      fetch('/services/oms-loginservice/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
,        body: JSON.stringify({
          username: this.login,
          password: this.password
        })
      }).then((r: any) => r.json()).then((response:any) => {
        if (!response.success) {
          throw new Error();
        }
        alert('Success!');
        window.localStorage.setItem('token', response.access_token);
        this.$router.push('/cards');
      }).catch((error:any) => {
        alert('Wrong authentication:' + error.message);
      })
    }
  }
});
</script>

<style>
</style>
