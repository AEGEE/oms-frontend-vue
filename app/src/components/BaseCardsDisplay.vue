<template>
    <div class="cards-display">
        <base-card v-for="card in cards" :key="card.title">
          <template slot="title">
            {{ card.title }}
          </template>
          <template slot="date">
            {{ card.date }}
          </template>
          {{ card.content }}
        </base-card>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseCard from "./BaseCard.vue";

export default Vue.component('BaseCardsDisplay', {
    props: ['initialCards'],
    data() {
        return {
        }
    },
    computed: {
      cards() { console.log('computed()'); return this.initialCards;}
    },
    components: {
      BaseCard,
    }
});
</script>

<style>
.cards-display {
    background-color: red;
}
</style>
