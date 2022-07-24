<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-flex">
                <router-link :to="{ name: 'knn.create' }" class="btn btn-primary btn-sm rounded shadow mb-3">
                    Tambah Data Balita
                </router-link>

                <div class="card rounded shadow">
                    <div class="card-header">List Balita</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Balita</th>
                                    <th>Umur(bulan)</th>
                                    <th>BB(kg)</th>
                                    <th>TB(cm)</th>
                                    <th>Bulan</th>
                                    <th>Gizi</th>
                                    <th>Berat</th>
                                    <th>Tinggi</th>
                                    <th></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(knn, index) in knns.data" :key="index">
                                    <td></td>
                                    <td>{{ knn.id_balita }}</td>
                                    <td>{{ knn.u }} bulan</td>
                                    <td>{{ knn.bb }} kg</td>
                                    <td>{{ knn.tb }} cm</td>
                                    <td>{{ knn.bulan }}</td>
                                    <td>
                                        <div v-if="knn.gizi == 1" style="color:red">Lebih</div>
                                        <div v-if="knn.gizi == 2" style="color:green">Normal </div>
                                        <div v-if="knn.gizi == 3" style="color:yellow">Kurang</div>
                                        <div v-if="knn.gizi == 4">Buruk</div>
                                        <div v-if="knn.gizi == null">---------</div>
                                    </td>
                                    <td>
                                        <div v-if="knn.berat == 1" style="color:red">Gemuk</div>
                                        <div v-if="knn.berat == 2" style="color:green">Normal </div>
                                        <div v-if="knn.berat == 3" style="color:yellow">Kurus</div>
                                        <div v-if="knn.berat == 4">S. Kurus</div>
                                        <div v-if="knn.gizi == null">---------</div>
                                    </td>
                                    <td>
                                        <div v-if="knn.tinggi == 1" style="color:red">Tinggi</div>
                                        <div v-if="knn.tinggi == 2" style="color:green">Normal </div>
                                        <div v-if="knn.tinggi == 3" style="color:yellow">Pendek</div>
                                        <div v-if="knn.tinggi == 4">S. Pendek</div>
                                        <div v-if="knn.gizi == null">---------</div>
                                    </td>
                                    <td>
                                        <router-link :to="{ name: 'knn.detail', params: { id: knn.id } }"
                                            class="btn btn-sm btn-outline-warning">
                                            Detail</router-link>
                                    </td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{ name: 'knn.edit', params: { id: knn.id } }"
                                                class="btn btn-sm btn-outline-info">
                                                Edit</router-link>
                                            <button class="btn btn-sm btn-outline-danger"
                                                @click.prevent="destroy(knn.id, index)">
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
        let knns = ref([]);

        let aksis = ref([]);

        onMounted(() => {
            //ambil data dari api
            axios.get('http://127.0.0.1:8000/api/aksi')
                .then((result) => {
                    aksis.value = result.data
                }).catch((err) => {
                    console.log(err.response)
                })
        });

        onMounted(() => {
            //ambil data dari api
            axios.get('http://127.0.0.1:8000/api/knn')
                .then((result) => {
                    knns.value = result.data
                }).catch((err) => {
                    console.log(err.response)
                })
        });

        function destroy(id, index) {
            axios.delete(
                `http://127.0.0.1:8000/api/knn/${id}`
            )
                .then(() => {
                    knns.value.data.splice(index, 1)
                }).catch((err) => {
                    console.log(err.response.data);
                });
        }

        return {
            aksis,
            knns,
            destroy
        }
    }
}
</script> 
