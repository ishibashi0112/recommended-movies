import { prisma } from "src/utils/prismaClient";

export default async (req, res) => {
  const { email } = req.query;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).json(user);
  }
};
