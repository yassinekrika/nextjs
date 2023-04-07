import courses from './data.json'
import { NextResponse } from 'next/server'
import { nanoid } from 'nanoid'

export async function GET(request) {
    return NextResponse.json(courses)
}

export async function POST(request) {
    const { title, description, level, link} = await request.json()
    const newCourse = {
        id: nanoid(), 
        title, description, level, link
    }
    console.log(newCourse.id)
    courses.push(newCourse)
    return NextResponse.json(courses)
}