import React from 'react'

function Food({name, picture}){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture}/>
    </div>
    );
}

const foodILike = [
  {
    name: "Kimchi",
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg'
  },
  {
    name: "Samgyeopsal",
    image: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg'
  },
  {
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg'
  },
  {
    name: 'Doncasu',
    image: 'http://th3.tmon.kr/thumbs/image/6ea/082/d57/2906e06a0_700x700_95_FIT.jpg'
  },
  {
    name: 'Kimbap',
    image: 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG'
  },
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (
    
      <Food name={dish.name} picture={dish.image}/>
    
    ))}
  </div>
  );
}

export default App;
