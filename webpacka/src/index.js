import "./index.css";
import "../../webpacka/download.jpg";

const button=document.getElementById("submit");
//for loading the data for displaying
var datastorages=JSON.parse(localStorage.getItem("notesdata"))||[];

button.addEventListener("click",takedata);

displaydata()

//appending logo;


var imgl=document.createElement("img");
imgl.src="./download.jpg";
document.getElementById("root").appendChild(imgl);


function takedata()
{
    const input=document.getElementById("itake").value;
    //pushing the data in the local storage array to push updated once
    datastorages.push(input);
    //stringifying the data
    datastorages=JSON.stringify(datastorages);
    localStorage.setItem("notesdata",datastorages);   
    console.log("hi");
    displaydata()
}

function displaydata()
{
    //cleaning the display contents to prevent duplicates
    var displaydiv=document.getElementById("display");
    displaydiv.innerHTML="";
    datastorages=JSON.parse(localStorage.getItem("notesdata"))||[];
    datastorages.map(function(ele){        
        var h3=document.createElement("h3");
        h3.textContent=ele;
        displaydiv=document.getElementById("display");
        displaydiv.appendChild(h3);
    })        
    
}
