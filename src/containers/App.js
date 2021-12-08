import '../styles/App.css'
import CompSysTitle from '../components/CompSysTitle'
import Warning from './Warning'
import DataPad from './DataPad'
import Camera from './Camera'
import Message from './Message'
import ActionPad from './ActionPad'
import Footer from '../components/Footer'

function App() {
  return (
    <div className='global-container'>
      <CompSysTitle />
      <Warning />
      <div className='data-pad-camera-container'>
        <DataPad />
        <Camera />
      </div>
      <Message />
      <ActionPad />
      <Footer />
    </div>
  )
}

export default App
