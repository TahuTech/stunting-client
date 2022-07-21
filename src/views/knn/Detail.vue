<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'knn.index' }" class="btn btn-warning btn-sm rounded shadow mb-3">
                    Kembali
                </router-link>

                <div class="card rounded shadow">
                    <div class="card-header">Detail Balita</div>
                    <div class="card-body">
                        <h6>Nama Balita : </h6>
                        <h6>Umur : </h6>
                        <h6>BB : </h6>
                        <h6>TB : </h6>
                        <h6>Status Gizi : </h6>
                        <h6>Status Berat : </h6>
                        <h6>Status Tinggi : </h6>
                        <br>
                        <h6>Penanganan yang dilakukan</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // setup() {
    //     //data binding
    //     let knns = ref([]);

    //     const router = useRouter();
    //     const route = useRoute();

    //     onMounted(() => {
    //         axios.get(`http://127.0.0.1:8000/api/knn/${route.params.id}`)
    //             .then((result) => {
    //                 knns.value = result.data
    //             }).catch((err) => {
    //                 console.log(err.response.data)
    //             });
    //     });


    //     return {
    //         knns,
    //         router,
    //     }
    // }
}
</script>
