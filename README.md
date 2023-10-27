# HRF_ProyectCodo28
Probando el nuevo repositorio

La pagina llamada "Nosotros" es la utilizada para crear el diseño responsive pedido en el punto 5 del TP
La pagina cuanta con 3 secciones principales: Encabezado, cuerpo y pie. Dentro del cuerpo hay 3 seciones: Banner, Nosotros e Iconos).

Se usaron iconos de fontawesome, se usaron fuentes de Google Fonts (para todo el docuntos)



## Formulario de Contacto
La pagina Contacts.html, despliega un formulario de contacto con tres campos, nombre, correo electrónico y comentarios y un boton con la etiqueta "enviar", para remitir los campos ingresados a una casilla de mail predefinida.
Con un script (funcion validarFormulario() en el archivo validacion.js), se validan los datos ingresados en los campos.
La funcion devuelve un bool (true si los campos ingresados son validos), muestra un mensaje de error si los campos requeridos no se completan (o si los datos ingresados no cumplen ciertos criterios). Si el formulario es validado, se envian los datos ingresados por mail y se muestra un mensaje de confirmacion que los datos han sido enviados y que proximamente tendra una respuesta.
Los criterios de validacion son, en caso de nombre y comentarios, un minimo de tres caracteres, en el caso de mail, se usa verifica que no sea un string vacio y que no tenga determinados caracteres.
Se usa en el caso del email el parametro type="email", lo que fuerza una doble validacion (la implementada en el codigo javascript y la implementada por el navegador).
Para el envio de los datos ingresados en los campos, se utiliza un servicio externo. Se descarga el implementar un servidor de correo en la aplicacion por la complejidad, o usar un servidor de correro externo, porque habria que implementar una cuenta de mail y password dentro del codigo. En lugar, se utiliza un servicio externo, provisto por Formsubmit (https://formsubmit.co/), es un servicio que envia el contenido de un formulario, por email a una cuenta de correo (que esta encriptada dentro del codigo).