const nav_link = document.querySelectorAll(".nav-links")
nav_link.forEach(nav_link =>{
    nav_link.addEventListener("click", () =>{
        document.querySelector(".active")?.classList.remove("active") 
        nav_link.classList.add("active")
    })
})