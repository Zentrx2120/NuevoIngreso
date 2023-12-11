import { validadorFormularioRegistro,validorFormularioBusqueda} from "./modulos/Validadores.js";
import { converirFormularioToJSON } from "./modulos/ConvertirDatos.js";
let formularioRegistrar=document.getElementById("Formulario-Registro");
formularioRegistrar.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    let res=validadorFormularioRegistro(formularioRegistrar);
    if(res.length>0) alert(res);
    else{
        let json=converirFormularioToJSON(evento);
        $.post("/server/respuestaIngreso.php", json,
            function (data, textStatus) {
                alert(data);   
            }
        ); 
    }
});
