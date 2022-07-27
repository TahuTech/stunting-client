<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/user">Klanting user</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/user/balita">Balita</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/user/knn">Status Balita</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/user/saran">Saran</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/user/about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">

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
                        name: 'user.index'
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
