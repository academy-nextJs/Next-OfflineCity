import { Navigation , Pagination  } from "swiper/modules";
import { Swiper , SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { relative } from "path";

type SlideItem = {
    image: string;
    title:string;
    description:string;
}

const slides: SlideItem[] = [
    {
        image: 'https://via.placeholder.com/300',
        title: 'اول',
        description: 'عکس اول'

    }, 
       {
        image: 'https://via.placeholder.com/600*400',
        title: 'دوم',
        description: 'عکس دوم'

    },  
      {
        image: 'https://via.placeholder.com/600*400',
        title: 'سوم',
        description: 'عکس سوم'

    }, 
       {
        image: 'https://source.unsplash.com/random/800*400',
        title: 'چهارم',
        description: 'عکس چهارم'

    },  
      {
        image: 'https://source.unsplash.com/random/800*400',
        title: 'پنجم',
        description: 'عکس پنجم'

    },   
     {
        image: 'https://source.unsplash.com/random/800*400',
        title: 'ششم',
        description: 'عکس ششم'

    },

]



const ImageTextSlider =   () => {
    // const res = await fetch('https://delta-project.liara.run/api/houses?page=1&limit=10&sort=price&order=ASC')
    // const data = await res.json()
    // console.log(data ,'data')
    return (
        <Swiper
          modules={[Navigation , Pagination ]}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={2}
          slidesPerGroupSkip={1}
          navigation
          pagination={{clickable: true}}
          autoplay={{delay:3000}}
          
        >
            {slides.map((slide , index) => (
                <SwiperSlide key={index}>
                  <div style={{position : 'relative' , textAlign: 'center'  }}>
                   <img 
                    src={slide.image}
                    alt={slide.title}
                    style={{width: '100%' , height: '400px' , objectFit: 'cover' , borderRadius: '10px'}}
                   />
                   <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '8px'
                   }}>
                     <h2> {slide.title} </h2>
                     <p> {slide.description} </p>
                   </div>
                  </div>
                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default ImageTextSlider