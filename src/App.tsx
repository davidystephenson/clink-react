import { Link, LinkProps } from '@chakra-ui/react'
import { Link as ReactLink, LinkProps as ReactLinkProps } from 'react-router-dom'

type Props = LinkProps & ReactLinkProps

export default function Clink (props: Props): JSX.Element {
  return (
    <Link as={ReactLink} {...props}>{props.children}</Link>
  )
}
