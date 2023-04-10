const { response } = require("express")
const express = require("express")
const app= express()

const hbs = require("hbs")

const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const routes=require("./routes/main")
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")


// /static/css/style.css
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)


//(template engine)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials") 


//connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/dynamic_web",{
    useNewUrlParser: true
})
.then( ()=> console.log("MongoDb is connected"))
.catch( err => console.log(err))

// Detail.create({
//     brandName:"VK Brother's Tech Solutions Pvt.Ltd",
//     brandIconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4OSb6JUpl0DMynkb0iqVYWbgMn7V7mL2Gw&usqp=CAU",
//     links:[
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/services"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact Us",
//             url:"/contact-us"
//         },
//     ]
       
// })

// Service.create([{
//     icon: "fas fa-video service_icon",
//     title: "Provide Best Courses",
//     description: "we provide best courses that helps us student in placement and learning coding",
//     linkText: "check",
//     link: "http://www.google.com",
//   },
//   {
//     icon: "fal fa-whistle",
//     title: "learn code with Vaibhav",
//     description: "basic to advance level coding for development",
//     linkText: "Learn",
//     link: "http://www.google.com",
//   },
//   {
//     icon: "fal fa-whistle",
//     title: "learn code with Vaibhav",
//     description: "basic to advance level coding for development",
//     linkText: "Learn",
//     link: "http://www.google.com",
//   }])


  //localhost server
app.listen(process.env.PORT | 5556,()=>{
    console.log("Server Started...")
})

