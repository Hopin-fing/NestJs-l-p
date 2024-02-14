import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
export class Auth {
	//TODO Возможно тут будет проблема с ID
	@Prop()
	_id: string;

	@Prop({ required: true, unique: true })
	email: string;

	@Prop({ required: true })
	passwordHash: string;

	@Prop({ default: now() })
	createdAt: Date;

	@Prop({ default: now() })
	updatedAt: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
