export const siteContent = {
  hero: {
    eyebrow: 'INFORMAÇÃO • PREVENÇÃO • SEGURANÇA DIGITAL',
    title: 'Proteja seus dados. Preserve as provas.',
    text: 'Entenda fraudes, invasões de conta e outros riscos digitais. Saiba reconhecer sinais de alerta e quais providências tomar.',
  },
  topics: [
    {
      id: 'falso-advogado',
      number: '01',
      category: 'Fraude',
      title: 'Golpe do falso advogado',
      short: 'Criminosos usam dados reais de processos e se passam por advogados para pedir pagamentos.',
      what: 'O autor utiliza nome, foto, informações de escritórios ou dados processuais para convencer a vítima de que existe valor a receber, custas a pagar ou alguma providência urgente. O objetivo é induzir transferências, PIX ou fornecimento de dados.',
      signs: [
        'Contato por número desconhecido ou diferente do habitual.',
        'Pedido urgente de PIX, transferência ou pagamento de taxa.',
        'Uso de informações verdadeiras do processo para gerar confiança.',
        'Pressão para que a vítima não confirme a informação por outro canal.'
      ],
      actions: [
        'Não realize pagamento antes de confirmar diretamente com o advogado ou escritório por um contato já conhecido.',
        'Preserve conversas, número de telefone, comprovantes, chave PIX e dados bancários informados.',
        'Se houve pagamento, conteste imediatamente a transação junto ao banco.',
        'Troque senhas caso tenha fornecido credenciais ou códigos de autenticação.'
      ],
      buttons: []
    },
    {
      id: 'falsa-faccao',
      number: '02',
      category: 'Extorsão',
      title: 'Golpe da falsa facção',
      short: 'A vítima recebe ameaças de supostos integrantes de facção e é pressionada a pagar para evitar represálias.',
      what: 'O autor afirma pertencer a uma organização criminosa e utiliza ameaças, informações pessoais ou referências a familiares para causar medo. Normalmente exige transferência imediata de dinheiro.',
      signs: [
        'Ameaça por ligação, mensagem ou áudio com exigência de pagamento.',
        'Uso de dados obtidos em redes sociais para tornar a abordagem convincente.',
        'Pressão para manter sigilo e pagar rapidamente.',
        'Contato vindo de números desconhecidos ou sucessivamente substituídos.'
      ],
      actions: [
        'Não efetue pagamentos apenas em razão da ameaça recebida.',
        'Preserve mensagens, áudios, números, perfis, chaves PIX e horários dos contatos.',
        'Evite prolongar a conversa depois de registrar os elementos necessários.',
        'Revise a exposição de informações pessoais e familiares em redes sociais.'
      ],
      buttons: []
    },
    {
      id: 'engenharia-social-bancos',
      number: '03',
      category: 'Fraude bancária',
      title: 'Engenharia social envolvendo bancos',
      short: 'O criminoso manipula a vítima para obter acesso a contas, senhas, códigos ou autorizações bancárias.',
      what: 'O autor pode se passar por funcionário de banco, central de segurança ou suporte técnico. A partir da confiança criada, induz a vítima a fornecer códigos, instalar aplicativos, acessar links ou realizar procedimentos que permitem movimentações não autorizadas.',
      signs: [
        'Contato inesperado alegando fraude, bloqueio ou movimentação suspeita.',
        'Pedido de senha, token, código recebido por SMS ou autorização no aplicativo.',
        'Orientação para instalar aplicativo de acesso remoto.',
        'Pressão para agir rapidamente sem confirmar pelos canais do banco.'
      ],
      actions: [
        'Conteste imediatamente as transações não reconhecidas junto ao banco.',
        'Solicite o MED quando houver PIX e a situação estiver enquadrada nas hipóteses aplicáveis.',
        'Preserve extratos, comprovantes, telefones, mensagens, e-mails e demais registros.',
        'Altere senhas, encerre sessões desconhecidas e ative autenticação em dois fatores.'
      ],
      buttons: []
    },
    {
      id: 'invasao-rede-social',
      number: '04',
      category: 'Conta comprometida',
      title: 'Invasão de rede social',
      short: 'A conta é acessada por terceiro sem autorização e pode ser usada para fraude, extorsão ou divulgação de conteúdo.',
      what: 'O acesso indevido pode ocorrer por phishing, reutilização de senha, engenharia social, vazamento de credenciais ou captura de códigos de autenticação. O invasor pode alterar e-mail, telefone e senha para impedir a recuperação da conta.',
      signs: [
        'Alteração de senha, e-mail ou telefone sem solicitação.',
        'Avisos de login em dispositivos ou locais desconhecidos.',
        'Publicações, mensagens ou pedidos de dinheiro que a vítima não fez.',
        'Perda repentina de acesso à conta.'
      ],
      actions: [
        'Use imediatamente os mecanismos de recuperação da própria plataforma.',
        'Altere a senha do e-mail vinculado e de serviços que reutilizem a mesma senha.',
        'Registre identificador do perfil, URL, mensagens, e-mails de segurança e horários.',
        'Revise sessões ativas e remova dispositivos desconhecidos.'
      ],
      buttons: []
    },
    {
      id: 'recuperacao-contas',
      number: '05',
      category: 'Recuperação',
      title: 'Recuperação de e-mail, WhatsApp e Instagram',
      short: 'Providências para retomar o controle de contas comprometidas e proteger outros serviços associados.',
      what: 'Quando a vítima perde o acesso, a prioridade é recuperar primeiro o e-mail e o número de telefone vinculados, pois eles costumam controlar a redefinição de senha dos demais serviços. Depois, devem ser revisadas as configurações de segurança de todas as contas afetadas.',
      signs: [
        'Códigos de recuperação solicitados sem iniciativa da vítima.',
        'Mudança de e-mail, telefone ou autenticação em dois fatores.',
        'Desconexão inesperada do aplicativo.',
        'Contatos informando mensagens ou pedidos enviados em seu nome.'
      ],
      actions: [
        'Recupere primeiro o e-mail e o número de telefone associados às contas.',
        'Troque as senhas por combinações fortes e diferentes entre os serviços.',
        'Ative autenticação em dois fatores e guarde os códigos de recuperação com segurança.',
        'Use somente as páginas e aplicativos oficiais das plataformas para recuperação.'
      ],
      buttons: []
    },
    {
      id: 'perfil-fake',
      number: '06',
      category: 'Falsidade digital',
      title: 'Perfil fake no WhatsApp e Instagram',
      short: 'Nome, foto ou identidade de outra pessoa são usados para enganar contatos, pedir dinheiro ou causar prejuízos.',
      what: 'O perfil falso pode copiar foto, nome, descrição e outras informações públicas. Em alguns casos, o autor aborda parentes, clientes ou amigos da vítima solicitando valores, dados ou outras vantagens.',
      signs: [
        'Conta nova usando foto e nome de pessoa conhecida.',
        'Contato por número diferente alegando troca de telefone.',
        'Pedidos de dinheiro, dados, códigos ou favores urgentes.',
        'Perfil com poucas publicações, poucos seguidores ou histórico recente.'
      ],
      actions: [
        'Registre o número, nome de usuário, URL do perfil, foto e demais identificadores.',
        'Faça capturas de tela das conversas e pedidos realizados.',
        'Denuncie o perfil diretamente na plataforma.',
        'Avise os contatos potencialmente atingidos para que não efetuem pagamentos.'
      ],
      buttons: []
    },
    {
      id: 'crimes-contra-honra',
      number: '07',
      category: 'Redes sociais',
      title: 'Crimes contra a honra em rede social',
      short: 'Publicações e mensagens podem atingir a honra de uma pessoa e, conforme o caso, configurar calúnia, difamação ou injúria.',
      what: 'No ambiente digital, ofensas, acusações e divulgação de fatos podem alcançar grande número de pessoas. A análise jurídica depende do conteúdo publicado, do contexto, da autoria e da forma de divulgação.',
      signs: [
        'Publicações atribuindo falsamente prática de crime.',
        'Divulgação de fatos ofensivos à reputação.',
        'Ofensas dirigidas à dignidade ou ao decoro.',
        'Repostagens, comentários ou mensagens que ampliem a divulgação.'
      ],
      actions: [
        'Preserve o conteúdo antes de bloquear, excluir ou pedir remoção.',
        'Registre perfil, URL, data, horário, comentários, compartilhamentos e demais elementos disponíveis.',
        'Faça denúncia extrajudicial na própria plataforma quando desejar a remoção do conteúdo.',
        'Evite responder com novas ofensas, pois isso pode ampliar o conflito e dificultar a preservação da prova.'
      ],
      buttons: []
    }
  ],
  checklist: [
    'Preserve prints, conversas, links, identificadores, endereços e horários.',
    'Guarde comprovantes e extratos de transações não autorizadas.',
    'Conteste movimentações suspeitas diretamente no banco.',
    'Solicite o MED quando houver PIX e a medida for aplicável.',
    'Troque senhas comprometidas e não reutilize a mesma senha em serviços diferentes.',
    'Ative autenticação em dois fatores sempre que possível.',
    'Encerre sessões desconhecidas e remova dispositivos que você não reconheça.',
    'Evite resetar o aparelho antes de preservar os elementos relevantes do ocorrido.'
  ]
};
