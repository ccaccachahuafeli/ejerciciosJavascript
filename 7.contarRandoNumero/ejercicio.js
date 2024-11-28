//Escribir una función llamada `contarRango` que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

//**Nota:** Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo
//escribe tu respuesta acá
function contarRango(a, b) {
    let count = 0;
    for (let i = a + 1; i < b; i++) {
        count++;
    }
    return count;
}
// código de prueba
console.log(contarRango(1, 9)) 
console.log(contarRango(1332, 8743)) 
console.log(contarRango(5, 6)) 