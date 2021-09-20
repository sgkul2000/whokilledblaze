<template>
  <div class="questionCard">
    <div>
      <div class="mcq_options">
        <div class="option" v-for="option in question.options" v-on:click="submitAnswer(option)" v-bind:key="option">{{option}}</div>
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
  data: function(){
    return {
      
    }
  },
  props: {
    question:Object
  },
  methods:{
    submitAnswer(ans){
      this.$emit("answer",ans)
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
.option {
  padding: 10px 30px;
  background:#00C617;
  margin: 20px;
  border-radius: 5px;

  font-size: 110%;
  cursor: pointer;
}
.option:hover {
  box-shadow: 0 34px 100px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

</style>
