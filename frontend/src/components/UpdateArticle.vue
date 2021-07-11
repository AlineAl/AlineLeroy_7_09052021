<template>
    <div class="container">
        <div class="navbar">
            <div>
               <router-link to="/articles"><img src="../assets/images/icon-left-font-monochrome-black.png" alt="groupomania" class="logo"></router-link>
            </div>
            <div class="list">
                <div>
                   <ul>
                        <li class='list-navbar'><router-link style="text-decoration: none; color: inherit" to="/"><span id="hover-login"><i class="fas fa-power-off"></i></span></router-link></li>
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
            <form action="http://localhost:3000/api/articles/edit/17" method="put">
                <p class="add-image"><i class="fas fa-images"></i> <i class="fas fa-plus" id="add"></i></p>
                <p class="display-none">Ajouter une image</p>
                <div>
                    <input v-model="article.title" class="form-title-content" type="text" id="titre" name="titre" placeholder="Nouveau titre" required>  
                </div>
                <div>
                    <input v-model="article.content" class="form-title-content" id="content" type="text" name="contenu" placeholder="Nouveau message" required>  
                </div>
                <div class="button-form">
                    <input @click="updateArticle" class="button" type="button" value="Poster mon article">
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
        props: ['id'],
        data() {
            return {
                article: null,
                title: "",
                content: ""
            }
        }, mounted()
        {
            Vue.axios.defaults.headers = {
                'Content-Type' : 'application/json',
                Authorization: "Bearer " + localStorage.getItem('userToken')
            }
            Vue.axios.get(`http://localhost:3000/api/articles/`+ this.$route.params.id)
            .then((data) => {
                this.article = data.data
                console.log(data);
            })
        }, 
        methods: {
            updateArticle: function() {
                Vue.axios.defaults.headers = {
                    'Content-Type' : 'application/json',
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                }
                console.log(this.$route.params.id)
                Vue.axios.put(`http://localhost:3000/api/articles/edit/`+ this.$route.params.id, {
                    title: this.article.title,
                    content: this.article.content
                })
                .then((data) => {
                    console.log(data)
                    console.log(this.article.title, this.article.content)
                })
            }
        }
    }
</script>