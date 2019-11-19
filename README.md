
 		
PRÁCTICA DE LABORATORIO
CARRERA: INGENIERIA DE SISTEMA/COMPUTACION	ASIGNATURA: HIPERMEDIAL
NRO. PRÁCTICA:	3	TÍTULO PRÁCTICA: Resolución de problemas sobre JavaScript
OBJETIVO
•	Entender y organizar de una mejor manera los sitios de web en Internet
•	Diseñar adecuadamente elementos gráficos en sitios web en Internet.
•	Crear sitios web aplicando estándares actuales.


INSTRUCCIONES	A partir de los siguientes problemas se pide implementar soluciones basadas en el lenguaje de programación de JavaScript usando funciones y eventos.


1.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:
a.	Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador.
b.	Se debe validar qué, en el campo del nombres, ingrese mínimo un nombre y que permita ingresar sólo letras.
c.	Se debe validar qué, en el campo del apellidos, ingrese mínimo un apellido y que permita ingresar sólo letras.
d.	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10.
e.	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.
f.	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.
g.	Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra minúscula y un carácter especial (@, _, $)

Indicaciones:
•	Para realizar las validaciones de solo letras, o sólo números. Se las debe realizar en tiempo real, es decir, a medida que el usuario escribe en el campo.
•	Todos los campos de entrada dentro del formulario deben de ser de tipo “text”.
•	Las demás validaciones se realizarán al momento de “enviar” (submit) la información del formulario hacia una página php. Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintara el
campo con un borde rojo que representará que el campo tiene un error. Si se
 

	cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, pasaste las validaciones!”.

2.	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/)

 

Indicaciones:
•	Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “images”.
•	La galería de imágenes debe visualizar exclusivamente 5 imágenes.
•	Cada vez que se haga clic en le botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes.
•	Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado)
•	Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar
deshabilitado)

ACTIVIDADES POR DESARROLLAR
1.	Crear un repositorio en GitHub con el nombre “Practica03 – Javascript”

![image](https://user-images.githubusercontent.com/56461202/69172569-129b5f80-0acc-11ea-8631-2b6ed786d31f.png)

2.	Crear una carpeta para la solución de cada ejercicio antes mencionado

![image](https://user-images.githubusercontent.com/56461202/69172604-29da4d00-0acc-11ea-9c70-116c73155ab9.png)

•	GALERÍA

![image](https://user-images.githubusercontent.com/56461202/69172680-4b3b3900-0acc-11ea-828b-e527faa33081.png)

-	Creamos un arreglo con las imágenes en el archivo validar.js

 ![image](https://user-images.githubusercontent.com/56461202/69172708-57bf9180-0acc-11ea-8c7e-db34ebf830eb.png)


-	Dentro de esta función utilizamos el método random para generar aleatoriamente las imágenes y llamamos a las funciones de verificar e imprimir.

![image](https://user-images.githubusercontent.com/56461202/69172735-627a2680-0acc-11ea-84fc-98727e448f8c.png)


•	VALIDACIONES

![image](https://user-images.githubusercontent.com/56461202/69172756-7160d900-0acc-11ea-9103-7352523e0db1.png)

-	Esta función permite sacar cada uno de los elementos que forman parte del formulario y pregunta si cada text se encuentra vacío si este está vacío manda a imprimir en el span creado en el archivo html un mensaje par que este campo sea llenado además que manda un style color rojo al borde de cada elemento. 

![image](https://user-images.githubusercontent.com/56461202/69172784-7b82d780-0acc-11ea-9e79-f2090360f94c.png)

-	Esta función es la que valida la cedula por el ultimo digito, si la cedula ingresada es la correcta el span se mostrara vacío y se pintara el elemento de color negro el borde, pero si la cedula que se ingresa es incorrecta ya sea que no sea una cedula validada o el tamaño de esta no sea el correcto igual a 10 se manda un mensaje en el span diciendo que ingrese una cedula valida además el borde del elemento se pintara de color rojo para indicar que existe un error.

 ![image](https://user-images.githubusercontent.com/56461202/69172817-89d0f380-0acc-11ea-8de3-246f4f7ac353.png)


-	Esta función nos permite que lo que se ingrese sea solo letras por lo que captura la entrada del teclado luego se le asigna a una variable, luego creamos una variable la cual tiene las letras en mayúsculas y minúsculas y el espacio luego preguntamos si lo ingresado está en algunas de las variables ingresada de solo letras o de carácter especial.

 ![image](https://user-images.githubusercontent.com/56461202/69172849-95bcb580-0acc-11ea-8b38-5c0ba63468d8.png)


-	Esta función captura la entrada del teclado y nos retorna solo números y un carácter especial en caso de que sea insertado.

 ![image](https://user-images.githubusercontent.com/56461202/69172868-9fdeb400-0acc-11ea-84fa-b565a59d7039.png)

-	Esta función nos valida que mínimo se pueda ingresar un nombre por lo que sacamos el valor del text y mandamos a contar los carácter especial espacio y luego preguntamos que si este es igual o menor a dos nos deje ingresar pero si mayor se nos marque de color rojo y se imprima en el span.

![image](https://user-images.githubusercontent.com/56461202/69172892-aa00b280-0acc-11ea-8b5e-260846c716d5.png)


-	Esta función nos valida que mínimo se pueda ingresar un apellido por lo que sacamos el valor del text y mandamos a contar los carácter especial espacio y luego preguntamos que si este es igual o menor a dos nos deje ingresar pero si mayor se nos marque de color rojo y se imprima en el span.

 
![image](https://user-images.githubusercontent.com/56461202/69172925-b84ece80-0acc-11ea-843e-5b47ffe05c3a.png)



-	En esta función validamos que los números ingresados del teléfono sean igual a 10.

 ![image](https://user-images.githubusercontent.com/56461202/69172990-de746e80-0acc-11ea-8b6c-03ae4b044a9d.png)


-	En esta función validamos que la fecha ingresada sea la correcta

 ![image](https://user-images.githubusercontent.com/56461202/69173013-eb915d80-0acc-11ea-8dde-1182654e5e3f.png)


-	En esta función validamos que la contraseña tenga mínimo 8 caracteres.

![image](https://user-images.githubusercontent.com/56461202/69173038-fd730080-0acc-11ea-8ec0-53503ea69e83.png)




 
 
•	INFORMACIÓN DE GITHUB (USUARIO Y URL DEL REPOSITORIO DE LA PRÁCTICA)

Usuario: bcarrascoi
URL: https://github.com/bcarrascoi/Practica03-Javascript.git

RESULTADO(S) OBTENIDO(S):
•	Funcionamiento correcto de las validaciones programadas.

•	Creación exitosa de páginas utilizando html, css y javascript.

CONCLUSIONES:

•	Se logró implementar de forma correcta las diferentes validaciones para obtener un optimo funcionamiento de las paginas html solicitadas.

•	Mediante el uso del archivo estilo.css se logró una estructura correcta para las diferentes páginas.

RECOMENDACIONES:

•	Probar la solución de la práctica en al menos tres navegadores web; Google Chrome, Firefox y Safari



	Estudiante: Bryan Patricio Carrasco Illescas	

Firma: 

 ![image](https://user-images.githubusercontent.com/56461202/69173134-25fafa80-0acd-11ea-9999-704d27d77445.png)


