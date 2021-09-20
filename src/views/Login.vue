<template class='background'>
<div class="columns">
  <div class="column">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <Button class="button" v-if="loginBool" @click.native="login" text="LOGIN"></Button>
    <div v-else> The Event Will be Starting at 5PM</div>
  </div>
  
</div>

</template>
<script>
import Button from '@/components/Button.vue'
// import firebase from 'firebase'
import firebaseApp from '@/firebaseConfig'
export default {
  name: 'login',
  components: {
    Button
  },
  beforeMount(){
      console.log(this)
    //   firebaseApp.db.doc("admin/controls").onSnapshot(snapshot=>{
    //       this.loginBool = snapshot.data().login
    //   })
  },
  data(){
    return {
      loginBool:false
    }
  },
  methods:{
    login(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebaseApp.auth.signInWithPopup(provider)
      .then(snapshot=>{
        let user = snapshot.user
        localStorage.setItem('uid',user.uid)
        return firebaseApp.db.doc("users/"+user.uid).get()
        .then(doc => {
          if(!doc.exists){
            return firebaseApp.db.doc("users/"+ user.uid).set({
              name : user.displayName,
              currentQuestion: 0,
              points : 0,
              uid:user.uid,
              finished:false
            })
          }
        })
      })
      .then(()=>{
          this.$router.push('home')
      })
    }
  }
}

</script>
<style scoped>
.columns {
  height: 100vh;
  width: 100vw;
  margin: 0;
  /* background: url('../assets/bg.jpg'); */
  background-size: cover;
  background-position: center;
}
</style>
