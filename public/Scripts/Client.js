document.querySelector("body").addEventListener("click",(e)=>{
    var Touch = document.createElement("div")
    Touch.classList = "Touch"
    Touch.style.top = `${e.clientY}px`
    Touch.style.left = `${e.clientX}px`
    Touch.style.setProperty('--i',`${Math.floor(Math.random() * 10000 + 1000)}ms`)
    Touch.addEventListener("animationend",()=>{
        Touch.remove()
    })
    document.querySelector("body").appendChild(Touch)
})


function Image_Selection(Img){
    const Image_View = document.getElementById("Img_View")
    const Image = window.getComputedStyle(Img).backgroundImage
    const Title = Img.getAttribute("name")
    Image_View.style.visibility = "visible"
    Image_View.style.backgroundImage = Image
    document.querySelector("#Img_View > h1").innerHTML = Title
    document.querySelector("main").style.filter = "blur(1vh)"


    


}

document.getElementById("Img_View").addEventListener("click",()=>{
    document.getElementById("Img_View").style.visibility = "hidden"
    document.querySelector("main").style.filter = "blur(0vh)"
})

fetch("/Data").then(response => response.json()).then(data =>{
    const Objects = Object.keys(data)
    
    Objects.forEach(e=>{
    // <div class="Posts" onclick="Image_Selection(this)" name="A Luz da lua"></div>        
    const Div = document.createElement("div")    
    let Name = data[e].Name
    let Author = data[e].Author
    let Path = data[e].Path
    
    Div.classList = "Posts"
    Div.setAttribute("name",Name)
    Div.style.backgroundImage = `url(${Path})`
    Div.addEventListener("click",(e)=>{
        Image_Selection(Div)
    })



    document.getElementById("Publication").appendChild(Div)



    })
})