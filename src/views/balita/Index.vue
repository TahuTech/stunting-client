<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/admin">Klanting Admin</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/balita">Balita</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/knn">KNN</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/saran">Saran</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/dataset">Dataset</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'balita.create' }" class="btn btn-primary btn-sm rounded shadow mb-3">
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
                                    <td>
                                    </td>
                                    <td>{{ balita.nama }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{ name: 'balita.edit', params: { id: balita.idb } }"
                                                class="btn btn-sm btn-outline-info">
                                                Edit</router-link>
                                            <button class="btn btn-sm btn-outline-danger"
                                                @click.prevent="destroy(balita.idb, index)">
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

<style>
table {
    width: 50%;
    counter-reset: row-num -1;
}

table tr {
    counter-increment: row-num;
}

table tr td:first-child::before {
    content: counter(row-num) ". ";
}
</style>

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

        function destroy(id, index) {
            axios.delete(
                `http://127.0.0.1:8000/api/balita/${id}`
            )
                .then(() => {
                    balitas.value.data.splice(index, 1)
                }).catch((err) => {
                    console.log(err.response.data);
                });
        }

        return {
            balitas,
            destroy
        }
    }
}
</script> 
