import React from 'react'
import HeroBanner from './HeroBanner'
import Trending from './Trending'
import Popular from './Popular'
import TopRate from './TopRate'
import Upcoming from './Upcoming'
import NowPlaying from './NowPlaying'
import './Home.scss'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <TopRate />
      <Trending />
      <Popular />
      <Upcoming />
      <NowPlaying />
      </div>
  )
}

export default Home