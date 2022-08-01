const express=require('express')
const app=express()
const http=require('http')
const cors=require('cors')
const {Server}=require('socket.io')
app.use(cors())
 const server=http.createServer(app)
const io=new Server(server,{

    cors:{
origin:"http://localhost:3000",
methods: ["GET", "POST", "PUT"],

    }
})
io.on('connection',(socket)=>{
console.log("this is id ",socket.id)

socket.on("join room",(data)=>{
    socket.join(data)
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
})
socket.on("send message",(data)=>{
socket.to(data.room).emit("receive message",data)
   
})
socket.on("disconnect",()=>{
    console.log("user is disconnected",socket.id)
})
})
const port = 5000;
server.listen(port, () => {
  console.log("listen at port " + port);
});