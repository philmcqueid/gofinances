import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'

import theme from './src/global/styles/theme'
import { Dashboard } from './src/screens/Dashboard'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}
