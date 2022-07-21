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
                <input type="number" class="form-control" v-model="knn.id_balita">
                <div v-if="validation.id_balita" class="text-danger">
                  {{ validation.id_balita[0] }}
                </div>

                <label for="" class="form-label">Umur Balita</label>
                <input type="number" class="form-control" min="0" max="60" v-model="knn.u">
                <div v-if="validation.u" class="text-danger">
                  {{ validation.u[0] }}
                </div>

                <label for="" class="form-label">Berat Balita</label>
                <input type="number" class="form-control" min="0" v-model="knn.bb">
                <div v-if="validation.bb" class="text-danger">
                  {{ validation.bb[0] }}
                </div>

                <label for="" class="form-label">Tinggi Balita</label>
                <input type="number" class="form-control" min="0" v-model="knn.tb">
                <div v-if="validation.tb" class="text-danger">
                  {{ validation.tb[0] }}
                </div>

                <label for="" class="form-label">Bulan Pengukuran</label>
                <br>
                <select name="bulan" id="bulan" form="knn" v-model="knn.bulan">
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
