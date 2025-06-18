<template>
  <h1 class="fw-bold text-center"><br />NOT COMPLETED</h1>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      
      <ClipLoader v-if="loading" />

      <!-- NOT COMPLETED TASKS TABLE -->
      <template v-else>
        <table v-if="pendingTasks.length > 0" class="table table-light">
          <colgroup>
            <col style="width: 10%;" />
            <col style="width: 60%;" />
            <col style="width: 10%;" />
            <col style="width: 10%;" />
            <col style="width: 10%;" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Task Description</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in pendingTasks" :key="task._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ task.task_message }}</td>
              <td><button @click="completeTask(task._id)" class="btn btn-success btn-sm">Completed</button></td>
              <td><router-link :to="{ name: 'editTask', params: { id: task._id } }" class="btn btn-primary btn-sm">Edit</router-link></td>
              <td><button @click="delTask(task._id)" class="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          </tbody>
        </table>
        <p v-else class="text-center">Sorry! No pending task for now!</p>

        <h1 class="fw-bold text-center"><br />COMPLETED</h1>

        <!-- COMPLETED TASKS TABLE -->
        <table v-if="completedTasks.length > 0" class="table table-light">
          <colgroup>
            <col style="width: 10%;" />
            <col style="width: 80%;" />
            <col style="width: 10%;" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Task Description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in completedTasks" :key="task._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ task.task_message }}</td>
              <td><button @click="delTask(task._id)" class="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          </tbody>
        </table>
        <p v-else class="text-center">No completed task!</p>

        <!-- Summary -->
        <div class="text-center">
          {{ completedTasks.length }}/{{ tasks.length }} task(s) completed
        </div>
      </template>

    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, computed, onMounted } from 'vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import { useToast } from 'vue-toastification'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const toast = useToast()

const tasks = ref([])
const loading = ref(true)
const apilink = "http://localhost:3000/api/tasks"

const pendingTasks = computed(() => tasks.value.filter(t => !t.completion_status))
const completedTasks = computed(() => tasks.value.filter(t => t.completion_status))

const completeTask = async (id) => {
  try {
    await axios.put(`${apilink}/${id}`, { completion_status: true })
    toast.success("Good job on completing it!")
    getTasks()
  } catch (error) {
    toast.error("There was a problem completing the task")
    console.error(error)
  }
}

const delTask = async (id) => {
  try {
    await axios.delete(`${apilink}/${id}`)
    toast.success("Successfully deleted the task")
    getTasks()
  } catch (err) {
    toast.error("Unable to delete the task")
    console.error(err)
  }
}

const getTasks = async () => {
  try {
    const res = await axios.get(apilink)
    tasks.value = res.data
  } catch (err) {
    console.error("API fetch failed:", err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getTasks()
})
</script>
