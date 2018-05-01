<template>
    <div class='card'>
        <div class="title">{{event.title}}</div>
        <div class="description">{{event.description}}</div>
        <img v-bind:src="event.imageurl"></img>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['event'],
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
