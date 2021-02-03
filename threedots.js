const ages = [44, 23, 67, 89, 34, 16, 45];
const ages2= [55, 23, 45, 76, 23];
const ages3= [5, 10, 45, 01, 12];
const allAges = ages.concat(48).concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

// const business = 500;
// const minister = 430;
// const sochib = 200;
// const maximum = Math.max(business, minister, sochib);
const heighMony = [334, 567, 800];
const maximum = Math.max(...heighMony);
console.log(maximum);
