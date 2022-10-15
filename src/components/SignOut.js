import { Button } from '@mui/material'
import React from 'react';
import { auth } from '../firebase';

export const SignOut = () => {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>
        サインアウト
      </Button>
    </div>
  )
}
