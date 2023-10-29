
## Página principal

La pagina cuanta con 3 secciones principales: Encabezado, cuerpo y pie. Dentro del cuerpo hay 3 seciones: Banner, Nosotros e Iconos).
El encabezado tiene 3 hipervinculos (Principal, productos y servicios), que se esconden cuando se achica la ventana.
Cuando desaparecen los hipervinculos aparece el icono ≡ (hamburguesa), que al hacerle click, aparece un menu desplegable con los 3 Hipervinculos escondidos.

En la seccion llamada Banner hay una imagen de fondo y un ::before, usado para la estética de la pagina. Se le aplicó a todo el Banner un comportamiento responsivo para ajustar el alto del mismo en función del ancho de la pantalla (a partir de un ancho de 1000px).

En la seccion llamada nosotros hay unos avatars que ilustran a los integrantes del emprendimiento, una descripcion simbólica y un boton (ver Perfil) que lleva a la pagina principal de linkedin.
Cada boton tiene la animacion que cambia de color de fondo y de la letra cuando pasamos el mouse por encima.

El sector iconos, usamos los iconos de fontawesome que corresponden a las redes sociales IG, FB TW y YT.
cada una de los botones apunta a las redes sociales del programa codo a codo V4.0.
Los iconos tiene la animacion que cambia de tamaño cunado le pasamos el mouse por encima.

El footer esta hecho en CSS.

Para todo el HTML se usaron fuentes de google fonts.

## Página Productos

La página pretende presentar productos a la venta relacionados con insumos y accesorios informáticos. Se presentan imágenes de Rick y Morty como respresentación de imagenes de los productos. Esto es debido al hecho de que requeríamos consumir una API y aprovechamos que encontramos aquella utilizada. Podría constuirse una API con imágenes e información sobre productos específicos para informática y que cumpla la misma función que la API consumida.

Se aplicaron transiciones a las imagenes para fomentar la interacción con el usuario.

El header y el footer es el mismo que el de la página principal y el resto del sitio web.

## Página Contacto

La página Contacts.html, despliega un formulario de contacto con tres campos, nombre, correo electrónico y comentarios y un boton con la etiqueta "enviar", para remitir los campos ingresados a una casilla de mail predefinida.
Con un script (funcion validarFormulario() en el archivo validacion.js), se validan los datos ingresados en los campos.
La funcion devuelve un bool (true si los campos ingresados son validos), muestra un mensaje de error si los campos requeridos no se completan (o si los datos ingresados no cumplen ciertos criterios). Si el formulario es validado, se envian los datos ingresados por mail y se muestra un mensaje de confirmacion que los datos han sido enviados y que proximamente tendra una respuesta.
Los criterios de validacion son, en caso de nombre y comentarios, un minimo de tres caracteres, en el caso de mail, se usa verifica que no sea un string vacio y que no tenga determinados caracteres.
Se usa en el caso del email el parametro type="email", lo que fuerza una doble validacion (la implementada en el codigo javascript y la implementada por el navegador).
Para el envio de los datos ingresados en los campos, se utiliza un servicio externo. Se descarga el implementar un servidor de correo en la aplicacion por la complejidad, o usar un servidor de correro externo, porque habria que implementar una cuenta de mail y password dentro del codigo. En lugar, se utiliza un servicio externo, provisto por Formsubmit (https://formsubmit.co/), es un servicio que envia el contenido de un formulario, por email a una cuenta de correo (que esta encriptada dentro del codigo).

## Página Servicios

La página Servicios presenta información sobre diferentes asistencias en el ámbito de la tecnología a los clientes.

En el main del documento Servicios.html se dispone de un iframe de GoogleMaps con información de donde se ubica el local físico e infomración en texto sobre los servicios que brinda el emprendimiento.

Dispone de los mismos header y footer que el resto de las páginas. Todo aquello con el mismo comportamiento responsive.




