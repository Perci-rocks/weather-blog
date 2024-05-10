import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import CreatePost from '../CreatePost/CreatePost';
import './Home.css'
export const Home = () => {
  return (
    <div className='Homecontainer'>
      <Navbar />
      <CreatePost/>
      <Footer />
    </div>
  )
}

export default Home;