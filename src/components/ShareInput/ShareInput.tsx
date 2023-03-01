import { createRef, FC, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { DateTime } from 'luxon'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { addPost, useAppDispatch, useAppSelector } from '../../redux'
import { PostType } from '../../types'
import { Avatar } from '..'
import { StyledShareInput } from '.'

const ShareInput: FC = () => {
  const dispatch = useAppDispatch()
  const inputRef = createRef<HTMLInputElement>()
  const { theme } = useAppSelector((state) => state.course)
  const [value, setValue] = useState('')
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // If the post is empty, return
    if (!value.trim()) {
      return
    }

    // Create the post object
    const postObject: PostType = {
      _id: uuid(),
      content: value,
      user: '9h0js128j09d0012',
      sent: DateTime.now().toISO()
    }

    // Append the post object to the state
    // and remove focus from the share input
    dispatch(addPost(postObject))
    setValue('')
    inputRef?.current?.blur()
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <StyledShareInput htmlFor="share-input" color={theme}>
        <Avatar/>
        <input id="share-input" required value={value} placeholder="Say something..." type="text" lang="en" onChange={(e) => setValue(e.target.value)} ref={inputRef} />
        <button className="send-btn" disabled={!value.trim()} type="submit" aria-label="Share post"><PaperAirplaneIcon/></button>
      </StyledShareInput>
    </form>
  )
}

export default ShareInput
