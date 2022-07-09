<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'balita.index' }" class="btn btn-warning btn-sm rounded shadow mb-3">
                    Kembali
                </router-link>

                <div class="card rounded shadow">
                    <div class="card-header">Tambah Data Balita</div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="" class="form-label">Nama Balita</label>
                                <input type="text" class="form-control" v-model="balita.nama">
                                <div class="text-danger">
                                    Pesan Validasi
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
        const balita = reactive({
            nama: '',
        });

        const validation = ref([]);

        const router = useRouter();

        function store() {
            axios.post(
                'http://127.0.0.1:8000/api/balita',
                balita
            )
                .then(() => {
                    router.push({
                        name: 'balita.index'
                    });
                }).catch((err) => {
                    validation.value = err.response.data
                });
        }

        return {
            balita,
            validation,
            router,
            store
        }
    }
}
</script>
