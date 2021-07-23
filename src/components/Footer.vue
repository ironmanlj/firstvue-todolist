<template>
  <div>
      <el-row type="flex" align="middle" justify="space-between">
          <el-col :span="4">
              <slot name="unfinish"></slot>
          </el-col>
          <el-col :span="4">
              <slot name="finish"></slot>
          </el-col>
          <el-col :span="4">
              <slot name="total"></slot>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name:'Footer',
    props:{
        taskLists:{type:Array,required:true}
    },
    computed:{
        finished(){
            return this.TaskLists.reduce((total,task)=>total+(task.finished?1:0),0);
        },
    },
}
</script>

<style scoped>
.el-col {
    border-radius: 4px;
}
.bg-purple {
    background: #d3e6e2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
    text-align: center;
}
.word-left{
    margin-left: 5px;
}
</style>