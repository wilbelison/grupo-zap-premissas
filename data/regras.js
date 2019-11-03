var regras = {
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