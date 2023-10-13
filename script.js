function contar(){
    var ini = document.getElementById('txtn1')
    var fim = document.getElementById('txtn2')
    var pass = document.getElementById('txtn3')
    var res =document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 ) {
        res.innerHTML= 'Impossível contar!'
        
    } else {
        res.innerHTML= 'Contando: '
        var i = Number(ini.value)
        var f = Number (fim.value)
        var p = Number (pass.value)
        if (p <= 0) {
            window.alert ('Passo inválido! Considerando PASSO 1') 
            p = 1
        }
        if (i<f) {
            //contagem crescente
            for(var c = i; c<=f; c+=p) {
                res.innerHTML += `${c} \u{1F449}`
    
            }
          
        } else {
            //contagem decrescente
            for (var c=i; c>=f; c-=p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

        /*

        
        
}

}*/