import 'styled-components'

interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string

      background: string
      backgroundshadow: string
      subackground: string
      text: string
      subtext: string
    }
  }
}
