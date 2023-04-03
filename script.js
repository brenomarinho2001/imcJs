

var altura = null
var peso = null

function etapaBemVindo(){
    var ct1 = document.getElementById('ct1')
    ct1.style.display = 'none'
    MostrarAltura()
}

function MostrarAltura(){
    var ct2 = document.getElementById('ct2')
    ct2.style.display = 'inline'
}

function etapaAltura(){
    

    var myinputaltura = document.getElementById('myinputaltura')
    console.log(typeof(myinputaltura.value))
    


    if(myinputaltura.value != '' && Number.isInteger(parseFloat(myinputaltura.value)) == false){
        var ct2 = document.getElementById('ct2')
        ct2.style.display = 'none'
        altura = myinputaltura.value
        MostrarPeso()
    }
    
}

function MostrarPeso(){
    var ct3 = document.getElementById('ct3')
    ct3.style.display = 'inline'


    
}

function etapaPeso(){
    var myinputpeso = document.getElementById('myinputpeso')
    console.log(myinputaltura.value)
    

    if(myinputpeso.value != '' && Number.isInteger(parseFloat(myinputpeso.value)) == true){
        var ct3 = document.getElementById('ct3')
        ct3.style.display = 'none'
        peso = myinputpeso.value
        altura = myinputaltura.value
        MostrarFim()
    }

}

function MostrarFim(){
    var ct4 = document.getElementById('ct4')
    ct4.style.display = 'inline'

    calcular(altura,peso)
}

function calcular(a,p){
    var altura = a
    var peso = p

    var resultado = peso/(altura * altura)

    var pa = document.getElementById('resultadoimc')
    pa.innerHTML = 'IMC:' + resultado.toFixed(0)

    var pesoideal = document.getElementById('pesoideal')


    // MAGREZA NORMAL SOBREPESO OBESIDADE OBESIDADE GRAVE

    if(resultado < 18.5){
        pesoideal.innerHTML = 'Magreza'
    }

    if(resultado > 18.5 && resultado < 24.9){
        pesoideal.innerHTML = 'Peso Ideal'
    }

    if(resultado > 25 && resultado < 29.9 ){
        pesoideal.innerHTML = 'SobrePeso'
    }

    if(resultado > 30){
        pesoideal.innerHTML = 'Obesidade'
    }

}