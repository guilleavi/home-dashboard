-- CreateTable
CREATE TABLE `Product` (
    `productId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `monthsToFreeze` INTEGER NOT NULL,

    UNIQUE INDEX `Product_name_key`(`name`),
    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductInstance` (
    `instanceId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `units` INTEGER NOT NULL,
    `expirationDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`instanceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductInstance` ADD CONSTRAINT `ProductInstance_name_fkey` FOREIGN KEY (`name`) REFERENCES `Product`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
