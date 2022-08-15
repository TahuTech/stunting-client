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
                        <a class="nav-link" aria-current="page" href="/balita">Balita</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/knn">KNN</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/saran">Saran</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/dataset">Dataset</a>
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
                                    <th>Stunting</th>
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
                                        <div v-if="dataset.dgizi == 1" style="color:green">Lebih</div>
                                        <div v-if="dataset.dgizi == 2" style="color:#39FF14">Normal </div>
                                        <div v-if="dataset.dgizi == 3" style="color:orange"> Kurang</div>
                                        <div v-if="dataset.dgizi == 4" style="color:red">Buruk</div>
                                    </td>
                                    <td>
                                        <div v-if="dataset.dberat == 1" style="color:green">Gemuk</div>
                                        <div v-if="dataset.dberat == 2" style="color:#39FF14">Normal </div>
                                        <div v-if="dataset.dberat == 3" style="color:orange">Kurus</div>
                                        <div v-if="dataset.dberat == 4" style="color:red">S. Kurus</div>
                                    </td>
                                    <td>
                                        <div v-if="dataset.dtinggi == 1" style="color:green">Tinggi</div>
                                        <div v-if="dataset.dtinggi == 2" style="color:#39FF14">Normal </div>
                                        <div v-if="dataset.dtinggi == 3" style="color:orange"> Pendek</div>
                                        <div v-if="dataset.dtinggi == 4" style="color:red">S. Pendek</div>
                                    </td>
                                    <td>
                                        <div v-if="dataset.dstunting == 1" style="color:red">Stunting</div>
                                        <div v-if="dataset.dstunting == 2" style="color:green">Normal </div>
                                    </td>
                                    <td>
                                        <div class="btn-group">

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
