<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="layout--full-page">
    <div class="columns">
      <div class="browswer column">
        <!-- <vs-tabs>
          <vs-tab label="WhensApp"><chat></chat></vs-tab>
          <vs-tab label="Headbook"></vs-tab>
        </vs-tabs> -->
        <router-view></router-view>
        
      </div>
    </div>
  </div>
</template>
<script>
import chat from '@/views/apps/chat/Chat.vue'
export default {
  components: {
    chat
  }
}
</script>
<style>
  .browswer{
    /* margin:10px; */
    background:white;
    padding:0 !important;
    margin: 0 !important;
  }
  .circle {
    margin:4px;
    height:10px;
    width: 10px;
    border-radius:50%;
    display:inline-block;
  }
  .browswerButtons {
    margin:4px;
    display:inline-block;
    font-size:150%;
  }
  .con-ul-tabs{
    margin-left:20px !important;
  }
</style>