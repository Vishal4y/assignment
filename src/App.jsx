
import './App.css'
import Bottomsection from './components/bottomsection'
import MidSection from './components/midsection'
import Sidebar from './components/sidebar'
import Topbar from './components/topbar'

function App() {


  return (
    <>
        <div style={{display : 'flex'}} >
                   <div>
                    <Sidebar></Sidebar>
                   </div>
                   <div>
                     <div>
                      <Topbar></Topbar>
                     </div>
                     <div>
                     <MidSection></MidSection>
                     </div>
                     <div>
                      <Bottomsection></Bottomsection>
                     </div>
                   </div>
        </div>
    </>
  )
}

export default App
