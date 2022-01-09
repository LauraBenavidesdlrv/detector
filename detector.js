//1
function detector(arr, condicion){
    let elemento = 0;
    for(let i = 0; i < arr.length; i++){
        elemento = arr[i];
        if(condicion(elemento)){
            console.log(elemento);
        }        
    }
    console.log(undefined);
}
detector([1,2,3,4,5,6], elemento => elemento > 3 );
//2
function detector2(arr, filtro){
    console.log(arr.find(filtro))
}
detector2([2,3,4,5,7,8], elemento => elemento < 4 );
//3
function detector3(arr,filtro){
    console.log(arr[arr.map(filtro).indexOf(true)]);
}
detector3([2,3,4,5,7,8], elemento => elemento < 4 );