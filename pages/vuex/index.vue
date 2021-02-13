<template>
    <div class="container">
        <h1>Vuex</h1>
        <form @submit.prevent="addTask(taskName)" class="mb-3">
            <input type="text" class="frm-control mb-2" v-model="taskName">
            <b-button type="submit">Add</b-button>
        </form>
        <ul>
            <li v-for="item in task" :key="item.id" class="mb-3">
                {{item.id}} - {{item.name}}
                <b-button class="btn btn-warning" :to='`/vuex/${item.id}`'>Edit</b-button>
                <b-button class="btn btn-danger" @click="deleteTask(item)">Delete</b-button>
            </li>
        </ul>
    </div>
</template>

<script>
import { db } from '@/plugins/firebase';
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState(['task'])
    },
    methods: {
        ...mapActions(['addTask','deleteTask'])
    },
    data() {
        return {
            taskName: ''
        }
    },
        // fetch({store}){    
        // return db.collection('tasks').get()
        //     .then(query => {
        //         const tasks = [];
        //         query.forEach(element => {
        //         tasks.push(element.data())
        //         });
        //         return store.commit('setTask', tasks)
        //     })
        //     .catch(function(error){
        //         console.log('Error ', error);
        //     })
        // }
    
}
</script>

<style>

</style>