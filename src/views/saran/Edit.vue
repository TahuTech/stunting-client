<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'saran.index' }" class="btn btn-warning btn-sm rounded shadow mb-3">
                    Kembali
                </router-link>

                <div class="card rounded shadow">
                    <div class="card-header">Edit Komentar</div>
                    <div class="card-body">
                        <form @submit.prevent="update()">
                            <div class="mb-3">
                                <label for="" class="form-label">Isi Saran</label>
                                <input type="text" class="form-control" v-model="saran.isi">
                                <div v-if="validation.isi" class="text-danger">{{ validation.isi[0] }}</div>

                            </div>
                            <button class="btn btn-outline-primary">Simpan Perubahan</button>
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
        let saran = reactive({
            isi: '',
        });

        const validation = ref([]);

        const router = useRouter();
        const route = useRoute();

        onMounted(() => {
            axios.get(`http://127.0.0.1:8000/api/saran/${route.params.id}`)
                .then((result) => {
                    saran.isi = result.data.data.isi
                }).catch((err) => {
                    console.log(err.response.data)
                });
        });

        function update() {
            axios.put(
                `http://127.0.0.1:8000/api/saran/${route.params.id}`,
                saran
            )
                .then(() => {
                    router.push({
                        name: 'saran.index'
                    });
                }).catch((err) => {
                    validation.value = err.response.data
                });
        }

        return {
            saran,
            validation,
            router,
            update
        }
    }
}
</script>
