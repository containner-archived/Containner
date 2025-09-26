import React, { useEffect } from 'react'
import { AppRouter, appRoutes } from '@core/router'
import { initializeAnalytics } from '@features/ga'
import { MainLayout } from '@shared/components/layouts'

const App: React.FC = () => {
  useEffect(() => {
    initializeAnalytics()
  }, [])

  return (
    <MainLayout>
      <AppRouter routes={appRoutes} />
    </MainLayout>
  )
}

export default App
