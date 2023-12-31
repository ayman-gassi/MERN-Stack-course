import {Routes,Route} from "react-router-dom"
import './App.css'
import Blog from "./Component/Blog"
import NavBar from "./Component/NavBar"
function App() {
  return (
    <>
      <Routes>
          <Route path="/"  element={<NavBar></NavBar>}>
          <Route path="page2"  element={<Blog></Blog>} />
          <Route path="page3"  element={<p>Page3</p>} />
          <Route path="*"  element={<p>Page Not Found</p>} />
          </Route>
      </Routes>
    </>
  )
}

export default App
