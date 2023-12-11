import { validadorFormularioRegistro,validorFormularioBusqueda} from "./modulos/Validadores.js";
import { converirFormularioToJSON,convertiUrl } from "./modulos/ConvertirDatos.js";

let formularioRegistrar=document.getElementById("Formulario-Registro");
let checkOtra=document.getElementById("otraEscuela");
let otraEscuela=document.getElementById("OtraEscuela");
let otraDiscapacidadCheck=document.getElementById("otraDiscapacidadCheck");
let otraDiscapacidadCampo=document.getElementById('otraDiscapacidadCampo');

checkOtra.checked=false;
otraDiscapacidadCheck.checked=false;

formularioRegistrar.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    let res=validadorFormularioRegistro(formularioRegistrar);
    if(res.length>0) alert(res);
    else{
        let json=converirFormularioToJSON(evento);
        console.log(json);
        let location=convertiUrl(window.location.pathname);
        console.log(location);
        $.post(location+"/server/respuestaIngreso.php", json,
            function (data, textStatus) {
                console.log(data)   
            }
        ); 
    }
    otraEscuela.value="";
    otraDiscapacidadCampo.value="";
});

checkOtra.addEventListener('change',(e)=>{
    if(checkOtra.checked) otraEscuela.style.display="block";
    else otraEscuela.style.display="none";
    otraEscuela.value="";
});
otraDiscapacidadCheck.addEventListener('change',(e)=>{
    if(otraDiscapacidadCheck.checked)otraDiscapacidadCampo.style.display="block";
    else otraDiscapacidadCampo.style.display="none";
    otraDiscapacidadCampo.value="";
});
