# Rick And Morty Wiki Personajes

Live application: https://ricky-morty.herokuapp.com/

## Ejecutar la aplicación

Para ejecutar esta aplicación, se necesitara descargar el código fuente e instalar las dependencias y herramientas necesarias para ejecutar la aplicación. El archivo `package.json`  contiene una lista de dependencias y herramientas necesarias para ejecutar la aplicación. En este caso, se ejecuta el siguiente comando para instalar todas las dependencias: `npm install`.

Una vez instaladas las dependencias, se procede a ejecutar la aplicación mediante el comando `npm start`. Este ultimo comando abrira la aplicación en nuestro navegador predeterminado y se ejecutará la aplicación. 

## Instrucciones para búsqueda en la aplicación
El formulario de búsqueda funciona de la siguiente forma: 
  1. Se realiza una solicitud HTTP a la API de Rick and Morty por medio de la libreria Axios para obtener todos los personajes.
  2. El usuario ingresa el nombre del personaje en el campo de búsqueda.
  2. Al enviar el formulario, se realiza un proceso de búsqueda por filtración con el término de búsqueda como parámetro. Este proceso de filtración se      realiza en los datos obtenidos con la llamada a la API.
  3. La API devuelve una lista de personajes que coinciden con el término de búsqueda.
  4. La lista de personajes que coinciden con el término de búsqueda se muestra en la pantalla de resultados de búsqueda.
  5. El usuario puede hacer clic en cualquier personaje para ver más detalles en una pantalla separada, que se presenta como un modal.
