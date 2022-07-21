<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'dataset.index' }" class="btn btn-warning btn-sm rounded shadow mb-3">
                    Kembali
                </router-link>

                <div class="card rounded shadow">
                    <div class="card-header">Tambah Dataset </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="" class="form-label">Umur Balita</label>
                                <input placeholder="Hitungan Bulan" type="number" class="form-control" min="0"
                                    v-model="dataset.du">
                                <div v-if="validation.du" class="text-danger">
                                    {{ validation.du[0] }}
                                </div>

                                <label for="" class="form-label">BB Balita</label>
                                <input placeholder="Kg" type="number" class="form-control" min="0"
                                    v-model="dataset.dbb">
                                <div v-if="validation.dbb" class="text-danger">
                                    {{ validation.dbb[0] }}
                                </div>

                                <label for="" class="form-label">TB Balita</label>
                                <input placeholder="Cm" type="number" class="form-control" min="0"
                                    v-model="dataset.dtb">
                                <div v-if="validation.dtb" class="text-danger">
                                    {{ validation.dtb[0] }}
                                </div>

                                <!-- <div class="row mt-3">
                                    <label for="" class="form-label">Status Gizi</label>
                                    <br>
                                    <select name="dgizi" id="dgizi" form="knn" v-model="dataset.dgizi">
                                        <option value="" disabled selected>Pilih Status Gizi</option>
                                        <option value="1">Gizi Lebih</option>
                                        <option value="2">Gizi Baik</option>
                                        <option value="3">Gizi Kurang</option>
                                        <option value="4">Gizi Buruk</option>
                                    </select>
                                    <div v-if="validation.dgizi" class="text-danger">
                                        {{ validation.dgizi[0] }}
                                    </div>

                                    <label for="" class="form-label">Status Berat</label>
                                    <br>
                                    <select name="dberat" id="dberat" form="knn" v-model="dataset.dberat">
                                        <option value="" disabled selected>Pilih Status Berat</option>
                                        <option value="1">Gemuk</option>
                                        <option value="2">Normal</option>
                                        <option value="3">Kurus</option>
                                        <option value="4">Kurus Sekali</option>
                                    </select>
                                    <div v-if="validation.dberat" class="text-danger">
                                        {{ validation.dberat[0] }}
                                    </div>
                                </div> -->

                                <div class="row mt-3">
                                    <div class="col-md-4 select-outline">

                                        <label for="" class="form-label">Status Gizi</label>
                                        <br>
                                        <select name="dgizi" id="dgizi" form="knn" v-model="dataset.dgizi">
                                            <option value="" disabled selected>Pilih Status Gizi</option>
                                            <option value="1">Gizi Lebih</option>
                                            <option value="2">Gizi Baik</option>
                                            <option value="3">Gizi Kurang</option>
                                            <option value="4">Gizi Buruk</option>
                                        </select>
                                        <div v-if="validation.dgizi" class="text-danger">
                                            {{ validation.dgizi[0] }}
                                        </div>

                                    </div>
                                    <div class="col-md-4 select-outline">

                                        <label for="" class="form-label">Status Berat</label>
                                        <br>
                                        <select name="dberat" id="dberat" form="knn" v-model="dataset.dberat">
                                            <option value="" disabled selected>Pilih Status Berat</option>
                                            <option value="1">Gemuk</option>
                                            <option value="2">Normal</option>
                                            <option value="3">Kurus</option>
                                            <option value="4">Kurus Sekali</option>
                                        </select>
                                        <div v-if="validation.dberat" class="text-danger">
                                            {{ validation.dberat[0] }}
                                        </div>

                                    </div>

                                    <div class="col-md-4 select-outline">

                                        <label for="" class="form-label">Status Tinggi</label>
                                        <br>
                                        <select name="dtinggi" id="dtinggi" form="knn" v-model="dataset.dtinggi">
                                            <option value="" disabled selected>Pilih Status Tinggi</option>
                                            <option value="1"> Tinggi</option>
                                            <option value="2"> Normal</option>
                                            <option value="3"> Pendek</option>
                                            <option value="4"> Sangat Pendek</option>
                                        </select>
                                        <div v-if="validation.dtinggi" class="text-danger">
                                            {{ validation.dtinggi[0] }}
                                        </div>

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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
    setup() {
        //data binding
        const dataset = reactive({
            du: '',
            dbb: '',
            dtb: '',
            dgizi: '',
            dberat: '',
            dtinggi: '',
        });

        const validation = ref([]);

        const router = useRouter();

        function store() {
            axios.post(
                'http://127.0.0.1:8000/api/dataset',
                dataset
            )
                .then(() => {
                    router.push({
                        name: 'dataset.index'
                    });
                }).catch((err) => {
                    validation.value = err.response.data
                });
        }

        return {
            dataset,
            validation,
            router,
            store
        }
    }
}
</script>
