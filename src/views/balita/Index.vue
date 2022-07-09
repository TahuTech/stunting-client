<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link 
                :to="{ name: 'balita.create' }"
                class="btn btn-primary btn-sm rounded shadow mb-3">
                Tambah
                </router-link> 

                <div class="card rounded shadow">
                    <div class="card-header">List Balita</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Balita</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(balita, index) in balitas.data" :key="index">
                                    <td>{{ balita.id}}</td>
                                    <td>{{ balita.nama }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{ name: 'balita.edit', params: { id: balita.id } }"
                                                class="btn btn-sm btn-outline-info">
                                                Edit</router-link>
                                            <button class="btn btn-sm btn-outline-danger">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
    setup() {
        //status reactif
        let balitas = ref([]);

        onMounted(() => {
            //ambil data dari api
            axios.get('http://127.0.0.1:8000/api/balita')
                .then((result) => {
                    balitas.value = result.data
                }).catch((err) => {
                    console.log(err.response)
                })
        });

        return {
            balitas
        }
    }
}
</script> 
