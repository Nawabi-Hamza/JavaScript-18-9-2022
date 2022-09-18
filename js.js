/*

var plc = document.getElementById('par')
out =""

//this is for daisbled button
var btn =document.getElementById('buttn')
currentPage=1;
function clickin(){
   
   var ourRequest = new XMLHttpRequest()
   ourRequest.open("GET" , `https://learnwebcode.github.io/json-example/animals-${currentPage++}.json`)
   ourRequest.onload= function(){
    // console.log(ourRequest.responseText)         //this change to text 
    var data = ourRequest.responseText
    var datajson = JSON.parse(data)
                        // console.log(datajson)
        for(let key in datajson){
            out += "&nbsp; <b> Name: "+datajson[key].name+"</b></br>";
            out += "&nbsp; &nbsp; Species: "+ datajson[key].species+"</br>";
            out += "&nbsp; &nbsp; Likes foods: "+ datajson[key].foods['likes']+"</br>";
            out += "&nbsp; &nbsp; dis like foods: "+ datajson[key].foods['dislikes']+"</br><hr>";
      
            plc.innerHTML=out;
        }
                //this is for disabled button
        if(currentPage==4){
        btn.classList.add('disabled')
        alert("your are out of range")
        }
        btn.classList.add('btn-danger')
       
   }
   ourRequest.send()
   }
   */
//================json string file ==============================
/*
var plc = document.getElementById('par')
out =""
var btn =document.getElementById('buttn')
function clickin(){
    const obj ={   name:"Nabi",  lname:"noori",  job:"doc", age:23 }
    console.log(obj)
    const mySObj= JSON.stringify(obj)
    console.log(mySObj)

}
*/

var plc = document.getElementById('par')
out =""
// var btn =document.getElementById('buttn')
function clickin(){
  const items = {name:"tv" , model:"sony" , price:16000 , height:"59cm" , width:"140cm"}
  const toSt = JSON.stringify(items)
  console.log(toSt)
  localStorage.setItem("testData", toSt)
                        // text
    const itemstxt = localStorage.getItem("testData")
    console.log(itemstxt)
                        // object
    var itToJson=JSON.parse(itemstxt)
    console.log(itToJson)
    for(let key in itToJson){
        out += "---><b>"+[key]+":</b> "+ itToJson[key] + "</br>";
        plc.innerHTML=out;
    }
}
