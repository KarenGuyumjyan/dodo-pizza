import { Container, Title } from '@/components/shared'
import { Filters } from '@/components/shared/filters'
import { TopBar } from '@/components/shared/top-bar'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='All Pizzas' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />

      <Container className='mt-10'>
        <div className='flex gap-12.5'>
          {/* Filters */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* List of items */}
          <div className='flex-1'>
          </div>
        </div>
      </Container>
    </>
  )
}
