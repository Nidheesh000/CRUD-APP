const express = require("express")
const cors = require("cors")
const app = express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://nijithvlk9400:NJT5162@cluster0.fi0qono.mongodb.net/?appName=Cluster0/complaintbox").then(()=>{
    console.log("Database connected")
})
app.use(cors())
app.use(express.json())
let complaints = []
app.get("/complaints", (req, res) => {
  res.send(complaints)
})
app.post("/complaints", (req, res) => {
  const complaint = req.body
  complaints.push(complaint)
  res.send( "Complaint Added" )
})
app.listen(3000, () => {
  console.log("Server started")
})