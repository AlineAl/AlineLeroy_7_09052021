<template>
    <div class="container">
        <div class="navbar">
            <div>
               <img src="../assets/images/icon-left-font-monochrome-black.png" alt="groupomania" class="logo"> 
            </div>
            <div class="list">
                <div>
                   <ul>
                        <li class='list-navbar'><i class="fas fa-bell"></i></li>
                        <li class='list-navbar'><i class="fas fa-list"></i></li>
                    </ul> 
                </div>
                <div>
                   <img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="photo de profil" class="avatar"> 
                </div>
            </div>
        </div>
        <div>
           <table>
                <tr v-for="item in list" v-bind:key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.content}}</td>
                    <td>{{item.likes}}</td>
                    <td>{{item.User.firstname}}</td>
                    <td>{{item.User.lastname}}</td>
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
