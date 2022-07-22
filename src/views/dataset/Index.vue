<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'dataset.create' }" class="btn btn-primary btn-sm rounded shadow mb-3">
                    Dataset Baru
                </router-link>

                <div class="card rounded shadow">
                    <div class="card-header">Dataset KNN</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Umur</th>
                                    <th>BB</th>
                                    <th>TB</th>
                                    <th>Gizi</th>
                                    <th>Berat</th>
                                    <th>Tinggi</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(dataset, index) in datasets.data" :key="index">
                                    <td>
                                    </td>
                                    <td>{{ dataset.du }} bln</td>
                                    <td>{{ dataset.dbb }} kg</td>
                                    <td>{{ dataset.dtb }} cm</td>
                                    <td>
                                        <div v-if="dataset.dgizi == 1">Lebih</div>
                                        <div v-if="dataset.dgizi == 2">Normal </div>
                                        <div v-if="dataset.dgizi == 3">Kurang</div>
                                        <div v-if="dataset.dgizi == 4">Buruk</div>
                                    </td>
                                    <td>
                                        <div v-if="dataset.dberat == 1">Gemuk</div>
                                        <div v-if="dataset.dberat == 2">Normal </div>
                                        <div v-if="dataset.dberat == 3">Kurus</div>
                                        <div v-if="dataset.dberat == 4">S. Kurus</div>
                                    </td>
                                    <td>
                                        <div v-if="dataset.dtinggi == 1">Tinggi</div>
                                        <div v-if="dataset.dtinggi == 2">Normal </div>
                                        <div v-if="dataset.dtinggi == 3">Pendek</div>
                                        <div v-if="dataset.dtinggi == 4">S. Pendek</div>
                                    </td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{ name: 'dataset.edit', params: { id: dataset.id } }"
                                                class="btn btn-sm btn-outline-info">
                                                Edit</router-link>
                                            <button class="btn btn-sm btn-outline-danger"
                                                @click.prevent="destroy(dataset.id, index)">
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
        let datasets = ref([]);

        onMounted(() => {
            //ambil data dari api
            axios.get('http://127.0.0.1:8000/api/dataset')
                .then((result) => {
                    datasets.value = result.data
                }).catch((err) => {
                    console.log(err.response)
                })
        });

        function destroy(id, index) {
            axios.delete(
                `http://127.0.0.1:8000/api/dataset/${id}`
            )
                .then(() => {
                    datasets.value.data.splice(index, 1)
                }).catch((err) => {
                    console.log(err.response.data);
                });
        }

        return {
            datasets,
            destroy
        }
    }
}
</script> 
