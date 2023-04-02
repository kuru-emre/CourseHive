import TextareaAutosize from 'react-textarea-autosize'
import { createRef, FC, FormEvent, useState } from 'react'
import { ChevronDownIcon, ClockIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { CourseType, PostType } from '../../types'
import { usePost } from '../../utils'
import { useAppSelector } from '../../redux'
import { Avatar, OptionsPopover } from '..'
import { StyledShareInput } from '.'

type Props = {
  course: CourseType
}

const ShareInput: FC<Props> = ({ course }) => {
  const inputRef = createRef<HTMLTextAreaElement>()
  const optionsBtnRef = createRef<HTMLButtonElement>()
  const { createPost } = usePost()
  const { user } = useAppSelector(state => state.user)
  const [value, setValue] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [type, setType] = useState<PostType['type']>('post')
  const [showOptions, setShowOptions] = useState(false)

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault()

    // If the post is empty, return.
    if (!value.trim()) {
      return
    }

    // Create the post and remove
    // focus from the share input.
    await createPost(value, type, dueDate)
    inputRef?.current?.blur()

    // Clear the state.
    setValue('')
    setType('post')
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <StyledShareInput htmlFor="share-input" color={course?.theme}>
          <Avatar name={user?.name} color={course.theme} />
          <TextareaAutosize
            id="share-input"
            required
            value={value}
            placeholder="Say something..."
            lang="en"
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleSubmit()
                e.preventDefault()
              }
            }}
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
          {type === 'assignment' && (
            <button className="date-btn" type="button">
              <input type="datetime-local" value={dueDate} onChange={e => setDueDate(e.target.value)} />
              <ClockIcon />
            </button>
          )}
          <button
            className="send-btn"
            disabled={!value.trim() || (type === 'assignment' && !dueDate)}
            type="submit"
            aria-label="Share post"
          >
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
