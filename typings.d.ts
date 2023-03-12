interface SanityBody {
	_createdAt: string;
	_id: string;
	_rev: string;
	_updatedAt: string;
}

interface Slug {
	_type: 'image';
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
	_id: string;
	title: string;
	_type: 'project';
    mainImage: Image;
	// image: Image[];
	price: number;
	slug: Slug;
    special: string;
	
}
