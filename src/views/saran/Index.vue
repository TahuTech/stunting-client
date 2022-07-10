<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'saran.create' }" class="btn btn-primary btn-sm rounded shadow mb-3">Tambah
                </router-link>

                <div class="card rounded shadow">
                    <div class="card-header">Kumpulan Saran</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Isi Saran</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(saran, index) in sarans.data" :key="index">
                                    <td>{{ saran.nama }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{ name: 'saran.edit', params: { id: balita.id } }"
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
        let sarans = ref([]);

        onMounted(() => {
            //ambil data dari api
            axios.get('http://127.0.0.1:8000/api/saran')
                .then((result) => {
                    balitas.value = result.data
                }).catch((err) => {
                    console.log(err.response)
                })
        });

        return {
            sarans
        }
    }
}
</script> 
