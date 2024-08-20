import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Homepage from "./component/Homepage"
import Contact from "./component/Contact"
import Book from "./component/Book"
import Blog from "./component/Blog"


function App() {

  const food = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/book" element = {<Book/>}/>
        <Route path="/blog" element = {<Blog/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={food}/>
    </>
  )
}

export default App
