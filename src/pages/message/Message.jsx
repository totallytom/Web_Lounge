import './MessageApp.scss'
import Sidebar from '../../components/message/Sidebar'
import Chat from '../../components/message/Chat'

const Message = () => {
  return (
    <div className='style'>
      <div className='container'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Message
