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
                        <a class="nav-link active" href="/knn">KNN</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/saran">Saran</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/dataset">Dataset</a>
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
                <router-link :to="{ name: 'knn.index' }" class="btn btn-warning btn-sm rounded shadow mb-3">
                    Kembali
                </router-link>

                <div class="card rounded shadow">
                    <div class="card-header">Edit Data Balita</div>
                    <div class="card-body">
                        <form @submit.prevent="update()">
                            <div class="mb-3">
                                <label for="" class="form-label">Id Balita</label>
                                <input type="number" class="form-control" v-model="knn.id_balita">
                                <div v-if="validation.id_balita" class="text-danger">
                                    {{ validation.id_balita[0] }}
                                </div>

                                <label for="" class="form-label">Umur Balita</label>
                                <input type="number" class="form-control" min="0" max="60" v-model="knn.u">
                                <div v-if="validation.u" class="text-danger">
                                    {{ validation.u[0] }}
                                </div>

                                <label for="" class="form-label">Berat Balita</label>
                                <input type="number" class="form-control" min="0" v-model="knn.bb">
                                <div v-if="validation.bb" class="text-danger">
                                    {{ validation.bb[0] }}
                                </div>

                                <label for="" class="form-label">Tinggi Balita</label>
                                <input type="number" class="form-control" min="0" v-model="knn.tb">
                                <div v-if="validation.tb" class="text-danger">
                                    {{ validation.tb[0] }}
                                </div>


                                <div class="row mt-8 select-outline">

                                    <label for="" class="form-label">Bulan Pengukuran</label>
                                    <br>
                                    <select name="bulan" id="bulan" form="knn" v-model="knn.bulan">
                                        <option value="" disabled selected>Pilih Bulan</option>
                                        <option value="1">Januari</option>
                                        <option value="2">Februari</option>
                                        <option value="3">Maret</option>
                                        <option value="4">April</option>
                                        <option value="5">Mei</option>
                                        <option value="6">Juni</option>
                                        <option value="7">Juli</option>
                                        <option value="8">Agustus</option>
                                        <option value="9">September</option>
                                        <option value="10">Oktober</option>
                                        <option value="11">November</option>
                                        <option value="12">Desember</option>
                                    </select>
                                    <div v-if="validation.bulan" class="text-danger">
                                        {{ validation.bulan[0] }}
                                    </div>
                                </div>


                            </div>
                            <button class="btn btn-outline-primary">Simpan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {
    setup() {
        //data binding
        let knn = reactive({
            id_balita: '',
            u: '',
            bb: '',
            tb: '',
            bulan: ''
        });

        const validation = ref([]);

        const router = useRouter();
        const route = useRoute();

        onMounted(() => {
            axios.get(`http://127.0.0.1:8000/api/knn/${route.params.id}`)
                .then((result) => {
                    knn.id_balita = result.data.data.id_balita,
                        knn.u = result.data.data.u,
                        knn.bb = result.data.data.bb,
                        knn.tb = result.data.data.tb,
                        knn.bulan = result.data.data.bulan
                }).catch((err) => {
                    console.log(err.response.data)
                });
        });

        function update() {
            axios.put(
                `http://127.0.0.1:8000/api/knn/${route.params.id}`,
                knn
            )
                .then(() => {
                    router.push({
                        name: 'knn.index'
                    });
                }).catch((err) => {
                    validation.value = err.response.data
                });
        }

        return {
            knn,
            validation,
            router,
            update
        }
    }
}
</script>
