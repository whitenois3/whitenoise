import { Link, Flex, Grid, GridItem, Heading, Img, Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <Flex paddingX={12} flexDirection="column" paddingY={0} margin={0} width="100%" height="100%" maxWidth="100%" maxHeight="100%" gap={4}>
      <Navbar />

      <Flex margin="auto" flexGrow={1} flexDirection="column">
        <Box margin="auto">
          <Img unselectable='off' src="/whitenoise.png" marginX="auto" css={{ userSelect: 'none', pointerEvents: 'none' }} />
          <Heading as='i' marginX="auto" css={{ userSelect: 'none', pointerEvents: 'none' }}>Semper Invictus</Heading>
        </Box>
      </Flex>

      <Flex paddingBottom={4} flexFlow="row" alignContent="space-between" gap={2}>
        <Grid marginTop="auto" marginRight="auto" paddingBottom={8} pl={4} alignItems='center'>
          <GridItem>
            <Link href="https://ctf.whitenoise.rs" isExternal>
              <Heading
                paddingY={2}
                textDecoration="none"
                as="h1"
                fontWeight="bold"
                css={{ userSelect: 'none' }}
                >
                  CTF I
              </Heading>
            </Link>
            {/* <Link href="https://ctf2.whitenoise.rs" isExternal> */}
              <Heading
                paddingY={2}
                textDecoration="none"
                as="h1"
                fontWeight="bold"
                css={{ userSelect: 'none' }}
                >
                  CTF II 👀
              </Heading>
            {/* </Link> */}
          </GridItem>
        </Grid>
        <Grid paddingBottom={8} pr={6} alignItems='center'>
          <GridItem>
            <Link href="https://github.com/clabby" isExternal>
              <Heading
                paddingY={2}
                textAlign="right"
                textDecoration="none"
                as="h1"
                fontWeight="bold"
                css={{ userSelect: 'none' }}
                >
                  clabby
              </Heading>
            </Link>
            <Link href="https://github.com/abigger87" isExternal>
              <Heading
                paddingY={2}
                textAlign="right"
                textDecoration="none"
                as="h1"
                fontWeight="bold"
                css={{ userSelect: 'none' }}
                >
                  asnared
              </Heading>
            </Link>
            <Link href="https://github.com/exp-table" isExternal>
              <Heading
                paddingY={2}
                textAlign="right"
                textDecoration="none"
                as="h1"
                fontWeight="bold"
                css={{ userSelect: 'none' }}
                >
                  exp-table
              </Heading>
            </Link>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default Home
