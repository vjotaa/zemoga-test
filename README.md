# Zemoga Frontend test

Para esta prueba se utilizo Angular unicamente.
No se utilizo ninguna libreria de estilos.

## Instalación

Debido a que el proyecto es de tipo frontend unicamente existe todo el proceso en la rama master.

Simplemente hay que correr `npm install` para descargar la carpera `node_modules` y luego de eso correr el proyecto con `ng serve`
previo a esto se tiene que tener instalado angular y npm en el computador.

Para correr pruebas unitarias se necesita colocar el siguiente comando `ng test`

El proyecto se puede ser en linea desde https://zemoga-test-d5940.web.app/home

## Estructura del proyecto

El proyecto esta estructura por 3 carpetas.

- Layout
- Components
- Pages

1- La carpeta layout posee el componente Header el cual se ve reflejado en toda la web.

2- La carpeta Components tiene toda la logica del poll como tal, tiene 3 componentes: vote-card, card, progress-line.

vote-card y card se diferencian por los estilos, pero basicamente la
logica es la misma, quise separarlos porque eran estilos muy
diferentes.

La carpeta llamada pages posee todas las vistas que posee la web.

## Beneficios de utilizar CSS puro

- Facilidad para la modificación de componentes cuando no tienen una clase especifica de una libreria de estilos.
- Debido a los estilos minimalistas del proyecto no era tan necesario utilizar una libreria de estilos, las tarjetas eran personalizables y para la grid se utilizo flex y responsive grid ya implementados en scss.
- Se creo facilmente un archivos de variables debido a que se utilizaba SCSS.

## Pruebas unitarias

Se hicieron pruebas unitarias dentro de la carpeta components, basicamente se hizo varias pruebas de una funcion en especifica.
