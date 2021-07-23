<template>
    <div>
        <el-row type="flex" class='selectall'>
            <el-checkbox v-model="isSelect">全选</el-checkbox>
        </el-row>
        <el-row class="text item"
                type="flex"
                justify="space-between"
                align="middle"
                v-for="(todo,index) in taskLists"
                :key="index"
                :todo="todo"        
        >
            <div>
                <el-checkbox v-model="todo.finished" class="checkbox"></el-checkbox>
                <span class="task">{{index}}:{{todo.task}}</span>
            </div>

            <div>
                <el-button type="primary" icon="el-icon-delete" circle @click="delTask(index)"></el-button>
            </div>
        </el-row>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    name:"List",
    props:{
        taskLists: {type:Array,required:true},
        selectAll: {type:Function,required:true}
    },
    computed:{
        complete(){
            return this.taskLists.reduce((total, task)=> total + (task.finished ? 1 : 0), 0);
         },
        isSelect: {
            get(){
                return this.complete === this.taskLists.length && this.taskLists.length > 0;
            },
            set(value){
                console.log(value);
                this.selectAll(value);
            }
        }
    },
    methods:{
        delTask(index){
            PubSub.publish('delTodo', index)
        }
    }


}
</script>

<style scoped>
.text {
    font-size: 14px;
}
.item {
    margin-bottom: 18px;
}
.checkbox{
    margin-right:10px;
}
</style>