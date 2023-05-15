import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './DetailsBanner'
import Cast from './Cast'

const Details = () => {
  const { mediaType, id } = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      </div>
  )
}

export default Details