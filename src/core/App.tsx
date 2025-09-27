import React, { useEffect } from 'react'
import { AppRouter, appRoutes } from '@core/router'
import { initializeAnalytics } from '@features/ga'
import { MainLayout } from '@shared/components/layouts'

const App: React.FC = () => {
  useEffect(() => {
    initializeAnalytics()
  }, [])

  return <AppRouter routes={appRoutes} />
}

export default App
