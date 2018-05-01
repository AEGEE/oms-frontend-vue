import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
import CardEvent from "./components/CardEvent.vue"

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
        <card-event :event="event"/>
        </div>
    `,
    data: {
      name: "World",
      event: {
        title: 'Hackathon',
        description: 'Building OMS from Krakow',
        imageurl: 'https://sekurak.pl/wp-content/uploads/2016/10/shp_krak-e1476525429173-600x450.jpg',
      },
    },
    components: {
        HelloComponent,
        HelloDecoratorComponent,
        CardEvent,
    }
});
