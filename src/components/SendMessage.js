import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import { db, auth } from '../firebase';

export const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    const {uid, photoURL} = auth.currentUser

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <input
            type="text"
            placeholder='メッセージを入力してください'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
      </form>
    </div>
  )
}
