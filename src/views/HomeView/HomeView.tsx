import React, { FC } from 'react'

import { CourseCard, Header } from '../../components'
import { WidthController } from '../../components/system'
import { StyledHomeView } from './'

const COURSES = [
  {
    id: '8572387572',
    name: 'Computer Science 101',
    code: 'ghd72f',
    studentCount: 25,
    details: ['Due today - Assignment 2'],
    theme: '#7c3aed'
  },
  {
    id: '1572387572',
    name: 'Cooking Class',
    code: 'fhaj2a',
    studentCount: 122,
    details: ['Due today - Assignment 2'],
    theme: '#4f46e5'
  },
  {
    id: '3572387572',
    name: 'Origami Fundamentals',
    code: 'lk87afa',
    studentCount: 38,
    details: ['Due today - Assignment 2'],
    theme: '#2563eb'
  },
  {
    id: '6572387572',
    name: 'Ancient Rome',
    code: 'poiw821',
    studentCount: 221,
    details: ['Due today - Assignment 2'],
    theme: '#9333ea'
  }
]

const HomeView: FC = () => {
  return (
    <StyledHomeView>
      <div className="splash-container">
        <WidthController>
          <div className="splash">
            <h1>Welcome back, Jamel</h1>
            <p>What will you learn today?</p>
          </div>
        </WidthController>
      </div>
      <WidthController>
        <div className="course-list">
          {COURSES.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </WidthController>
    </StyledHomeView>
  )
}

export default HomeView
