<template>
    <div>
        <h1>Vuex</h1>
    </div>
</template>

<script>
import { db } from '@/plugins/firebase';
export default {
    created() {
        db.collection('tasks').get()
            .then(query => {
                query.forEach(element => {
                    console.log(element.data());
                });
            })
    },
}
</script>

<style>

</style>