/*{
    id:"",
    nombre: "",
    telefono:"",
    correo:"",
    preboleta:"",
    promedio:"",
    EntidadFederativa: "",
    Fecha-Nacimineto:" "
}*/
let formulario=document.getElementById('formulario');
let btnSubmit=document.getElementById('submit');
let btnOk=document.getElementById('ok');
let btnEdit=document.getElementById('edit');
let infoPanel=document.getElementById('panelInfo');
function validarCapus(curp,preboleta,telefono){
    return validadorCurp(curp) && validadorDeBoletas(preboleta) && validadorNumero(telefono);
}
function generarJson(nombre,tel,correo,preboleta,promedio,entidad,nacimineto){
    return {
                "id":"",
                "nombre": nombre,
                "telefono": telefono,
                "correo":correo,
                "preboleta":preboleta,
                "promedio":promedio,
                "entidadFederativa": entidad,
                "fechaNacimineto": nacimineto
    }
}
btnSubmit.addEventListener('click',()=>{
    formulario.style.display="none";
    infoPanel.style.display="block";
    if(validarCapus(formulario["nombre"].formulario["preboleta"].value,formulario["telefono"].value)==0){
        alert("Los datos estan mal ");
        location.reload();
    }
    else{
        let json =localStorage.getItem('user')
        if(json==null){
            json=generarJson()
            localStorage.setItem('usuario',JSON.stringify(json));
        }
        else{
            json=JSON.parse(json);
            json=generarJson();
        }
    }
})

