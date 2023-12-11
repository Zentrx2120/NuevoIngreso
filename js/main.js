import { validadorFormularioRegistro,validorFormularioBusqueda} from "./modulos/Validadores";
let formularioRegistrar=document.getElementById("Formulario-Registro")
$("#enviarFormulario").click(function(){
    let res=validadorFormularioRegistro(formularioRegistrar);
    if(res.length>0) alert(res);
    else{
        
    }
})