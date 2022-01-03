/* 
UNIVERSIDADE FEDERAL DO AMAPÁ
CURSO: CIÊNCIA DA COMPUTAÇÃO
DISCIPLINA: ELETRÔNICA DIGITAL
PROFESSOR: CLÁUDIO ROGÉRIO 
NOME: PAULO SILVA DOS SANTOS
ATIVIDADE PRÁTICA 01
*/

function verificar(){
    var fnum = document.getElementById('num')
    var res = document.querySelector('div#resultado')
    var entrada = Number(fnum.value)
    if (fnum.value.length == 0 || Number(fnum.value) <= 0 || Number(fnum.value) >254) {
    window.alert('[ERRO] Digite apenas valores entre 1 e 254!')
}   else {
        var img = document.createElement('img')
        img.setAttribute('class', 'animacao2')
        img.setAttribute('src', 'animacao-resultado.gif')
         }
         //animação que fica embaixo do resultado

         var num = entrada //entrada
         var bin = (num >>> 0).toString(2) //converte em binário
         var um = "0"
         var dois = "00"
         var tres = "000"
         var quatro = "0000"
         var cinco = "00000"
         var seis = "000000"
         var sete = "0000000"
         var t = parseInt(bin.length)

         switch (t){
             case 7: var binario = um + bin
             break
             case 6: var binario = dois + bin
             break
             case 5: var binario = tres + bin
             break
             case 4: var binario = quatro + bin
             break
             case 3: var binario = cinco + bin
             break
             case 2: var binario = seis + bin
             break
             case 1: var binario = sete + bin
             break
             case 8: var binario = bin
         } //criei esse switch para adicionar os zeros a esquerda

       
             var c1 = binario.split('').map(x => x === "0" ? "1" : "0").join(''); //complemento a 1 (inverte os digitos)

             var temp = 256 - entrada // complemento a 2
             var c2 = temp.toString(2) // complemento a 2
             t_c2 = parseInt(c2.length)

             switch (t_c2){
                case 7: var comp_two = um + c2
                break
                case 6: var comp_two = dois + c2
                break
                case 5: var comp_two = tres + c2
                break
                case 4: var comp_two = quatro + c2
                break
                case 3: var comp_two = cinco + c2
                break
                case 2: var comp_two = seis + c2
                break
                case 1: var comp_two = sete + c2
                break
                case 8: var comp_two = c2
            }
            //criei esse switch para concatenar os zeros a esquerda do complemento 2

            if (temp>127){
                var hex_co = temp - 128
            }
            else if (temp==127 || (temp<127 && temp>63)){
                var hex_co = temp - 64
            }
            else if (temp==63 || (temp<63 && temp>31)){
                var hex_co = temp - 32
            }
            else if (temp==31 || (temp<31 && temp>15)){
                var hex_co = temp - 16
            }
            else if (temp==15 || (temp<15 && temp>7)){
                var hex_co = temp - 8
            }
            else if (temp==7 || (temp<7 && temp>3)){
                var hex_co = temp - 4
            }
            else if (temp==3 || (temp<3 && temp>1)){
                var hex_co = temp - 2
            }

            //esse if eu usei para descobri o hexadecimal correspondente


                     
          res.style.textAlign = 'center'
         res.innerHTML = `<p><strong>O número binário:</strong> ${binario}.<br></p>`
         res.innerHTML += `<p><strong>Complemento a 1:</strong> ${c1}.<br></p>`
         res.innerHTML += `<p><strong>Complemento a 2:</strong> ${comp_two}.<br></p>`
         res.innerHTML += `<p><strong>Decimal correspondente a complemento a 2:</strong> ${hex_co}.<br></p>`
         res.appendChild(img)

        
    }
