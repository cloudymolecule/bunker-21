import '../styles/App.css'
import CompSysTitle from '../components/CompSysTitle'
import Warning from './Warning'
import DataPad from './DataPad'

function App() {
  return (
    <div className='global-container'>
      <CompSysTitle />
      <Warning />
      <div>
        <DataPad />
      </div>
    </div>
  )
}

export default App
