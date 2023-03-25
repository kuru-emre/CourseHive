import TextareaAutosize from 'react-textarea-autosize'
import { createRef, FC, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { DateTime } from 'luxon'
import { ChevronDownIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { addCoursePost, useAppDispatch } from '../../redux'
import { CourseType, PostType } from '../../types'
import { Avatar, OptionsPopover } from '..'
import { StyledShareInput } from '.'

type Props = {
  course: CourseType
}

const ShareInput: FC<Props> = ({ course }) => {
  const dispatch = useAppDispatch()
  const inputRef = createRef<HTMLTextAreaElement>()
  const optionsBtnRef = createRef<HTMLButtonElement>()
  const [value, setValue] = useState('')
  const [type, setType] = useState('post')
  const [showOptions, setShowOptions] = useState(false)

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault()

    // If the post is empty, return.
    if (!value.trim()) {
      return
    }

    // Create the post object.
    const postObject: PostType = {
      _id: uuid(),
      content: value,
      user: '9h0js128j09d0012',
      sent: DateTime.now().toISO()
    }

    // Append the post object to the state
    // and remove focus from the share input.
    dispatch(addCoursePost(postObject))
    inputRef?.current?.blur()

    // Clear the state.
    setValue('')
    setType('post')
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <StyledShareInput htmlFor="share-input" color={course?.theme}>
          <Avatar />
          <TextareaAutosize
            id="share-input"
            required
            value={value}
            placeholder="Say something..."
            lang="en"
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            ref={inputRef}
          />
          <button
            className="type-select-btn"
            data-expanded={showOptions}
            type="button"
            onClick={() => setShowOptions(!showOptions)}
            ref={optionsBtnRef}
          >
            {type === 'assignment' ? 'Assignment' : 'Post'}
            <ChevronDownIcon />
          </button>
          <button className="send-btn" disabled={!value.trim()} type="submit" aria-label="Share post">
            <PaperAirplaneIcon />
          </button>
        </StyledShareInput>
      </form>
      <OptionsPopover
        options={[
          {
            label: 'Assignment',
            isSelected: type === 'assignment',
            action: () => setType('assignment')
          },
          {
            label: 'Post',
            isSelected: type === 'post',
            action: () => setType('post')
          }
        ]}
        width={150}
        classToAvoid="type-select-btn"
        buttonRef={optionsBtnRef}
        isOpen={showOptions}
        onClose={() => setShowOptions(false)}
      />
    </>
  )
}

export default ShareInput
