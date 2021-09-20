<template>
  <div class="imgContainer">
    <img class="image" :src="url" />
  </div>
</template>

<script>
import firebaseApp from '../firebaseConfig'
import firebase from 'firebase'
import 'firebase/firestore'
export default {
  name: 'QuestionCard',
  data: function(){
    return {
      url:''
    }
  },
  props: {
    name:String
  },
  mounted(){
    let images = require.context('../assets/', false, /\.png$/)
    let self = this;
    this.url = images('./' + self.name + ".png")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  /* border-radius: 20px; */
  height: 100vh;
  padding: 50px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
