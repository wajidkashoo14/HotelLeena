import { FaInstagram } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'


export default function Instagram() {
  return (
    <Link href='https://www.instagram.com/hotel21/' passHref>
      <IconButton
        aria-label='Twitter Icon'
        variant='icon'
        color='primary'
        isRound
        icon={ <FaInstagram size='30' p='8'/> }
        _hover={{
          transform: 'scale(1.11)',
          transition: 'all .3s ease'
        }}
        _focus={{  }}
      />
    </Link>
  )
}
