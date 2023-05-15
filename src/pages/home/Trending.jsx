import React, { useState } from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../components/SwitchTabs/SwitchTabs'
import useFetch from '../../hooks/useFetch'
import Carousel from '../../components/Carousel/Carousel'

const Trending = () => {
    const [endpoint, setEndPoint] = useState("day")
    const [title, setTitle] = useState("Daily")
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week")
        if (tab == "Day") {
          setTitle("Daily")
         } else {
           setTitle("Weekly")
         }
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending {title}</span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
        </div>
  )
}

export default Trending
