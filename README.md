# ElvenWorksTesteDesenvolvedor
ElvenWorks FrontEnd

📌 Sobre o Projeto

![image](https://github.com/user-attachments/assets/181f4afe-438f-475f-86bc-675a2d730572)


Este projeto é um front-end desenvolvido em React e TypeScript para a o teste de Desenvolvedor da  ElvenWorks. Ele utiliza Vite como bundler e está configurado para um ambiente moderno de desenvolvimento.

🚀 Tecnologias Utilizadas

React + TypeScript

Vite

Tailwind CSS


📂 Estrutura do Projeto

FrontEnd/
│-- dist/                 # Arquivos gerados após build
│-- node_modules/         # Dependências do projeto
│-- public/               # Arquivos públicos
│-- src/                  # Código-fonte principal
│   ├── components/       # Componentes reutilizáveis
│   ├── hooks/            # Funções úteis
│   ├── types/            # Interface de arquivos
│-- .env.local            # Variáveis de ambiente (não commitadas)
│-- .gitignore            # Arquivos ignorados pelo Git
│-- index.html            # HTML principal
│-- package.json          # Dependências e scripts
│-- tsconfig.json         # Configuração do TypeScript
│-- vite.config.ts        # Configuração do Vite

📦 Instalação e Execução

Antes de rodar o projeto, certifique-se de ter o Node.js instalado.

1️⃣ Instalar dependências

npm install

2️⃣ Rodar em ambiente de desenvolvimento

npm run dev

3️⃣ Gerar build para produção

npm run build

4️⃣ Servir o build localmente

npx vite preview

⚙️ Variáveis de Ambiente

Configuração do Clerk (Autenticação)

Para que terceiros utilizem a aplicação, eles precisarão criar uma conta no Clerk e gerar suas próprias credenciais.

Após criar a conta e configurar o projeto no painel do Clerk, eles devem adicionar suas chaves no arquivo .env.local:
VITE_CLERK_KEY=pk_test_sua_chave_aqui
VITE_CLERK_SIGN_IN_URL=/sign-in
VITE_CLERK_SIGN_UP_URL=/sign-up
VITE_CLERK_AFTER_SIGN_IN_URL=/dashboard
VITE_CLERK_AFTER_SIGN_UP_URL=/dashboard
