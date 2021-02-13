<template>
    <div class="container mb-5">
        <h2>Edit task</h2>
        {{task}}
        <form @submit.prevent="updateTask(task)">
            <input type="text" class="form-control mb-2" v-model="task.name">
            <b-button class="btn-warning" type="submit" >Edit</b-button>
        </form>
    </div>
</template>

<script>
import { db } from '@/plugins/firebase';
import { mapState, mapActions } from 'vuex';
export default {
  fetch({store, params}){
      return db.collection('tasks').doc(params.id).get()
        .then(doc => {
            if(doc.exists){
                let task = doc.data();
                task.id = doc.id;
                return store.commit('setTaskIndividual', task);
            }
        })
        .catch(e=> {
            console.log(e);
        })
  },
  computed: {
      task: {
          get(){
              return {
                  name: this.$store.state.taskIndv.name,
                  id: this.$store.state.taskIndv.id
              }
          }
      },
      ...mapState([''])
  },
  methods: {
      ...mapActions(['updateTask'])
  },
}
</script>