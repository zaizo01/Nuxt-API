<template>
    <div class="container mt-5">
      <div class="card" v-for="(article, index) in articles" :key="index">
          <div class="card-body">
              <nuxt-link :to="`/blog/${article.id}`">{{article.title}}</nuxt-link>
              <p>{{article.body}}</p>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            articles: []
        }
    },
    async created() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            //console.log(response.data);  
            this.articles = response.data; 
        } catch (error) {
            console.log(error);
        }
    },
}
</script>