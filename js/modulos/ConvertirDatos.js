export {converirFormularioToJSON,convertiUrl}
function converirFormularioToJSON(evento){
    const fm=new FormData(evento.target);
    let json={};
    fm.forEach((value,key)=>(json[key]=value));
    json['otra-e']=""+1
    return json;
}
function convertiUrl(url){
    let l=0;
    for(let i=url.length;i>=0;i--){
        l=i;
        if(url[i]=='/')break;
    }
    return url.substring(0, l);
}