# Tindercats - Tinder para gatitos 

## **Paso 1: Inicios y comienzos**  
Vamos a comenzar a armar nuestra app en CodeSandbox. Para eso vamos a abrir el siguiente [link](https://codesandbox.io/s/vue). 

Aquí tenemos una app de vue lista para ser editada. Esto es lo mismo que obtendremos usando el Vue-CLI y abriendo la carpeta del proyecto en nuestro editor de texto de preferencia.

## **Paso 2: Importamos Vuetify**
Vamos a importar Vuetify en la app. Aquí les dejo el link para leer la [más sobre Vuetify.](https://vuetifyjs.com/en/getting-started/quick-start) 

En el archivo **main.js** tenemos que agregar unas lineas al comienzo: 

    import Vue from "vue";
    import App from "./App";
    import Vuetify from 'vuetify'
    import 'vuetify/dist/vuetify.min.css';

    Vue.config.productionTip = false;

    Vue.use(Vuetify)

    new Vue({
    el: "#app",
    components: { App },
    template: "<App/>"
    });

Una vez agregado esto, Vuetify nos debería pedir instalar Vuetify como dependencia. Así que hay que hacer click en el botón azul que dice "**_Add vuetify as dependency_**"

Finalmente, agregamos una línea en el `<head>` del archivo **index.html**

    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">

Esto hará que no tengamos problemas con los [Material Icons](https://material.io/tools/icons/?style=baseline) que usaremos más adelante.  
Listo! Tenemos Vuetify en nuestra app!

Ahora agreguemos los stilos para que vayan asignándose a medida que vayamos trabajando y agregando elementos.  
En **gallery.vue** agregemos esto abajo de la etiqueta `<script>`. Los estilos quedan abajo de todo.

    <style scoped>
        body{
            margin: 0 auto;
            padding: 0px;
        }
        header {
            display: flex;
            justify-content: center;
        }
        .logo{
            width: 60px;
            height: auto;
            margin-right: 1em;
        }
        h1, h2{
            font-family: 'Open Sans', sans-serif;
            color: #35495e;
            text-align: left;
        }
        .container{
            width: 100%;
        }
        .grid-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em 0;
        }
        .container-buttons{
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container-img{
            width: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow:lightgray 1px 1px 5px;
            border-radius: 5px;
        }
        .container-img img{
            width:100%;
            height: auto;
            cursor: pointer;
            margin:10px;
        }
        p {
            font-family: 'Open Sans', sans-serif;
            color: #35495e;
            font-size: 22px;
            margin-top:1em;
        }
        .grid-favorites {
            margin: 1em;
            border-top: darkgray 1px solid;
        }
        .contaier-favorite {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        @media screen and (max-width: 800px) {
            .container {
            display: flex;
            flex-direction: column;
            }

            .container-img{
            width: 80%;
            }

            .grid-image {
            width: 100%;
            }

            .grid-favorites {
            width: 100%;
            }

            button {  
            box-shadow: 5px 10px #888888;
            }
        }

        @media screen and (max-width: 600px){
            .container-img{
            width: 100%;
            }
        }

    </style>

## **Paso 3: Creamos el componente gallery**  
En **App.js** vamos a reemplazar todo con el siguiente contenido:  

    
    <template> 
        <div id="app">
            <Gallery></Gallery>
        </div>
    </template>
    
    <script>
    import Gallery from './components/gallery.vue'

    export default {
    name: 'app',
        components: {
            Gallery
        }
    }
    </script>


En la carpeta de **components** vamos a crear un archivo nuevo llamado **gallery.vue** con lo siguiente:

    <template>
        <v-container fluid>
            <v-layout align-center>
                <v-flex xs12>
                    
                    <div class="grid-page">
                        <header>
                            <div>
                                <h1>{{ title }}</h1>
                                <h2> {{ subtitle }} </h2>
                            </div>
                        </header>
                    </div>
                
                </v-flex>
            </v-layout>
        </v-container>
    </template>

    <script>
        export default {
            name: "gallery",
            data() {
                return {
                    title: "Tindercats!",
                    subtitle: "Tinder para gatitxs!" 
                };
            },
        };
    </script>

## **Paso 4: Traemos imágens de la API**

Ahora vamos a crear una propiedad computada para llamar a la API que nos traerá una imagen random por cada llamado. Vamos al archivo **gallery.vue** y agregamos este llamado luego del objeto data (es importante que haya una coma luego de la llave que cierra a data): 

    computed: {
        image () {
            return 'http://thecatapi.com/api/images/get?size=small&'
        }
    },

Ahora necesitamos un elemento HTML que reciba esta url en su atributo `src`para que la podamos renderizar.  
Entonces arriba, dentro del `<template>` y debajo de `<div class="grid-page">` vamos a agregar otro div:

    <div class="grid-image">
        <div class="container-img">
        <img :src="image"/>
        </div>
    </div>

Y a `src` le pasamos como valor el nombre de la propiedad computada, o sea _image_. Pero esto no es suficiente para que Vue entienda que tiene que obtener esos datos de la fuente de información. Así que tenemos que agregar `:` antes de `src` para que Vue entienda que es un dato que va a tener que estar evaluando, que es una cosa dinámica.

Yay! Ya tenemos una imagen de gatito! Si refrescamos vamos a ver una imagen nueva cada vez que se cargue la página.

## **Paso 5: NEXT** 

Para cambiar de una imagen a otra de manera más óptima vamos a crear un boton para "next". En **gallery.vue** debajo del `<div class="grid-image">` que acabamos de agregar haremos un tercer div hermano para los botones:

    <div class="container-buttons">
        <v-btn medium fab outline icon color="red lighten-1">
            <v-icon dark>arrow_forward</v-icon>
        </v-btn>
    </div>

Ya tenemos un botón. Ahora hagamoslo funcional. Queremos algo que cambie la url de las imágenes en cada caso. Así que vamos a crear una propiedad en **data** llamada position que haremos aumentar con cada click. Y tendremos que modificar un poco la _propiedad computada_ que teníamos.

    data() {
        return {
            title: "Tindercats!",
            subtitle: "Tinder para gatitxs!",
            position: 1,
        };
    },
    computed: {
        image () {
        return 'http://thecatapi.com/api/images/get?size=small&' + this.position
        }
    },

Ahora **data** contiene el título del archivo y algo llamado position que empieza en 1, pero que haremos aumentar. Y la computada necesita el `this.position` para que Vue entienda que hablamos de algo que está dentro de **data**.

Ahora necesitamos un evento en el botón para que esto funcione.

    <v-btn medium fab outline icon color="red lighten-1" @click="position++">

Al tag del botón le agregamos el evento `@click` que hace que la propiedad position aumente con cada click. A su vez, cambia la computada y se renderiza una nueva foto. Hermoso.

## **Paso 6: Botón de favoritos**

Vamos a trabajar en crear una función de favoritos. Empecemos por el botón. Debajo del botón de "next", creamos otro botón (dentro de `<div class="container-buttons">`).

    <v-btn medium fab outline icon color="green accent-4">
        <v-icon dark>favorite</v-icon>
    </v-btn>

Ahora que vemos el botón, trabajemos en su funcionalidad. Vamos a usar un _método_, una función.

Vamos a necesitar una referencia para identificar a la imágen que queremos marcar como favorita, así que vamos a crear una imágen en base a la position que usamos antes. Y luego vamos a usar la url para mostrar los favoritos en otro `section`. 

Empecemos por asociar la función al botón. La llamaremos "addFavorite".

    <v-btn medium fab outline icon color="green accent-4" @click="addFavorite">

Ahora vamos a usar algo llamado `ref` que, rústicamente, explicado le permite a Vue acceder a elementos del DOM. Usaremos esto para acceder a la imagen actual de la app:

    <img :src="image" @click="addFavorite" ref="currentImage"/>

Y ahora crearemos el método, debajo de `computed` (no olvidemos agregar una coma luego de la última llave que cierra esta propiedad). 

    methods: {
        addFavorite() {
            let id = this.position
            let url = this.$refs.currentImage.src
            console.log(id, url)
        }
    }
    
En `methods` necesitamos llamar a `ref` con un signo $ previo para que Vue lo entienda. 

Ahora creemos un arreglo donde pushear las imágenes favoritas. Volvamos a **data**:

    data() {
        return {
            title: "Tindercats!",
            subtitle: "Tinder para gatitxs!",
            position: 1,
            arrayFavorites: []
        };
    },

Ya tenemos el arreglo iniciado como vacío.¿Quién podría tener la capacidad de pushear elementos en el array? Exacto! Methods, quien está capturando la información. Así que en `methods` agregamos dos cosas:

    methods: {
        addFavorite() {
            let id = this.position
            let url = this.$refs.currentImage.src
            
            let finder = this.arrayFavorites.filter(item => item.url === url)      
            
            if (finder.length === 0) {
                this.arrayFavorites.push ({ id, url })
            }
        }
    }

Primero la variable 'finder' que se encargará de revisar en arrayFavorites y chequear si hay una coincidencia entre la imagen actual y lo que haya en el array.

Luego, si finder === 0, es decir, si no hay coincidencia, se realizará un push al array que constará de un objeto que contendrá el id y la url de la imagen actual (las dos variables que creamos).

Si vemos por consola el arreglo veremos estos objetos con id y url. Para verlo agregamos esta línea debajo del if, abajo de todo.

    console.log(this.arrayFavorites);

Si clickeamos más de una vez, veremos el arreglo pero no agregará el mismo objeto más de una vez. Eso es porque finder se está encargando de evitar que se agreguen objetos cuando encuntra una coincidencia entre la imagen que estamos queriendo marcar como favorita y lo que el arreglo ya tiene. Si el resultado de este checkeo es 0, es decir, cuando no encuentra coincidencia, nos permite agregar el objeto.

Borremos este console.log y sigamos.

## **Paso 7: Mostrar los favoritos**

Ya tenemos la información que queremos. Ahora vamos a mostrar las imágenes en la pantalla. 

Primero necesitamos un nuevo `<div>` para mostrar estas imágenes y lo vamos a llamar "grid-favorites":

        <div class="grid-favorites">
          <p>Your favorites</p>
          <v-container grid-list-md fluid>
            <v-layout wrap align-start justify-center row>
              

            </v-layout>
          </v-container>        
        </div>

Por ahora solo agregamos eso debajo del `<div class="container-buttons">` y luego en el medio de eso agregaremos más etiquetas. Todos esos tags raros son etiquetas de Vuetify que organizan la info por nosotros.

Vamos a crear un `<div>` usando la directiva **v-for** que iterará sobre nuestro arreglo y nos permitirá usar el atributo url de nuestros objetos para asociarlo al `src`, no nos olvidemos los `:` para decirle a Vue que es un dato dinámico que va a tener que evaluar constantemente porque lo extrae de **data**. Pero también tenemos que agrega un atributo `key` (también con `:`) para distinguir cada elemento con un id.

Dentro del `<layout>` que acabamos de crear agregamos:

    <v-flex xs6 sm4 md2 v-for="(element, index) in arrayFavorites" :key="element.id">
                
        <v-card class="favorite-card">
            <v-card-media height="150px" :src="element.url"></v-card-media>
            <v-btn class="favorite-delete" small dark icon color="red darken-3">
            <v-icon dark color="white">close</v-icon>
            </v-btn>
        </v-card>
        
    </v-flex>

Magic! Agora cuando pulsemos sobre el corazón aparecerá una pequeña imagen debajo de todo donde veremos nuestra imagen marcada como favorita. 

Finalmente, vamos a agregar la funcionalidad para borrar un favorito agregando una cosita sencilla en el ícono de la x roja:

    <v-btn class="favorite-delete" small dark icon color="red darken-3" @click="arrayFavorites.splice(index,1)">

Esta funcionalidad de splice permite eliminar el elemento del array de favoritos y dejar de mostrarlo.

Ahora ya tenemos una app completamente funcional.


**Gracias!**