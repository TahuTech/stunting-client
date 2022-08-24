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
                        <h6></h6>
                        <ul>
                            <li>Balita Terdaftar di Posyandu Mawar Jingga :</li>
                            <li>Jumlah Balita Normal : </li>
                            <li>Jumlah Balita Menderita Stunting : </li>
                        </ul>

                        <div class="btn-group">
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-secondary">
                                Daftar Balita</router-link>
                            <router-link :to="{ name: 'statistik.stun' }" class="btn btn-sm btn-danger">
                                Daftar Balita Stunting</router-link>
                            <router-link :to="{ name: 'statistik.normal' }" class="btn btn-sm btn-success">
                                Daftar Balita Normal</router-link>
                        </div>
                        <br><br>

                        <h6>Status Gizi</h6>
                        <ul>
                            <li>Jumlah Balita Gizi Lebih : </li>
                            <li>Jumlah Balita Gizi Baik : </li>
                            <li>Jumlah Balita Gizi Kurang : </li>
                            <li>Jumlah Balita Gizi Buruk : </li>
                        </ul>
                        <div class="btn-group">
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-info">
                                Gizi Lebih</router-link>
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-success">
                                Gizi Baik</router-link>
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-warning">
                                Gizi Kurang</router-link>
                            <router-link :to="{ name: 'balita.index' }" class="btn btn-sm btn-danger">
                                Gizi Buruk</router-link>
                        </div>
                        <br><br>

                        <h6>Status Tinggi Badan</h6>
                        <ul>
                            <li>Jumlah Balita Tubuh Tinggi : </li>
                            <li>Jumlah Balita Tubuh Normal : </li>
                            <li>Jumlah Balita Tubuh Pendek : </li>
                            <li>Jumlah Balita Tubuh S.Pendek : </li>
                        </ul>
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

                        <h6>Status Berat Badan</h6>
                        <ul>
                            <li>Jumlah Balita Obesitas : </li>
                            <li>Jumlah Balita Berat Normal : </li>
                            <li>Jumlah Balita Kurus : </li>
                            <li>Jumlah Balita S.Kurus : </li>
                        </ul>
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
