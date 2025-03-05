import { Module } from "@nestjs/common";
import { PartnersController } from "./partners.controller";
import { PartnersService } from "./partners.service";
import { PrismaService } from "src/prisma.service";


@Module({
    controllers: [PartnersController],
    providers: [PartnersService, PrismaService]
})
export class PartnersModule{}