const express = require("express")
const cors = require("cors")
const app = express()
const mongoose=require("mongoose")
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://nijithvlk9400:NJT5162@cluster0.fi0qono.mongodb.net/sample?appName=Cluster0")
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Database connection error:', err));

  const ComplaintSchema = new mongoose.Schema({
    department: String,
    description: String,
    image: String,

  });
  const Complaint = mongoose.model('Complaint', ComplaintSchema);
  app.post('/complaints', async (req, res) => {
    try{
      const newComplaint = new Complaint(req.body);
      await newComplaint.save();
      res.status(201).json({message: "Complaint filed successfully!",data: newComplaint});

    }catch(error){
      res.status(500).json({message: "Failed to save complaint", error: error.message});
    }
  });

  app.get('/complaints', async (req, res) => {
    try{
      const complaints = await Complaint.find();
      res.status(200).json(complaints);
    }catch(error){
      res.status(500).json({message: "Failed to fetch complaints", error: error.message});
    }
  });
  
  app.delete('/complaints/:id', async (req, res) => {
    try{
      await Complaint.findByIdAndDelete(req.params.id);
      res.status(200).json({message: "Deleted successfully!"});
    }catch(error){
      res.status(500).json({ error: error.message});
    }
  });
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
    