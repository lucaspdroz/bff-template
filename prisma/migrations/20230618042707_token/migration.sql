/*
  Warnings:

  - The required column `token` was added to the `Empresa` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "token" TEXT NOT NULL
);
INSERT INTO "new_Empresa" ("id", "nome") SELECT "id", "nome" FROM "Empresa";
DROP TABLE "Empresa";
ALTER TABLE "new_Empresa" RENAME TO "Empresa";
CREATE UNIQUE INDEX "Empresa_token_key" ON "Empresa"("token");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
