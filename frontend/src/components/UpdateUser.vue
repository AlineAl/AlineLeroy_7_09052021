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

        <!-- PROFIL -->

        <div class="card-profile">
            <div class="user-profile">
                <img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="myprofile" class="user-profile-img">
                <p class="img-fontawesome-profil"><i class="fas fa-images"></i></p>
                <div class="off-and-basket">
                    <router-link style="text-decoration: none; color: inherit" to="/"><span id="hover-login" @click="logoutUser"><i class="fas fa-power-off"></i></span></router-link>
                </div>
            </div>
            
            <form method="put" class="info-user">
                <div>
                    <input v-model="user.lastname" type="text" class="card-info-user" id="lastname" name="lastname" placeholder="Nouveau nom" required> 
                </div>
                <div>
                    <input v-model="user.firstname" type="text" class="card-info-user" id="firstname" name="firstname" placeholder="Nouveau prénom" required> 
                </div>
                <div>
                    <input v-model="user.email" type="text" class="card-info-user" id="email" name="email" placeholder="Nouveau mail" required> 
                </div>
                <div>
                    <input v-model="user.post" type="text" class="card-info-user" id="post" name="post" placeholder="Nouveau poste" required> 
                </div>
                <div>
                    <input v-model="user.description" type="text" class="card-info-user" id="description" name="description" placeholder="Nouvelle description" required> 
                </div>
                <div class="button-form">
                    <input @click="updateUser" class="button" type="button" value="Enregistrer les modifications">
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
            data() {
                return {
                    user: null,
                    firstname: "",
                    lastname: "",
                    email: "",
                    post: "",
                    description: ""
                }
            },
            mounted()
            {
                Vue.axios.defaults.headers = {
                    'Content-Type' : 'application/json',
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                }
                Vue.axios.get(`http://localhost:3000/api/auth/users/myprofile`)
                .then((data) => {
                    this.user = data.data
                    console.log(data);
                })
            }, methods: 
            {
            updateUser: function() {
                Vue.axios.defaults.headers = {
                    'Content-Type' : 'application/json',
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                }

                Vue.axios.put(`http://localhost:3000/api/auth/users/edit/`+ this.$route.params.id, {
                    firstname: this.user.firstname,
                    lastname: this.user.lastname,
                    email: this.user.email,
                    post: this.user.post,
                    description: this.user.description
                })
                .then((data) => {
                    console.log(data)
                    console.log(this.user.firstname, this.user.lastname)

                    if(data) {
                        alert('Votre profil a bien été modifié !');
                        window.location.href=`/users/myprofile`;
                    }
                })
            },
            logoutUser: function() {
                    localStorage.removeItem('userToken');
                    localStorage.removeItem('userId');
                    delete axios.defaults.headers.common['Authorization'];
                }
            }
        }
</script>