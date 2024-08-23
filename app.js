

//? This will grab the entire element by the ID name
let serviceHeading = document.getElementById("serviceAmazing");


console.log(serviceHeading)

//? Grabbing the id by multiple elements by className
let serviceElements = document.getElementsByClassName("serviceIcons")
//*Makes an array with all the elements with the specified classname

console.log(serviceElements)


//Grabbing the element by css selection
let serviceSupport = document.querySelector(".amazingIcon h5")

console.log(serviceSupport)

//? Grabbing all the elements by css selection
let serviceColumns = document.querySelectorAll("serviceIcons")

console.log(serviceColumns)

//? Modify Elements section

//* if we want to add text use .innerHTML
//serviceHeading.innerHTML = "AMAZING"

//? changing the test for a specific NodeCollection
//serviceColumns[1].innerHTML ="Pizza";

//for (let i = 0; i < serviceColumns.length; i++) {
    //const element = serviceColumns[i];
    
    //serviceColumns[i].style.fontSize ="60px"
//}

//styleCenter();

//? Styling Elements
//If you look up styling property it should give you the Javascript syntax
//? https://www.w3schools.com/jsref/dom_obj_style.asp
//serviceSupport.style.color ="green"
//serviceSupport.style.fontSize ="60px"

//? EVENT LISTENERS

let serviceImageOne = document.querySelector("amazingIcon img")

console.log(serviceImageOne);

//serviceImageOne.addEventListener("click",onImagePress)

//function onImagePress (){
   // console.log("Hey ya pressed me!")
//}

let servicesText = document.querySelectorAll(".services h3")

console.log(servicesText);

function stylingText(){
    for (let i = 0; i < servicesText.length; i++) {
        const element = servicesText[i];
        
         servicesText[i].style.color ="green";
         servicesText[i].style.fontSize ="60px";
    }
}
//serviceImageOne.addEventListener("click",stylingText);

let serviceImageFour = document.querySelector("developmentIcon img")

console.log(serviceImageFour);

serviceImageFour.addEventListener("click",onImagePress)

//function onImagePress(){
    console.log(development h5.style.color="blue");
//}




Portfolio text.addEventListener("hover",onImagePress)
console.log("Ima Mr. Portfolio")



let portfolioText= document.querySelectorAll(".portfolio-container h6")
function stylingText(){
    for (let i = 0; i < portfolioText.length; i++) {
        const element = portfolioText[i];
        
         portfolioText[i].style.fontSize ="60px";
    }
}