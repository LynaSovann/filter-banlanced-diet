const btn = document.querySelectorAll(".btn button");
for(let i =0; i<btn.length; i++) {
    btn[i].addEventListener("click", () => {
        const activeBtn = document.querySelector(".active-btn");
        activeBtn.classList.remove("active-btn");
        btn[i].classList.add("active-btn");
    })
}
const item = document.querySelectorAll(".item");

btn[0].addEventListener("click", () => {
    item.forEach(x => {
        x.style.display = "flex";
    })
})

btn[1].addEventListener("click", () => {
    item.forEach(x => {
        if(x.getAttribute("type") === "grain") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    })
})

btn[2].addEventListener("click", () => {
    item.forEach(x => {
        if(x.getAttribute("type") === "fruit") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    })
})

btn[3].addEventListener("click", () => {
    item.forEach(x => {
        if(x.getAttribute("type") === "milk") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    })
})

btn[4].addEventListener("click", () => {
    item.forEach(x => {
        if(x.getAttribute("type") === 'vegetable'){
            x.style.display = "flex";
        }
        else{
            x.style.display = "none";
        }
    });
})

btn[5].addEventListener("click", () => {
    item.forEach(x => {
        if(x.getAttribute("type") === "meat-and-bean") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    })
})
