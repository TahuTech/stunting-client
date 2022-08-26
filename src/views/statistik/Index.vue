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
            <div class="col-8">

                <div class="card rounded shadow">
                    <div class="card-header">Statistik Website</div>
                    <div class="card-body">
                        <div></div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Jumlah Balita</th>
                                    <th>Normal</th>
                                    <th>Stunting</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(info, index) in infos.data" :key="index">
                                    <td>{{ info.jmlbb }} anak</td>
                                    <td>{{ info.norm }} anak</td>
                                    <td>{{ info.stun }} anak</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="btn-group">
                            <router-link :to="{ name: 'statistik.all' }" class="btn btn-sm btn-secondary">
                                Daftar Balita</router-link>
                            <router-link :to="{ name: 'statistik.stun' }" class="btn btn-sm btn-danger">
                                Daftar Balita Stunting</router-link>
                            <router-link :to="{ name: 'statistik.normal' }" class="btn btn-sm btn-success">
                                Daftar Balita Normal</router-link>
                        </div>
                        <br><br>

                        <h6>Status Gizi Anak</h6>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Gizi Lebih</th>
                                    <th>Gizi Baik</th>
                                    <th>Gizi Kurang</th>
                                    <th>Gizi Buruk</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(info, index) in infos.data" :key="index">
                                    <td>{{ info.gizle }} Anak</td>
                                    <td>{{ info.gizba }} Anak</td>
                                    <td>{{ info.gizku }} Anak</td>
                                    <td>{{ info.gizbu }} Anak</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="btn-group">
                            <router-link :to="{ name: 'statistik.gizle' }" class="btn btn-sm btn-info">
                                Gizi Lebih</router-link>
                            <router-link :to="{ name: 'statistik.gizba' }" class="btn btn-sm btn-success">
                                Gizi Baik</router-link>
                            <router-link :to="{ name: 'statistik.gizku' }" class="btn btn-sm btn-warning">
                                Gizi Kurang</router-link>
                            <router-link :to="{ name: 'statistik.gizbu' }" class="btn btn-sm btn-danger">
                                Gizi Buruk</router-link>
                        </div>
                        <br><br>

                        <h6>Status Tinggi Badan Anak</h6>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Tinggi Lebih</th>
                                    <th>Tinggi Normal</th>
                                    <th>Tubuh Pendek</th>
                                    <th>Tubuh Sangat Pendek</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(info, index) in infos.data" :key="index">
                                    <td>{{ info.tintin }} Anak</td>
                                    <td>{{ info.tinnor }} Anak</td>
                                    <td>{{ info.tinpen }} Anak</td>
                                    <td>{{ info.tinspen }} Anak</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="btn-group">
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-info">
                                Tubuh Tinggi</router-link>
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-success">
                                Tinggi Normal</router-link>
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-warning">
                                Tinggi Pendek</router-link>
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-danger">
                                Tinggi S.Pendek</router-link>
                        </div>
                        <br><br>

                        <h6>Status Berat Badan Anak</h6>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Berat Berebih</th>
                                    <th>Berat Normal</th>
                                    <th>Badan Kurus</th>
                                    <th>Badan Sangat Kurus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(info, index) in infos.data" :key="index">
                                    <td>{{ info.berle }} Anak</td>
                                    <td>{{ info.berba }} Anak</td>
                                    <td>{{ info.berku }} Anak</td>
                                    <td>{{ info.bersku }} Anak</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="btn-group">
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-info">
                                Balita Obesitas</router-link>
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-success">
                                Berat Normal</router-link>
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-warning">
                                Balita Kurus</router-link>
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-danger">
                                Balita S.Kurus</router-link>
                        </div>
                        <br><br>

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
        let infos = ref([]);

        onMounted(() => {
            //jalankan fuction endpoint
            axios.get('http://127.0.0.1:8000/api/count')
                .then((result) => {
                    infos.value = result.data
                }).catch((err) => {
                    console.log(err.response)
                })
        });

        onMounted(() => {
            //ambil data dari api
            axios.get('http://127.0.0.1:8000/api/info')
                .then((result) => {
                    infos.value = result.data
                }).catch((err) => {
                    console.log(err.response)
                })
        });



        return {
            infos
        }
    }
}
</script> 
