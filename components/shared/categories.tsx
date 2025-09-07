'use client'
import React from 'react'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'

interface Props {
  className?: string
}

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  const categories = [
    {
      name: 'Pizza',
    },
    {
      name: 'Breakfast',
    },
    {
      name: 'Snacks',
    },
    {
      name: 'Cocktails',
    },
    {
      name: 'Drinks',
    },
  ]

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map(({ name }, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === index + 1 &&
              'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          key={index}
        >
          <button className='cursor-pointer'>{name}</button>
        </a>
      ))}
    </div>
  )
}
