import './App.css'
import { Main } from './components/Main/Main'

export const App = () => {
  const profileData = {
    name: "Jessica Randall",
    city: "London, United Kingdom",
    bio: "Front-End Developer and avid reader"
  }

  return <Main {...profileData} />
}