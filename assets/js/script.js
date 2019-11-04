$(document).ready(
	function () {

        $(document).on('lity:ready', function(event, instance) {
            if (event.target.id == 'iniciativas-externas' || event.target.id == 'iniciativas-internas' || event.target.id == 'regras-e-premissas') {
                $(event.currentTarget.activeElement).addClass('fixo');
            }
        });

    }
);

/* video mais lento em 25% */

var video = document.getElementById('video');
video.playbackRate = 0.75;

/* formspree.io */

window.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("fale-form");
    var button = document.getElementById("fale-submit");
    var status = document.getElementById("fale-status");
    var reset = document.getElementById("fale-reset");
    var campos = $('#fale-form .input');
    status.style = "display: none;";
    
    function success() {
        form.reset();
        button.style = "display: none";
        status.innerHTML = "E-mail envidado com sucesso ;)";
        status.style = "display: inline-block;";
        status.style = "color: #66CC00;"
        campos.hide();
    }

    function limpar() {
        form.reset();
        button.style = "display: block";
        status.innerHTML = "";
        status.style = "display: none;";
        campos.show();
    }

    function error() {
        status.innerHTML = "Oops! Ocorreu um erro :(";
        status.style = "color: #FF0F0F;"
        status.style = "display: inline-block;";
        campos.hide();
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

var abrirIniciativa = function(iniciativa) {
    console.log(iniciativa);
    var html = `
        <div id="iniciativa" class="view">
        <div class="container">
            <div class="header"><a href="#" class="back" data-lity-close></a> <h2>${iniciativa.properties.nome}</h2> <a href="#" class="close" data-lity-close></a> <a href="#menu" class="menu" data-lity-close data-lity></a> </div>
            <div class="content">
                <div class="logo"></div>
                <p class="descricao">${iniciativa.properties.descricao}</p>
                <ul class="links">
                    <li><a href="javascript:;" class="back" data-lity-close>Voltar</a></li>
                </ul>
            </div>
        </div>
    </div>
    `;
    lity(html);
}

var abrirFale = function() {
    lity('#fale');
}