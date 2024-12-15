// selects the burger menu (only visible on small screens)
let burgerMenu = document.getElementById("burgerMenu");

// selects the little drop down menu contents (only visible on small screens)
let littleDrop = document.getElementById("littleDrop");

let openLittleDrop = () => {
    littleDrop.style.display = "block";
    
    // change icon
    let icon = burgerMenu.children[0];
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x")
    
    // switch the event listeners
    littleDrop.removeEventListener("click", openLittleDrop);
    littleDrop.addEventListener("click", closeLittleDrop);
}

let closeLittleDrop = () => {
    littleDrop.style.display = "none";
    
    // change icon
    let icon = burgerMenu.children[0];
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars")
    
    // switch the event listeners
    littleDrop.removeEventListener("click", closeLittleDrop);
    littleDrop.addEventListener("click", openLittleDrop);
}

//opens the little menu(only on small screens)
burgerMenu.addEventListener("click", openLittleDrop);
