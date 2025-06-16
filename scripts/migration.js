const fs = require("fs");
const path = require("path");
const db = require("../config/db");

const migrationsDir = __dirname;
const files = fs.readdirSync(migrationsDir)
  .filter(f => f.endsWith('.sql'))
  .sort();

  
(async () => {
  try {
    for (const file of files) {
      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, "utf8");
      console.log(`🔄 Executando: ${file}`);
      await db.query(sql);
    }
    console.log("✅ Todas as migrações foram aplicadas com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao executar migração:", error.message);
    process.exit(1);
  }
})();
