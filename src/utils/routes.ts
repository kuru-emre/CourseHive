const App = {
  login: '/login',
  register: '/register',
  home: '/',
  invite: '/invite/:_id/:code',
  settings: '/settings',
  course: '/courses/:_id',
  profile: '/profile',
  courseById: (_id: string) => `/courses/${_id}`
}

export const ROUTES = {
  App
}
