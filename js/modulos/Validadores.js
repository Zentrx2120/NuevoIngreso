function validarDeBoletas(str){
    let pattern=/^(PM|PE)[0-9]{8}$/;
    return isNaN(str)==0 && pattern.test(str);
}
function validarCurp(str){
    let pattern=/^[A-Z]{4}[0-9]{6}[A-Z]{6}[A-Z|0-9]{2}$/;
    return isNaN(str)==0 && pattern.test(str);
}
function validarNumero(str){
    let pattern=/^[0-9]{2}[0-9]{8}$/;
    return isNaN(str)==0 && pattern.test(str);
}
function validarNombre(nombre){
    return isNaN(nombre)==0;
}
function validarApellido(apellido){
    return isNaN(apellido)==0;
}
function validarCorreo(correo){
    let pattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return isNaN(correo)==0 && pattern.test(correo);
}
function validarEscuela(escuela){
    return isNaN(escuela)==0;
}
function validarPromedio(promedio){
    return isNaN(promedio)==0;
}
function validadorFormularioRegistro(formulario){
    let res="";
    if(validarNombre(formulario['nombre'].value)==0)res=res+"Nombre ";
    if(validarApellido(formulario['apellido'].value)==0)res=res+"Apellido ";
    if(validarDeBoletas(formulario['boleta'].value)==0)res=res+"Boleta ";
    if(validarCurp(formulario['curp'].value)==0)res=res+"Curp ";
    if(validarCorreo(formulario['correo'].value)==0)res=res+"Correo ";
    if(validarNumero(formulario['numero'].value)==0)res=res+"Numero ";
    if(validarEscuela(formulario['escuela'].value)==0)res=res+"Escuela ";
    if(validarPromedio(formulario['promedio'].value)==0)res=res+"Promedio ";
    if(res.length>0) res+="Incorrecto";
    return res;
}
function validorFormularioBusqueda(formulario){
    let res="";
    if(validarCurp(formulario['curp'].value))res="Curp Invalido";
    return res;
}
export {validadorFormularioRegistro,validorFormularioBusqueda};
