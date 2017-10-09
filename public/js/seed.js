window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }
console.log('seed got loaded')
  const products = [
    {
      id: 1,
      title: 'Krishnamraju',
      description: 'Krishnamraju is a very good react js developer so he scored 100 points and his product is always the winner',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/smiley1.jpg',
      productImageUrl: 'images/products/pp.jpg',
    },
    {
      id: 2,
      title: 'Praveen Kumar',
      description: 'Another great developer',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/smiley2.png',
      productImageUrl: 'images/products/image-rose.png',
    },
    {
      id: 3,
      title: 'Ram Vamshi',
      description: 'Good movie watcher',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/smiley3.jpg',
      productImageUrl: 'images/products/image-steel.png',
    },
    {
      id: 4,
      title: 'Tharun',
      description: 'Great website tester',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/smiley4.png',
      productImageUrl: 'images/products/image-yellow.png',
    },
  ];

  return { products: products };
}());
