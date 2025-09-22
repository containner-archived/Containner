import React from 'react'
import Sidebar from './Sidebar'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#191919]">
      <Sidebar>{children}</Sidebar>
    </div>
  )
}

export default MainLayout
