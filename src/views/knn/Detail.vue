<template>
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

                                <div class="row mt-8 select-outline">

                                    <label for="" class="form-label">Bulan Pengukuran</label>
                                    <br>
                                    <select name="bulan" id="bulan" form="knn" v-model="knn.bulan" disabled>
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
                                    Sudah bagus lanjutkan pola hidup sehat dan seimbang buat si balita.
                                </p>
                                <ul>
                                    <li></li>
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
                                    Sudah bagus lanjutkan pola hidup sehat dan seimbang buat si balita.
                                </p>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <!-- gizi buruk -->
                            <div v-if="knn.gizi == 4">
                                <p class=" card-text" style="text-align:center">
                                    Sudah bagus lanjutkan pola hidup sehat dan seimbang buat si balita.
                                </p>
                                <ul>
                                    <li></li>
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
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <!-- Kurus -->
                            <div v-if="knn.berat == 3">
                                <p class=" card-text" style="text-align:center">
                                    Beresiko Obesitas
                                </p>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <!-- sangat Kurus -->
                            <div v-if="knn.berat == 4">
                                <p class=" card-text" style="text-align:center">
                                    Beresiko Obesitas
                                </p>
                                <ul>
                                    <li></li>
                                </ul>
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
                            <div v-if="knn.tinggi == 2">
                                <p class=" card-text" style="text-align:center">
                                    Tetap konsumsi makanan yang mengandung kalsium dan protein yang tinggi,
                                    serta senantiasa hidup sehat.
                                </p>
                            </div>
                            <!-- Pendek -->
                            <div v-if="knn.tinggi == 3">
                                <p class=" card-text" style="text-align:center">
                                    Beresiko Obesitas
                                </p>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <!-- sangat pendek -->
                            <div v-if="knn.tinggi == 4">
                                <p class=" card-text" style="text-align:center">
                                    Beresiko Obesitas
                                </p>
                                <ul>
                                    <li></li>
                                </ul>
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

