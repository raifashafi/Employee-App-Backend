const mongoose=require("mongoose")
const schema = mongoose.Schema(
    {
        "employeecode":{type:String,required:true},
        "employeename":{type:String,required:true},
        "mobile":{type:String,required:true},
        "address":{type:String,required:true}
    }
)
let employeemodel=mongoose.model(
    "employee",schema);
module.exports={employeemodel}