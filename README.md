# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx).

Frontend Mentor challenges help me improve my coding skills by building realistic projects.

### Screenshot

![Screenshot](./preview.jpg)

### Links

- Solution URL: Coming Soon!
- Live Site URL: Coming Soon!

## My process

### Built with

- [NextJs](https://nextjs.org/) - The React Framework for Production
- [TypeScript](https://www.typescriptlang.org/) - For types
- [GraphQL](https://graphql.org/) - For products API
- [Nexus](https://nexusjs.org/) - GraphQL Schemas
- [Apollo](https://www.apollographql.com/) - A communication layer for manage the flow of data between application clients and your backend
- [Redux](https://redux.js.org/) - For a state management
- [SASS](https://sass-lang.com/) - For styles
- Flexbox
- CSS Grid
- Mobile-first workflow

## Author

- Website - [Sergejs Ivcenko](https://www.ivcenko.name/)
- Frontend Mentor - [@Sergio0831](https://www.frontendmentor.io/profile/Sergio0831)

import { PrismaClient } from '@prisma/client';
import { categoriesData } from '../db/data';
const prisma = new PrismaClient();

async function main() {
await prisma.product.create({
data: {
slug: 'yx1-earphones',
name: 'YX1 Wireless Earphones',
new: true,
price: 599,
description:
'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
features:
'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.'
}
});

await prisma.category.createMany({
data: categoriesData
});
}

main()
.catch((e) => {
console.error(e);
process.exit(1);
})
.finally(async () => {
await prisma.$disconnect();
});
