// ==================== All Import
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Homepage from "./component/Homepage"
import Contact from "./component/Contact"
import Book from "./component/Book"
import Blog from "./component/Blog"
import Manu from "./component/Manu"
import Blog_burger_details from "./component/Blog_burger_details"
import About from "./component/About"
import LayoutOne from "./Layout/LayoutOne"

function App() {

  // ======================== All Routes
  const food = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />} >
          <Route index element={<Homepage />} />
          <Route path="/manu" element={<Manu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/burger_details" element={<Blog_burger_details />} />
        </Route>

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={food} />
    </>
  )
}

export default App
