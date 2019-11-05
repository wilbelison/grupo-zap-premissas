var iniciativas = {
    features: [
        /* Externas */
        {
            properties: {
                nome: 'Viva Real',
                tipo: 'externa',
                logo: 'vivareal.png',
                descricao: 'No Viva Real você encontra casas e apartamentos novos e usados para compra, venda ou aluguel em SP e no Brasil.'
            },
            geometry: {
                coordinates: [854, 434], /* [x,y] */
                size: [142, 74], /* [w,h] */
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'ZAP',
                tipo: 'externa',
                logo: 'zap.png',
                descricao: 'ZAP	O ZAP Imóveis é o maior portal de classificados de Imóveis e Imobiliárias. Encontre casas, apartamentos, terrenos e imóveis para compra, venda e aluguel.'
            },
            geometry: {
                coordinates: [848, 606], /* [x,y] */
                size: [156, 92], /* [w,h] */
                type: 'Point',
            },
            type: 'Feature',
        },


        {
            properties: {
                nome: 'DataZAP',
                tipo: 'externa',
                logo: 'datazap.png',
                descricao: 'Principal fonte de inteligência imobiliária no Brasil.'
            },
            geometry: {
                coordinates: [858, 1374],
                size: [156, 60],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'FipeZAP',
                tipo: 'externa',
                logo: 'fipezap.png',
                descricao: 'O projeto FipeZAP é pioneiro em acompanhamento sistemático da evolução dos preços do mercado imobiliário brasileiro.'
            },
            geometry: {
                coordinates: [858, 1442],
                size: [156, 60],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'ZAP Fin',
                tipo: 'externa',
                logo: 'zapfin.png',
                descricao: 'O crédito imobiliário do Grupo ZAP.'
            },
            geometry: {
                coordinates: [222, 444],
                size: [156, 70],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Conecta Imobi',
                tipo: 'externa',
                logo: 'conectaimobi.png',
                descricao: 'O Conecta Imobi, realizado pelo Grupo ZAP, é o maior e mais completo evento de tecnologia, marketing e vendas do mercado imobiliário na América Latina.'
            },
            geometry: {
                coordinates: [846, 1194],
                size: [156, 108],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'ZAP home',
                tipo: 'externa',
                logo: 'zaphome.png',
                descricao: 'imóveis usados viram novos negócios e você vende o dobro.'
            },
            geometry: {
                coordinates: [370, 1454],
                size: [64, 24],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Imobi Cast',
                tipo: 'externa',
                logo: 'imobicast.png',
                descricao: 'O Imobi Cast são conteúdos em formato de PODCAST com grandes nomes do mercado imobiliário.'
            },
            geometry: {
                coordinates: [900, 828],
                size: [156, 90],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Imobi Day',
                tipo: 'externa',
                logo: 'imobiday.png',
                descricao: 'O Imobi Day é um evento voltado ao mercado imobiliário com foco em imobiliárias e corretores com dados exclusivos, marketing, inovações e tendências do mercado em diversão regiões do nosso país.'
            },
            geometry: {
                coordinates: [900, 928],
                size: [156, 80],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Blog',
                tipo: 'externa',
                logo: '',
                descricao: 'É um blog de conteúdo do Grupo ZAP com foco no mercado imobiliário, tendências, inovação e marketing.'
            },
            geometry: {
                coordinates: [900, 1092],
                size: [38, 26],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Imobi Day INC',
                tipo: 'externa',
                logo: 'imobidayinc.png',
                descricao: 'O Imobi Day INC é um evento voltado ao mercado imobiliário com foco em incorporadoras com dados exclusivos, marketing, inovações e tendências do mercado em diversão regiões do nosso país.'
            },
            geometry: {
                coordinates: [898, 1018],
                size: [156, 70],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Conecta Imobi Academy',
                tipo: 'externa',
                logo: 'conectaimobi_academy.png',
                descricao: 'A plataforma de vídeos online que reúne os melhores conteúdos do mercado imobiliário e do Conecta Imobi.'
            },
            geometry: {
                coordinates: [1030, 1160],
                size: [156, 42],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Conecta Imobi Cruzeiro',
                tipo: 'externa',
                logo: 'conectaimobi_cruzeiro.png',
                descricao: 'O maior evento do mercado imobiliário da América Latina, agora também em alto mar.'
            },
            geometry: {
                coordinates: [1030, 1210],
                size: [156, 42],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Revista ZAP em Casa',
                tipo: 'externa',
                logo: 'zapemcasa.png',
                descricao: 'Encontre na Revista do ZAP Imóveis dicas para Decoração, notícias de Mercado Imobiliário, dicas para financiar seu Imóvel e muito mais.'
            },
            geometry: {
                coordinates: [1030, 522],
                size: [156, 74],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Canal Pro',
                tipo: 'externa',
                logo: 'canalpro.png',
                descricao: 'É a nova plataforma de gestão de contatos, anúncios e resultados exclusiva para quem anuncia no portal Viva Real.'
            },
            geometry: {
                coordinates: [1082, 606],
                size: [156, 60],
                type: 'Point',
            },
            type: 'Feature',
        },
        /* {
            properties: {
                nome: 'Extranet',
                tipo: 'externa',
                logo: '',
                descricao: 'Ferramentas de auxílio para os profissionais responsáveis pela inclusão e manutenção dos anúncios e para os responsáveis pela gestão financeira no Portal ZAP.'
            },
            geometry: {
                coordinates: [1280, 1020],
                size: [156, 80],
                type: 'Point',
            },
            type: 'Feature',
        }, */
        {
            properties: {
                nome: 'Geoimóvel',
                tipo: 'externa',
                logo: 'geoimovel.png',
                descricao: 'A Geoimóvel é uma empresa de soluções e pesquisas imobiliárias que oferece as mais diferenciadas ferramentas e instrumentos de análise mercadológica para as empresas que atuam no setor imobiliário, setor financeiro, prefeituras, órgãos públicos e todas as demais organizações relacionadas a cadeia.'
            },
            geometry: {
                coordinates: [178, 566],
                size: [156, 42],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Sub100sistemas',
                tipo: 'externa',
                logo: 'sub100sistemas.png',
                descricao: 'Soluções completas para imobiliárias, construtoras e loteadoras.'
            },
            geometry: {
                coordinates: [178, 1058],
                size: [156, 60],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'houseCRM',
                tipo: 'externa',
                logo: 'housecrm.png',
                descricao: 'Gerenciamento de leads, mídias em todos os canais, stand de vendas do início ao fim.'
            },
            geometry: {
                coordinates: [178, 750],
                size: [156, 52],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'houseParcerias',
                tipo: 'externa',
                logo: 'houseparcerias.png',
                descricao: 'Gestão de informação e relacionamento com imobiliárias parceiras e corretores autônomos.'
            },
            geometry: {
                coordinates: [178, 696],
                size: [156, 46],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'houseVendas',
                tipo: 'externa',
                logo: 'housevendas.png',
                descricao: 'Espelho de vendas, propostas, pendências, cálculo VPL, pagadoria, montagem de pastas, Integração ERP.'
            },
            geometry: {
                coordinates: [176, 1122],
                size: [156, 46],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'houseBI',
                tipo: 'externa',
                logo: 'housebi.png',
                descricao: 'Cruzamento de dados da plataforma para ajudar na tomada de decisão.'
            },
            geometry: {
                coordinates: [178, 1176],
                size: [156, 58],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'houseLeads',
                tipo: 'externa',
                logo: 'houseleads.png',
                descricao: 'Nossos serviços de pré-atendimento para triplicar sua conversao em vendas.'
            },
            geometry: {
                coordinates: [178, 1240],
                size: [156, 50],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'houseGestão',
                tipo: 'externa',
                logo: 'housegestao.png',
                descricao: 'Consultoria desenvolvida sob medida para o mercado imobiliário.'
            },
            geometry: {
                coordinates: [178, 926],
                size: [156, 52],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Blog - Conecta Imobi',
                tipo: 'externa',
                logo: 'conectaimobi_blog.png',
                descricao: 'Blog de Conteúdo do Grupo ZAP'
            },
            geometry: {
                coordinates: [1030, 1260],
                size: [156, 42],
                type: 'Point',
            },
            type: 'Feature',
        },
        /* {
            properties: {
                nome: 'SELECT',
                tipo: 'externa',
                logo: 'select.png',
                descricao: 'Programa de incentivo do Grupo ZAP para clientes Premium, voltado para imobiliárias e incorporadoras.'
            },
            geometry: {
                coordinates: [1280, 1020],
                size: [156, 80],
                type: 'Point',
            },
            type: 'Feature',
        }, */
        /* Internas */
        {
            properties: {
                nome: 'Beers & Bytes',
                tipo: 'interna',
                logo: 'beersandbytes.png',
                descricao: 'O beers & bytes é um evento que faz parte do Grupo ZAP - com o objetivo de abrir um espaço pra promover a troca de conhecimento entre profissionais da área de tecnologia.'
            },
            geometry: {
                coordinates: [1448, 274],
                size: [156, 86],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'INVICTUS',
                tipo: 'interna',
                logo: 'invictus.png',
                descricao: 'Campanha de Incentivo do time comercial IMC.'
            },
            geometry: {
                coordinates: [1520, 1450],
                size: [132, 170],
                type: 'Point',
            },
            type: 'Feature',
        },
        /* {
            properties: {
                nome: 'Super Hero',
                tipo: 'interna',
                logo: '',
                descricao: 'Programa de Incentivo do time comercial INC.'
            },
            geometry: {
                coordinates: [1448, 274],
                size: [156, 86],
                type: 'Point',
            },
            type: 'Feature',
        }, */
        {
            properties: {
                nome: 'Central de Marketing',
                tipo: 'interna',
                logo: 'centraldemarketing.png',
                descricao: 'É o canal do time de marketing para ajudar ao time comercial vender mais e melhor. '
            },
            geometry: {
                coordinates: [1496, 852],
                size: [156, 74],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'T-rex',
                tipo: 'interna',
                logo: 'trex.png',
                descricao: 'Time de Relacionamento & Experiência.'
            },
            geometry: {
                coordinates: [1496, 1276],
                size: [156, 168],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Voz do Cliente',
                tipo: 'interna',
                logo: 'vozdocliente.png',
                descricao: 'É um projeto do time de T-rex com foco no cliente. '
            },
            geometry: {
                coordinates: [1496, 1028],
                size: [156, 108],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Programa Ser Líder',
                tipo: 'interna',
                logo: '',
                descricao: ''
            },
            geometry: {
                coordinates: [1952, 1408],
                size: [156, 24],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Formação.Líder',
                tipo: 'interna',
                logo: 'serlider_formacaolideres.png',
                descricao: 'Formação de futuros líderes.'
            },
            geometry: {
                coordinates: [1952, 1702],
                size: [156, 98],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Líderes.LAB',
                tipo: 'interna',
                logo: 'serlider_lidereslab.png',
                descricao: 'Profissionais recém promovidos/contratados.'
            },
            geometry: {
                coordinates: [1952, 1532],
                size: [156, 70],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Inspirar',
                tipo: 'interna',
                logo: 'serlider_inspirar.png',
                descricao: 'Líderes de equipes que já passaram por programas de formação anteriores.'
            },
            geometry: {
                coordinates: [1952, 1441],
                size: [156, 82],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Master',
                tipo: 'interna',
                logo: 'serlider_inspirarmaster.png',
                descricao: 'Líderes de Líderes.'
            },
            geometry: {
                coordinates: [1952, 1612],
                size: [156, 82],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Kids At Work',
                tipo: 'interna',
                logo: 'kidsatwork.png',
                descricao: 'Evento focado no dia as crianças.'
            },
            geometry: {
                coordinates: [2066, 392],
                size: [156, 108],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Vem Vender',
                tipo: 'interna',
                logo: 'vemvender.png',
                descricao: 'É um projeto do time comercial IMC voltado para os colaboradores do Grupo ZAP, conhecerem a rotina da equipe de vendas.'
            },
            geometry: {
                coordinates: [1496, 1144],
                size: [156, 58],
                type: 'Point',
            },
            type: 'Feature',
        }, 
        {
            properties: {
                nome: 'OPA News',
                tipo: 'interna',
                logo: 'opanews.png',
                descricao: ''
            },
            geometry: {
                coordinates: [1496, 936],
                size: [156, 82],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Work & Play',
                tipo: 'interna',
                logo: 'workandplay.png',
                descricao: 'É um evento de integração do Grupo ZAP.'
            },
            geometry: {
                coordinates: [2066, 986],
                size: [156, 148],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: "Dalila's Day",
                tipo: 'interna',
                logo: 'dalilasday.png',
                descricao: 'É um evento do Grupo ZAP destinado adoção de cães.'
            },
            geometry: {
                coordinates: [2066, 594],
                size: [156, 108],
                type: 'Point',
            },
            type: 'Feature',
        },
        {
            properties: {
                nome: 'Por dentro dos times',
                tipo: 'interna',
                logo: 'pordentrodostimes.png',
                descricao: 'É uma ação do time de endomarketing para conhecermos os times que integrão o Grupo ZAP.'
            },
            geometry: {
                coordinates: [2066, 886],
                size: [156, 96],
                type: 'Point',
            },
            type: 'Feature',
        },
    ]
};


