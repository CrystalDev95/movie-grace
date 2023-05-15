import React, { useState } from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../components/SwitchTabs/SwitchTabs'
import useFetch from '../../hooks/useFetch'
import Carousel from '../../components/Carousel/Carousel'

const Trending = () => {
    const [endpoint, setEndPoint] = useState("movie")
    const [title, setTitle] = useState("Movies")
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);
    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv")
        if (tab == "Movies") {
          setTitle("Movies")
         } else {
           setTitle("TV Shows")
         }
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Top Rated {title}</span>
            <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
        </div>
  )
}

export default Trending

