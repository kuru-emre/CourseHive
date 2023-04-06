import { FC, useEffect, useState } from 'react'
import { Card, Sidebar } from '../../components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper'
import { useAppSelector } from '../../redux'
import { useSettings } from '../../utils'
import { StyledSettings } from '.'
import Switch from 'react-switch'
import 'swiper/css'
import 'swiper/css/effect-cards'

const Settings: FC = () => {
  const [toggle, setToggle] = useState({ state: false, class: '', editable: false })
  const { courses } = useAppSelector((state) => state.courses)
  const { getCourses } = useSettings()

  const handleToggle = () => {
    setToggle((prevState) => ({
      ...prevState,
      state: !toggle.state,
      class: toggle.class == '' ? 'active' : '',
      editable: !toggle.editable
    }))
  }

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <StyledSettings>
      <div className="container">
        <Sidebar />
        <div className="courses">
          <h1>Enable Editing</h1>
          <h3>Swipe the cards to select the course</h3>
          <hr style={{width: '75%'}}/>
          <Switch onChange={() => handleToggle()} checked={toggle.state} />
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            breakpoints={{
              640: {
                width: 400,
                height: 650
              },
              768: {
                width: 500,
                height: 650
              }
            }}
          >
            {[...courses].map((course) => (
              <SwiperSlide key={course._id} className={toggle.class} style={{ background: course.theme }}>
                <Card
                  _id={course._id}
                  mode={toggle.class}
                  title={course.title}
                  img={course.img}
                  desc={course.desc}
                  students={course.students}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </StyledSettings>
  )
}

export default Settings
