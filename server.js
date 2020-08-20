const express=require("express")
const app=express()

let port=1337;


//ROUTES*************
app.get('/', (req, res)=>{
    console.log("GET /")
    res.send("I never did mind about the little things.")
})

//*övning 2
app.get('/hello', (req, res)=>{
    console.log('GET /hello')
    res.send("Detta är övning 2: Hello world.")
})

//*övning 3
app.get('/index.html', (req, res)=>{
    console.log('GET /index')
    res.sendFile(__dirname + '/index.html')

})

//*Övning 4*****************plocka ut valt objekt
let fruits = ['strawberry', 'rambutan', 'chayote', 'ackee', 'dragon fruit']

app.get('/fruits', (req, res)=>{
    console.log("GET /fruits", req.query)
    //Request är ett objekt som innehåller ett queryobjekt, alltså går det att plocka ut egenskaper ur queryobjektet.
    let index=req.query.index
    res.send(fruits[index])
})

//*Övning 7a******************lägg till nytt objekt
//i url skriv: localhost:1337/fruits/add?name=nyfrukt

app.get('/fruits/add', (req,res)=>{
    console.log("GET /add")
    let name=req.query.name
    fruits.push(name);
    res.send("La till:" + name)
})

//*Övning 7b*******************params
//i url skriv: localhost:1337/fruits/add/nyfrukt

app.get('/fruits/add/:newFruit', (req, res)=>{
    console.log('GET fruits/add/:newFruit'+ req.params)
    let name=req.params.newFruit;
    fruits.push(name)
    res.send('Added with params: '+ name)
})

//START SERVER********************
app.listen(port, ()=>{
    console.log("Server listening on port: ", port)
})