import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Header({ children }) {
  return (
    <Typography
      variant="h4"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#2C4251',
        textDecoration: 'none',
        justifyContent: "center"
      }}
    >
      {children}
    </Typography>
  )
}