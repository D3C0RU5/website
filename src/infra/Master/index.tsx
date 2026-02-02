import React, { ReactNode, useState, useCallback } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { setCookie } from 'nookies'

import { dark } from '../../styles/themes/dark'
import { light } from '../../styles/themes/light'
import Nav from '../../components/Nav'
import GlobalStyle from '../../styles/globals'

interface MasterProps {
  theme: 'light' | 'dark'
  children: ReactNode
}

const Master = ({ theme: initialTheme, children }: MasterProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(
    initialTheme === 'light' ? light : dark
  )

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev.title === 'light' ? dark : light

      setCookie(null, 'theme', nextTheme.title, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })

      return nextTheme
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Nav toggleTheme={toggleTheme} />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Master
