import { FC, useState } from 'react'
import { CardType } from '../../types'
import { StyledCard } from '.'
import { useSettings } from '../../utils'
import toast from 'react-hot-toast'

const Card: FC<CardType> = ({ _id, mode, title, img, desc, students }) => {
  const { updateCourse, deleteCourse } = useSettings()
  const [course, setCourse] = useState({
    title: title,
    img: img,
    desc: desc,
    students: students
  })

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCourse((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const updt = (_id: string, props: Object) => {
    try {
      updateCourse(_id, props)
      toast.success('Updated the course')
    } catch (err) {
      toast.error('Error')
    }
  }

  const dlt = (_id: string) => {
    try {
      deleteCourse(_id)
      toast.success('Deleted the course')
    } catch (err) {
      toast.error('Error')
    }
  }

  return (
    <StyledCard>
      <div className="card">
        {<img src={course.img} alt="classIMG" />}
        <p>
          <label htmlFor="title">Course Title:</label>
        </p>
        <textarea
          name="title"
          className={`text ${mode}-text`}
          value={course.title}
          onChange={handleChange}
          disabled={mode == '' ? true : false}
        />
        <hr style={{ width: '100%' }} />
        <p>
          <label htmlFor="desc">Course Description:</label>
        </p>
        {
          <textarea
            name="desc"
            className={`text ${mode}-text`}
            value={course.desc}
            onChange={handleChange}
            disabled={mode == '' ? true : false}
          />
        }
        <hr style={{ width: '100%' }} />
        {course.students.length == 0 ? (
          <span>No students are enrolled in this course</span>
        ) : (
          <span>Total students: {course.students.length}</span>
        )}
        <div className="actions">
          <button onClick={() => updt(_id, course)} type="submit" className={`submit-btn ${mode}-btn`}>
            Update
          </button>
          <button onClick={() => dlt(_id)} type="submit" className={`submit-btn ${mode}-btn red`}>
            Delete
          </button>
        </div>
      </div>
    </StyledCard>
  )
}

export default Card
