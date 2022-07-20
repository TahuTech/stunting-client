<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link :to="{ name: 'knn.index' }" class="btn btn-warning btn-sm rounded shadow mb-3">
          Kembali
        </router-link>

        <div class="card rounded shadow">
          <div class="card-header">Tambah Data Pengukuran Balita</div>
          <div class="card-body">
            <form @submit.prevent="store()">


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
    const knn = reactive({
      id_balita: '',
      u: '',
      bb: '',
      tb: '',
      bulan: '',
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      axios.post(
        'http://127.0.0.1:8000/api/knn',
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
      store
    }
  }
}
</script>
