<template>
  <div class="questionCard">
    <div>
      <div class="mcq_options">
        <input placeholder="Answer" v-model="ans"/>
        <div class="button" v-on:click="submitAnswer(ans)">Submit</div>
      </div>
    </div>

  </div>
</template>

<script>
import firebaseApp from '../firebaseConfig'
import firebase from 'firebase'
import 'firebase/firestore'
export default {
  name: 'QuestionCard',
  data(){
    return {
      ans:''
    }
  },
  props: {
    question:Object
  },
  methods:{
    submitAnswer(ans){
      this.$emit('answer',ans)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.questionCard{
  text-align: center;
  color: white;
}
.mcq_options{
  padding: 30px;
}
.button {
  padding: 28px 50px;
  background:#00C617;
  border:none;
  color:white;

  font-size: 110%;
  cursor: pointer;
}
.button:hover {
  box-shadow: 0 34px 100px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
input{
    font-size:150%;
    padding:10px;
}
</style>
