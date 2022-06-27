//Função do botão calcular
function cal(){
    const n = document.getElementById("iNome").value;
    const alt = document.getElementById("iAltura").value;
    const peso = document.getElementById("iPeso").value;

  //para que o usuário possa poder usar tanto o ponto quanto a vírgula.
  var a = parseFloat(alt.replace(",", "."));
  var p = parseFloat(peso.replace(",","."));

    if(n == "" && a == "" && p == "" ){
        alert("É necessario preencher todos os campos!")
    } else{
        const r = (p / (a * a)).toFixed(1);
        let classificar = "";
        if(r < 18.5){
            classificar = "Abaixo do Peso."
        }else if(r < 24.9){
            classificar = "Peso Normal. Parabéns!"
        }else if(r < 29.9 ){
            classificar = "Sobrepeso."
        }else if(r < 39.9){
            classificar = "com Obesidade."
        }else {
            classificar = "com Obesidade Grave."
        }
        
        return document.getElementById("iResultado").innerHTML = n +" seu IMC é "+ r + " e você está "+ classificar;
  
    }
}