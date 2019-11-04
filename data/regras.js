var regras = {
    content: {
        title: 'A ação é endossada pelo Grupo ZAP ou é uma iniciativa da área?',
        type: 'question',
        options: [
            {
                label: 'Grupo ZAP',
                content: {
                    title: 'É uma nova unidade de negócio do Grupo ZAP?',
                    type: 'question',
                    options: [
                        {
                            label: 'Sim',
                            content: {
                                title: 'Resultado',
                                type: 'answer',
                                rules: [
                                    {
                                        text: 'Pode ter identidade visual própria ou nome próprio;',
                                        class: 'green'
                                    },
                                    {
                                        text: 'Pode ter página própria e/ou redes sociais;',
                                        class: 'green'
                                    },
                                    {
                                        text: 'Pode ou não seguer com a identidade visual do Grupo ZAP;',
                                        class: 'green'
                                    },
                                    {
                                        text: 'Deve ser executado pelo time de Branding.',
                                        class: 'yellow'
                                    }
                                ]
                            }
                        },
                        {
                            label: 'Não',
                            content: {
                                title: 'É voltado para profissionais do mercado imobiliário?',
                                type: 'question',
                                options: [
                                    {
                                        label: 'Sim',
                                        content: {
                                            title: 'É uma ação de co-branding?',
                                            type: 'question',
                                            options: [
                                                {
                                                    label: 'Sim',
                                                    content: {
                                                        title: 'Resultado',
                                                        type: 'answer',
                                                        rules: [
                                                            {
                                                                text: 'Utiliza a nomenclatura "ZAP";',
                                                                class: 'green'
                                                            },
                                                            {
                                                                text: 'É possível escolher onde posicionar o termo "ZAP";',
                                                                class: 'green'
                                                            },
                                                            {
                                                                text: 'Deve utilizar e seguir com a identidade visual do Grupo ZAP;',
                                                                class: 'yellow'
                                                            },
                                                            {
                                                                text: 'Deve ser executado pelo time de Branding, não esqueça de procurar a gente ;',
                                                                class: 'yellow'
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    label: 'Não',
                                                    content: {
                                                        title: 'É híbrido (B2B / B2C)?',
                                                        type: 'question',
                                                        options: [
                                                            {
                                                                label: 'Sim',
                                                                content: {
                                                                    title: 'Resultado',
                                                                    type: 'answer',
                                                                    rules: [
                                                                        {
                                                                            text: 'Deve utilizar o prefixo "ZAP" sempre;',
                                                                            class: 'yellow'
                                                                        },
                                                                        {
                                                                            text: 'Deve seguir com a identidade visual do Grupo ZAP;',
                                                                            class: 'yellow'
                                                                        },
                                                                        {
                                                                            text: 'Deve ser executado pelo time de Branding.',
                                                                            class: 'yellow'
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                label: 'Não',
                                                                content: {
                                                                    title: 'Resultado',
                                                                    type: 'answer',
                                                                    rules: [
                                                                        {
                                                                            text: 'Deve utilizar o sufixo "PRO";',
                                                                            class: 'yellow'
                                                                        },
                                                                        {
                                                                            text: 'Deve seguir com a identidade visual do Grupo ZAP;',
                                                                            class: 'yellow'
                                                                        },
                                                                        {
                                                                            text: 'Deve ser executado pelo time de Branding.',
                                                                            class: 'yellow'
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    }
                                                } 
                                            ]
                                        }
                                    },
                                    {
                                        label: 'Não',
                                        content: {
                                            title: 'É uma ação de co-branding?',
                                            type: 'question',
                                            options: [
                                                {
                                                    label: 'Sim',
                                                    content: {
                                                        title: 'Resultado',
                                                        type: 'answer',
                                                        rules: [
                                                            {
                                                                text: 'É possível escolher onde posicionar o termo “ZAP”;',
                                                                class: 'green'
                                                            },
                                                            {
                                                                text: 'Deve seguir com a identidade visual do Grupo ZAP;',
                                                                class: 'yellow'
                                                            },
                                                            {
                                                                text: 'Deve ser executado pelo time de Branding.',
                                                                class: 'yellow'
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    label: 'Não',
                                                    content: {
                                                        title: 'Resultado',
                                                        type: 'answer',
                                                        rules: [
                                                            {
                                                                text: 'Deve obedecer as regras da “marca mãe”, ou seja, a marca que dá origem a essa.',
                                                                class: 'yellow'
                                                            }
                                                        ]
                                                    }
                                                },
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                label: 'Área',
                content: {
                    title: 'Tem interface com o público externo?',
                    type: 'question',
                    options: [
                        {
                            label: 'Sim',
                            content: {
                                title: 'Resultado',
                                type: 'answer',
                                rules: [
                                    {
                                        text: 'Pode ter páginas próprias (Blog ou página de inscrição do evento);',
                                        class: 'green'
                                    },
                                    {
                                        text: 'Não pode ter redes sociais;',
                                        class: 'red'
                                    },
                                    {
                                        text: 'Deve seguir com a identidade visual do Grupo ZAP;',
                                        class: 'yellow'
                                    },
                                    {
                                        text: 'Deve ser executado pelo time de Branding.',
                                        class: 'yellow'
                                    }
                                ]
                            }
                        },
                        {
                            label: 'Não',
                            content: {
                                title: 'Você quer seguir a identidade visual do Grupo ZAP?',
                                type: 'question',
                                options: [
                                    {
                                        label: 'Sim',
                                        content: {
                                            title: 'Resultado',
                                            type: 'answer',
                                            rules: [
                                                {
                                                    text: 'Não pode ter redes sociais;',
                                                    class: 'red'
                                                },
                                                {
                                                    text: 'Deve seguir com a identidade visual do Grupo ZAP;',
                                                    class: 'yellow'
                                                },
                                                {
                                                    text: 'Deve contar com a orientação e ajudinha do time de Branding para execução.',
                                                    class: 'yellow'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        label: 'Não',
                                        content: {
                                            title: 'Resultado',
                                            type: 'answer',
                                            rules: [
                                                {
                                                    text: 'Não pode ter redes sociais;',
                                                    class: 'red'
                                                },
                                                {
                                                    text: 'Não precisa seguir com a identidade visual do Grupo ZAP;',
                                                    class: 'green'
                                                },
                                                {
                                                    text: 'Não precisa da ajudinha do time de Branding para execução.',
                                                    class: 'green'
                                                }
                                            ]
                                        }
                                    },
                                ]
                            }
                        }
                            
                    ]
                }
            }
        ]
    }
}