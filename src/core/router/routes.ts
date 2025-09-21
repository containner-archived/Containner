// ================================
// External and Internal Imports
// ================================
import HomePage from '@/pages/Home'
import { RouteConfig } from '@core/router'

// ================================
// Route Configuration
// ================================

/**
 * Application routes configuration
 * Defines all available routes and their corresponding page components
 */
export const appRoutes: RouteConfig[] = [
  // Main navigation routes
  {
    path: '/',
    element: HomePage
  }
]
