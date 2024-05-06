import {
  Center,
  Text,
  Stack,
  Box,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react'

// Icons
import { FaCocktail,
  FaHiking,
  FaSwimmingPool,
  FaCoffee 
} from 'react-icons/fa'
import { GiHorseHead } from 'react-icons/gi'
import { DiCoda } from 'react-icons/di'

// Custom Header component
import Header from '../../components/Header'


export default function Services() {
  // Services data
  const services = [
    {
      index: 1,
      icon: <FaCocktail/>,
      title: 'Complimentary cocktail.',
      info: 'A blend made with love, featuring fruits typically tangy and sweet, sometimes flavored with a liqueur.'
    }, 
    {
      index: 2,
      icon: <FaHiking/>,
      title: 'Infinite hiking.',
      type: 'out',
      info: 'We love activities, and our activity is taking long countryside walks, just for you.'
    },
    {   
      index: 3,
      icon: <FaSwimmingPool/>,
      title: 'Swimming pool.',
      type: 'in',
      info: 'Three complimentary pools for you and your children to enjoy a great time, with experienced mentors.'
    },
    {
      index: 4,
      icon: <FaCoffee/>,
      title: 'Cafe',
      type: 'in',
      info: 'The most potent coffee, directly from Brazil, to our charming hotel.'
    },
    {
      index: 5,
      icon: <DiCoda/>,
      title: 'Green space.',
      type: 'out',
      info: 'A green space with a beautiful view for the family to relax and enjoy quality time.'
    },
    {
      index: 6,
      icon: <GiHorseHead/>,
      title: 'Horseback riding.',
      type: 'out',
      info: 'Enjoy beautiful trails and horseback riding. Choose from leisurely rides only.'
    }
  ]

  return (
    <>
      <Header
        h={[420, 400, 300, 300, 280, 260]}
        py={[2, 4, 8, 10]}
      >
        {{
           title: 'Services',
           heading: 'Comfort, Elegance, Experience, and Emotions..',
           content: 'Welcome to Srinagar, welcome to Hotel Leena in the heart of Paradise. Experience an incomparable and authentic stay, modern, warm, and refined. Hotel Leena is a haven of relaxation. Discover a wide range of activities and immerse yourself in a complete hotel experience.'
        }}
      </Header>
      <Center>           
        <Grid
          mr={10} 
          ml={10}
          mt={[16, 12, 0]} 
          templateRows={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(2, 1fr)']}
          templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(6, 1fr)']}
          gap={5}
        >
        {services.map((service, index) => (
          <GridItem key={index} colSpan={2} h='100%'>
            <Box
              maxW='sm'
              overflow='hidden'
              borderRadius='sm' 
              bgColor='secondary' 
            >
              <Center mt={7} mb={2}>   
                <Text fontSize='5xl' color='primary'>
                  {service.icon}
                </Text>
              </Center>
              <Box p={6}>
                <Center>
                  <Box
                    as='h4'
                    mb={2}
                    fontWeight='bold'
                    lineHeight='tight'
                    isTruncated
                    _hover={{
                      textColor: 'primary',
                      fontWeight: 'extrabold'
                    }}
                  >
                  {service.title}
                  </Box>
                </Center>
                <Box display='flex' mt={2} alignItems='center'>
                  <Box
                    as='h4'
                    mt={2}
                    mb={2}
                    fontWeight='light'
                    textColor='gray.600'
                  >
                  {service.info}
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))} 
        </Grid>
      </Center>
    </>
  )
}
