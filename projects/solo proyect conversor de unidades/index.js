const meterToFeet = document.getElementById("cp1")
const literToGallon = document.getElementById("cp2")
const kiloToPound = document.getElementById("cp3")



const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("input")

calc()

convertBtn.addEventListener("click", calc )

function calc(){
    let valor = input.value
    const mttoFtCalc =(valor*3.281).toFixed(3)
    const ltToGllCalc =(valor*0.264).toFixed(3)
    const kgToPdCalc = (valor*2.204).toFixed(3)
    
    const ftToMtCalc =(valor/3.281).toFixed(3)
    const gllToLtCalc =(valor/0.264).toFixed(3)
    const pdToKgCalc = (valor/2.204).toFixed(3)
    
    
     meterToFeet.innerText=`${valor} meters = ${mttoFtCalc} feet | ${valor} feet = ${ftToMtCalc} meters`
     literToGallon.innerText=`${valor} liter = ${ltToGllCalc} gallon | ${valor} gallon = ${gllToLtCalc} liter`
     kiloToPound.innerText=`${valor} kilogram = ${kgToPdCalc} pound | ${valor} pound = ${pdToKgCalc} kilogram`
    }