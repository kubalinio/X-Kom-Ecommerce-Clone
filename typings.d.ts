interface SanityBody {
	_createdAt?: string;
	_id?: string;
	_rev?: string;
	_updatedAt?: string;
}

interface Slug {
	_type: 'slug';
	current: string;
}

interface Image {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
}

export interface Product extends SanityBody {
	title: string;
    mainImage: Image;
	// image: Image[];
	price: number;
	slug: Slug
    special: string;
}

export interface Products {
	 products: Product[]
}

export interface Brand extends SanityBody {
		_id: string;
		title: string;
		_type: 'project';
    	image: Image;
}

export interface Brands {
	brands: Brand[]
}

export interface Promotion extends SanityBody {
		slogan: string;
		title: string
		slug: Slug;
    	image: Image;
}

export interface Promotions {
	promotions: Promotion[]
}
