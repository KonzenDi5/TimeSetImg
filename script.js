function carregar(){
var msg = window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
var min= data.getMinutes()
msg.innerText= `Agora são ${hora} horas e ${min} minutos.`
if(hora >= 0 && hora< 12){
    //BOM DIA!
    img.src= 'fotomanha.png'
    document.body.style.background = '#a9d3ee'
} else if (hora>= 12 && hora< 18){
    //BOA TARDE!
    img.src='fototarde.png'
    document.body.style.background= '#e2c189'
} else {
    //BOA NOITE!
    img.src='fotonoite.png'
    document.body.style.background= '#053d85'
    }
}
