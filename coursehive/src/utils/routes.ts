const Auth = {
  login: '/login',
  register: '/register'
}

const Courses = {
  course: '/courses/:id',
  admin: '/courses/:id/admin',
  courses: '/',
  courseById: (_id: string) => `/courses/${_id}`,
  adminById: (_id: string) => `/courses/${_id}/admin`
}

const Users = {
  user: '/users/:id',
  userById: (_id: string) => `/users/${_id}`
}

export const ROUTES = {
  auth: Auth,
  courses: Courses,
  users: Users
}
