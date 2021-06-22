<template>
    <div class="container">
        <!-- NAVBAR -->
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

        <!-- PROFIL -->

        <div class="card-profile">
            <div class="user-profile">
                <img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="myprofile" class="user-profile-img">
                <p class="img-fontawesome-profil"><i class="fas fa-images"></i></p>
                <div class="off-and-basket">
                    <i class="fas fa-trash-alt margin-right-off"></i>
                    <i class="fas fa-power-off"></i>  
                </div>
            </div>
            
            <div class="info-user">
                <div class="card-info-user">
                    <p>Nom</p>
                </div>
                <div class="card-info-user">
                    <p>Prénom</p>
                </div>
                <div class="card-info-user">
                    <p>Email</p>
                </div>
                <div class="card-info-user">
                    <p>Poste</p>
                </div>
                <div id="description-profil">
                    <p>Description</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
/* import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
    export default {
        name: 'UserProfil',
        data()
        {
            return {list: undefined}
        },
        mounted()
        {
            Vue.axios.get('http://localhost:3000/api/auth/users/myprofile')
            .then((response) => {
                this.list = response.data
                console.log(response);
            })
        }
    } */
</script>
