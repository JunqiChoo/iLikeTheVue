//logical part should be in the controller

const mongoose = require('mongoose');
const Task = require("../Models/taskSchema"); // Adjust the path as needed
const connectDB = require('../MongoDB');

//@desc Get all Task
//@route GET /api/allTasks
//@access public

const getTasks = async(req,res)=>{
      connectDB();
      try{
        const tempData = await Task.find();
        res.json(tempData)
        console.log(tempData)
      }catch{
        res.send("sorry error finding the data")
      }
        
}
//@desc CREATE a single Task
//@route GET /api/createTask
//@access public

const  createTask = async(req,res)=>{
    try {
    await connectDB(); // wait for DB connection

    const {task_message, completion_status  } = req.body;

    const newTask = new Task({
      task_message: task_message,
      completion_status: false
    });

    const savedTask = await newTask.save();

    console.log('Saved Task:', savedTask);

    res.status(201).json({ message: 'Task created successfully', task: savedTask });
  } catch (error) {
    console.error('Create task error:', error);
    res.status(500).json({ error: 'Failed to create task' });
  }
}

//@desc Get a single Task
//@route GET /api/Tasks/:id
//@access public

const getTask = async(req,res)=>{
    try{
        await connectDB();
         const tempData = await Task.findById(req.params.id);
         console.log(tempData);
         res.json(tempData)
    }catch(err){
        console.log(err)
    }
    
}
//@desc update a single Task
//@route PUT /api/Tasks/:id
//@access public

const updateTask = async(req,res)=>{
    try{
        await connectDB();
         const tempData = await Task.findByIdAndUpdate(req.params.id, req.body);
         console.log(tempData);
         res.json(tempData)
    }catch(err){
        console.log(err)
    }
}
//@desc DELETE a single Task
//@route delete /api/Tasks/:id
//@access public

const deleteTask = async(req,res)=>{
    try{
        await connectDB();
         const tempData = await Task.findByIdAndDelete(req.params.id, req.body);
         console.log(tempData);
         res.json(tempData)
    }catch(err){
        console.log(err)
    }
}
module.exports = {getTasks,getTask,updateTask,deleteTask,createTask};