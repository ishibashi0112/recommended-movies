import { prisma } from "src/utils/prismaClient";

export default async (req, res) => {
  console.log(req.body.email);
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
    },
  });
  console.log("test");
};
