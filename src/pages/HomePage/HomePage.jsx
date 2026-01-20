  import React, { useState } from 'react'
  import TypeProduct from '../../components/TypeProduct/TypeProduct'
  import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
  import SliderComponent from '../../components/SliderComponent/SliderComponent'
  import slider1 from '../../assets/images/slider1.jpg'
  import slider2 from '../../assets/images/slider2.png'
  import slider3 from '../../assets/images/slider3.png'
  import CardComponent from '../../components/CardComponent/CardComponent'
  // import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

  const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('TV');

    const categories = ['TV', 'Điều hòa', 'Laptop'];

    const sampleProducts = {
      'TV': [
        {
          image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop',
          name: 'Samsung 4K UHD TV 55"',
          rating: 4.8,
          sold: '2.5k+',
          price: '15.000.000đ',
          discount: '-10%'
        },
        {
          image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=200&h=200&fit=crop',
          name: 'LG OLED TV 65"',
          rating: 4.9,
          sold: '1.8k+',
          price: '25.000.000đ',
          discount: '-15%'
        },
        {
          image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=200&h=200&fit=crop',
          name: 'Sony Bravia 50"',
          rating: 4.7,
          sold: '3.2k+',
          price: '18.000.000đ',
          discount: '-8%'
        },
        {
          image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=200&fit=crop',
          name: 'TCL Android TV 43"',
          rating: 4.5,
          sold: '1.2k+',
          price: '8.000.000đ',
          discount: '-5%'
        }
      ],
      'Điều hòa': [
        {
          image: 'https://images.pexels.com/photos/6316067/pexels-photo-6316067.jpeg?cs=srgb&dl=pexels-artbovich-6316067.jpg&fm=jpg&w=200&h=200&fit=crop',
          name: 'Daikin Inverter 1HP',
          rating: 4.6,
          sold: '950+',
          price: '12.000.000đ',
          discount: '-12%'
        },
        {
          image: 'https://images.pexels.com/photos/6316054/pexels-photo-6316054.jpeg?cs=srgb&dl=pexels-artbovich-6316054.jpg&fm=jpg&w=200&h=200&fit=crop',
          name: 'Panasonic Eco 1.5HP',
          rating: 4.8,
          sold: '1.1k+',
          price: '16.000.000đ',
          discount: '-10%'
        },
        {
          image: 'https://pixabay.com/get/g2658f249052fdf536c92751eb7f8f2f1aca7896d1d7384f1d1840df52d83f11e1be023e845d3a688cec9732a72199ef4_1920.jpg&w=200&h=200&fit=crop',
          name: 'LG Dual Inverter 2HP',
          rating: 4.7,
          sold: '800+',
          price: '22.000.000đ',
          discount: '-15%'
        },
        {
          image: 'https://pixabay.com/get/g2f31c3ea9cc29039093f355896ff46b5abda63b6cd4b1c60a3ceadb10b32ad193b2f46481e76777444a94c5e5453d7ed_1920.jpg&w=200&h=200&fit=crop',
          name: 'Samsung WindFree 1HP',
          rating: 4.9,
          sold: '1.5k+',
          price: '14.000.000đ',
          discount: '-8%'
        }
      ],
      'Laptop': [
        {
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop',
          name: 'MacBook Pro 14" M2',
          rating: 4.9,
          sold: '750+',
          price: '45.000.000đ',
          discount: '-5%'
        },
        {
          image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=200&h=200&fit=crop',
          name: 'Dell XPS 13',
          rating: 4.7,
          sold: '1.2k+',
          price: '32.000.000đ',
          discount: '-10%'
        },
        {
          image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=200&h=200&fit=crop',
          name: 'HP Spectre x360',
          rating: 4.6,
          sold: '650+',
          price: '28.000.000đ',
          discount: '-8%'
        },
        {
          image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=200&h=200&fit=crop',
          name: 'Lenovo ThinkPad X1',
          rating: 4.8,
          sold: '900+',
          price: '38.000.000đ',
          discount: '-12%'
        }
      ]
    };

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    return (
      <>
        <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
          {categories.map((item) =>{
            return(
              <TypeProduct
                name={item}
                key={item}
                isActive={selectedCategory === item}
                onClick={handleCategoryClick}
              />
            )
          })}
        </WrapperTypeProduct>
        </div>
        <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px'}}>

          <SliderComponent arrImages={[slider1, slider2, slider3]}/>
          <WrapperProducts>
            {sampleProducts[selectedCategory].map((product, index) => (
              <CardComponent key={index} product={product} />
            ))}
          </WrapperProducts>
          <div style={{ width: '100%', marginTop: '10px', display: 'flex', justifyContent:'center'}}>
            <WrapperButtonMore textButton='Xem thêm' type='outline' 
              styleButton={{ border:'1px solid rgb(11, 116, 229)',
              color: 'rgb(11,116,229)', 
              width:'240px',height:'38px',borderRadius:'4px'
              }}
              styleTextButton ={{ fontWeight:500 }}
              />
          </div>
        </div>
      </>
    )
  }

  export default HomePage