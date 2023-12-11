function validadorDeBoletas(str){
    let pattern=/^(PM|PE)[0-9]{8}$/;
    return pattern.test(str);
}
function validadorCurp(str){
    let pattern=/^[A-Z]{4}[0-9]{6}[A-Z]{6}[A-Z|0-9]{2}$/;
    return test(str);
}
function validadorNumero(str){
    let pattern=/^[0]{2}[0-9]{8}$/;
    return test(str);
}
