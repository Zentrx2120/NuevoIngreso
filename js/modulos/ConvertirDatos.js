export {converirFormularioToJSON}
function converirFormularioToJSON(evento){
    const fm=new FormData(evento.target);
    let json={};
    fm.forEach((value,key)=>(json[key]=value));
    return json;
}