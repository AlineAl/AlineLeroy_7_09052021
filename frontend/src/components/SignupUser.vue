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

        <div class="card-login">
            <form action="http://localhost:3000/api/auth/users/signup" method="post">
                <img src="../assets/images/icon-left-font-monochrome-black.png" alt="">
                <div>
                    <input v-model="firstname" class="form-email-password" type="text" id="prenom" name="prenom" placeholder="Prénom" required>  
                </div>
                <div>
                    <input v-model="lastname" class="form-email-password" type="text" id="nom" name="nom" placeholder="Nom" required>  
                </div>
                <div>
                    <input v-model="email" class="form-email-password" type="text" id="email" name="email" placeholder="Email" required>  
                </div>
                <div>
                    <input v-model="password" class="form-email-password" type="text" id="password" name="password" placeholder="Mot de passe" required> 
                </div>
                <div>
                    <input v-model="post" class="form-email-password" type="text" id="poste" name="poste" placeholder="Poste occupé" required> 
                </div>
                <div>
                    <input v-model="description" class="form-email-password" type="text" id="description" name="description" placeholder="Qui suis je ?" required> 
                </div>
                <div class="button-form">
                    <input @click="registerUser" class="button" type="button" value="S'inscrire">
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
        name: 'SignupUser',
        data: function() {
            return {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                post: "",
                description: ""
            } 
        },
        methods: {
            registerUser: function() {
                Vue.axios.post('http://localhost:3000/api/auth/users/signup', {
                   firstname: this.firstname, 
                   lastname: this.lastname, 
                   email: this.email, 
                   password: this.password, 
                   post: this.post, 
                   description: this.description
                })
                .then((response) => {
                    console.log(response)
                    console.log(this.firstname, this.lastname, this.email, this.password, this.post, this.description) 
                })
            } ,
            logoutUser: function() {
                localStorage.removeItem('userToken');
                localStorage.removeItem('userId');
                delete axios.defaults.headers.common['Authorization'];
            }
        }
    }

</script>