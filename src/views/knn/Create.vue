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
              <div class="mb-3">
                <label for="" class="form-label">Id Balita</label>
                <input type="number" class="form-control">

                <label for="" class="form-label">Umur Balita</label>
                <input type="number" class="form-control" min="0" max="60">

                <label for="" class="form-label">Berat Balita</label>
                <input type="number" class="form-control" min="0" max="60">

                <label for="" class="form-label">Tinggi Balita</label>
                <input type="number" class="form-control" min="0" max="60">

                <label for="" class="form-label">Bulan Pengukuran</label>
                <br></br>
                <select name="cars" id="cars" form="carform">
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
