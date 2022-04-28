
<template>
  <div>
      <HelloWorld/>
      <br>
      <br>
      <br>
      <br>
      <img alt="hi image" src="../assets/hi_image.png">
  </div>
</template>


<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
div{
  background-color: #B6F0ED;
  height:100%;
  width: 100%;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
}

</style>
