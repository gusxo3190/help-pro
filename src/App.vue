<template>

  <div>
    <asd></asd>
    <div id="maincontent"></div>

  </div>

</template>

<script>
  import asd from './components/asd'
  export default {
    name: 'App'
    ,components:{
      'asd':asd
    }
  }
</script>

<style>
  #maincontent{
    margin-left: 200px;
  }
</style>
