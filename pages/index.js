import Head from 'next/head';
import { Container, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW={'5xl'}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='GraphQL demo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Text>Hello, World!</Text>
    </Container>
  );
}
