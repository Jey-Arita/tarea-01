let primo = parseInt(prompt('Ingrese un numero'));
let suma=0;

for(let i=2; i<primo; i++){
    if((primo%2)==0){
        suma++;
    }
}
if(suma==0){
    alert(`El numero ${primo} es primo`);
}else{
    alert(`El numero ${primo} no es primo`);
}