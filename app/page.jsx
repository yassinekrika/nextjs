"use client"
import Link from "next/link"
import {React, useState, useEffect} from "react"
import LoadingPage from "./loading"
import Courses from "./components/Courses"
import CourseSearch from "./components/CourseSearch"

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Welcome To Next js</h1>
      <CourseSearch getSearchResults={(results) => (results)}/>
      <Courses courses={courses} />
      {/* <Courses /> */}
    </>
  )
}

export default HomePage