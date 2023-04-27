/*
  Warnings:

  - You are about to drop the column `storagenDate` on the `ProductInstance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ProductInstance` DROP COLUMN `storagenDate`,
    ADD COLUMN `storageDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
