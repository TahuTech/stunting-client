<template>
    <section class="vh-100" style="background-color:#B8B8B8;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <h3 class="mb-5">Klanting Admin</h3>

                            <div class="form-outline mb-4">

                                <input type="email" id="typeEmailX-2" class="form-control form-control-lg"
                                    placeholder="Username" />
                            </div>

                            <div class="form-outline mb-4">

                                <input type="password" id="typePasswordX-2" class="form-control form-control-lg"
                                    placeholder="Password" />
                            </div>

                            <router-link :to="{ name: 'admin.index' }" class="btn btn-primary btn-lg btn-block">
                                <a>Login</a>
                            </router-link>

                            <hr class="my-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {};
</script>
