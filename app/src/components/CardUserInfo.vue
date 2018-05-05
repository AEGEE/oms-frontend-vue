<template>
    <div class='card'>
        <div class="title">Hello user</div>
        <div class="description"></div>
        <ul>
          <li><b>First name:</b> {{ user.first_name }}</li>
          <li><b>Last name:</b> {{ user.last_name }}</li>
          <li><b>Bodies:</b> {{ user.bodies }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: [],
    data: function() {
      return {
        user: {
          first_name: '<not loaded>',
          last_name: '<not loaded>',
          bodies: []
        }
      }
    },
    created() {
      const token = window.localStorage.getItem('token');
      if (!token) {
        return this.$router.push('/login')
      }

      fetch('/services/oms-core-elixir/api/tokens/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token },
        body: JSON.stringify({ token })
      }).then((r: any) => r.json()).then((response:any) => {
        console.log('loaded', response)
        this.user = response.data;
      }).catch((response:any) => {
        console.log('error', response)
      })
    }
});
</script>

<style>
.title {
    font-size: 20px;
}
.description {
    font-size: 15px;
}

</style>
