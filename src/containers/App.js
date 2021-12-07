import '../styles/App.css'
import CompSysTitle from '../components/CompSysTitle'
import Warning from './Warning'
import DataPad from './DataPad'
import Camera from './Camera'
import Message from './Message'
import ActionPad from './ActionPad'

function App() {
  return (
    <div className='global-container'>
      <CompSysTitle />
      <Warning />
      <div>
        <DataPad />
        <Camera />
      </div>
      <Message />
      <ActionPad />

    </div>
  )
}

export default App
