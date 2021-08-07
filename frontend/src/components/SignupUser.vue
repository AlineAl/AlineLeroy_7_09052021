<template>
    <div class="container">
        <div class="navbar">
            <div>
               <router-link to="/articles"><img src="../assets/images/icon-left-font-monochrome-black.png" alt="groupomania" class="logo"></router-link>
            </div>
            <div class="list">
                <div>
                   <ul>
                        <li class='list-navbar hover-login'><router-link style="text-decoration: none; color: inherit" to="/users/signup">Signup</router-link></li>
                        <li class="list-navbar hover-login"><router-link style="text-decoration: none; color: inherit" to="/">Login</router-link></li>
                        <li class='list-navbar'><router-link style="text-decoration: none; color: inherit" to="/"><span class="hover-login" @click="logoutUser"><i class="fas fa-power-off"></i></span></router-link></li>
                    </ul> 
                </div>
                <div class="dropdown">
                   <img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="photo de profil" class="avatar">
                   <div name="login-signup" id="login-signup" class="list-login-signup">
                       <router-link style="text-decoration: none; color: inherit" to="/users/myprofile"><li class="hover-profil">profil</li></router-link>
                   </div>
                </div>
            </div>
        </div>

        <div class="card-login">
            <form action="http://localhost:3000/api/auth/users/signup" method="post" @click="checkForm" novalidate="true">
                <img src="../assets/images/icon-left-font-monochrome-black.png" alt="">
                <p class="p-signup">Les champs obligatoires sont marqués par un astérisque "*"</p>
                <div v-if="errors.length">
                    <p class="valid-form-signup">Veuillez corriger les champs invalides:</p>
                    <ul>
                        <li v-for="error in errors" v-bind:key="error.id">{{error}}</li>
                    </ul>
                </div>
                <div>
                    <input v-model="firstname" class="form-email-password" type="text" id="prenom" name="prenom" placeholder="Prénom *" required>
                </div>
                <div>
                    <input v-model="lastname" class="form-email-password" type="text" id="nom" name="nom" placeholder="Nom *" required>  
                </div>
                <div>
                    <input v-model="email" class="form-email-password" type="text" id="email" name="email" placeholder="Email *" required>  
                </div>
                <div>
                    <input v-model="password" class="form-email-password" type="password" id="password" name="password" placeholder="Mot de passe *" required> 
                </div>
                <div>
                    <input v-model="post" class="form-email-password" type="text" id="poste" name="poste" placeholder="Poste occupé"> 
                </div>
                <div>
                    <input v-model="description" class="form-email-password" type="text" id="description" name="description" placeholder="Qui suis je ?"> 
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
                errors: [],
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
                    console.log(response);
                    console.log(this.firstname, this.lastname, this.email, this.password, this.post, this.description);

                    if(response) {
                        alert('Votre compte a bien été enregistré !')
                        window.location.href=`/articles`;
                    }
                });
            },
            logoutUser: function() {
                localStorage.removeItem('userToken');
                localStorage.removeItem('userId');
                delete axios.defaults.headers.common['Authorization'];
            },
            checkForm: function(e) {
                e.preventDefault();

                if(this.firstname && this.lastname && this.email && this.password) {
                    return true
                }

                this.errors = [];

                if(!this.firstname) {
                    this.errors.push('Veuillez renseigner votre prénom, il doit contenir au minimum 3 lettres et 13 lettres au maximum')
                }

                if(!this.lastname) {
                    this.errors.push('Veuillez renseigner votre nom, il doit contenir au minimum 3 lettres et 13 lettres au maximum')
                }

                if(!this.email) {
                    this.errors.push('Veuillez renseigner votre email')
                } else if (!this.validEmail(this.email)) {
                    this.errors.push("Il faut que le format de l'email soit valide")
                }

                if(!this.password) {
                    this.errors.push('Veuillez renseigner votre mot de passe')
                } else if (!this.validPassword(this.password)) {
                    this.errors.push('Le mot de passe doit être de 8 caractères minimum avec au moins 1 majuscule et 1 chiffre')
                }
            },
            validEmail: function(email) {
                const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regexEmail.test(email)
            },
            validPassword: function(password) {
                const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                return regexPassword.test(password)
            }
        }
    }

</script>