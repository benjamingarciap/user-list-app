import LoginPage from '../pages/LoginPage'
import LandingPage from '../pages/LandingPage'
import DashboardPage from '../pages/DashboardPage'
import Profile from '../pages/Profile'

export const routes = [
  {
    id: 1,
    title: 'Landing',
    url: ['/'],
    component: LandingPage,
    private: false
  },
  {
    id: 2,
    title: 'Login',
    url: ['/login'],
    component: LoginPage,
    private: false
  },
  {
    id: 3,
    title: 'Dashboard',
    url: ['/dashboard'],
    component: DashboardPage,
    private: true
  },
  {
    id: 4,
    title: 'Profile',
    url: ['/profile/:userid'],
    component: Profile,
    private: true
  }
]
