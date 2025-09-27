# Arg Comércio de Variedades - Site Institucional

Este repositório contém o código-fonte do site institucional da Arg Comércio de Variedades, desenvolvido com React e Vite. O projeto foi criado para ser facilmente duplicado e adaptado para outras empresas, com foco em verificação no Business Manager do Facebook.

## 🚀 Requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

## ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/neoads/arg-variedades.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd arg-variedades
   ```

3. Instale as dependências:
   ```bash
   pnpm install
   ```

## 📜 Scripts Disponíveis

- **`pnpm dev`**: Inicia o servidor de desenvolvimento com hot-reload.
- **`pnpm build`**: Compila o projeto para produção na pasta `dist`.
- **`pnpm lint`**: Executa o linter para verificar a qualidade do código.
- **`pnpm preview`**: Inicia um servidor local para visualizar a build de produção.

## 🛠️ Desenvolvimento

Para iniciar o ambiente de desenvolvimento, execute:

```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`.

## 🚀 Deploy

1. Execute o comando de build:
   ```bash
   pnpm build
   ```

2. Faça o deploy do conteúdo da pasta `dist` para o seu provedor de hospedagem.

## 🔧 Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto, baseado no `.env.example`, para configurar as variáveis de ambiente.

## ✅ Verificação de Qualidade

Para garantir a qualidade do código, execute:

```bash
pnpm lint
```

## 📂 Estrutura do Projeto

```
arg-variedades/
├── dist/                # Build de produção
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/          # Imagens e outros assets
│   ├── components/      # Componentes React
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada da aplicação
├── .env.example         # Exemplo de variáveis de ambiente
├── .gitignore           # Arquivos ignorados pelo Git
├── index.html           # Template HTML principal
├── package.json         # Dependências e scripts
└── README.md            # Este arquivo
```

## 🤝 Contribuições

Pull requests são bem-vindos. Para mudanças importantes, abra uma issue primeiro para discutir o que você gostaria de mudar.

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.

