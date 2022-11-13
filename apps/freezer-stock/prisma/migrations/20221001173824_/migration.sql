/*
  Warnings:

  - You are about to drop the column `monthsToExpire` on the `product` table. All the data in the column will be lost.
  - Added the required column `monthsToFreeze` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `monthsToExpire`,
    ADD COLUMN `monthsToFreeze` INTEGER NOT NULL;
