<template>
  <div id="menuBar">
    <header class="header-style">
      <img src="https://picsum.photos/id/142/200/200" alt="">
      <p>关于</p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'menuBar',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .header-style{
    height: 70px;
    color: white;
    background-color: #324057;
    display: flex;
    justify-content: space-between;
    line-height: 70px;
    padding: 0 30px;
    p{
      margin: 0;
      font-size: 30px;
    }
    img{
      margin: 5px;
    }
  }
</style>
