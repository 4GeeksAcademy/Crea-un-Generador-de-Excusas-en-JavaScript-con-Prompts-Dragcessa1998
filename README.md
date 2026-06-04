<p align="center">
  <img src="GeneradorDeExcusas.png" alt="Generador de Excusas" width="600">
</p>

<h1 align="center">El Generador de Excusas (JavaScript)</h1>

<p align="center"><em>Disneylandia para procrastinadores y perezosos.</em></p>

---

Este proyecto es ideal para evitar a alguien molestoso. No toma más de 20 líneas de código y puede salvarte por el resto de tu vida.

## Objetivo

Este proyecto está diseñado como una primera experiencia práctica con JavaScript, enfocada en aprender haciendo. A través de la creación de un generador de excusas que se ejecuta por consola, los estudiantes trabajarán con una cantidad reducida de código, lo que permite concentrarse en los fundamentos del lenguaje sin distracciones innecesarias.

Durante el desarrollo del proyecto se reforzarán conceptos clave como el uso de arrays, la selección aleatoria de datos y la construcción de strings. Por su simplicidad y carácter lúdico, este ejercicio funciona como un excelente punto de partida para quienes comienzan su camino como desarrolladores.

Además, el proyecto introduce el uso de Copilot como herramienta de apoyo al desarrollo. El objetivo no es solo obtener un programa funcional, sino aprender a guiar a la IA mediante instrucciones claras y progresivas, entendiendo y validando cada parte del código generado antes de avanzar al siguiente paso.

## Reglas del proyecto

- Trabajar paso a paso, siguiendo el orden indicado.
- No pedir todo el código en un solo prompt.
- Leer y comprender el código antes de continuar al siguiente paso.
- Ejecutar el proyecto usando Node.js.
- Imprimir el resultado final en consola con `console.log`.

## Cómo lo hicimos (paso a paso)

A continuación se describe cómo construimos el generador, guiando a Copilot con prompts claros y progresivos. Cada paso se validó antes de avanzar al siguiente.

### Paso 1 – Crear el archivo

Le pedimos a Copilot que creara un archivo JavaScript llamado `excuse-generator.js`, preparado para ejecutarse con Node.js.

### Paso 2 – Array de "quién"

Creamos un array llamado `who` con sujetos posibles que pueden iniciar una excusa:

```js
const who = ["Mi perro", "Mi abuela", "El vecino", "Un fantasma"];
```

### Paso 3 – Array de "acción"

Creamos un array llamado `action` con acciones en pasado que forman parte de la excusa:

```js
const action = ["se comió", "rompió", "perdió", "escondió"];
```

### Paso 4 – Array de "qué"

Creamos un array llamado `what` con objetos o situaciones relacionadas con la excusa:

```js
const what = ["mi tarea", "las llaves", "el cargador", "mi mochila"];
```

### Paso 5 – Array de "cuándo"

Creamos un array llamado `when` con referencias de tiempo:

```js
const when = ["hoy", "ayer", "esta mañana", "antes de salir"];
```

### Paso 6 – Selección aleatoria

Usando `Math.random()` y `Math.floor()` obtuvimos un valor aleatorio de cada array:

```js
const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];
```

### Paso 7 – Construir la excusa

Concatenamos los valores aleatorios en una sola frase y la guardamos en la variable `excuse`:

```js
const excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";
```

### Paso 8 – Imprimir en consola

Finalmente imprimimos el resultado con `console.log`:

```js
console.log(excuse);
```

## Ejecución del programa

Ejecuta el proyecto desde la terminal con el siguiente comando:

```bash
node generador-excusas/excuse-generator.js
```

Ejemplo de salida:

```
Mi perro se comió mi tarea esta mañana.
```

Cada vez que lo ejecutes obtendrás una excusa diferente generada al azar.
