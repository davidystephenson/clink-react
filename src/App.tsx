import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { Link as ReactLink, LinkProps as ReactLinkProps } from 'react-router-dom'

export type ClinkProps = ChakraLinkProps & ReactLinkProps

export function Clink (props: ClinkProps): JSX.Element {
  return (
    <ChakraLink as={ReactLink} {...props} />
  )
}

export default Clink
