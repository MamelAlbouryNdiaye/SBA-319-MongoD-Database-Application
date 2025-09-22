import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
     type: String, 
     required: true,
      minlength: 3 },
  email: { 
    type: String, required: 
    true, 
    unique: true,
    match: /.+\@.+\..+/ 
    },
  role: { 
    type: String,
     enum: ["student", "teacher"], 
     default: "student" 
    }
}, { timestamps: true });


userSchema.index({ email: 1 }, { unique: true });

export default mongoose.model("User", userSchema);
