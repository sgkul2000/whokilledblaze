<template>
  <div :style="'background:'+color+';'" class="button">{{text}}</div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text:String,
    color:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button{
  margin:10px;
  padding:  20px 50px;
  border-radius:10px;
  background:#FF6B79;
  cursor: pointer;
  font-size: 150%;
  color: white;
  border: none;
}

</style>
