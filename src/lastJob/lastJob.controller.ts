import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LastJobService } from './lastJob.service';
import { Request, Response } from 'express';
import { LastJob } from './lastJob.model';
import { JwtAuthGuard } from 'src/authentication/auth.guard';

@Controller('lastJob')
export class LastJobController {
  constructor(private readonly lastJobService: LastJobService) {}

  @Get()
  // @UseGuards(JwtAuthGuard)
  async getAllLastJob(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.lastJobService.getAllLastJob();
      return response.status(200).json({
        status: 'ok!',
        message: 'Successfully fetch data!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'ok!',
        message: 'Internal Server Error!',
      });
    }
  }

  @Post()
  async postLastJob(@Body() postData: LastJob): Promise<LastJob> {
    return this.lastJobService.createLastJob(postData);
  }

  @Get(':id')
  async getLastJob(@Param('id') id: number): Promise<LastJob | null> {
    return this.lastJobService.getLastJobById(id);
  }

  @Delete(':id')
  async deleteLastJob(@Param('id') id: number): Promise<LastJob> {
    return this.lastJobService.deleteLastJob(id);
  }

  @Put(':id')
  async updateLastJob(
    @Param('id') id: number,
    @Body() postData: LastJob,
  ): Promise<LastJob> {
    return this.lastJobService.updateLastJob(id, postData);
  }
}
