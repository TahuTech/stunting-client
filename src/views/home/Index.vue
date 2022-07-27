<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">

                <div class="card shadow-2-strong" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">

                        <h3 class="mb-5">Klanting</h3>

                        <div class="form-outline mb-4">

                            <input type="email" id="typeEmailX-2" class="form-control form-control-lg"
                                placeholder="Email" />
                        </div>

                        <div class="form-outline mb-4">

                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg"
                                placeholder="Password" />
                        </div>

                        <router-link :to="{ name: 'user.index' }" class="btn btn-primary btn-lg btn-block">
                            <a>Masuk</a>
                        </router-link>


                        <hr class="my-4">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <router-link :to="{ name: 'login.index' }">
            <a>Nur Ali Sholikhin</a>
        </router-link>
    </footer>
</template>

<style>
footer {
    text-align: center;
    padding: 3px;
    color: white;
}
</style>

<script>
export default {};
</script>
