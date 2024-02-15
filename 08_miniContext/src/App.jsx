import UserContextProvider from "./context/UserContextProvider"
import Profile from "./Components/Profile"
import Login from "./Components/LogIn"
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
