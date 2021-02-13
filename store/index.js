import { db } from '@/plugins/firebase.js'
export const state = () => ({
    task: '',
    taskIndv: ''
})

export const mutations = {
    setTask(state, payload){
        state.task = payload
    },
    setTasks(state, payload){
        state.task.push(payload);
    },
    deleteTask(state, payload){
        const index = state.task.findIndex( item => item.id === payload.id);
        state.task.splice(index, 1);
    },
    updateTask(state, payload){
        const index = state.task.findIndex( item => item.id === payload.id);
        state.task[index].name = payload.name;
    },
    setTaskIndividual(state, payload){
        state.taskIndv = payload;
    },
    setNameTask(state, payload){
        state.taskIndv.taskIndv = payload
    }
}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        return db.collection('tasks').get()
            .then(query => {
                const tasks = [];
                query.forEach(element => {
                    let task = element.data();
                    task.id = element.id;
                    tasks.push(task)
                });
                return commit('setTask', tasks)
            })
            .catch(function(error){
                console.log('Error ', error);
            })
      },
      async addTask({commit}, payload){
          try {
              const doc = await db.collection('tasks').add({
                  name: payload,
                  date: new Date()
              })
              commit('setTasks', {name: payload, id: doc.id});
          } catch (error) {
              console.log(error);
          }
      },
      async deleteTask({commit}, payload){
        db.collection('tasks').doc(payload.id).delete().then(function(){
            console.log('task eliminated');
            commit('deleteTask', payload)
        }).catch(function(error){
            console.log('Error', error);
        })
      },
      async updateTask({commit}, payload){
          db.collection('tasks').doc(payload.id).update({
              name: payload.name
          })
          .then(() => {
              console.log('Edit Done');
              commit('updateTask', payload);
              this.app.router.push('/vuex');
              
          })
          .catch(e=>{
              console.log(e);
          })
      }
}