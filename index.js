const express=require("express");

const mongoose=require("mongoose")

const app=express();
const userSchema=new mongoose.Schema(
    {
        firstName:{type:String, required:true},
        middleName:{type:String, required:false},
        lastName:{type:String,required:true},
        age:{type:String,required:true},
        email:{type:String,unique:true,required:true},
        address:{type:String,required:true},
       gender:{required:true},
       type:{required:false},
    },
    {
        timestamps:true
    }
    );

    const User=mongoose.model("user",userSchema);

    const Masteracc=new mongoose.Schema(
        {
            balance: {type:Number, required:true}
        }
    ,  
    {userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
    
    },
     {     Branch:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"branch",
                    required:true
                  }
        }
    ,      {
            timestamps:true
        }
    )
    
    const Master=mongoose.model("master",MasterSchema);

    const savingSchema=new mongoose.Schema(
        {
            account_number:{type:Number,required:true},
            balance :{type:Number,required:true},
    interestRate :{type:Number,required:true }
        },{
            timestamps:true
        }
    )
    
    const Saving=mongoose.model("saving",savingsSchema);

    const FixedSchema=new mongoose.Schema(
        {
            account_number: {type:String,required:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number, required:true},
    startDate:{type:Date},
    maturityDate:{type:Date},
        },
    
        {
            timestamps:true
        }
    )
    
    const Fixed=mongoose.model("fixed",FixedSchema);

