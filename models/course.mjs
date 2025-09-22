import mongoose from 'mongoose'


const courseSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    snippet: {
      type : String,
      required : true
    },
    body: {
      type : String,
      required : true
    }
}, { timestamps: true});


export default  mongoose.model('Course', courseSchema);

