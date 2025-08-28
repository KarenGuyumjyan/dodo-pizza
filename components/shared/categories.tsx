'use client'

import { cn } from '@/lib/utils'
import React, { useState } from 'react'

interface Props {
  className?: string
}

export const Categories: React.FC<Props> = ({ className }) => {
  //   const categoryActiveId = useCategoryStore((state) => state.activeId);
  const [categoryActiveId, setCategoryActiveId] = useState(0)

  const categories = [
    {
      name: 'Пиццы',
    },
    {
      name: 'Завтрак',
    },
    {
      name: 'Закуски',
    },
    {
      name: 'Коктейли',
    },
    {
      name: 'Напитки',
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
            categoryActiveId === index &&
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
