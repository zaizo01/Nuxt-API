<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>{{article.title}}</h1>
                <p class="small">{{article.nameAuthor}}</p>
                <p>{{article.body}}</p>
                <nuxt-link to="/blog" class="btn btn-primary">Back</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
           
        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        try {

            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            const article = response.data;

            const respAuthor = await axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);
            article.nameAuthor = respAuthor.data.name;

            return {article};

        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
}
</script>