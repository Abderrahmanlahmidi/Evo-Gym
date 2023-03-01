import { useState } from "react"
import Navbar from "./scenes"
import { selectedPage } from "./shared/types";



function App() {
  const [SelectedPage, setSelectedPage] = useState<selectedPage>(selectedPage.Home);
  return (
    <div>
      <Navbar 
        SelectedPage={SelectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
