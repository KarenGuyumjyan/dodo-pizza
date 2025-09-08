import { Container, ProductsGroupList, Title } from '@/components/shared'
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
          <div className='flex-1 flex flex-col gap-16'>
            <ProductsGroupList
              title='Pizza'
              categoryId={1}
              items={[
                {
                  id: 1,
                  name: 'Pizza 1',
                  price: 50,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:584x584/0196cee5585d74fda5a59f57c99ecad2.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
                {
                  id: 2,
                  name: 'Pizza 2',
                  price: 40,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:584x584/0197452f4fee73c38d70b1660908526a.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
                {
                  id: 3,
                  name: 'Pizza 3',
                  price: 50,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:584x584/0196ce81246971dc9b23914ffe937e02.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
                {
                  id: 4,
                  name: 'Pizza 4',
                  price: 50,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:584x584/0196cee5585d74fda5a59f57c99ecad2.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
                {
                  id: 5,
                  name: 'Pizza 5',
                  price: 50,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:584x584/0196cee5585d74fda5a59f57c99ecad2.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
              ]}
            />
            <ProductsGroupList
              title='Breakfast'
              categoryId={2}
              items={[
                {
                  id: 1,
                  name: 'Pizza 1',
                  price: 50,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:584x584/0196cee5585d74fda5a59f57c99ecad2.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
                {
                  id: 2,
                  name: 'Pizza 2',
                  price: 40,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:584x584/0197452f4fee73c38d70b1660908526a.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
                {
                  id: 3,
                  name: 'Pizza 3',
                  price: 50,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:584x584/0196ce81246971dc9b23914ffe937e02.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
                {
                  id: 4,
                  name: 'Pizza 4',
                  price: 50,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:584x584/0196cee5585d74fda5a59f57c99ecad2.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
                {
                  id: 5,
                  name: 'Pizza 5',
                  price: 50,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.avif',
                  ingredients: [
                    'Cucumber',
                    'Tomato',
                    'Mayonez',
                    'Onioin',
                    'Ketchup',
                    'chees',
                  ],
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
