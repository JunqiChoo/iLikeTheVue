<template>
    


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand ms-3" href="http://localhost:5173/">TO-DO</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">VIEW TASKS</router-link>
      </li>
       <li class="nav-item active">
        <router-link class="nav-link" to="create-task">ADD TASK</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>

</script>