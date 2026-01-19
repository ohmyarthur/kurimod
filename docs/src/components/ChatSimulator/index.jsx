import { useEffect, useRef, useState } from "react";

const controller = {
    setMessages: () => {
    },
    updateCallback: () => {
    }
}

const sendMessage = (message) => {
    if (message) {
        const msgObj = {
            "type": "text",
            "value": message,
            "outgoing": true
        }
        controller.setMessages((messages) => [msgObj, ...messages]);

        const response = controller.updateCallback(msgObj);
        if (response) {
            const responseObj = {
                "type": "text",
                "value": response,
                "outgoing": false
            }
            setTimeout(() => {
                controller.setMessages((messages) => [responseObj, ...messages]);
            }, 300);
        }
    }
}

const Command = ({ command }) => {
    return (
        <div className={"text-blue-500 inline cursor-pointer"} onClick={() => sendMessage(command)}>
            {command}
        </div>
    )
}


const ChatMessage = ({ message, outgoing }) => {
    let innerBubble = [message];

    // replace all texts that start with slash for Command instance instead
    const commandRegex = /\/[a-zA-Z0-9]+/g;
    const commands = message.match(commandRegex);

    if (commands) {
        const split = message.split(commandRegex);
        innerBubble = [];
        for (let i = 0; i < split.length; i++) {
            innerBubble.push(split[i]);
            if (i < commands.length) {
                innerBubble.push(<Command key={i} command={commands[i]} />);
            }
        }


    }
    if (!outgoing) {
        return (
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <div className={"bg-orange-300 h-full w-full font-bold text-black justify-center flex items-center"}>BOT</div>
                    </div>
                </div>
                <div className="chat-bubble text-[var(--ifm-font-color-base-inverse)] bg-[var(--ifm-color-primary-light)]">{innerBubble}</div>
            </div>
        )
    }

    return (
        <div className="chat chat-end">
            <div className="chat-bubble bg-base-300/70 text-base-content">{innerBubble}</div>
        </div>
    )
}


export const ChatSimulator = ({ updateCallback }) => {
    const inputRef = useRef(null);
    const [messages, setMessages] = useState([]);
    controller.setMessages = setMessages;
    controller.updateCallback = updateCallback;

    const onSubmit = (e) => {
        e.preventDefault();
        sendMessage(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    useEffect(() => {
        inputRef.current.focus();
        sendMessage("/start")
    }, []);

    return (
        <div className="flex flex-col h-96 w-[80vw] md:w-96 bg-base-100 border-2 dark:border-base-300 rounded-box shadow-xl overflow-hidden m-2 text-base">
            <div className="flex flex-row justify-center items-center h-12 w-full bg-base-200 select-none">
                <div className="text-lg font-medium text-base-content">Chat Simulator</div>
            </div>
            <div className="flex flex-grow h-full max-h-full w-full bg-base-100 overflow-auto scrollbar-thin scrollbar-thumb-neutral">
                <div className="flex flex-col-reverse flex-grow h-full max-h-full w-full bg-base-100 px-2 overflow-auto scrollbar-thin">
                    {messages.map((message, index) => {
                        console.log(message)
                        return (
                            <ChatMessage key={index} message={message.value} outgoing={message.outgoing} />
                        )
                    })}
                </div>
            </div>
            <form onSubmit={onSubmit} className="flex flex-row justify-center items-center h-12 w-full bg-base-200 gap-2 p-2">
                <input className="input input-sm input-bordered w-full max-w-xs flex-grow" ref={inputRef} type="text" placeholder="Type a message" />
                <button type="submit" className="btn btn-sm glass">Send</button>
            </form>
        </div>

    )
}