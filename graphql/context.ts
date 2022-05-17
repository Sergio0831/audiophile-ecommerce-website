import { PrismaClient } from '@prisma/client';
import prisma from '../prisma/prisma';

export type Context = {
  prisma: PrismaClient;
};

export const context: Context = {
  prisma
};
