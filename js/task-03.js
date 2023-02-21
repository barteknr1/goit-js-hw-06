const { log } = console;
document.body.style.backgroundColor = 'gray';

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryList = document.querySelector('.gallery');
const img = images
  .map(({url, alt}) => `<li><img src="${url}" alt="${alt}" width=100%></li>`)
  .join('');
galleryList.insertAdjacentHTML('beforeend', img);
galleryList.style.cssText =
`display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 20px;
margin: 50px;
list-style: none;
padding: 0;`