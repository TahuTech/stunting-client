<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'balita.index' }" class="btn btn-warning btn-sm rounded shadow mb-3">
                    Kembali
                </router-link>

                <div class="card rounded shadow">
                    <div class="card-header">Edit Data Balita</div>
                    <div class="card-body">
                        <form @submit.prevent="update()">
                            <div class="mb-3">
                                <label for="" class="form-label">Nama Balita</label>
                                <input type="text" class="form-control" v-model="balita.nama">
                                <div v-if="validation.nama" class="text-danger">
                                    {{ validation.nama[0] }}
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
        let balita = reactive({
            nama: '',
        });

        const validation = ref([]);

        const router = useRouter();
        const route = useRoute();

        onMounted(() => {
            axios.get(`http://127.0.0.1:8000/api/balita/${route.params.id}`)
                .then((result) => {
                    balita.nama = result.data.data.nama
                }).catch((err) => {
                    console.log(err.response.data)
                });
        });

        function update() {
            axios.put(
                `http://127.0.0.1:8000/api/balita/${route.params.id}`,
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
            update
        }
    }
}
</script>
