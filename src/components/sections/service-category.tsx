'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline'
import { serviceCategories, colorClasses } from '@/data/service-categories'

export function ServiceCategory({ category }: { category: (typeof serviceCategories)[number] }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <Card className={`group transition-all duration-300 ${colorClasses[category.color].hover}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${colorClasses[category.color].bg}`}>
              <category.icon className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">{category.title}</CardTitle>
              <p className="text-gray-600 mt-1">
                {category.description}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-3 rounded-full transition-colors ${colorClasses[category.color].text} hover:bg-gray-100`}
          >
            {isExpanded ? (
              <ChevronUpIcon className="h-6 w-6" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <ul className="space-y-4 mb-6">
            {category.services.map((service, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <div className={`h-2 w-2 rounded-full ${colorClasses[category.color].bg} mr-4 mt-3 flex-shrink-0`}></div>
                <span className="text-base leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              Included in All Programs
            </span>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

