//object litrels

// const person = {name:"hijas " ,place:"Wayanad " ,age :22 ,displat: function (params) {
//     console.log(this.age);
//     console.log("function acctivated ");
// }}
// // person.displat()
// // for(x in person){
// //     console.log(person[x]);
// // }


// person.father = "rafeek"


// person.myplace=function (params) {
//     console.log(this.place);
// }
// console.log(person);
// person.myplace()



//object cunstrecter 
// const persons= function (name,age,plase ) {
//     this.name= name;
//     this.age = age;
//     this.plase=plase ;
//     this.display=function () {
//         console.log(" name:"+this.name+" age:"+this.age +" place:"+this.plase );
//     }
// }

// const person1 = new persons("hijas",22,"Wayanad")
// const person2 = new persons("abi",20,"malappuram")
// person1.display()


// person2.display()
// class sample {
//     constructor() {
//         // var newname = "rafeeek"
//         // console.log(newname);
//         console.log("euyrye");
//     }
// }

// class hallow extends sample {
//     constructor(name, age) {
//         super()
//         this.name = name;
//         this.age = age;
//     }
//     display() {
//         console.log(this.name, this.age);
//     }
// }

// const hey = new hallow("hijas", 20)

// hey.display()
// hey.sample()


/////////call back 
// function display(milli) {
//     const date = new Date()
//     while((new Date-date)<=milli){
       
//     }
    
// }
// function showEnd(params) {
//     console.log("end");
// }


// console.log("start ");
// setTimeout(showEnd,3000)

// console.log("start ");
// setTimeout(showEnd,3000)

// console.log("start ");
// setTimeout(showEnd,3000)


// const moduledata = require("./createmodule")
// moduledata.funn()


// console.log(moduledata.funn1);

// const http = require("http")

// const fs = require("fs")

// const url = require("url")



// http.createServer(function (req,res){


//     const q = url.parse(req.url,true)
   
    
//     if(q.pathname==="/"){

//         fs.readFile("./index.html","utf-8",function (err,data){

//             if(err) throw err
            
//             res.writeHead(200,"Content-type:text/html")
//             res.write(data)
//             res.end()
            
//         })

//     }else if (q.pathname==="/about"){
             
//         fs.readFile("./formht.html","utf-8",function (err,data){

//             if(err) throw err
            
//             res.writeHead(200,"Content-type:text/html")
//             res.write(data)
//             res.end()
            
//         })

//     }else if(q.pathname==="/signuppage"){

//         const myname = q.query.fname
//         console.log(myname);
  
//         res.writeHead(200,"Content-type:text/html")
//         res.write(`<h1>You are logIn :${myname}<h1/>`)
//         res.end()
        
    
//     }else{
        
//        res.write("page not found")
//        res.end()
//     }





// }).listen(4000,()=>{
//     console.log("server running");
// })




const express = require("express")
const path = require("path")
const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log("this is midlewar");
    next()
})

app.get("/",(req,res,next)=>{
    console.log("get request");
   res.sendFile(path.join(__dirname,"formht.html"))
   next()
})

app.use((req,res)=>{
    console.log("End midlewar");
})

app.post("/",(req,res)=>{
    res.send("fom submited")
 })
 

app.listen( 4000,()=>{
console.log("server started ");
})