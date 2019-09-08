function send(){
	var link = "mailto:gamerbra39@gmailcom"
             + "?cc=" + document.querySelector('input[id=email]').value
             + "&subject=Email do Site Github"
             + "&body=Nome: " + document.querySelector('input[id=nome]').value
             + "Telefone: " + document.querySelector('input[id=telefone]').value
             + "Assunto: "+ document.getElementById("info").value;

    window.location.href = link;
}
