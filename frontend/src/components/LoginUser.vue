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

        <div class="card-login">
            <form action="http://localhost:3000/api/auth/users/login" method="post">
                <img src="../assets/images/icon-left-font-monochrome-black.png" alt="">
                <div>
                    <input v-model="email" class="form-email-password" type="text" id="email" name="email" placeholder="Email" required>  
                </div>
                <div>
                    <input v-model="password" class="form-email-password" type="text" id="password" name="password" placeholder="Mot de passe" required> 
                </div>
                <div class="button-form">
                    <input @click.prevent="loginUser" class="button" type="button" value="Se connecter">
                </div>
                <div>
                    <p class="p-form-login">Votre email ou votre mot de passe n'est pas valide !</p>
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
        name: 'LoginUser',
        data: function() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            loginUser: function() {
                axios.post('http://localhost:3000/api/auth/users/login', 
                { email: this.email, 
                password: this.password 
                })
                .then((response) => {
                    console.log(response)
                    this.data = response.data
                    const token = response.data.token
                    console.log(token);
                    if(token != null) {
                       localStorage.setItem('userToken', token); 
                       window.location.href=`/articles`;
                    } else {
                        window.location.href=`/`;
                        const buttonLogin = document.querySelector('.button');
                        const pLogin = document.querySelector('.p-form-login');
                        buttonLogin.addEventListener('click', (e) => {
                            e.preventDefault();

                            pLogin.style.display = "inline";
                        })
                    }
                    
                })
            }
        }
    }

</script>
