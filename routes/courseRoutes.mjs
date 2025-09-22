import express from 'express'
import Course from "../models/course.mjs"
const router = express.Router()


// Create
router.
    route("/").
      post(async (req, res)=>{
        try{
            // Perform Action
            let newCourse = await Course.create(req.body);

            // Return Response
             res.redirect('/courses');

        }catch(err){
            console.error(err.message);
            res.status.apply(500).json({msg : `Error - ${err.message}`});
        }
    })

router.get('/about', (req, res)=> {
   res.render('about', {title : 'About'});
});

//***********  Course routes //////////// */
router.get('/courses', (req, res) => {
    Course.find()
      .then((result)=> {
        res.render('index', {title : 'All courses', courses : result})
      })
      .catch((err) => {
        console.log(err);
      })
})

router.post('/courses', (req, res) => {
    const course = new Course(req.body)
    course.save().then((result) => {
        res.redirect('/courses')
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/courses/create', (req,res)=>{
    res.render('create', {title : 'New course'});
})

router.use((req, res) => {
    res.status(404).render('404', {title : '404'});
});


export default router;