const express =require( "express")
const mongoose=require( "mongoose")
const cors=require( "cors")
const {employeemodel}=require("./models/employee")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://raifashafi:raifashafi@cluster0.tznb7.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input=req.body
    let employee=new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({"status":"success"})
}
)
app.get("/view",(req,res)=>
{
    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
app.listen(8080,()=>
{
    console.log("server stated")
})