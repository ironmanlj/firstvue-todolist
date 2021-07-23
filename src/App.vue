<template>
  <div id="App">
    <h1 class="first">这是第一个作业</h1>
    <el-card class="box-card">
      <Header @addTodo="addTodo" />
      <List :taskLists="taskLists" @delTodo="delTodo" :selectAll="selectAll" />
      <Footer 
      :taskLists="taskLists"
       />
      <Footer>
        <div slot="unfinish" class="grid-content bg-purple">未完成<span class="word-left">: {{taskLists.length - finished}}</span></div>
        <div slot="finish" class="grid-content bg-purple">已完成<span class="word-left">: {{finished}}</span></div>
        <div slot="total" class="grid-content bg-purple">总任务<span class="word-left">: {{taskLists.length}}</span></div>
      </Footer>
    </el-card>
    <div class="second">
     <h1>这是第二个作业</h1>
      <echarts1/>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import echarts1 from './components/echarts.vue'

import localStorageTool from './utils/localStorage'
export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer,
    echarts1
  },

  data(){
    return{
      taskLists: localStorageTool.getTask()
    }
  },

  computed:{
    finished(){
      return this.taskLists.reduce((total, task)=> total + (task.finished ? 1: 0), 0);
    }
  },

  mounted() {
    // 订阅删除
    PubSub.subscribe('delTodo', (msg, data)=>{
      console.log(msg, data)
      if(msg === 'delTodo'){
        this.delTodo(data);
      }
    })
  },

   beforeDestroy(){
    // 移除订阅
    PubSub.unsubscribe('delTodo');
  },

  methods: {
    // 添加
    addTodo(todo){
      this.taskLists.unshift(todo)
    },
    // 删除
    delTodo(index){
      this.taskLists.splice(index, 1)
    },
    // 全选和全不选
    selectAll(isSelect){
      this.taskLists.forEach(task => {
        task.finished = isSelect;
      });
    }
  },
  watch: {
    taskLists: {
      handler: localStorageTool.saveTake,
    }
  }
};
</script>

<style scoped>
#App {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   margin-top: 60px;
}

 .box-card {
    width: 480px;
    margin: 0 auto;
  }
  .second{
    width: 800px;
    margin: 0 auto;
  }
  .first{
    width: 800px;
    margin: 0 auto;
  }
</style>
