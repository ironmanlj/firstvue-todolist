<template>
  <div>
      <span>
          您的任务清单
      </span>
      <el-divider></el-divider>
      <el-input 
        placeholder="输入您的任务"
        v-model="task"
        @keyup.enter.native="addTask"
        clearable>
      </el-input>
       <el-divider></el-divider>
  </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
            task:""
        }
    },
    methods:{
        addTask(){
            const task=this.task.trim();
            if(!task){
                alert("想划水？赶快安排好你的任务吧！")
                return
            }
            let todo={task,finished:false}
            this.$emit('addTodo',todo)
            this.task=''
        }
    }
}
</script>

<style scoped>
.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>