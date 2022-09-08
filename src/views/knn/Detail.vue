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
                        <a class="nav-link" href="/statistik">Statistik</a>
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
                    <h4 class="card-header">Detail Data Balita</h4>
                    <div class="card-body">
                        <form @submit.prevent="update()">
                            <div class="mb-3">
                                <label for="" class="form-label">Id Balita : {{ knn.id_balita }}</label>
                                <br>

                                <label for="" class="form-label">Umur Balita : {{ knn.u }} Bulan</label>
                                <br>

                                <label for="" class="form-label">Berat Balita : {{ knn.bb }} Kg</label>
                                <br>

                                <label for="" class="form-label">Tinggi Balita : {{ knn.tb }} Cm</label>
                                <br>

                                <label for="" class="form-label">Bulan Pengukuran :</label>
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
                                <br>

                            </div>

                        </form>
                    </div>
                </div>

                <div class="card-group">


                    <div class="card">

                        <h6 class="card-header" style="text-align:center">Status Gizi</h6>
                        <div class="card-body">
                            <h5 class="card-title" v-if="knn.gizi == 1" style="color:green; text-align:center">
                                Gizi Lebih
                            </h5>
                            <h5 class="card-title" v-if="knn.gizi == 2" style="color:#39FF14; text-align:center">
                                Gizi Baik
                            </h5>
                            <h5 class="card-title" v-if="knn.gizi == 3" style="color:yellow; text-align:center">
                                Gizi Kurang
                            </h5>
                            <h5 class="card-title" v-if="knn.gizi == 4" style="color:red; text-align:center">
                                Gizi Buruk
                            </h5>

                            <!-- gizi Lebih -->
                            <div v-if="knn.gizi == 1">
                                <p class=" card-text" style="text-align:center">
                                </p>
                                <ul>
                                    <li>pola makan yang sehat dan berimbang</li>
                                    <li>harap hindari makanan ringan kemasan untuk anak</li>
                                    <li>hindari konsumsi garam serta gula berlebih</li>
                                </ul>
                            </div>
                            <!-- gizi baik -->
                            <div v-if="knn.gizi == 2">
                                <p class=" card-text" style="text-align:center">
                                    Sudah bagus lanjutkan pola hidup sehat dan seimbang buat si balita.
                                </p>
                            </div>
                            <!-- gizi Kurang -->
                            <div v-if="knn.gizi == 3">
                                <p class=" card-text" style="text-align:center">
                                    Perhatikan gizi serta konsumsi dengan gizi yang cukup pada anak.
                                    pemberian asi ekslusif pada anak juga.
                                </p>
                                <ul>
                                    <li> Komposisi gizi Makanan si ibu (jika pemberian asi)</li>
                                </ul>
                            </div>
                            <!-- gizi buruk -->
                            <div v-if="knn.gizi == 4">
                                <p class=" card-text" style="text-align:center">
                                    Perhatikan gizi serta konsumsi dengan gizi yang cukup pada anak.
                                    pemberian asi ekslusif pada anak juga.
                                </p>
                                <ul>
                                    <li> Komposisi gizi Makanan si ibu (jika pemberian asi)</li>
                                </ul>
                            </div>

                        </div>
                        <div class="card-footer">

                        </div>
                    </div>


                    <div class="card">

                        <h6 class="card-header" style="text-align:center">Status Berat</h6>
                        <div class="card-body">
                            <h5 class="card-title" v-if="knn.berat == 1" style="color:green; text-align:center">
                                Gemuk
                            </h5>
                            <h5 class="card-title" v-if="knn.berat == 2" style="color:#39FF14; text-align:center">
                                Normal
                            </h5>
                            <h5 class="card-title" v-if="knn.berat == 3" style="color:yellow; text-align:center">
                                Kurus
                            </h5>
                            <h5 class="card-title" v-if="knn.berat == 4" style="color:red; text-align:center">
                                Sangat Kurus
                            </h5>

                            <!-- Gemuk -->
                            <div v-if="knn.berat == 1">
                                <p class=" card-text" style="text-align:center">
                                    Beresiko Obesitas pada anak. solusi
                                </p>
                                <ul>
                                    <li>ajak bermain dengan bergerak aktif.</li>
                                    <li>perhatikan pola makan.</li>
                                    <li>batasi camilan kemasan.</li>
                                    <li>konsumsi buah dan sayur.</li>
                                </ul>
                            </div>
                            <!-- normal -->
                            <div v-if="knn.berat == 2">
                                <p class=" card-text" style="text-align:center">
                                    Normal tetap pertahankan pola hidup sehat si balita,
                                    dan jangan lupa untuk bergerak aktif
                                </p>

                            </div>
                            <!-- Kurus -->
                            <div v-if="knn.berat == 3">
                                <p class=" card-text" style="text-align:center">
                                    Berat badan anak tergolong dalam kurus
                                </p>
                                <ul>
                                    <li>Penuhi Gizi seimbang anak</li>
                                    <li>perhatikan pola makan.</li>
                                    <li>konsumsi buah dan sayur.</li>
                                    <li>tambah dengan camilan sehat</li>
                                </ul>
                            </div>

                            <!-- sangat Kurus -->
                            <div v-if="knn.berat == 4">
                                <p class=" card-text" style="text-align:center">
                                    Balita Sangat Kurus
                                </p>
                                <ul>
                                    <li>Penuhi Gizi seimbang anak</li>
                                    <li>perhatikan pola makan.</li>
                                    <li>konsumsi buah dan sayur.</li>
                                    <li>tambah dengan camilan sehat</li>
                                </ul>
                                <router-link :to="{ name: 'knn.index' }"
                                    class="btn btn-warning btn-sm rounded shadow mb-3">
                                    Saran SUSU Penambah Berat Badan
                                </router-link>
                                <p>Segera Hubungi pihak kesehatan untuk mendapatkan penanganan lebih lanjut</p>
                            </div>


                        </div>
                        <div class="card-footer">
                        </div>
                    </div>


                    <div class="card">

                        <h6 class="card-header" style="text-align:center">Status Tinggi</h6>
                        <div class="card-body">
                            <h5 class="card-title" v-if="knn.tinggi == 1" style="color:green; text-align:center">
                                Tinggi
                            </h5>
                            <h5 class="card-title" v-if="knn.tinggi == 2" style="color:#39FF14; text-align:center">
                                Normal
                            </h5>
                            <h5 class="card-title" v-if="knn.tinggi == 3" style="color:yellow; text-align:center">
                                Pendek
                            </h5>
                            <h5 class="card-title" v-if="knn.tinggi == 4" style="color:red; text-align:center">
                                Sangat Pendek
                            </h5>

                            <!-- Tinggi -->
                            <div v-if="knn.tinggi == 1">
                                <p class=" card-text" style="text-align:center">
                                    Perlu penyimbangan protein serta gizi lainnya
                                </p>
                            </div>
                            <!-- normal -->
                            <div v-if="knn.tinggi == 2">
                                <p class=" card-text" style="text-align:center">
                                    Tetap konsumsi makanan yang mengandung kalsium dan protein yang tinggi,
                                    serta senantiasa hidup sehat.
                                </p>
                            </div>
                            <!-- Pendek -->
                            <div v-if="knn.tinggi == 3">
                                <p class=" card-text" style="text-align:center">
                                    tinggi anak di bawah rata" masih ayo pantau anak lagi dengan cara
                                </p>
                                <ul>
                                    <li>Memenuhi Protein, Zat besi, Vitamin A, Kalsium</li>
                                    <li>Ajak Lebih Aktif/stimulus gerakan </li>
                                    <li>Memberikan asi Ekslusif</li>
                                </ul>
                            </div>
                            <!-- sangat pendek -->
                            <div v-if="knn.tinggi == 4">
                                <p class=" card-text" style="text-align:center">
                                </p>
                                <ul>
                                    <li>Memenuhi Protein, Zat besi, Vitamin A</li>
                                    <li>Memberikan asi Ekslusif</li>
                                    <li>Perhatikan Kebersihan Lingkungan</li>
                                </ul>
                                <p style="text-align:center">*Pemeriksaan Lebih Lanjut diperlukan</p>
                            </div>

                        </div>
                        <div class="card-footer">

                        </div>
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
            bulan: '',
            gizi: '',
            berat: '',
            tinggi: ''
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
                        knn.bulan = result.data.data.bulan,
                        knn.gizi = result.data.data.gizi,
                        knn.berat = result.data.data.berat,
                        knn.tinggi = result.data.data.tinggi
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

