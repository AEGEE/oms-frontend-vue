<template>
  <div class="card-base">
    <p><slot name="title"></slot></p>
    <hr>
    <p><slot></slot></p>
    <hr>
    <p><slot name="date"></slot></p>
    <hr><hr>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.component('BaseCard', {
});
</script>

<style>
.card-base {
    background-color: green;
}
</style>
