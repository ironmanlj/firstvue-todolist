const todotask='todo_task'

export default{
    //获取todotask
    getTask(){
        return JSON.parse(localStorage.getItem(todotask)||'[]')
    },
    //存储tasklists
    saveTasks(taskLists){
        localStorage.setItem(todotask,JSON.stringify(taskLists))
    }
}