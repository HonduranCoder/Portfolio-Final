import {
  Box,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  useDisclosure,
  Stack,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Profile', 'Projects', 'Resume'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={'#'}
  >
    {children}
  </Link>
);

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Portfolio</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link to={'/profile'} underline="none">
                Home
              </Link>
              <Link to={'/projects'} underline="none">
                Projects
              </Link>
              <Link to={'/resume'} underline="none">
                Resume
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode} mr="10px">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link to={'/'} underline="none"></Link>
              <Link to={'/create'} underline="none">
                Create
              </Link>

              <Link to={'/results'} underline="none">
                Search
              </Link>

              <Link to={'/chatrooms'} underline="none">
                Chat
              </Link>
              <Link to={'/aboutus'} underline="none">
                About Us
              </Link>
              {!user.github ? (
                <Link to={'/login'} underline="none">
                  Login
                </Link>
              ) : (
                <Link to={'/'} underline="none" onClick={logOut}>
                  Logout
                </Link>
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
