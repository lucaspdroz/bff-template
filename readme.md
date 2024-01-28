# Prisma backend

## First setup

1. copy and rename `.env.sampe` to `.env`
2. yarn
3. npx prisma migrate dev
4. yarn dev

## Creating an endpoint

at
> /src/index.js

## When change the model

If you had to change the structure, create JOINS or other stuff,

You will find the file `prisma/schema.prisma`

### Creating / changing a model

in this example

```prisma
model Company {
  id            Int           @id @default(autoincrement())
  nome          String
  colaboradores Colaborador[]
  gestores      Gestor[]
  planos        Plano[]
  users         User[]
  token         String        @unique @default(uuid())
}
```

**After a change *ALWAYS* run the migration *TO APPLY* the changes**

> npx prisma migrate dev

## Running DB interface

> npx prisma studio

At url [http://localhost:5555/](http://localhost:5555/) you'll find the interface for edit and manual change your models (like the old PHP my admin 😜)
