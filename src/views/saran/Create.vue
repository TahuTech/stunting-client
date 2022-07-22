<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'saran.index' }" class="btn btn-warning btn-sm rounded shadow mb-3">
                    Kembali
                </router-link>

                <div class="class card rounded shadow">
                    <div class="card-header">Tambah Komentar</div>
                    <div class="class card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="" class="class form-label">Isi Saran</label>
                                <input type="text" class="class form-control" placeholder="Saran Untuk Website ini.."
                                    style="height:150px" v-model="saran.isi">
                                <div v-if="validation.isi" class="text-danger">
                                    {{ validation.isi[0] }}</div>
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
        const saran = reactive({
            isi: '',
        });

        const validation = ref([]);

        const router = useRouter();

        function store() {
            axios.post(
                'http://127.0.0.1:8000/api/saran',
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
            store
        }
    }
}
</script>
