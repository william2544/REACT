import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Accordian from './components/accordian/index.jsx'
import RandomColor from './components/random-color/index.jsx'
import StarRating from './components/star-rating/index.jsx'
import ImageSlider from './components/image-slider/index.jsx'
import LoadMoreData from './components/load-more-img/index.jsx'
import TreeView from './components/nested-nar-bar/menu.jsx'
import { navigation } from './components/nested-nar-bar/data.js'
import QRCodGenerator from './components/qr-code/index.jsx'
import LightDarkMode from './components/light-dark-mode/index.jsx'
import ScrollIndicator from './components/scrole-percentage/index.jsx'
import TabsTest from './components/custom-tabs/prnt-tab.jsx'
import ModelTest from './components/custom-model/model-test.jsx'
import GitHubProfile from './components/GitHub-profile-search/index.jsx'
import SearchAutoComplete from './components/search-autocomplete/index.jsx'
import TicTacToe from './components/tiktaktoe/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Accordian/> */}
    {/* <RandomColor/> */}
    {/* <StarRating noOfStars={10}/> */}
    {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'}/> */}
    {/* <LoadMoreData/> */}
    {/* {<TreeView menu={navigation}/>} */}
    {/* <QRCodGenerator/> */}
    {/* <LightDarkMode/> */}
    {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
    {/* <TabsTest/> */}
    {/* <ModelTest/> */}
    {/* <GitHubProfile/> */}
    <SearchAutoComplete/>
    <TicTacToe/>
  </StrictMode>,
)
