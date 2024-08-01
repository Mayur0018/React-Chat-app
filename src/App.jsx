import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Modal from './components/LoginForm';
function App() {
  if (!localStorage.getItem('username')) return <Modal />;

  return (
    <div style={{ height: '100vh' }}>
      <ChatEngine
        height="100vh"
        projectID="942b6dd5-12f0-4e46-b40c-3a8212b13752" // Replace with your actual project ID
        userName={localStorage.getItem('username')} // Replace with your actual username
        userSecret={localStorage.getItem('password')} // Replace with your actual user secret
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
