var pls = document.getElementById('par')

function clickin(){
    const ourRequest = new XMLHttpRequest()
    ourRequest.open("GET" , 'mymassege.txt')
    ourRequest.onload = function(){
        pls.innerHTML= this.responseText
    }
    ourRequest.send()
}