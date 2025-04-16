import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './guestBook.css'

const GuestBook = () => {
    const [apiMessage, setApiMessage] = useState([]);
    const [postData, setPostData] = useState({name: "", message: ""});

    const showMessage = async () => {
        try {
            const response = await axios.get("https://guest-650001366068.us-central1.run.app/guest");
            setApiMessage(response.data);
        } catch (error) {
            console.error("showMessage Error : ", error)
        }
    }

    const submitPost = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://guest-650001366068.us-central1.run.app/guest", postData);
            setPostData({name: "", message: ""});
            showMessage();
        } catch (error) {
            console.error("submitPost Error : ", error)
        }
    }

    useEffect(()=>{
        showMessage();
    },[apiMessage]);

    return (
        <div className='guest-outbox'>
            <h1>Guest Book</h1>
            <form onSubmit={submitPost}>
                <input type="text" value={postData.name} placeholder='name'
                onChange={(e)=> setPostData({... postData, name: e.target.value })} required />
                <textarea value={postData.message} placeholder='message' rows={10} cols={40}
                onChange={(e)=> setPostData({... postData, message: e.target.value })} required />
                <button type="submit">submit</button>
            </form>
            {
                apiMessage.map((row)=>(
                    <div key={row.id} className='msg-card'>
                        <h2>{row.name}</h2>
                        <p>{row.message}</p>
                        <p>{new Date(row.create_at).toLocaleString()}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default GuestBook