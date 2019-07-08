# Sequra frontend coding challenge

## Instrucciones

- Ejecutar el comando `npm run build` En el directorio `sequra-widgets-lib`.
- Ejecutar el comando `npm run serve` En el directorio `financing-widget`.
- Ejecutar el comando `npm run serve` En el directorio `financing-widget-info`.
- Ejecutar el comando `npm start` En el directorio `api`.
- Abrir el archivo `merchant-site/product-page.html` en un navegador web.

## Análisis

Para solventar el problema propuesto, se propone una solución basada en `iframes` comunicados a través de `postMessage`. De esta forma conseguimos que nuestro código y nuestros estilos no colisionen con los del cliente.

Para insertar los widgets `financing-widget` y `financing-widget-info` se utiliza una librería que el cliente debe de cargar en su página de producto. Para ello es necesario que el cliente cree un elemento HTML con id `sequra-financing-widget` en su página de producto y referencie la librería `sequra-widgets-lib`, la cual se encargará de crear y de comunicar los iframes que encapsulan los widgets.

## Mejoras

Dado que el tiempo ideal para realizar la prueba es de unas 3h, quedan bastantes cosas por hacer y otras por mejorar, las cuales se enumeran a continuación:

- Gestión de errores: actualmente no se contemplan posibles errores en la api o en los widgets.
- Pruebas: actualmente solo se realizan "smoke tests", es decir, solo se prueba que los componentes no arrojen ningún error en la inicialización. Deberían de implementarse pruebas más exhaustivas (utilizando `Enzyme` para los componentes y `axios-mock-adapter` para las llamadas a la API).
- Seguridad: la comunicación entre los widgets se hace sin tener en cuenta el origen de los mensajes, lo cual posibilita que cualquier origen mande mensajes a nuestros widgets, lo cual es una vulnerabilidad de seguridad.
- Configuración: la librería de integración `sequra-widgets-lib` se ejecuta como una IIFE, lo cual no posibilita una configuración en base a parámetros de usuario. Debería de exponerse una API pública para que el usuario pueda inicializarla con parámetros a su gusto (por ejemplo, el selector CSS donde se cargará el widget o un id de `merchant`, para poder trazar los eventos por cliente por ejemplo).
- Eventos: se han implementado solo dos eventos sencillos desde el widget `financing-widget`. Lo ideal sería también enviar eventos desde el component `financing-widget-info`. Debería de implementarse también un evento `pageView`, de forma similar a como funciona Google Analytics, para poder trazar las veces que se inicializa un widget en una página de producto de un cliente.
- Estructura del código: actualmente, existe un directorio `utils` para cada widget. Lo ideal sería crear un módulo nuevo aparte llamado `utils` que simplemente se importe en cada widget para evitar la repetición del código.
- Minificado de la librería `sequra-widgets-lib`: actualmente solo se está transpilando la librería a ES5 con Babel para mejorar la compatibilidad con los navegadores. Para un despligue real, debería de minificarse también en el proceso de build.

## Despliegue

Para desplegar la aplicación en producción, lo ideal sería automatizar el proceso ejecutando los tests en un servicio de integración continua y, en caso de éxito, subirlos a un servicio de almacenamiento y distribuirlos mediante una red de entrega de contenido (CDN).
