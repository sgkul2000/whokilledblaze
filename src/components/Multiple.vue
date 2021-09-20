<template>
  <div class="questionCard" :key="key">
    <div>
        
      <div class="mcq_options">
        <div class="crosswordContainer"
            v-for="(answer,index) in answerArr" 
            v-bind:key="index"
        >
            <input :placeholder="'Answer '+(index+1)" v-model="answerArr[index]"/>
        </div>
        
      </div>
    </div>
    <div class="option" v-on:click="submitAnswer">Submit</div>
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
      
      key:0
    }
  },
  props: {
    question:Object
  },
  computed:{
    answerArr: function(){
      if(this.question)
        return this.question.answer.map(x=>{return ''})
      else
        return []
    }
  },
  methods:{
      check(index){
          this.answerArr[index]=!this.answerArr[index] 
          this.key++
      },
    submitAnswer(){
      this.$emit("answer",this.answerArr)
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
.crosswordContainer{
    display: inline-block;
    padding: 10px;
    margin:10px;
    border-radius: 10px;
    cursor: pointer;
}
.crosswordContainer input{
    font-size:150%;
    padding:10px;

}
#checked{
    background:#00C617;
    
}
</style>
