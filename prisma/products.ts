import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const productsData: Prisma.ProductCreateInput[] = [
  {
    name: 'Apple iPhone 14 Pro 128GB Gold',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529471/products/mitrgurbdo91znpibx4h.webp',
    oldPrice: 5899.99,
    price: 5599.98,
    rating: 0,
    ratingCount: 0,
    slug: 'smartfon-telefon-apple-iphone-14-pro-128gb-gold',
  },
  {
    name: 'Apple iPhone 14 Pro 128GB Gold',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529471/products/mitrgurbdo91znpibx4h.webp',
    oldPrice: 5899.99,
    price: 5599.98,
    rating: 0,
    ratingCount: 0,
    slug: 'smartfon-telefon-apple-iphone-14-pro-128gb-gold',
  },
  {
    name: 'Nintendo Switch OLED - Czerwony / Niebieski',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529471/products/u7fvgnpbzv4erqxdjauz.webp',
    oldPrice: 1685,
    price: 1685,
    rating: 0,
    ratingCount: 0,
    slug: 'konsola-nintendo-nintendo-switch-oled-czerwony-niebieski',
  },
  {
    name: 'Apple iPhone 14 Pro 128GB Gold',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529471/products/mitrgurbdo91znpibx4h.webp',
    oldPrice: 5899.99,
    price: 5599.98,
    rating: 0,
    ratingCount: 0,
    slug: 'smartfon-telefon-apple-iphone-14-pro-128gb-gold',
  },
  {
    name: 'Apple iPhone 14 Pro 128GB Gold',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529471/products/mitrgurbdo91znpibx4h.webp',
    oldPrice: 5899.99,
    price: 5599.98,
    rating: 0,
    ratingCount: 0,
    slug: 'smartfon-telefon-apple-iphone-14-pro-128gb-gold',
  },
]

// "_createdAt": "2023-03-06T13:01:06Z",
// "_id": "035afbb3-13c6-462f-ad48-1ea730b569af",
// "_rev": "uE4MPyKc4qoLI6MRtWy2Ho",
// "_type": "products",
// "_updatedAt": "2023-04-28T14:57:05Z",
// "images": [
//   {
//     "_key": "bcb59bba2276",
//     "_type": "image",
//     "asset": {
//       "_ref": "image-8249cd78eca7f85078f755096b26f500f5576eff-617x530-webp",
//       "_type": "reference"
//     }
//   }
// ],
// "mainImage": {
//   "_type": "image",
//   "asset": {
//     "_ref": "image-8249cd78eca7f85078f755096b26f500f5576eff-617x530-webp",
//     "_type": "reference"
//   }
// },
// "oldPrice": 5899.99,
// "price": 5599.98,
// "slug": {
//   "_type": "slug",
//   "current": "smartfon-telefon-apple-iphone-14-pro-128gb-gold"
// },
// "special": "Promocja",
// "title": "Apple iPhone 14 Pro 128GB Gold"

async function main() {
  console.log(`Start seeding ...`)
  for (const p of productsData) {
    const product = await prisma.product.create({
      data: p,
    })
    console.log(`Created user with id: ${product.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
