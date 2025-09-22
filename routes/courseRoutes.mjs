import express from 'express'
import Course from "../models/course.mjs"
import {courses} from "../data/data.mjs"
const router = express.Router()



router.get("/seed", async (req, res) => {
  try {
    await Course.deleteMany({});
    await Course.insertMany(courses);

    res.send("Courses seeded successfully!");
  } catch (err) {
    console.error(" Seed error:", err);
    res.status(500).send("Error seeding courses");
  }
});

router.get("/", (req, res) => {
    res.redirect('/courses')
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

router.post('/courses', async (req, res) => {
  try {
    const exists = await Course.findOne({ title: req.body.title })
    if (exists) {
      return res.status(400).send("Course already exists")
    }

    const course = new Course(req.body)
    await course.save()
    res.redirect('/courses')
  } catch (err) {
    console.log(err)
    res.status(500).send("Error creating course")
  }
})


router.get('/courses/create', (req,res)=>{
    res.render('create', {title : 'New course'});
})

router.use((req, res) => {
    res.status(404).render('404', {title : '404'});
});


export default router;