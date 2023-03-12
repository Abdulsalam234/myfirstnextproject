// 'use client'
// onClick= {()=> console.log('Hey')}
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Movie from "./movie";
// const inter = Inter({ subsets: ['latin'] })
export default async function Home() {
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7e0a8712d8e5a8af599c8ee9751ec21a');
  const res = await data.json();
  console.log(res);
  return (
    <main>

      {/* <h1 className='text-3md lg:text-3xl font-bold text-blue-800 bg-yellow-300 border-4 border-red-400 text-center py-6 px-6'>Welcome to next JS</h1>
      <h1 className='text-3xl font-bold underline text-tomato-200'>Welcome to next JS</h1>
      <button className='text-2lg py-2 px-3 text-red-700' >Welcome User</button> */}
      <div className="grid gap-16 grid-cols-fluid py-6 m-4">
      {
        res.results.map((movie) => (
          <Movie
            id={movie.id}
            key={movie.key}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        )
        )
      }
      </div>
     
    </main>
  )
}
