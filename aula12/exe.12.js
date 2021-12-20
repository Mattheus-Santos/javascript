var ano = new Date()
var mes = new Date()
var data = new Date()
var agora = new Date()
var hora = agora.getHours()
var dia = data.getDate()
var month = mes.getUTCMonth()
var year = Number(ano.setFullYear())
console.log(`Agora são exatamente ${hora} horas de ${dia}/${month}/${year}.`)
if (hora < 12) {
    console.log(`Bom Dia.`)
} else if (hora <= 18) {
    console.log(`Boa Tarde.`)
//} else if (hora < 5) {
    //console.log(`Boa Madrugada.`)
} else {
    console.log(`Boa Noite.`)
}