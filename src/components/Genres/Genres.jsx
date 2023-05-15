import React from 'react'
import { useSelector } from 'react-redux'
import { selectGenres } from '../../redux/movieSlice'
import './style.scss'

const Genres = ({ data }) => {
    const genres = useSelector(selectGenres)

  return (
    <div className='genres'>
       {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
            <div className="genre" key={g}>
                {genres[g]?.name}
            </div>
        )
       })}
        </div>
  )
}

export default Genres