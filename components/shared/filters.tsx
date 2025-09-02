'use client'

import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      {/* Top Checkboxes */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Italiano' value='1' />
        <FilterCheckbox text='Americano' value='2' />
      </div>

      {/* Prices */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Price from to:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            // value={String(filters.prices.priceFrom)}
            // onChange={(e) =>
            //   filters.setPrices('priceFrom', Number(e.target.value))
            // }
          />
          <Input
            type='number'
            min={0}
            max={500}
            placeholder='500'
            // value={String(filters.prices.priceTo)}
            // onChange={(e) =>
            //   filters.setPrices('priceTo', Number(e.target.value))
            // }
          />
        </div>
        <RangeSlider
          min={0}
          max={500}
          step={1}
          // value={[
          //   filters.prices.priceFrom || 0,
          //   filters.prices.priceTo || 1000,
          // ]}
          // onValueChange={updatePrices}
        />
      </div>

      {/* Bottom Checkboxes */}
      <CheckboxFiltersGroup
        title='Ingredients'
        name='ingredients'
        className='mt-5'
        limit={6}
        items={[
          { value: '1', text: 'Chees souce' },
          { value: '2', text: 'Paper' },
          { value: '3', text: 'Cucumber' },
          { value: '4', text: 'Potato' },
          { value: '5', text: 'Tomate' },
          { value: '6', text: 'Salad' },
          { value: '7', text: 'Onion' },
        ]}
      />
    </div>
  )
}
