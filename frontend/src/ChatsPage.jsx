// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return(
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId=''
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />
        </div>
    );
}

export default ChatsPage;
