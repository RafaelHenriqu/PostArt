// Variaveis //

const Express = require("express")
const path = require("path")
const App = Express()
const MYSQL = require("mysql2")
const { error } = require("console")

// Configuração //

require("dotenv").config()
const MySql = MYSQL.createConnection({
    host:process.env.Host,
    user:process.env.User,
    password:process.env.Password,
    database:process.env.Database,
    port:process.env.Port
})
App.use(Express.static(path.join(__dirname,"/public")))

// Rotas 
App.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/view/Index.html"))
})
App.get("/Data",(req,res)=>{
    let Object = {}    
    let n =0
    MySql.query("SELECT * FROM publication",(Error,Value,Fields)=>{
        if (!Error){
            Value.forEach(e=>{
                n=n+1
                Object[n] = {
                    Name:e.Name,
                    Author:e.Author,
                    Path:e.Path
                }
            })
        //console.log(Object) // Ativar para ver Os Dados Salvos.
        res.send(Object)
        
        
        }



    })


})

App.get("/Upload",(req,res)=>{
    res.sendFile(path.join(__dirname,"/view/Upload.html"))
})

App.get("/Post",(req,res)=>{
    const URLs = req.url
    const Title = decodeURIComponent(URLs.split("Title=")[1].split("&")[0])
    const Author = decodeURIComponent(URLs.split("Author=")[1].split("&")[0])
    const Img = decodeURIComponent(URLs.split("Img=")[1].split("&")[0])
    
    MySql.query(`INSERT INTO publication (Name,Author,Path) value ("${Title}","${Author}","${Img}")`)
    res.sendFile(path.join(__dirname,"/view/Upload.html"))
})

App.listen("5000",()=>{
    console.log("Server Statings.")
})