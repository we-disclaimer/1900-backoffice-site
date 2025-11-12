# 🚀 Configuração no Render.com

## ⚠️ Problema Comum: "Invalid character in header content"

Este erro acontece quando as credenciais AWS contêm caracteres especiais (`+`, `/`, `=`) e não são configuradas corretamente no Render.

## ✅ Solução: Como configurar as variáveis de ambiente no Render

### 1. Acesse o Dashboard do Render
- Vá para: https://dashboard.render.com/
- Selecione seu serviço (web service)

### 2. Configure as Environment Variables

Vá em **Environment** → **Environment Variables** e adicione:

| Key | Value | Observações |
|-----|-------|-------------|
| `AWS_ACCESS_KEY_ID` | `sua-access-key` | Cole EXATAMENTE como está no .env |
| `AWS_SECRET_ACCESS_KEY` | `sua-secret-key` | ⚠️ **IMPORTANTE**: Cole sem aspas, sem espaços extras |
| `AWS_REGION` | `us-east-1` | Região do bucket S3 |
| `AWS_BUCKET` | `backoffice-app-assets` | Nome do bucket |
| `MONGODB_URI` | `sua-mongodb-uri` | Connection string do MongoDB |
| `COOKIE_SECRET` | `sua-cookie-secret` | Qualquer string aleatória |

### 3. ⚠️ CUIDADOS IMPORTANTES:

#### Para a `AWS_SECRET_ACCESS_KEY`:

```
✅ CORRETO:
xwHwG+j+8A40uLccInPJcpDWq31yuTE4mBm6WfPN

❌ ERRADO (com aspas):
"xwHwG+j+8A40uLccInPJcpDWq31yuTE4mBm6WfPN"

❌ ERRADO (com espaços):
 xwHwG+j+8A40uLccInPJcpDWq31yuTE4mBm6WfPN 
```

#### Passos para adicionar no Render:

1. Clique em **Add Environment Variable**
2. No campo **Key**, digite: `AWS_SECRET_ACCESS_KEY`
3. No campo **Value**, cole a chave **SEM ASPAS, SEM ESPAÇOS**
4. Clique em **Save Changes**

### 4. Verificar se está funcionando

Após fazer deploy, verifique os logs:

```bash
# No Render Dashboard, vá em "Logs"
# Você deve ver algo como:

🔑 AWS Credentials Check: {
  hasAccessKey: true,
  accessKeyLength: 20,
  hasSecretKey: true,
  secretKeyLength: 40,
  region: 'us-east-1',
  accessKeyStart: 'AKIA',
  secretKeyStart: 'xwHw'
}
```

### 5. Fazer Deploy

Após configurar todas as variáveis:

1. Clique em **Manual Deploy** → **Deploy latest commit**
2. Ou faça push para o GitHub (se tiver auto-deploy ativado)

## 🐛 Troubleshooting

### Erro: "Invalid character in header content"

**Causa:** Caracteres especiais na secret key não estão sendo tratados corretamente.

**Solução:**
1. Verifique se há espaços em branco antes/depois da chave
2. Certifique-se de que não há aspas ao redor da chave
3. Cole novamente a chave diretamente do console AWS
4. Faça um novo deploy

### Erro: "AWS credentials not found"

**Causa:** Variáveis de ambiente não estão sendo carregadas.

**Solução:**
1. Verifique se todas as variáveis foram salvas
2. Faça um novo deploy (as variáveis só são carregadas no deploy)
3. Verifique os logs para ver se há erros

### Erro: "Access Denied" ou "403 Forbidden"

**Causa:** As credenciais AWS não têm permissão para acessar o bucket S3.

**Solução:**
1. No AWS IAM, verifique as permissões do usuário
2. O usuário precisa ter permissões de `s3:PutObject`, `s3:GetObject`, `s3:DeleteObject`
3. Verifique se o bucket name está correto

## 📝 Checklist Final

- [ ] Todas as 6 variáveis de ambiente configuradas
- [ ] Nenhuma variável tem aspas ou espaços extras
- [ ] Build command: `npm install && npm run build`
- [ ] Start command: `npm run start:prod`
- [ ] Deploy realizado após configurar as variáveis
- [ ] Logs verificados (procure por "🔑 AWS Credentials Check")

## 🔗 Links Úteis

- [Render Environment Variables](https://render.com/docs/environment-variables)
- [AWS IAM Console](https://console.aws.amazon.com/iam/)
- [Criar novas credenciais AWS](https://console.aws.amazon.com/iam/home#/security_credentials)

