import { Module } from "@nestjs/common";
import { LastJobController } from "./lastJob.controller";
import { LastJobService } from "./lastJob.service";
import { PrismaService } from "src/prisma.service";



@Module({
    controllers: [LastJobController],
    providers: [LastJobService, PrismaService]
})
export class LastJobModule{}