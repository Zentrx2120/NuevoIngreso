/*
{
    nombre: "",
    telefono:"",
    correo:"",
    preboleta:"",
    promedio:"",
    EntidadFederativa: " ",
    Fecha-Nacimineto:" "
}
*/
let btnOk=document.getElementById('ok');
let btnEdit=document.getElementById('edit');
btnOk.addEventListener('click',()=>{
    localStorage.removeItem('usuario');
    location.reload();
})
btnEdit.addEventListener('click',()=>{
    location.reload();
})
