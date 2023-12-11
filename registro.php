<?php $titulo="Registro";?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include './assets/head.php'?>
    </head>
    <body>
        <?php include './assets/menu.php'; ?>
        <header class="masthead" style="background-image: url('assets/img/examen.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="page-heading">
                            <h1>Registro</h1>
                            <span class="subheading">Examen de Nuevo Ingreso</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="my-5">
                            <form id="Formulario-Registro">
                                <div class="block-form">
                                    <h3><i class="fa-solid fa-id-card"></i> Indentidad</h3>
                                <div class="form-floating">
                                    <input type="text" placeholder="Nombre" type="text" id="nombre" class="form-control" require>
                                    <label for="nombre">Nombre</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">Nombre requerido.</div>
                                </div>
                                <div class="form-floating">
                                    <input type="text" placeholder="Apellido" type="text" id="apellido" class="form-control" require>
                                    <label for="nombre">Apellido</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">Apellido requerido.</div>
                                </div>
                                <div class="form-floating">
                                    <input type="text" placeholder="Nombre" type="text" id="pm" class="form-control" require>
                                    <label for="nombre">Preboleta</label>
                                    <div class="invalid-feedback" data-sb-feedback="boleta">La boleta no es valida.</div>
                                </div>
                                <div class="form-floating">
                                    <input type="text" placeholder="Apellido" type="text" id="curp" class="form-control" require>
                                    <label for="nombre">Curp</label>
                                    <div class="invalid-feedback" data-sb-feedback="curp">El curp es invalido.</div>
                                </div>
                                </div>
                                <div class="block-form">
                                    <h3><i class="fa-solid fa-address-book"></i> Contacto</h3>
                                    <div class="form-floating">
                                        <input type="text" placeholder="Email" type="email" id="coreo" class="form-control" require>
                                        <label for="nombre"><i class="fa-solid fa-envelope"></i> Email</label>
                                        <div class="invalid-feedback" data-sb-feedback="curp">El correo es invalido.</div>
                                    </div>
                                    <div class="form-floating">
                                        <input  placeholder="Telefono" type="tel" id="telefono" class="form-control" require>
                                        <label for="nombre"><i class="fa-solid fa-phone"></i> Telefono</label>
                                        <div class="invalid-feedback" data-sb-feedback="curp">El telefono es invalido.</div>
                                    </div>
                                </div>
                                <div class="block-form">
                                    <h3><i class="fa-solid fa-globe"></i> Procedencia</h3>
                                    <div class="form-floating">
                                        <select name="" id="estado" class="form-control obd">
                                            <option value="Mexico">Mexico</option>
                                        </select>
                                        <label for="nombre">Estado</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" placeholder="Escuela" type="text" id="escuela"  list="escuelas" class="form-control" required>
                                        <datalist id="escuelas">
                                            <option value="Cecyt-8">Cecyt 8</option>
                                        </datalist>
                                        <label for="nombre"><i class="fa-solid fa-school"></i> Escuela</label>
                                        <div class="invalid-feedback" data-sb-feedback="escuela">La escuela es invalida.</div>
                                    </div>
                                </div>
                                <div class="form-block">
                                    <h3>Promedio</h3>
                                    <div class="form-floating">
                                        <input type="text" placeholder="Promedio" type="number" id="promedio" class="form-control" require>
                                        <label for="nombre"><i class="fa-solid fa-graduation-cap"></i> Promedio</label>
                                        <div class="invalid-feedback" data-sb-feedback="curp">El telefono es invalido.</div>
                                    </div>
                                </div>
                                <div class="block-form">
                                    <h3>Dificultades</h3>
                                </div>
                                <button class="btn btn-primary text-uppercase" id="enviarFormulario"><i class="fa-solid fa-paper-plane"></i> Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <?php include './assets/footer.php'; ?>
    </body>
</html>