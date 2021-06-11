<template>
    <div class="container">
        <div class="navbar">
            <div>
               <img src="../assets/images/icon-left-font-monochrome-black.png" alt="groupomania" class="logo"> 
            </div>
            <div class="list">
                <div>
                   <ul>
                        <li class='list-navbar'><i class="fas fa-power-off"></i></li>
                        <li class='list-navbar'><i class="fas fa-list"></i></li>
                    </ul> 
                </div>
                <div>
                   <img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="photo de profil" class="avatar"> 
                </div>
            </div>
        </div>

        <div class="card-evenement">
            <p>Poster un article</p>
            <i class="fas fa-filter"></i>
        </div>

        <div class="card">
           <table>
                <tr v-for="item in list" v-bind:key="item.id">
                    <div class="cards">
                        <ul>
                            <div class="flex-name-user">
                                <li><img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="avatar" class="avatar-article"></li>
                                <li class="margin-right-5 font-user">{{item.User.firstname}}</li>
                                <li class="margin-right-5 font-user">{{item.User.lastname}}</li> 
                            </div>
                            <div class="margin-top-16">
                                <li class="bold-title">{{item.title}}</li>
                                <li class="margin-top-16">{{item.content}}</li>
                                <li><img src="../assets/images/image-du-cerveau-humain_99433-298.jpeg" alt="image" class="img-article"></li>
                                <li class="like font-size-22"><i class="far fa-comment-alt margin-right-comment"> </i><i class="far fa-heart"></i> {{item.likes}}</li>
                            </div>
                            
                        </ul> 
                    </div>
                </tr>
            </table> 
        </div>
    </div> 
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
    export default {
        name: 'Articles',
        data()
        {
            return {list: undefined}
        },
        mounted()
        {
            Vue.axios.get('http://localhost:3000/api/articles')
            .then((response) => {
                this.list = response.data
                console.log(response);
            })
        }
    }
</script>
<style lang="scss">

</style>
