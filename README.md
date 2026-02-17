### RF (requisito funcional)

- [ ] deve ser possivel se cadastrar
- [ ] deve ser possivel se autenticar
- [ ] deve ser possivel obter o perfil de um usuario logado
- [ ] deve ser possivel obter o numero de check ins realizados pelo usuario logado
- [ ] deve ser possivel o usuario obter seu historico de check ins
- [ ] deve ser possivel o usuario buscar academias proximas
- [ ] deve ser possivel o usuario buscar academias pelo nome
- [ ] deve ser possivel o usuario realizar check in em uma academia
- [ ] deve ser possivel validar o check in de um usuario
- [ ] deve ser possivel cadastrar uma academia

### RN (regra de negocio)

- [ ] o usuario nao deve poder se cadastrar com um email duplicado
- [ ] o usuario nao pode fazer 2 check ins no mesmo dia
- [ ] o usuario nao pode fazer check in se nao estiver perto (100m) de uma academia
- [ ] o check in so pode ser validade ate 20 minutos apos criado
- [ ] o check in so pode ser validado por administradores
- [ ] a academia so pode ser cadastrada por administradores

### RNF (requisito nao funcional)

- [ ] a senha do usuario precisa estar criptografada
- [ ] os dados da aplicacao precisam estar persistidos em um bacno postgreSQL
- [ ] todas listas dos dados precisam estar paginadas com 20 itens por pagina
- [ ] o usuario deve ser identificado por um jwt

### tecnica da narrativa

1- substantivos = entidades
usuario
perfil
checkin
historico
academia

2- verbos = metodos
cadastrar usuario
autenticar
logar
validar checkin
cadastrar academia

3- separação em contextos / regras de negocio

#### comandos utilizados

npm init -y
npm i typescript @types/node tsx tsup -D
npx tsc --init
npm install express --save
npm i @types/express -D
npm i dotenv
npm i zod
npm init @eslint/config@latest --legacy-peer-deps
npm install prisma @types/node @types/pg --save-dev --legacy-peer-deps
npm install @prisma/client @prisma/adapter-pg pg dotenv --legacy-peer-deps
npx prisma init
npx prisma generate

npx prisma migrate dev
