import React from 'react'
import { Container, Spinner } from '@/components/bootstrap'

const loading = () => {
  return (
    <div>
      <Container>
        <Spinner className='d-block m-auto' animation="border"></Spinner>
      </Container>
    </div>
  )
}

export default loading
