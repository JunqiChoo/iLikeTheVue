<template>
    <h1 class="fw-bold text-center">
        <br />
        NOT COMPLETED
    </h1>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8" >
            <ClipLoader v-if="loading"/>
            <table class="table table-light" v-else>
                <colgroup>
                    <col style="width: 10%;">
                    <col style="width: 60%;">
                    <col style="width: 10%;">
                    <col style="width: 10%;">
                    <col style="width: 10%;">
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Task Description</th>
                        <th scope="col">Completed</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody v-for="(task,index) in tasks.filter(t => !t.completion_status)" v-bind:key="task.id">


                    <tr>
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{task.task_message}}</td>
                        <td>
                            <button  @click="completeTask(task._id)"  type="button" class="btn btn-success btn-sm">Completed</button>
                        </td>
                       
                        <td>
                           <router-link :to="{ name: 'editTask', params: { id: task._id } }" type="button" class="btn btn-primary btn-sm">Edit</router-link>
                        </td>
                        <td>
                            <button @click="delTask(task._id)" type="button" class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>

            <h1 class="fw-bold text-center">
                <br />
                COMPLETED
            </h1>
            <ClipLoader v-if="loading"/>
             <table class="table table-light"v-else>
                <colgroup>
                    <col style="width: 10%;">
                    <col style="width: 90%;">
                  
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Task Description</th>
                    </tr>
                </thead>
                <tbody v-for="(task,index) in tasks.filter(t => t.completion_status)" v-bind:key="task.id">


                    <tr>
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{task.task_message}}</td>
                    
                    </tr>

                </tbody>
            </table>


            <div class="text-center">
                {{ tasks.filter(t => t.completion_status).length }}/{{ tasks.length }} task completed
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>

</template>


<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import { useToast } from 'vue-toastification'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute();
const toast = useToast();
const tasks = ref([])
const apilink = "http://localhost:3000/api/tasks"


const completeTask = async (id) => {
    const link = `${apilink}/${id}`
  
    try {
        const tempData = await axios.put(link, {completion_status : true})
        console.log(tempData.data)
        toast.success("Goodjob On completing it!")
        getTasks();
    } catch (error) {
        toast.error("There seem to be a problem with completing the task")
        console.log(error);
    }

}




const delTask = async(id)=>{
    try{
        const link = `${apilink}/${id}`
        console.log(apilink)
        const tempData = await axios.delete(link)
        toast.success("successfully deleted the task")
        getTasks();
    }catch(err){
        console.log(err)
        toast.error("Unable to delete the task specified")
    }
}

const getTasks = async () => {
  try {
    const tempData = await axios.get(apilink)
    console.log("Fetched tasks:", tempData.data)
    tasks.value = tempData.data
  } catch (err) {
    console.error("API fetch failed:", err.message)
    if (err.response) {
      console.log("Response status:", err.response.status)
      console.log("Response data:", err.response.data)
    } else if (err.request) {
      console.log("No response received:", err.request)
    } else {
      console.log("Setup error:", err.message)
    }
  }finally{
    loading.value = false;
  }
}

onMounted(() => {
  getTasks()
})
</script>
