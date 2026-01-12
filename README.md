
# Solfil - Website Institucional

Website oficial da Solfil Materiais de Construção. Desenvolvido com React 19, Vite e Tailwind CSS.

## 🚀 Como Publicar (Deploy)

### 1. Preparar o GitHub
1. Crie um novo repositório no seu GitHub.
2. No seu terminal, dentro da pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: setup inicial solfil"
   git branch -M main
   git remote add origin https://github.com/O-SEU-UTILIZADOR/NOME-DO-REPO.git
   git push -u origin main
   ```

### 2. Publicar na Vercel
1. Aceda a [vercel.com](https://vercel.com) e faça login com o GitHub.
2. Clique em **"Add New"** > **"Project"**.
3. Importe o repositório que acabou de criar.
4. A Vercel detetará automaticamente as configurações do **Vite**.
5. Clique em **"Deploy"**.

## 🛠 Notas Técnicas
- **Build:** O projeto utiliza o Vite para gerar uma build otimizada na pasta `/dist`.
- **SPA:** O ficheiro `vercel.json` garante que as rotas e navegação funcionam corretamente após o deploy.
- **Assets:** O logo é carregado remotamente via GitHub Raw para garantir consistência visual.

---
© 2025 Solfil - Materiais de Construção
