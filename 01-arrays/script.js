const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Mario";
teachers.splice(4, 1, 'Patrick');
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(teachers);
console.log(lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

for (let i = 0; i <= 6; i++) {
  if (teachers[i] == "Lewis") {
    console.log("trovato", i);
    const lewisIndex = i;
  }

}
/* BONUS : 
1 CREA UN CICLO CHE STAMPA I NUMERI DA 0 A 6 
2 CREA UN CICLO CHE STAMPA I TEACHERS IN POSIZIONE DA 0 A 6 
3 CREA UN CICLO CHE STAMPA ENTRAMBI. ESEMPIO 0 MARIO 1 PEPPE ECC...
*/
// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
for (let i = 0; i <= 6; i++) {
  if (teachers.length == 0) {
    console.log("array vuoto");
     } 
     else {
      console.log("nell'array sono presenti degli elementi");
     }
}
const isTeachersEmpty = "nell'array sono presenti degli elementi";

