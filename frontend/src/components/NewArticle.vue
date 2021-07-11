<template>
    <div class="container">
        <div class="navbar">
            <div>
               <router-link to="/articles"><img src="../assets/images/icon-left-font-monochrome-black.png" alt="groupomania" class="logo"></router-link>
            </div>
            <div class="list">
                <div>
                   <ul>
                        <li class='list-navbar'><router-link style="text-decoration: none; color: inherit" to="/"><span id="hover-login" @click="logoutUser"><i class="fas fa-power-off"></i></span></router-link></li>
                        <li class='list-navbar'><i class="fas fa-list"></i></li>
                    </ul> 
                </div>
                <div class="dropdown">
                   <img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="photo de profil" class="avatar">
                   <div name="login-signup" id="login-signup" class="list-login-signup">
                       <router-link style="text-decoration: none; color: inherit" to="/users/myprofile"><li class="drop-list" id="hover-profil">profil</li></router-link>
                       <router-link style="text-decoration: none; color: inherit" to="/"><li class="drop-list" id="hover-login">login</li></router-link>
                       <router-link style="text-decoration: none; color: inherit" to="/users/signup"><li id="hover-signup">signup</li></router-link>
                   </div>
                </div>
            </div>
        </div>

        <div class="card-display-article"> 
            <form action="http://localhost:3000/api/articles/new" method="post">
           <!-- <input type="file" accept="image/*" id="image" name="image" @change="uploadImage"> -->
            <input type="button" class="button" @click="submitImage" name="img" id="img" value="charger l'image">
                <div>
                    <input v-model="title" class="form-title-content" type="text" id="titre" name="titre" placeholder="Titre de l'article" required>  
                </div>
                <div>
                    <input v-model="content" lass="form-title-content" id="content" type="text" name="contenu" placeholder="Tu peux écrire ici" required>  
                </div>
                <div class="button-form">
                    <input @click="createArticle" class="button" type="button" value="Poster mon article">
                </div>  
            </form>
        </div>
    </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
    export default {
        name: 'NewArticle',
        data: function() {
            return {
                title: "",
                content: "",
             //   selectedFile: null
            }
        },
        methods: {
            createArticle: function() {
                Vue.axios.defaults.headers = {
                    'Content-Type' : 'application/json',
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                }

                /*const formData = new FormData();
                formData.append('image', this.selectedFile) */

                Vue.axios.post('http://localhost:3000/api/articles/new', {
                    title: this.title,
                    content: this.content,
                   // selectedFile: this.selectedFile
                })
                .then((response) => {
                    //formData
                    console.log(response);
                    console.log(this.title, this.content)
                })
            },
            logoutUser: function() {
                localStorage.removeItem('userToken');
                localStorage.removeItem('userId');
                delete axios.defaults.headers.common['Authorization'];
            }
           /* uploadImage(e) {
                let img = e.target.files[0];
                let fd = new FormData();

                fd.append('image', img)

                Vue.axios.post('/upload-image', fd)
                .then((response) => {
                    this.imagePath = response.data.path
                })
            },
            submitImage() {
                let data = {
                    imagePath: this.imagePath,
                    productSpect: this.productSpect
                }
                Vue.axios.post('http://localhost:3000/api/articles/', data)
            } */
        }
    }

</script>