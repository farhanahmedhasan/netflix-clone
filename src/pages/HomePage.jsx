import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"

function HomePage() {
  return (
    <div className="bg-main-color">
      <Navbar/>
      <Featured type='movie'/>
    </div>
  )
}

export default HomePage