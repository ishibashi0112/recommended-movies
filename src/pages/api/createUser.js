import { prisma } from "src/utils/prismaClient";

export default async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
    },
  });
  res.status(200).json(user);
};
