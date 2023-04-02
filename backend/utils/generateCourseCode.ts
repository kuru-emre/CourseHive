// Written by Ben Hoeg
// B00870824 - benhoeg@dal.ca

import { nanoid } from 'nanoid'
import { Course } from '../models'

export const generateCourseCode = async () => {
  const MAX_RETRY = 100

  let i = 0
  let code = ''

  // Attempt to create a unique course code MAX_RETRY times
  while (i < MAX_RETRY) {
    code = nanoid(6) // Generates a 6 digit uuid

    // The chance of a collision in an app at this scale is next to 0 but we check anyway
    const isDuplicate = await Course.findOne({ code: code })

    if (!isDuplicate) {
      break
    }

    i++
  }

  return code
}
