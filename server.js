const express=require("express")
const app=express()

let port=1337;

app.get('/', (req, res)=>{
    console.log("I get")

    res.send("I never did mind about the little things.")
})

//övning 2
app.get('/hello', (req, res)=>{
    res.send("Detta är övning 2: Hello world.")
})

//övning 3

app.get('/index.html', (req, res)=>{
    res.sendFile(__dirname + '/index.html')

})

//Övning 4

let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']

app.get('/fruits', (req, res)=>{
    console.log("Frukten är: ", res)
    res.send(fruits[index])
})

app.listen(port, ()=>{
    console.log("Server listening on port: ", port)
})