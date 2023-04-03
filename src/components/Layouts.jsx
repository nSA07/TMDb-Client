import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Navbar } from './Navbar'

export const Layouts = ({children}) => {
  return <React.Fragment>
    <Container maxWidth="lg">
      <Navbar />
      {children}
    </Container>
  </React.Fragment>
}
