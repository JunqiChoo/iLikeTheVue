const express = require('express');
const app = express();
const port = 3000
const cors = require("cors")
app.use(express.json());



app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true // optional, if using cookies/auth
}))
app.use('/api/tasks',require("./routes/taskRoutes"))
app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000 listening on port ${port}..................`);
});