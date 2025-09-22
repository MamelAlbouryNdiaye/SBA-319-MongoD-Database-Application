import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { 
    type: String, 
    required: true,
     minlength: 2 
    },
  author: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User", 
     required: true 
    },
  course: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Course", required: true }
}, { timestamps: true });



export default mongoose.model("Comment", commentSchema);
