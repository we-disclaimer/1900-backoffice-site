# 🔐 Configuração de Credenciais AWS

## ✅ O que foi feito:

1. **Removidas credenciais hardcoded** do código fonte
2. **Criado sistema de variáveis de ambiente** (.env)
3. **Configurado dotenv** para carregar as variáveis automaticamente
4. **Protegido o arquivo .env** no .gitignore

## 📝 Arquivos Modificados:

- `src/main.ts` - Adicionado `import 'dotenv/config'`
- `src/admin/resources/media.resource.ts` - Credenciais AWS movidas para variáveis de ambiente
- `src/app.module.ts` - MongoDB URI e AWS bucket movidos para variáveis de ambiente
- `.env` - Arquivo com credenciais (NÃO VAI PARA O GITHUB)
- `.env.example` - Template sem dados sensíveis (pode ir para o GitHub)

## 🚀 Como usar localmente:

1. **Certifique-se que o arquivo `.env` existe** na raiz do projeto
2. **Compile o projeto:**
   ```bash
   npm run build
   ```
3. **Inicie o servidor:**
   ```bash
   npm run start:prod
   # ou para desenvolvimento:
   npm run start:dev
   ```

## ☁️ Como configurar na Vercel:

1. Acesse seu projeto na Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione as seguintes variáveis:

| Variável | Valor |
|----------|-------|
| `AWS_ACCESS_KEY_ID` | `sua-access-key-aqui` |
| `AWS_SECRET_ACCESS_KEY` | `sua-secret-key-aqui` |
| `AWS_REGION` | `us-east-1` |
| `AWS_BUCKET` | `backoffice-app-assets` |
| `MONGODB_URI` | `sua-mongodb-uri-aqui` |
| `COOKIE_SECRET` | `sua-cookie-secret-aqui` |

**⚠️ IMPORTANTE:** Use os valores reais do seu arquivo `.env` local. **NUNCA** coloque credenciais reais em arquivos que vão para o GitHub!

4. Marque todas para: **Production**, **Preview** e **Development**
5. Faça um novo deploy

## 🔍 Verificação:

Quando você fizer upload de um arquivo, verá no console:

```
🔑 AWS Credentials Check: {
  hasAccessKey: true,
  accessKeyLength: 20,
  hasSecretKey: true,
  secretKeyLength: 40,
  region: 'us-east-1'
}
```

Se aparecer `hasAccessKey: false` ou `hasSecretKey: false`, significa que as variáveis de ambiente não estão sendo carregadas.

## ⚠️ IMPORTANTE:

- **NUNCA** faça commit do arquivo `.env`
- **SEMPRE** use `.env.example` para documentar quais variáveis são necessárias
- Se precisar criar novas credenciais AWS, acesse: [AWS IAM Console](https://console.aws.amazon.com/iam/)

## 🔄 Para atualizar credenciais:

1. Edite o arquivo `.env` localmente
2. Atualize as variáveis na Vercel (Settings → Environment Variables)
3. Faça um novo deploy na Vercel

