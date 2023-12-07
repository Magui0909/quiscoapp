import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const ordenes = await prisma.orden.findMany();
    res.status(200).json(ordenes);
  } else if (req.method === "POST") {
    const orden = await prisma.orden.delete({
      where: {
        id: req.body.id,
      },
    });
    res.json(orden);
  }
}
