import {createRouter, createWebHistory} from "vue-router"
import Tasks from "./components/Tasks.vue"
import AddTask from "./components/addTask.vue"
import EditTask from "./components/editTask.vue"
const routes = [
    {
        name:"TaskList",
        path:"/",
        component:Tasks
    },
    {
        name:"addTask",
        path:"/create-task",
        component:AddTask
    },
    {
        name:"editTask",
        path:"/task/:id?",
        component:EditTask
    },
    

];


const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router;