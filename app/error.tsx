"use client"

import { Button } from 'react-bootstrap';
import React from 'react'


const error = () => {
  return (
    <div>
      <h1>Error 😵</h1>
      <p>Something went wrong</p>
      <Button>Try Again</Button>
    </div>
  )
}

export default error
