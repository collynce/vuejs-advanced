<template>
    <div class="home">
        <div>
            <button v-on:click="$emit('event1')">Show Event 1</button>
            <button v-on:click="$emit('event2')">Show Event 2</button>
            <button v-on:click="$emit('event3')">Show Event 3</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
      data(){
          return{
            eventData: [
              {name: 'event1', callback: () => console.log('event1')},
              {name: 'event2', callback: () => console.log('event2')},
              {name: 'event3', callback: () => console.log('event3')}
            ]
          }
      },
        created() {
          const events = this.eventData;
            for (let e of events) {
                this.$on(e.name, e.callback);
            }
        }
    };
</script>
