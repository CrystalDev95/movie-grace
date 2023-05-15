import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataFromApi } from './utils/api'
import { setApiConfiguration, setGenres } from './redux/movieSlice.js';
import { selectUrl, selectGenres } from './redux/movieSlice.js'
import { Home, Explore, NotFound, SearchResult, Details } from './pages'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const url = useSelector(selectUrl)
  const genres = useSelector(selectGenres)
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
    .then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + 
        "original",
        poster: res.images.secure_base_url + 
        "original",
        profile: res.images.secure_base_url + 
        "original",
      }
      dispatch(setApiConfiguration(url));
    })
  }

  const genresCall = async () => {
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item));
    })
    dispatch(setGenres(allGenres))
  }

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mediaType/:id" element={<Details />} />
      <Route path="/search/:query" element={<SearchResult />} />
      <Route path="/explore/:mediaType" element={<Explore />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
