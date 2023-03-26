const App = {
  login: '/login',
  register: '/register',
  home: '/',
  settings: '/settings',
  course: '/courses/:_id',
  profile: '/profile',
  courseById: (_id: string) => `/courses/${_id}`
}

export const ROUTES = {
  App
}
