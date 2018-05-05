<template>
  <div>
    <base-navigation></base-navigation>
    <router-view style="margin-left:220px"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloComponent from "./Hello.vue";
import HelloDecoratorComponent from "./HelloDecorator.vue";
import CardEvent from "./CardEvent.vue";
import BaseNavigation from "./BaseNavigation.vue";

export default Vue.component('application', {
    props: [],
    data() {
      return {
        name: "World",
        event: {
          title: 'Hackathon',
          description: 'Building OMS from Krakow',
          imageurl: 'https://sekurak.pl/wp-content/uploads/2016/10/shp_krak-e1476525429173-600x450.jpg',
        },
      }
    },
    components: {
        BaseNavigation,
        HelloComponent,
        HelloDecoratorComponent,
        CardEvent,
    },
    created() {
      const token = window.localStorage.getItem('token');
      if (!token) {
        return this.$router.push('/login')
      }
    }
});
</script>

<style>
</style>
