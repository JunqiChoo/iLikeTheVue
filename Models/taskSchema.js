const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    task_message:{
        type:String,
        required:true
    },
    completion_status:{
        type:Boolean,
        required:true
    }
});

const Task = mongoose.model("Task",taskSchema);

module.exports = Task