<template>
  <h1 class="fw-bold text-center"><br />EDIT TASK</h1>
  <div class="card w-75 text-center mx-auto">
    <div class="card-body">
      <input
        v-model="task.task_message"
        type="text"
        class="form-control"
        placeholder="Enter your task here ......................."
      />
    </div>
    <button @click="saveTask" class="btn btn-success">EDIT</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { useRouter, useRoute } from 'vue-router'

const toast = useToast()
const router = useRouter()
const route = useRoute()
const task = ref({})

// URL based on ID from route
const apilink = `http://localhost:3000/api/tasks/${route.params.id}`
const urllink = `http://localhost:3000/api/tasks/${route.params.id}`

const getTask = async () => {
  try {
    const tempData = await axios.get(apilink)
    task.value = tempData.data
  } catch (err) {
    toast.error('Failed to fetch task')
  }
}

const saveTask = async () => {
    console.log("Task values are" , task.value)
        if(!task.value.task_message){
            toast.error("please fill in information for the task")
        }else{   
            try{
                const tempData = await axios.put(urllink,task.value)
                console.log(tempData.data)
                toast.success("Task has been successfully Edited")
                router.push('/')
            }catch(error){
                toast.error("There seem to be a problem with the editing of data")
                console.log(error);
            }
        }
}

onMounted(() => {
  getTask()
})
</script>
