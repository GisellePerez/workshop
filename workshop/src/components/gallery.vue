<template>
  <v-container fluid>
    <v-layout align-center>
      <v-flex xs12> 
        
        <div class="grid-page">
          <header>
            <figure>
              <img class="logo" src="../assets/tindercats-logo.jpg">
            </figure>
            <div>
              <h1>{{ title }}</h1>
              <h2> {{ subtitle }} </h2>
            </div>
          </header>
        </div>
        
        <div class="grid-image">
          <div class="container-img">
            <img :src="image" @click="addFavorite" ref="currentImage"/>
          </div>
        </div>

        <div class="container-buttons">
          <v-btn medium fab outline icon color="red lighten-1" @click="position++">
            <v-icon dark>arrow_forward</v-icon>
          </v-btn>

          <v-btn medium fab outline icon color="green accent-4" @click="addFavorite">
            <v-icon dark>favorite</v-icon>
          </v-btn>
        </div> 
    
        <div class="grid-favorites">
          <p>Your favorites</p>
          <v-container grid-list-md fluid>
            <v-layout wrap align-start justify-center row>
              <v-flex xs6 sm4 md2 v-for="(element, index) in arrayFavorites" :key="element.id">
                
                <v-card class="favorite-card">
                  <v-card-media height="150px" :src="element.url"></v-card-media>
                  <v-btn class="favorite-delete" small dark icon color="red darken-3" @click="arrayFavorites.splice(index,1)">
                    <v-icon dark color="white">close</v-icon>
                  </v-btn>
                </v-card>
                
              </v-flex>
            </v-layout>
          </v-container>
        
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  name: "galllery",
  data() {
    return {
      title: "Tindercats!",
      subtitle: "Tinder para gatitxs!",
      position: 1,
      arrayFavorites: []
    };
  },
  computed: {
    image () {
      return 'http://thecatapi.com/api/images/get?size=small&' + this.position
    }
  },
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
};
</script>

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
