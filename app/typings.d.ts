interface SanityBody {
	_createdAt?: string;
	_id?: string;
	_rev?: string;
	_updatedAt?: string;
}

export interface Slug {
	_type: 'slug';
	current: string;
}

export interface Image {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
}

export interface Slide {
	title: string;
	link: string;
	image: Image;
}

export interface Slides {
	slides: Slide[];
}

export interface Product extends SanityBody {
	id?: string;
	title: string;
	mainImage: Image;
	images?: Image[];
	price: number;
	oldPrice?: number;
	slug: Slug;
	special?: string;
}

export interface Products {
	products: Product[];
}

export interface Brand extends SanityBody {
	_id: string;
	title: string;
	_type: 'project';
	image: Image;
}

export interface Brands {
	brands: Brand[];
}

export interface Promotion extends SanityBody {
	slogan: string;
	title: string;
	slug: Slug;
	image: Image;
}

export interface Promotions {
	promotions: Promotion[];
}

export interface News extends SanityBody {
	slogan: string;
	title: string;
	link: string;
	image: Image;
}

export interface AllNews {
	news: News[];
}

export interface HotShotsData {
	hotShot: HotShotData[];
}

export interface HotShotData extends SanityBody {
	price: number;
	oldPrice: number;
	promotionGainTextLines: {
		title: string;
		value: string;
	};

	promotionTotalCount: number;
	maxBuyCount: number;
	promotionName: string;
	mainImage: Image;
	images: Image[];
	slug: slug;
}

export interface Guide extends SanityBody {
	slogan: string;
	title: string;
	link: string;
	image: Image;
}

export interface AllGuide {
	guides: Guide[];
}

export interface PurchaseList {
	id: string;
	createdAt: Date;
	updateAt: Date;
	Id: string;
	Name: string;
	ProductItems?: PurchaseListProduct[];
	TotalPrice: number;
	WebUrl: string;
}

export interface PurchaseListProduct {
	createdAt: string;
	updateAt: Date;
	id: string;
	Id: string;
	IsPriceVisible: boolean;
	MainPhoto: Image;
	Name: string;
	Price: number;
	ProductCount: number;
	WebUrl: string;
}
