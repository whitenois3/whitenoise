import { Link, Flex, Grid, GridItem, Heading, Img } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <Flex paddingX={12} flexDirection="column" paddingY={0} margin={0} width="100%" height="100%" maxWidth="100%" maxHeight="100%" gap={4}>
      <Navbar />

      <Flex margin="auto" flexGrow={1}>
        <Img unselectable='off' src="/whitenoise.png" margin="auto" css={{ userSelect: 'none', pointerEvents: 'none' }} />
      </Flex>

      <Flex paddingBottom={4} flexFlow="row" alignContent="space-between" gap={2}>
        <Grid marginTop="auto" paddingBottom={8} pl={4} alignItems='center'>
          <GridItem>
            <Link href="https://ctf.whitenoise.rs" isExternal>
              <Heading
                paddingY={2}
                textDecoration="none"
                as="h1"
                textColor="blue.500"
                fontWeight="bold"
                css={{ userSelect: 'none' }}
                >
                  CTF
              </Heading>
            </Link>
            {/* <Heading
              paddingY={2}
              textDecoration="none"
              as="h1"
              textColor="purple.500"
              fontWeight="bold"
              css={{ userSelect: 'none' }}
              >
                RainbowKit
            </Heading> */}
            {/* <Heading
              paddingY={2}
              textDecoration="none"
              as="h1"
              textColor="orange.400"
              fontWeight="bold"
              css={{ userSelect: 'none' }}
              >
                Whitenoise
            </Heading> */}
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default Home
