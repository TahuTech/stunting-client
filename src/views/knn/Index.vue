<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(knn, index) in knns.data" :key="index">
                                    <td>{{ knn.id }}
                                    </td>
                                    <td>{{ knn.id_balita }}</td>
                                    <td>{{ knn.u }} bulan</td>
                                    <td>{{ knn.bb }} kg</td>
                                    <td>{{ knn.tb }} cm</td>
                                    <td>{{ knn.bulan }}</td>
                                    <td>{{ knn.gizi }}</td>
                                    <td>{{ knn.berat }}</td>
                                    <td>{{ knn.tinggi }}</td>
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

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
    setup() {
        //status reactif
        let knns = ref([]);

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
            knns,
            destroy
        }
    }
}
</script> 
