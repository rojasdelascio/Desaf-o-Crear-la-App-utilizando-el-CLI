# INDIE-ARG.COM

http://independiente-arg.com es una tienda online, en la que se puede adquirir contenido artístico creado por escritores, cineastas o músicos latinoamericanos. 

## Comenzando 🚀

*Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.*

Mira **Deployment** para conocer como desplegar el proyecto.

## Instalación 🔧

#### Abajo encontrarás los requisitos para instalar todas las librerías y dependencias correspondientes, y poder así correr la aplicación de forma óptima. 

- #### npm-install

Al descargar el proyecto, se deben instalar todas las dependencias con el código de abajo:

```
npm install
```

- #### React Icons

###### Esta librería permite añadir íconos al proyecto, y visualizar los ya existentes. Abajo observarás como instalarla en el proyecto mediante npm o yarn. Así mismo, observarás como utilizar la misma para realizar modificaciones.

##### Instalación (para un proyecto standard)

```
yarn add react-icons
# o
npm install react-icons --save
```

###### ejemplo de uso:

```
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
}
```

- #### Bootstrap

###### Para poder observar la página web de forma óptima, se debe instalar la librería Bootstrap, ya que se utilizó la misma para el desarrollo. ***Sin embargo, en este caso, dado que se incluyó Bootstrap en el proyecto mediante CDN, NO es necesario utilizar el Package Manager (npm)***. Bootstrap se agregó al proyecto de la forma abajo descrita:

##### Incluir Bootstrap mediante CDN

Incluye la tag <meta name="viewport"> en tu index.html, para el correcto funcionamiento en dispositivos móviles (haz click en '</>-edit' para ver el codigo del ejemplo de abajo).

<!doctype html> 
<html lang="en">  
   <head>    
       <meta charset="utf-8">    
       <meta name="viewport" content="width=device-width, initial-scale=1">    <title>Bootstrap demo</title>  
    </head>  
    <body>    
        <h1>Hello, world!</h1> 
    </body> 
</html>

Incluye el CSS y JS de Bootstrap.  Coloca la etiqueta <link> en el head para CSS y la etiqueta <script> antes de cerrar el body, para el bundle the JS (haz click en '</>-edit' para ver el codigo del ejemplo de abajo).

<!doctype html> 
<html lang="en">  
    <head>    
        <meta charset="utf-8">    
        <meta name="viewport" content="width=device-width, initial-scale=1">    <title>Bootstrap demo</title>    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">  
    </head> 
    <body>    
        <h1>Hello, world!</h1>    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous">
        </script>  
    </body> 
</html>

- #### Popper

Es necesario instalar la librería Popper en el proyecto, ya que Bootstrap depende de esta. Puede hacerse de cualquiera de las formas abajo descritas:

Incluye la librería Popper en un <script> separado del de JS. 

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous">
</script>

O utiliza el Package Manager (npm) para instalar la misma:

```
npm i @popperjs/core
```

- #### Sweet Alert

Se debe instalar la librería Sweet Alert para observar las alertas configuradas en el sitio. Se puede instalar la misma utilizando npm 

```
npm install sweetalert --save
```

Luego, se debe importar la misma en el sitio.

```
import swal from 'sweetalert';
```

## Correr Proyecto 🔧

En el directorio del proyecto, correr

### `npm start`

Esto corre la aplicación en modo de development.\
Abrir [http://localhost:3000](http://localhost:3000) para observar la aplicación en tu browser.

La página se refrescará cuando realices cambios.\
Podrás también observar la lista de errores en la cónsola

### `npm run build`

Construye la aplicación para producción, en el directorio `build` \
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

### `npm test`

Inicia el corredor de prueba en el modo de reloj interactivo.\


## Despliegue 📦

Para desplegar la aplicación, se debe modificar en el archivo package.json, en la propiedad "homepage", de acuerdo a la URL donde se desea desplegar el sitio. Luego, se debe correr el siguiente comando en la ruta del proyecto

```
npm run build
```

## Autores ✒️

- **Gustavo Rojas** - *Trabajo Inicial* - [GustavoRojas](https://github.com/rojasdelascio/INDIEARG-Rojas-Delascio.git)
- **Gustavo Rojas** - *Documentación* - [GustavoRojas](https://github.com/rojasdelascio/INDIEARG-Rojas-Delascio.git)

## Expresiones de Gratitud 🎁

- Gracias a los tutores y profesores de Coderhouse por impartir la información necesaria para finalizar este proyecto.