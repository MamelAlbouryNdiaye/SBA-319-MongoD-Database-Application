import mongoose from 'mongoose'


const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true  
  },
  snippet: { 
    type: String, 
    required: true
   },
  body: { 
    type: String,
     required: true
     }
}, { timestamps: true })

courseSchema.index({ title: 1 });

export default  mongoose.model('Course', courseSchema);

