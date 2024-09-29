import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Accordian from './components/accordian/index.jsx'
import RandomColor from './components/random-color/index.jsx'
import StarRating from './components/star-rating/index.jsx'
import ImageSlider from './components/image-slider/index.jsx'
import LoadMoreData from './components/load-more-img/index.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Accordian/> */}
    {/* <RandomColor/> */}
    <StarRating noOfStars={10}/>
    {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'}/> */}
    <LoadMoreData/>
  </StrictMode>,
)
