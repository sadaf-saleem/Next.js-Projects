import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Home/Hero'
import Search from '../components/Home/Search'
import GameList from '../components/Home/GameList'
import Posts from '../components/Home/Posts'
import { db } from '../shared/FirebaseConfig'  // ✅ db directly import karo
import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from 'react'

export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPost();
  }, [])

  const getPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"))
      const allPosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setPosts(allPosts)  // ✅ ek baar mein set karo
    } catch (error) {
      console.error("Posts fetch error:", error)
    }
  }

  const onGamePress = async (gameName) => {
    setPosts([])
    if (gameName == 'Other Games') {
      getPost()
      return
    }
    try {
      const q = query(collection(db, "posts"), where("game", "==", gameName))
      const querySnapshot = await getDocs(q)
      const filteredPosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setPosts(filteredPosts)  // ✅ ek baar mein set karo
    } catch (error) {
      console.error("Game filter error:", error)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center mt-9'>
      <div className='w-[70%] md:w-[50%] lg:w-[55%]'>
        <Hero />
        <Search />
        <GameList onGamePress={onGamePress} />
      </div>
      {posts ? <Posts posts={posts} /> : null}
    </div>
  )
}