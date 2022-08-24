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
                        <a class="nav-link" href="/dataset">Dataset</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/statistik">Statistik</a>
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
            <div class="col-flex">

                <div class="card rounded shadow">
                    <div class="card-header">Daftar Balita Normal</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>NIK</th>
                                    <th>Nama Balita</th>
                                    <th>Umur(bulan)</th>
                                    <th>BB(kg)</th>
                                    <th>TB(cm)</th>
                                    <th>Bulan</th>
                                    <th>Stunting</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(knn, index) in knns.data" :key="index">
                                    <td></td>
                                    <td>{{ knn.id_balita }}</td>
                                    <td>{{ knn.nama }}</td>
                                    <td>{{ knn.u }} bulan</td>
                                    <td>{{ knn.bb }} kg</td>
                                    <td>{{ knn.tb }} cm</td>
                                    <td>
                                        <label v-if="knn.bulan == 1">Januari</label>
                                        <label v-if="knn.bulan == 2"> Februari</label>
                                        <label v-if="knn.bulan == 3">Maret</label>
                                        <label v-if="knn.bulan == 4">April</label>
                                        <label v-if="knn.bulan == 5">Mei</label>
                                        <label v-if="knn.bulan == 6">Juni</label>
                                        <label v-if="knn.bulan == 7">Juli</label>
                                        <label v-if="knn.bulan == 8">Agustus</label>
                                        <label v-if="knn.bulan == 9">September</label>
                                        <label v-if="knn.bulan == 10">Oktober</label>
                                        <label v-if="knn.bulan == 11">November</label>
                                        <label v-if="knn.bulan == 12">Desember</label>
                                    </td>
                                    <td>
                                        <div v-if="knn.stunting == 1" style="color:red">Stunting</div>
                                        <div v-if="knn.stunting == 2" style="color:#39FF14">Normal </div>
                                        <div v-if="knn.stunting == null">---------</div>
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

        onMounted(() => {
            //ambil data dari api
            axios.get('http://127.0.0.1:8000/api/infonorm')
                .then((result) => {
                    knns.value = result.data
                }).catch((err) => {
                    console.log(err.response)
                })
        });

        return {
            knns
        }
    }
}
</script> 
