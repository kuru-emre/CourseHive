import React, { FC } from 'react';

import { CourseCard, Header } from '../../components';
import { StyledHomeView } from './';

const COURSES = [
  {
    id: '8572387572',
    name: 'Computer Science 101',
    code: 'ghd72f',
    studentCount: 25,
    details: ['Due today - Assignment 2'],
    theme: '#9a3412'
  },
  {
    id: '1572387572',
    name: 'Cooking Class',
    code: 'fhaj2a',
    studentCount: 122,
    details: ['Due today - Assignment 2'],
    theme: '#065f46'
  },
  {
    id: '3572387572',
    name: 'Origami Fundamentals',
    code: 'lk87afa',
    studentCount: 38,
    details: ['Due today - Assignment 2'],
    theme: '#1e40af'
  },
  {
    id: '6572387572',
    name: 'Ancient Rome',
    code: 'poiw821',
    studentCount: 221,
    details: ['Due today - Assignment 2'],
    theme: '#5b21b6'
  },
]

const HomeView: FC = () => {
  return (
    <StyledHomeView>
      <main>
        {COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </main>
    </StyledHomeView>
  )
}

export default HomeView
