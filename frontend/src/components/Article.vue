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

        <div class="card">
            <div class="cards">
                <div class="flex-name-user">
                        <li><img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="avatar" class="avatar-article"></li>
                        <li class="margin-right-5 font-user">{{article.User.firstname}}</li>
                        <li class="margin-right-5 font-user">{{article.User.lastname}}</li>  
                    <div>
                        <i @click="deleteArticle" class="fas fa-trash-alt delete-article-icon"></i>
                        <router-link style="text-decoration: none; color: inherit" :to="'/articles/edit/'+ article.id"><i class="fas fa-edit edit-article-icon"></i></router-link>
                    </div>
                </div>
                <div class="margin-top-16">
                    <li class="bold-title">{{article.title}}</li>
                    <li class="margin-top-16">{{article.content}}</li>
                    <li><img :src="article.image" alt="image" class="img-article"></li>
                    <li class="like font-size-22"><i class="far fa-comment-alt margin-right-comment"> </i><i class="far fa-heart"></i>0</li>
                </div>
            </div>
            <hr>
            <div class="comment-article form-comment">
                <div class="user-comment">
                    <li>{{article.User.firstname}}</li>
                    <li>{{article.User.lastname}}</li>                                         
                </div>
                <div>
                    <input v-model="content" placeholder="écrire ici" class="input-comment" type="text">
                    <i @click="addComment" class="fas fa-plus comment-plus"> Ajouter un commentaire</i>                                     
                </div>
            </div>
            <div v-for="item in comment" v-bind:key="item.id">
                <div class="comment-article form-comment" v-if="item.articleId === article.id">
                    <div class="user-comment">
                        <li>{{item.User.firstname}}</li>
                        <li>{{item.User.lastname}}</li>                                         
                    </div>
                    <div>
                        <p class="input-comment">{{item.content}}</p>                                  
                    </div>
                    <div>
                        <span id="hover-login" @click="deleteComment"><i class="fas fa-trash-alt margin-right-off"></i></span>                        
                    </div>
                </div>                      
            </div>  
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
                comment: undefined,
                content: ""
            }
        },
        mounted()
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
            Vue.axios.get('http://localhost:3000/api/articles/' + this.$route.params.id + '/comments/')
            .then((response) => {
                this.comment = response.data
                console.log(response);
            })
        }, methods: {
            deleteArticle: function() {
                Vue.axios.delete('http://localhost:3000/api/articles/' + this.$route.params.id)
                .then((data) => {
                    this.article.id
                    console.log(data);

                    if(this.article.id) {
                        window.location.href=`/article/${this.article.id}`;
                    }
                })
            },
            addComment: function() {
                Vue.axios.post('http://localhost:3000/api/articles/' + this.$route.params.id + '/comments/', {
                    content: this.content
                })
                .then((response) => {
                    console.log(response);
                    console.log(this.content);
                    if(response) {
                        window.location.href=`/articles`;
                    }
                })
            },
            deleteComment: function() {
            Vue.axios.delete('http://localhost:3000/api/comments/' + this.comment.id)
                .then((data) => {
                    this.comment.id
                    console.log(data);
                })
            },
            logoutUser: function() {
                localStorage.removeItem('userToken');
                localStorage.removeItem('userId');
                delete axios.defaults.headers.common['Authorization'];
            },
        }
    }
</script>