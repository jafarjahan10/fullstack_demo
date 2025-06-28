import { Request, Response } from 'express';
import prisma from '../../lib/db';
import bcrypt from 'bcrypt';

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    const isValidPassword =
      user && (await bcrypt.compare(password, user.password));

    if (!user || !isValidPassword) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Successful login
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
};

export default login;
