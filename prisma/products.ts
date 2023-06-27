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
    name: 'Apple Beats Fit Pro Volt Yellow',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529471/products/bpkzmdvfhghjebm7y4k6.webp',
    oldPrice: 1200.99,
    price: 1300,
    rating: 0,
    ratingCount: 0,
    slug: 'apple-beats-fit-pro-volt-yellow',
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
    name: 'SteelSeries Arctis Nova Pro',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529471/products/oprk4ewdsvntvtbvsknx.webp',
    oldPrice: 0,
    price: 999.99,
    rating: 0,
    ratingCount: 0,
    slug: 'sluchawki-przewodowe-steelseries-arctis-nova-pro',
  },
  {
    name: 'Huawei MateBook D 15 i5‑1135G7/16GB/512/Win11 srebrny',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529470/products/wixnqaqf2w8z5bveg5au.webp',
    oldPrice: 0,
    price: 2999,
    rating: 0,
    ratingCount: 0,
    slug: 'notebook-laptop-156-huawei-matebook-d-15-i5-1135g7-16gb-512-win11-srebrny',
  },
  {
    name: 'AMD Ryzen  5 5600',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529470/products/kb2vym029lrz77bc9avj.webp',
    oldPrice: 0,
    price: 699,
    rating: 0,
    ratingCount: 0,
    slug: 'amd-ryzen-5600-series',
  },
  {
    name: 'Samsung Q80BA | QE55Q80BA',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529470/products/aovhtjve5otamao1e9ah.webp',
    oldPrice: 0,
    price: 3459,
    rating: 0,
    ratingCount: 0,
    slug: 'telewizor-55-59-samsung-q80ba-qe55q80ba',
  },
  {
    name: 'G4M3R HERO i5-13400F/16GB/1TB/RTX3060/W11',
    photo: 'https://res.cloudinary.com/dbmu87ktf/image/upload/v1687529470/products/hb0pwffpx37t59guyqbc.webp',
    oldPrice: 0,
    price: 5899.99,
    rating: 0,
    ratingCount: 0,
    slug: 'desktop-g4m3r-hero-i5-13400f-16gb-1tb-rtx3060-w11',
  },
]

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
