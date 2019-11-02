$(document).ready(
	function () {

        $(document).on('lity:ready', function(event, instance) {
            if (event.target.id == 'iniciativas-ext-int') {
                $(event.currentTarget.activeElement).addClass('mapa');
                console.log(event.currentTarget.activeElement);
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

var premissas = {
    content: {
        type: 'question',
        title: 'Olá, tudo bem?',
        options: [{
            label: 'Sim',
            content: {
                type: 'question',
                title: 'Que bom, qual seu sexo?',
                options: []
            }
        },
        {
            label: 'Não',
            content: {
                type: 'question',
                title: 'Poxa, que pena. Quer ouvir uma piada?',
                options: []
            }
        }]
    }
}

console.log(premissas);
console.log(premissas.content);

var printQA = function (opt) {
    var html = (opt) ? renderQA(opt) : renderQA(premissas);
}

var renderQA = function(opt) {
    console.log(opt);
    var teste = opt.content.options[0];
    var html = `<div>
        <h1>${opt.content.title}</title>
        <a onclick="printQA(${opt.content.options[0]})">${opt.content.options[0].label}</a>
        <a onclick="printQA(${opt.content.options[1]})">${opt.content.options[1].label}</a>
        </div>`;
    $('body').append(html);
    console.log(teste);
}

printQA();