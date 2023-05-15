import React, { useState } from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import useFetch from '../../hooks/useFetch'
import Carousel from '../../components/Carousel/Carousel'

const NowPlaying = () => {
    const { data, loading } = useFetch(`/movie/now_playing`);

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>In Theatres</span>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
        </div>
  )
}

export default NowPlaying