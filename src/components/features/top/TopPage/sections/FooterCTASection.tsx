'use client';

import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LuGithub } from 'react-icons/lu';

import { Button } from '@/src/components/atoms/Button';

type FooterCTASectionProps = {
  onCreateRoom: () => void;
};

export const FooterCTASection = ({ onCreateRoom }: FooterCTASectionProps) => {
  return (
    <Box
      as="section"
      background="linear-gradient(135deg, #3182ce, #805ad5, #d53f8c)"
      py={[12, 16]}
      pb={[24, 16]}
    >
      <Container maxW="lg">
        <VStack gap={[8, 10]}>
          <Heading
            as="h2"
            size={['xl', '2xl']}
            color="white"
            textAlign="center"
          >
            さあ、ドラフトを始めよう！
          </Heading>

          <Box w={['full', 'auto']} maxW="sm">
            <Button
              variant="secondary"
              size="lg"
              onClick={onCreateRoom}
              width="full"
            >
              ルームを作成する
            </Button>
          </Box>

          <Box
            w="full"
            borderTop="1px solid"
            borderColor="whiteAlpha.300"
            pt={8}
            mt={4}
          >
            <VStack gap={4}>
              <Text fontSize="sm" color="whiteAlpha.800">
                © 2025 オンラインドラフト会議
              </Text>
              <HStack gap={4}>
                <Link
                  href="https://github.com/at946/and-and"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ opacity: 0.8 }}
                >
                  <Box as={LuGithub} boxSize={6} color="whiteAlpha.800" />
                </Link>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
