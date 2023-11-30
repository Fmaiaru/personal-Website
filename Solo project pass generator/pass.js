let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1= []
let password2= []

let btnGen=document.getElementById("btngen")

let btnPass1=document.getElementById("contra1")
let btnPass2=document.getElementById("contra2")

var useNum=document.getElementById("cbox1")
var useSym=document.getElementById("cbox2")

let passCopied=""

let justNum=[]

let toast=document.getElementById("toast")




function click1(){
    
    passCopied=password1.join("")
    
}
function click2(){

    passCopied=password2.join("")
}

function copyPassword(){
    passCopied.select
    navigator.clipboard.writeText(passCopied)/*.then(()=>{alert("Copied to clipboard");})*/
    toast.className="show"
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2000);

}

btnPass1.addEventListener( "click", function copy1(){
    
    navigator.clipboard.writeText("");
    click1();
    copyPassword();
})
btnPass2.addEventListener( "click", function copy2(){
    click2();
    copyPassword();
    
} )



 let n = 15
btnGen.addEventListener("click", function generatePass(){   
    console.log(useSym.checked && useNum.checked)
    if (useSym.checked&&useNum.checked){justNum=characters}
    else if(!useSym.checked&&!useNum.checked){justNum =characters.filter(simbol=> simbol!=="~" && simbol!=="`"&& simbol!=="!"&& simbol!=="@"&& simbol!=="#"&& simbol!=="$"&& simbol!=="%"&& simbol!=="^"&& simbol!=="&"&& simbol!=="*"&& simbol!=="("&& simbol!==")"&& simbol!=="_"&& simbol!=="-"&& simbol!=="+"&& simbol!=="="&& simbol!=="{"&& simbol!=="["&& simbol!=="}"&& simbol!=="]"&& simbol!==","&& simbol!=="|"&& simbol!==":"&& simbol!==";"&& simbol!=="<"&& simbol!==">"&& simbol!=="."&& simbol!=="?"&& simbol!=="/"
    && simbol!=="0"&& simbol!=="1"&& simbol!=="2"&& simbol!=="3"&& simbol!=="4"&& simbol!=="5"&& simbol!=="6"&& simbol!=="7"&& simbol!=="8"&& simbol!=="9")
   }
   else if(!useSym.checked&&useNum.checked){
    justNum = characters.filter(simbol=> simbol!=="~" && simbol!=="`"&& simbol!=="!"&& simbol!=="@"&& simbol!=="#"&& simbol!=="$"&& simbol!=="%"&& simbol!=="^"&& simbol!=="&"&& simbol!=="*"&& simbol!=="("&& simbol!==")"&& simbol!=="_"&& simbol!=="-"&& simbol!=="+"&& simbol!=="="&& simbol!=="{"&& simbol!=="["&& simbol!=="}"&& simbol!=="]"&& simbol!==","&& simbol!=="|"&& simbol!==":"&& simbol!==";"&& simbol!=="<"&& simbol!==">"&& simbol!=="."&& simbol!=="?"&& simbol!=="/")
   }
   else{justNum = characters.filter(simbol=>simbol!=="0"&& simbol!=="1"&& simbol!=="2"&& simbol!=="3"&& simbol!=="4"&& simbol!=="5"&& simbol!=="6"&& simbol!=="7"&& simbol!=="8"&& simbol!=="9")}
    password1=[]
    password2=[]
    
    
    for (let i = 0; i<n; i++){
        x1=Math.floor(Math.random()*justNum.length)
        x2=Math.floor(Math.random()*justNum.length)
        let passChar1= justNum[x1]
        let passChar2= justNum[x2]
        password1.push(passChar1)
        password2.push(passChar2)
        
        
    }
    btnPass1.textContent=password1.join("");
    btnPass2.innerHTML=password2.join("");
    console.log(justNum);  
    })





