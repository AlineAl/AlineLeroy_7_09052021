<template>
    <div class="container">
        <div class="navbar">
            <div>
               <router-link to="/articles"><img src="../assets/images/icon-left-font-monochrome-black.png" alt="groupomania" class="logo"></router-link>
            </div>
            <div class="list">
                <div>
                    <ul>
                        <li class='list-navbar'><i class="fas fa-power-off"></i></li>
                        <li class='list-navbar'><i class="fas fa-list"></i></li>
                    </ul> 
                </div>
                <div class="dropdown">
                   <img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="photo de profil" class="avatar">
                   <div name="login-signup" id="login-signup" class="list-login-signup">
                       <router-link style="text-decoration: none; color: inherit" to="/auth/login"><li class="drop-list" id="hover-login">login</li></router-link>
                       <router-link style="text-decoration: none; color: inherit" to="/auth/signup"><li id="hover-signup">signup</li></router-link>
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
                </div>
                <div class="margin-top-16">
                    <li class="bold-title">{{article.title}}</li>
                    <li class="margin-top-16">{{article.content}}</li>
                    <li><img src="../assets/images/image-du-cerveau-humain_99433-298.jpeg" alt="image" class="img-article"></li>
                    <li class="like font-size-22"><i class="far fa-comment-alt margin-right-comment"> </i><i class="far fa-heart"></i>0</li>
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
                article: null
            }
        },
        mounted()
        {
        Vue.axios.get(`http://localhost:3000/api/articles/`+ this.$route.params.id)
        .then((data) => {
            this.article = data.data
            console.log(data);
        })
        }
    }
</script>