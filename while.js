// Estrutura While, semelhante ao FOR
/*
let marcas = ["LG","Samsung","Microsoft","Apple","Acer"]; 
let ctl = 0; 
while(ctl < marcas.length){
    console.log(ctl+' - '+marcas[ctl]); 
    ctl++;
} */ 

//Ideal para quando eu tiver que executar uma rotina que não sei a quantidade necessária de repetições

function getIntAleat(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opc = 0;
while(opc != -1){
    opc = getIntAleat(-1,10);
    console.log("Opção escolhida:"+opc);
}

// console.log("Fim!");

// function geraNumero(max,min){
//     let valor = Math.random();
//       console.log(valor);
//          valor = valor * (max - min) + min; 
//          valor = Math.floor(valor);
//       return valor;  
//     }
    
//     console.log(geraNumero(-1,10))


