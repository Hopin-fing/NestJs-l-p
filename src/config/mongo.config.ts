import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<MongooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
	};
};

const getMongoString = (configService: ConfigService): string =>
	'mongodb://' +
	configService.get<string>('MONGO_LOGIN') +
	':' +
	configService.get<string>('MONGO_PASSWORD') +
	'@' +
	configService.get<string>('MONGO_HOST') +
	':' +
	configService.get<string>('MONGO_PORT') +
	'/' +
	configService.get<string>('MONGO_AUTHDATABASE');
