import React from 'react'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'

const HomePage: React.FC = () => {
  useDocumentTitle('Home')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">HomePage</h1>
        <p className="text-gray-600 mt-2">Welcome to your HomePage overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Sales',
            value: 'R$ 45.230',
            change: '+12%',
            color: 'text-green-600'
          },
          {
            title: 'Active Users',
            value: '1.234',
            change: '+5%',
            color: 'text-blue-600'
          },
          {
            title: 'Projects',
            value: '23',
            change: '+8%',
            color: 'text-purple-600'
          },
          {
            title: 'Tasks',
            value: '156',
            change: '-2%',
            color: 'text-orange-600'
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <p className={`text-2xl font-bold ${stat.color} mt-2`}>
              {stat.value}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
