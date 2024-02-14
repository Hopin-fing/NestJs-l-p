import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
	//TODO Возможно тут будет проблема с ID
	@Prop()
	_id: string;

	image: string;
	titlt: string;
	price: number;
	oldPrice: number;
	credit: number;
	calculatedRating: number;
	description: string;
	advantages: string;
	disadvantage: string;
	catigories: string[];
	tags: string;
	characteristics: {
		[key: string]: string;
	};

	@Prop({ default: now() })
	createdAt: Date;

	@Prop({ default: now() })
	updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
