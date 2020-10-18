import Head from 'next/head'
import { Heading, Link, Text, Code, Flex, Box } from "@chakra-ui/core";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as="h1" size="2xl" mb="2">
          Welcome to <Link color="teal.500" href="https://nextjs.org">Next.js!</Link>
        </Heading>

        <Text fontSize="xl" mt="2">
          Get started by editing <Code>pages/index.js</Code>
        </Text>

        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800px" mt="10">
          <Box as="a" href="https://nextjs.org/docs" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">Documentation &rarr;</Heading>
            <Text fontSize="lg">Find in-depth information about Next.js features and API.</Text>
          </Box>

          <Box as="a" href="https://nextjs.org/learn" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">Learn &rarr;</Heading>
            <Text fontSize="lg">Learn about Next.js in an interactive course with quizzes!</Text>
          </Box>

          <Box as="a" href="https://github.com/vercel/next.js/tree/master/examples" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">Examples &rarr;</Heading>
            <Text fontSize="lg">Discover and deploy boilerplate example Next.js projects.</Text>
          </Box>

          <Box as="a" href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">Deploy &rarr;</Heading>
            <Text fontSize="lg">Instantly deploy your Next.js site to a public URL with Vercel.</Text>
          </Box>

          <Box as="a" href="https://chakra-ui.com/" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">Chakra UI &rarr;</Heading>
            <Text fontSize="lg">Build accessible React apps & websites with speed.</Text>
          </Box>
        </Flex>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
