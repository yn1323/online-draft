import type { Meta, StoryObj } from '@storybook/react';
import { useColorModeValue } from '@/src/components/ui/color-mode';
import {
  Badge,
  Box,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import UserCreateStep from '../UserCreateStep';
import UserSelectStep from '../UserSelectStep';
import StepIndicator, { type Step } from '../components/StepIndicator';

// ビジュアルテスト用のモックデータ
const MOCK_AVATAR_IMAGES = Array.from({ length: 18 }, (_, i) => ({
  index: `${i + 1}`,
  path: `/img/${i + 1}.png`,
}));

const MOCK_USERS = [
  { userId: '1', userName: '田中太郎', avatarIndex: '1', avatar: '/img/1.png' },
  { userId: '2', userName: '山田花子', avatarIndex: '5', avatar: '/img/5.png' },
];

// LobbyPageのビジュアル版（Firestore依存を排除）
const LobbyPageVisual = ({
  groupId,
  groupName,
  round = 1,
}: {
  groupId: string;
  groupName: string;
  round?: number;
}) => {
  const [step, setStep] = useState<Step>('select');
  const [isLoading, setIsLoading] = useState(false);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const helpBgColor = useColorModeValue('blue.50', 'blue.900');
  const helpBorderColor = useColorModeValue('blue.200', 'blue.700');
  const helpTextColor = useColorModeValue('blue.700', 'blue.300');

  const handleExistingUserLogin = async (userId: string) => {
    setIsLoading(true);
    console.log('既存ユーザーでログイン（モック）:', userId);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleCreateUser = async (data: { userName: string; avatarIndex: string }) => {
    setIsLoading(true);
    console.log('新規ユーザー作成（モック）:', data);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
      <VStack gap={6} align="stretch">
        {/* ヘッダー部分 */}
        <Box textAlign="center">
          <Badge
            colorScheme="blue"
            fontSize="xs"
            px={3}
            py={1}
            borderRadius="full"
            mb={3}
          >
            <HStack gap={1}>
              <Box as={FiUsers} />
              <Text>グループに参加</Text>
            </HStack>
          </Badge>
          <Heading
            size={{ base: 'md', md: 'lg' }}
            mb={3}
            color="gray.800"
            _dark={{ color: 'gray.100' }}
            fontWeight="bold"
          >
            {groupName}
          </Heading>
          <HStack justify="center" gap={2}>
            <Text fontSize="sm" color="gray.500">
              グループID:
            </Text>
            <Badge variant="outline" colorScheme="blue" fontSize="xs">
              {groupId}
            </Badge>
            <Text fontSize="sm" color="gray.500">
              •
            </Text>
            <Text fontSize="sm" color="gray.500">
              ラウンド: {round}
            </Text>
          </HStack>
        </Box>

        {/* ステップインジケーター */}
        <StepIndicator currentStep={step} />

        {/* メインコンテンツ */}
        <Box
          bg={bgColor}
          borderRadius="xl"
          border="1px solid"
          borderColor={borderColor}
          p={{ base: 4, md: 6 }}
          boxShadow="md"
          overflow="hidden"
        >
          {step === 'select' && (
            <UserSelectStep
              users={MOCK_USERS}
              onUserSelect={handleExistingUserLogin}
              onCreateNewUser={() => setStep('create')}
              isLoading={isLoading}
            />
          )}

          {step === 'create' && (
            <UserCreateStep
              avatars={MOCK_AVATAR_IMAGES}
              onBack={() => setStep('select')}
              onSubmit={handleCreateUser}
              isLoading={isLoading}
            />
          )}
        </Box>

        {/* ヘルプテキスト */}
        <Box
          bg={helpBgColor}
          border="1px solid"
          borderColor={helpBorderColor}
          borderRadius="lg"
          p={4}
          textAlign="center"
        >
          <Text
            fontSize="sm"
            color={helpTextColor}
            fontWeight="medium"
          >
            💡{' '}
            {step === 'select'
              ? '既存のユーザーを選択するか、新しいユーザーを作成してグループに参加しましょう'
              : 'お気に入りのアバターを選んで、ドラフトで使う名前を決めてください'}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

const meta: Meta<typeof LobbyPageVisual> = {
  title: 'Features/Lobby/LobbyPage',
  component: LobbyPageVisual,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'ロビーページのビジュアル表示（Firestore依存を回避したモック版）',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupId: 'ABC123',
    groupName: 'サンプルグループ',
    round: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'ロビーページの通常表示状態',
      },
    },
  },
};

export const LongGroupName: Story = {
  args: {
    groupId: 'XYZ789',
    groupName: 'とても長いグループ名のサンプルグループですがこれでも表示されるはずです',
    round: 2,
  },
  parameters: {
    docs: {
      description: {
        story: '長いグループ名での表示状態',
      },
    },
  },
};

export const ShortGroupId: Story = {
  args: {
    groupId: '12',
    groupName: '短いIDグループ',
    round: 1,
  },
  parameters: {
    docs: {
      description: {
        story: '短いグループIDでの表示状態',
      },
    },
  },
};
