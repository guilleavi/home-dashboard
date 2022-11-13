-- CreateTable
CREATE TABLE `Product` (
    `productId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `monthsToExpire` INTEGER NOT NULL,

    UNIQUE INDEX `Product_name_key`(`name`),
    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductInstance` (
    `instanceId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `units` INTEGER NOT NULL,
    `expirationDate` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`instanceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductInstance` ADD CONSTRAINT `ProductInstance_name_fkey` FOREIGN KEY (`name`) REFERENCES `Product`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
