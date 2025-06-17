<template>
  <h1 class="fw-bold text-center">
    <br />
    ADD TASK
  </h1>

  <div class="card w-75 text-center mx-auto">
    <form @submit.prevent="saveTask">
      <div class="card-body">
        <input
          type="text"
          class="form-control"
          name="task_message"
          placeholder="Enter your task here ......................."
          v-model="task.task_message"
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary d-block mx-auto w-50">ADD</button>
      <br />
    </form>
  </div>
</template>




<script setup>

    import { ref } from 'vue'
    import axios from 'axios'
    import { useToast } from 'vue-toastification'
    import { useRouter } from 'vue-router'
    const toast = useToast();
    const urllink = "http://localhost:3000/api/tasks"
    const router = useRouter()
    const task = ref({
    task_message: '',
    completion_status: false
    })

    const saveTask = async()=>{
        console.log("Task values are" , task.value)
        if(!task.value.task_message){
            toast.error("please fill in information for the task")
        }else{
            
            try{
                const tempData = await axios.post(urllink,task.value)
                console.log(tempData.data)
                toast.success("Task has been successfully added")
                router.push('/')
            }catch(error){
                toast.error("There seem to be a problem with the insertion of data")
                console.log(error);
            }
           

        }
    }
</script>