<template>
  <div id="app">
    <menubar></menubar>
    <router-view class="A" name="main"></router-view>
    <router-view class="B" name="decs"></router-view>
  </div>
</template>
<script>
import menubar from './views/menuBar'

export default {
  name: 'app',
  components: {
    menubar
  }
}
</script>
<style scoped>
#app {
  position: relative;
}

.A {
  width: 60%;
  background-color: #f9fafc;
  border: 1px solid gray;
  padding: 10px;
  margin: 2% auto 0;
}

.B {
  width: 15%;
  position: absolute;
  top: 150px;
  right: 20px;
}
</style>
