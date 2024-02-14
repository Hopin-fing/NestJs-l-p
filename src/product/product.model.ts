export class ProductModel {
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
}
