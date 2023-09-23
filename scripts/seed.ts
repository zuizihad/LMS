const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Social Science" },
        { name: "Material Science" },
        { name: "Music" },
        { name: "Computer Science & Engineering" },
      ],
    });
    console.log("success")
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();