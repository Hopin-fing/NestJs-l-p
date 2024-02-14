import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { ConfigService } from '@nestjs/config';

@Controller('review')
export class ReviewController {
	constructor(private configService: ConfigService) {}

	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Get('byProuct/:productId')
	async getByProuct(@Param('productId') productId: string) {}
}
