<template>
  <div id="app">
    <div id="nav">
      <Home/>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  components: {
    Home: () => import("./components/Main/Home")
  },
  methods:{
    showAlert(){
      alert('This is an alert')
    }
  }
};
</script>
<style lang="scss">

</style>
