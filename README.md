# 📝 TO-DO Application

A full-stack **TO-DO List Application** built with **Vue.js**, **Node.js**, **Express**, and **MongoDB** that allows users to manage tasks with full **CRUD functionality** and real-time visual feedback via toast notifications.

---

## 🚀 Tech Stack

### Frontend
- **Vue.js 3** (Composition API)
- **Bootstrap 5** for responsive styling
- **Vue Router** for navigation
- **Vue Toastification** for notifications

### Backend
- **Node.js**
- **Express.js** for RESTful API
- **MongoDB** for persistent storage
- **Mongoose** for data modeling

---

## ✨ Features

✅ Add new tasks  
✅ View all tasks in a dynamic table  
✅ Edit task descriptions  
✅ Mark tasks as completed  
✅ View completed vs pending breakdown  
✅ Delete tasks  
✅ Toast notifications for all actions  
✅ Loading spinner for API calls  

---

## 🔄 CRUD Functionality

| Operation | Description |
|-----------|-------------|
| **Create** | Users can add new tasks via a form input. |
| **Read**   | All tasks are fetched from the MongoDB database and listed on the dashboard. |
| **Update** | Tasks can be edited or marked as completed via the Edit and Complete buttons. |
| **Delete** | Tasks can be deleted using the Delete button with confirmation and toast feedback. |

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup (Node + Express)

```bash
cd mainfolder
npm start

🔧 Frontend Setup (VueJS)

cd client
npm run dev