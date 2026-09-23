# Stay Connect

Product Requirement Document (PRD)

Produto: Airbnb MVP (Retroativo) Data: Setembro de 2026 Autor: Alexandre Silva (Senior Product Manager)

1. Resumo Executivo & Visão Geral

Nome do Produto e Empresa: Airbnb (Clone / MVP)

Descrição do Produto/Serviço: Um marketplace digital peer-to-peer que liga pessoas que procuram alojamento de curta duração (viajantes) a pessoas com espaços disponíveis para alugar (anfitriões). O objetivo é democratizar o alojamento, oferecendo alternativas mais autênticas e económicas aos hotéis tradicionais.

Segmento de Clientes (Público-Alvo):

Viajantes (Guests): Jovens adultos, nómadas digitais e famílias que procuram estadias económicas, únicas ou com facilidades de uma casa (cozinha, lavandaria).

Anfitriões (Hosts): Proprietários de imóveis ou inquilinos com quartos extra que procuram uma fonte de rendimento adicional de forma flexível.

2. Funcionalidades Principais (Features)

Sistema de Pesquisa e Filtros: Motor de busca baseado em localização (cidade, bairro) com filtros essenciais (datas de check-in/check-out, número de hóspedes, preço por noite, comodidades).

Perfis de Utilizador (Dual-Role): Capacidade de um único utilizador alternar entre o modo "Hóspede" e "Anfitrião", com gestão de informações pessoais e verificação de identidade.

Listagem de Propriedades (Host Dashboard): Interface para os anfitriões adicionarem novos espaços, incluindo upload de fotografias, definição de regras da casa, calendário de disponibilidade e preços dinâmicos.

Motor de Reservas e Pagamentos: Sistema de fluxo de checkout seguro que retém o pagamento até 24 horas após o check-in (Escrow), garantindo segurança para ambas as partes.

Sistema de Reviews e Ratings (Double-Blind): Sistema de avaliação mútua onde anfitriões e hóspedes se avaliam após a estadia, criando um ecossistema de confiança. As reviews só são visíveis quando ambas são submetidas.

3. Detalhes de Implementação e Desafios

Descrição da Implementação Técnica:

Frontend: Desenvolvido com React.js e Tailwind CSS para garantir uma interface responsiva, rápida e mobile-first.

Backend & Base de Dados: Supabase (PostgreSQL) para gestão relacional de utilizadores, propriedades e reservas, tirando partido das Row Level Security (RLS) para proteção de dados.

Autenticação: Supabase Auth (Email/Password e Google OAuth).

Pagamentos: Integração com a API do Stripe (Stripe Connect) para lidar com a divisão de pagamentos entre a plataforma (taxa de serviço) e o anfitrião.

Desafios Técnicos/Produto e Soluções Adotadas:

Desafio: Gestão de concorrência no calendário de reservas (evitar double-booking quando dois utilizadores tentam reservar as mesmas datas em simultâneo).

Solução: Implementação de "pessimistic locking" na base de dados durante o fluxo de checkout e bloqueio temporário das datas por 10 minutos assim que o utilizador inicia o pagamento.

Desafio: Construção da interface com ferramentas Low-Code / AI de forma a manter a consistência do design system original.

Solução: Refinamento iterativo das prompts no AI Studio e isolamento de componentes (separando a UI do motor de busca da UI do calendário) para evitar alucinações de código.

4. Recursos de AI & Artefatos de Desenvolvimento

Prompt Inicial (Lovable / Google AI Studio):

"Atua como um engenheiro frontend experiente. Cria a landing page e o fluxo principal de um clone do Airbnb usando React e Tailwind CSS. Preciso de uma barra de navegação superior com um motor de busca integrado (Onde, Check-in, Check-out, Quem). Abaixo, uma grelha de propriedades (cards) mostrando a imagem do alojamento, localização, rating com ícone de estrela e o preço por noite. A interface tem de ser limpa, minimalista, com cantos arredondados, e utilizar uma paleta de cores baseada em branco, cinzento claro e o vermelho coral característico do Airbnb. Prepara a estrutura para ser facilmente ligada a um backend Supabase."

Link para a Landing Page (LP): [https://airbnb-mvp-clone.vercel.app](https://airbnb-mvp-clone.vercel.app)

Link para o Repositório GitHub: [https://github.com/alexportatil/airbnb-mvp-clone](https://github.com/alexportatil/airbnb-mvp-clone)

5. FAQs Completas do Produto

Como é que a plataforma garante a segurança do meu pagamento?

Utilizamos um sistema de retenção seguro (via Stripe). O teu dinheiro é cobrado no momento da reserva, mas só é transferido para o anfitrião 24 horas após o teu check-in bem-sucedido.

O que acontece se o anfitrião cancelar a minha reserva?

Receberás um reembolso integral e automático. Adicionalmente, a nossa equipa de suporte ajudará a encontrar um alojamento alternativo de valor semelhante.

Qualquer pessoa pode ser um anfitrião?

Sim, desde que cumpras os requisitos legais da tua zona e passes no nosso processo de verificação de identidade. Podes alugar desde um sofá numa sala até uma moradia inteira.

Como funcionam as taxas de serviço?

Cobramos uma taxa de serviço aos hóspedes (cerca de 14% do subtotal da reserva) para cobrir os custos de manutenção da plataforma e suporte 24/7. Os anfitriões pagam uma taxa fixa de 3% para processamento de pagamentos.

6. Canais de Agendamento e Contacto

Link de Agendamento para Demo/Pitch:
https://cal.com/alexandre-silva-8tsynl/airnbnb-pitch

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://welcome-wagon-bnb.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/320fafbc-c868-43b9-8c7b-d884379d7d15).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
