<template>
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
