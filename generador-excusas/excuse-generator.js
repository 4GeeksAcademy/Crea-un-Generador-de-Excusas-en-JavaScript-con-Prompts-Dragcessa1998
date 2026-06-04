const who = ["Mi perro", "Mi abuela", "El vecino", "Un fantasma"];
const action = ["se comió", "rompió", "perdió", "escondió"];
const what = ["mi tarea", "las llaves", "el cargador", "mi mochila"];
const when = ["hoy", "ayer", "esta mañana", "antes de salir"];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

const excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";

console.log(excuse);
