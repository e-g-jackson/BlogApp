let uName= document.getElementById("username");
let psw= document.getElementById("password");
let submitBtn= document.getElementById("submitBtn");
// will hold the user data from the API
let userData;

function checkId(event){
    event.preventDefault();
    console.log(userData.record.users)
    for(person of userData.record.users){
        if(person.email == uName.value && person.psw == psw.value){
            localStorage.setItem("fname", person.fname);
            localStorage.setItem("lname", person.lname);
            localStorage.setItem("email", person.email);
            localStorage.setItem("psw", person.psw);
            window.location.href = "profile.html";
        }
    }
}

async function getData(){
    try{
        const response = await fetch("https://api.jsonbin.io/v3/b/6730267ee41b4d34e4519468");
        if(!response.ok){
            throw new error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        console.log(json)
        userData = json
    } catch(error){
        console.error("Error: " + error)
    }
}

getData();
submitBtn.addEventListener("click", checkId);
