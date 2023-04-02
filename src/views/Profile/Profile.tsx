// SOURCE: https://www.mongodb.com/languages/mern-stack-tutorial
// WRITTEN BY: Dishant Behera (B00843009, ds418021@dal.ca)

import { FC, MouseEvent, useEffect, useState } from 'react'
import { Box, Button, Typography, TextField } from '@mui/material'
import { toast } from 'react-hot-toast'
import { useMailman, useUser } from '../../utils'
import { WidthController } from '../../components'
import { setUser, useAppDispatch, useAppSelector } from '../../redux'
import { StyledProfile } from '.'

const Profile: FC = () => {
  const dispatch = useAppDispatch()
  const { mailman } = useMailman()
  const { logout } = useUser()
  const { user } = useAppSelector(state => state.user)

  const [form, setForm] = useState({
    linkedin: '',
    hobbies: '',
    goals: '',
    experience: ''
  })

  // GET USER START
  // async function getUser() {
  //   const response = await fetch(`http://localhost:5000/user/${id}`);
  //   if (!response.ok) {
  //     const message = `An error occurred: ${response.statusText}`;
  //     window.alert(message);
  //     console.log("not good");
  //     return;
  //   }
  //   console.log("YIKES");
  //   const record = await response.json();
  //   setUser(record);
  //   console.log(record);
  //   return;
  // }

  // getUser();

  // GET USER END

  // UPDATE START
  const updateForm = (value: Object) => {
    return setForm(prev => {
      return { ...prev, ...value }
    })
  }

  const saveUpdate = async (e: MouseEvent) => {
    e.preventDefault()

    if (!user) {
      return
    }

    // if (form.experience === '' || form.linkedin === '' || form.goals === '' || form.hobbies === '') {
    //   console.log('All fields required')
    //   alert('All fields must be filled to submit changes')
    // } else {
    const editedPerson = {
      preferences: {
        linkedin: form.linkedin,
        hobbies: form.hobbies,
        goals: form.goals,
        experience: form.experience
      }
    }

    // console.log(editedPerson)
    // alert('Your profile was updated!')

    // post request to update the data in the database.
    await mailman('users', user._id, 'POST', editedPerson)
    toast.success('Updated profile')
    dispatch(setUser({ ...user, ...editedPerson }))
    // }
  }
  // UPDATE END

  // DELETE START

  const deleteChoice = async () => {
    const choice = window.confirm('Are you sure you want to delete your account?')
    if (choice == true) {
      deleteAccount()
    }
  }

  const deleteAccount = async () => {
    await mailman('users', user?._id!, 'DELETE')
    logout()
  }
  // DELETE END

  useEffect(() => {
    setForm({
      ...((user?.preferences || {}) as any)
    })
  }, [user])

  return (
    <StyledProfile>
      <WidthController>
        <Box marginTop="20px">
          <Typography sx={{ fontSize: '30px', fontWeight: '900' }}>Edit Profile</Typography>
        </Box>
        <Box marginTop="40px">
          <Typography sx={{ fontSize: '20px', fontWeight: '900' }}>Name</Typography>
          <TextField disabled defaultValue={user?.name} margin="normal" variant="outlined" sx={{ width: '50%' }} />
        </Box>
        <Box marginTop="40px">
          <Typography sx={{ fontSize: '20px', fontWeight: '900' }}>Email</Typography>
          <TextField disabled defaultValue={user?.email} margin="normal" variant="outlined" sx={{ width: '50%' }} />
        </Box>
        <Box marginTop="40px">
          <Typography sx={{ fontSize: '20px', fontWeight: '900' }}>LinkedIn</Typography>
          <TextField
            defaultValue={user?.preferences?.linkedin}
            margin="normal"
            variant="outlined"
            sx={{ width: '50%' }}
            value={form.linkedin}
            onChange={e => updateForm({ linkedin: e.target.value })}
          />
          <Typography sx={{ fontSize: '12px', fontWeight: '500', color: '#9e9e9e' }}>
            Eg: https://www.linkedin.com/in/dishant-behera/
          </Typography>
        </Box>
        <Box marginTop="40px">
          <Typography sx={{ fontSize: '20px', fontWeight: '900' }}>Interest/Hobbies</Typography>
          <TextField
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            defaultValue={user?.preferences?.hobbies}
            sx={{ width: '50%' }}
            value={form.hobbies}
            onChange={e => updateForm({ hobbies: e.target.value })}
          />
        </Box>
        <Box marginTop="40px">
          <Typography sx={{ fontSize: '20px', fontWeight: '900' }}>Future Goals</Typography>
          <TextField
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            defaultValue={user?.preferences?.goals}
            sx={{ width: '50%' }}
            value={form.goals}
            onChange={e => updateForm({ goals: e.target.value })}
          />
        </Box>
        <Box marginTop="40px" marginBottom="40px">
          <Typography sx={{ fontSize: '20px', fontWeight: '900' }}>Most Memorable Learning Experience</Typography>
          <TextField
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            defaultValue={user?.preferences?.experience}
            sx={{ width: '50%' }}
            value={form.experience}
            onChange={e => updateForm({ experience: e.target.value })}
          />
        </Box>
        <Button
          type="submit"
          onClick={saveUpdate}
          sx={{
            padding: '0.5rem',
            width: '20%',
            borderRadius: '0.5rem',
            backgroundColor: '#1a75ff',
            color: '#ffffff',
            fontWeight: 'bold',
            fontFamily: 'Rubik, sans-serif',
            fontSize: '1rem',
            marginBottom: '40px',
            textTransform: 'none',
            '&:hover': { cursor: 'pointer', backgroundColor: '#1a75ff' }
          }}
        >
          Save Changes
        </Button>
        <Button
          type="submit"
          onClick={deleteChoice}
          sx={{
            padding: '0.5rem',
            marginLeft: '3rem',
            width: '20%',
            borderRadius: '0.5rem',
            backgroundColor: 'red',
            color: '#ffffff',
            fontWeight: 'bold',
            fontFamily: 'Rubik, sans-serif',
            fontSize: '1rem',
            marginBottom: '40px',
            textTransform: 'none',
            '&:hover': { cursor: 'pointer', backgroundColor: '#1a75ff' }
          }}
        >
          Delete Account
        </Button>
      </WidthController>
    </StyledProfile>
  )
}

export default Profile
