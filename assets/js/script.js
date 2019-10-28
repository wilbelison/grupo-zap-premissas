$(document).ready(
	function () {



	}
);

/* formspree.io */

window.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("fale-form");
    var button = document.getElementById("fale-submit");
    var status = document.getElementById("fale-status");
    var reset = document.getElementById("fale-reset");
    
    function success() {
        form.reset();
        button.style = "display: none";
        status.innerHTML = "Envidado ;)";
    }

    function limpar() {
        form.reset();
        button.style = "display: block";
        status.innerHTML = "";
    }

    function error() {
        status.innerHTML = "Oops! Ocorreu um erro :(";
    }

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });

    reset.addEventListener("click", function(ev) {
        ev.preventDefault();
        limpar();
    });

});

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
        } else {
        error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

/* video mais lento em 25% */

var video = document.getElementById('video');
video.playbackRate = 0.75;

/* removedor de acentos */

function removeAcentos (text) {       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}