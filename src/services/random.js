let arr= new Array();
let arrTemp= new Array();
const numeros=()=>{
    for(let i=1;i<56;i++){
        arr.push(i);
    }
}
const numero=()=>{
    return Math.floor(Math.random()*55);
}

const aleatorio=()=>{
    numeros();
    let desordenados= new Array();
    let i=0
    let salir=true;
    let j=0;
    do{
        j=numero();
        if(arr[j]!='x'){
            desordenados.push(arr[j]);
            arr[j]='x'
            i++;
        }
        if(i===3){
            salir=false;
        }
    }while(salir);
    return desordenados;
}
arrTemp=aleatorio();
console.log(arrTemp);