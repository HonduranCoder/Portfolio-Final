import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Stack,
  Spacer,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function blogPostWithImage({
  image,
  title,
  subtitle,
  about,
  smallImage,
  note,
}) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image src={image} layout={'fill'} />
        </Box>
        <Stack>
          {/* to get spacing correct */}
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {title}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {subtitle}
          </Heading>
          <Text color={'gray.500'}>{about}</Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={smallImage} alt={'Random Image'} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{note}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
