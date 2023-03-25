import TextareaAutosize from 'react-textarea-autosize'
import { createRef, FC, FormEvent, useState } from 'react'
import { ChevronDownIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { CourseType, PostType } from '../../types'
import { usePost } from '../../utils'
import { Avatar, OptionsPopover } from '..'
import { StyledShareInput } from '.'

type Props = {
  course: CourseType
}

const ShareInput: FC<Props> = ({ course }) => {
  const inputRef = createRef<HTMLTextAreaElement>()
  const optionsBtnRef = createRef<HTMLButtonElement>()
  const { createPost } = usePost()
  const [value, setValue] = useState('')
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
    await createPost(value, type)
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
