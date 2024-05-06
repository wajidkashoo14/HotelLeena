import {
  Center,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Spacer,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiBed } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'

function StatsCard(props) {
  const { title, stat, icon } = props

  return (
    <Stat
      px={[2, 6]}
      py={5}
      mx={[4, 2]}
      mb={[2, 0]}
      bgColor='secondary'
      borderRadius='sm'
      _hover={{
        transform: 'scale(1.09)',
        transition: 'all .3s ease',
        bg: 'whiteAlpha.200',
        color: 'primary',
        cursor:'pointer'
      }}
      
    >
      <Flex>
        <Box pr={[0, 8, 16]} pl={[2, 1, 0]}>
          <StatLabel fontWeight='md' isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize='xl' fontWeight='md'>
            {stat}
          </StatNumber>
        </Box>
        <Spacer />
        <Box
          my='auto'
          mx='auto'
          alignContent='center'
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}


export default function BasicStatistics() {
  return (
    <Center>
      <Box maxW='7xl' mx='auto' pt={5} px={[2, 6, 12, 17]}>
        <Text 
          as='i'
          noOfLines={2} 
          color='primary'
          fontSize='2xl'
          align='center'
          my={[12, 16, 16]}
          mx={6}
        >
          You are in good hands.
        </Text>
        <SimpleGrid columns={[1, 1, 3, 3, 3, 3]} spacing={[5, 8]}>
          <StatsCard
            title='Staff'
            stat='10+'
            icon=<BsPerson size='3em' />
          />
          <StatsCard
            title='Rooms'
            stat='20+'
            icon=<BiBed size='3em' />
          />
          <StatsCard
            title='Location'
            stat='Dalgate bridge, Srinagar, Jammu and Kashmir 190001'
            icon=<GoLocation size='3em' />
          />
        </SimpleGrid>
      </Box>
    </Center>
  )
}
