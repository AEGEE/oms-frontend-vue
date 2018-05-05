<template>
    <div class="navigation">
        <span>Navigation goes here</span>
        <hr></hr>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.component('navigation', {
    props: [],
    data() {
        return {}
    },
});
</script>

<style>
.navigation {
    height: 100%;
    position: fixed;
    background-color: blue;
    width: 220px;
    margin: 0px;
    left: 0px;
    top: 0px;
}

</style>
