import { prisma } from "src/utils/prismaClient";

export default async (req, res) => {
  console.log(req.method);

  const user = await prisma.user.findUnique({
    where: {
      email: "yuki.ishibashi0112@gmail.com",
    },
  });
  console.log(user);
  res.status(200).json(user);
};
