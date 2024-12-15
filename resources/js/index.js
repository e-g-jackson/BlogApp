let showMoreBtns = document.getElementsByClassName("readMode");
let voteBtns = document.getElementsByClassName("voteSpan");

// URL for the API with information to populate the site.
const API_URL = "https://api.jsonbin.io/v3/b/6730267ee41b4d34e4519468";

/*
// selects the burger menu (only visible on small screens)
let burgerMenu = document.getElementById("burgerMenu");

// selects the little drop down menu contents (only visible on small screens)
let littleDrop = document.getElementById("littleDrop");*/

let readMore = (event) => {
    // The button
    let btn = event.target;
    // The text box
    let textBox = btn.parentElement.childNodes[9];
    
    // remove readMore event listener
    btn.removeEventListener("click", readMore);
    // add readLess event listener
    btn.addEventListener("click", readLess)
    
    // change the button's appearence
    btn.innerHTML = "Show Less <i class=\"fa-solid fa-circle-chevron-up\"></i>"
    btn.style.backgroundColor = "limegreen"
    btn.style.color = "white";
    // enlarge the box
    textBox.style.height = "auto"
    
}

let readLess = (event) =>{
    // the button
    let btn = event.target;
    // the text box
    let textBox = btn.parentElement.childNodes[9];
    
    // remove readLess event listener
    btn.removeEventListener("click", readLess);
    // add readMore event listener
    btn.addEventListener("click", readMore);
    
    // change the buttons appearence back to default
    btn.innerHTML = "Show More <i class=\"fa-solid fa-circle-chevron-down\"></i>"
    btn.style.backgroundColor = "white";
    btn.style.color = "#fe7521"
    // shrink the box
    textBox.style.height = "72px"
    
}

let vote = (event) => {
    event.target.childNodes[3].innerHTML++;
}

for (btn of showMoreBtns){
    btn.addEventListener("click", readMore)
}

for (btn of voteBtns){
    btn.addEventListener("click", vote)
}


async function getStuff() {
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        console.log(json)
        
        // Populate Featured Article 1
        let titleF1 = document.getElementById("titleF1");
        titleF1.innerHTML = json.record.posts[0].title;
        let publishedF1 = document.getElementById("publishedF1");
        publishedF1.innerHTML = json.record.posts[0].date;
        let authorF1 = document.getElementById("authorF1");
        authorF1.innerHTML = json.record.posts[0].author;
        let articleF1 = document.getElementById("articleF1");
        articleF1.innerHTML = json.record.posts[0].content;
        
        // Populate Featured Article 2
        let titleF2 = document.getElementById("titleF2");
        titleF2.innerHTML = json.record.posts[1].title;
        let publishedF2 = document.getElementById("publishedF2");
        publishedF2.innerHTML = json.record.posts[1].date;
        let authorF2 = document.getElementById("authorF2");
        authorF2.innerHTML = json.record.posts[1].author;
        let articleF2 = document.getElementById("articleF2");
        articleF2.innerHTML = json.record.posts[1].content;
        
        // Populate Featured Article 3
        let titleR1 = document.getElementById("titleR1");
        titleR1.innerHTML = json.record.posts[2].title;
        let publishedR1 = document.getElementById("publishedR1");
        publishedR1.innerHTML = json.record.posts[2].date;
        let authorR1 = document.getElementById("authorR1");
        authorR1.innerHTML = json.record.posts[2].author;
        let articleR1 = document.getElementById("articleR1");
        articleR1.innerHTML = json.record.posts[2].content;
        
        // Populate Featured Article 4
        let titleR2 = document.getElementById("titleR2");
        titleR2.innerHTML = json.record.posts[3].title;
        let publishedR2 = document.getElementById("publishedR2");
        publishedR2.innerHTML = json.record.posts[3].date;
        let authorR2 = document.getElementById("authorR2");
        authorR2.innerHTML = json.record.posts[3].author;
        let articleR2 = document.getElementById("articleR2");
        articleR2.innerHTML = json.record.posts[3].content;
    } catch (error) {
        console.error(error.message);
    }
}

getStuff();
