"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/src/components/ui/color-mode";
import Image from "next/image";
import { useState } from "react";
import { FiCheck, FiChevronLeft, FiUser, FiUserPlus } from "react-icons/fi";

// 仮のアバター画像データ（実際のFirebase連携時に置き換え）
const AVATAR_IMAGES = Array.from({ length: 18 }, (_, i) => ({
  index: `${i + 1}`,
  path: `/img/${i + 1}.png`,
}));

// 仮のユーザーデータ（実際のFirebase連携時に置き換え）
const MOCK_USERS = [
  { userId: "1", userName: "田中太郎", avatarIndex: "1", avatar: "/img/1.png" },
  { userId: "2", userName: "山田花子", avatarIndex: "5", avatar: "/img/5.png" },
];

interface EntryPageProps {
  groupId: string;
  groupName?: string;
}

export default function EntryPage({ groupId, groupName = "サンプルグループ" }: EntryPageProps) {
  const [step, setStep] = useState<"select" | "create">("select");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const hoverBg = useColorModeValue("gray.50", "gray.700");
  const selectedBg = useColorModeValue("green.50", "green.900");
  const selectedBorderColor = useColorModeValue("green.500", "green.300");
  const orTextBg = useColorModeValue("white", "gray.800");
  const hoverBorderColor = useColorModeValue("gray.300", "gray.500");
  const focusBorderColor = useColorModeValue("blue.500", "blue.300");
  const gridColumns = useBreakpointValue({ base: 4, sm: 5, md: 6 });

  const handleExistingUserLogin = async (userId: string) => {
    setIsLoading(true);
    // TODO: Firebase認証処理
    console.log("Login with existing user:", userId);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // router.push(`/draft/${groupId}`);
  };

  const handleCreateUser = async () => {
    if (!selectedAvatar || !userName.trim()) {
      return;
    }

    setIsLoading(true);
    // TODO: Firebase ユーザー作成処理
    console.log("Create new user:", { userName, avatar: selectedAvatar });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // router.push(`/draft/${groupId}`);
  };

  return (
    <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
      <VStack gap={6} align="stretch">
        {/* ヘッダー部分 */}
        <Box textAlign="center">
          <Text fontSize="sm" color="gray.500" mb={2}>
            グループに参加
          </Text>
          <Heading 
            size="lg" 
            mb={2}
            color="gray.800"
            _dark={{ color: 'gray.100' }}
          >
            {groupName}
          </Heading>
          <Text fontSize="sm" color="blue.600" _dark={{ color: 'blue.400' }}>
            ID: {groupId}
          </Text>
        </Box>

        {/* メインコンテンツ */}
        <Box
          bg={bgColor}
          borderRadius="lg"
          border="1px solid"
          borderColor={borderColor}
          p={{ base: 4, md: 6 }}
          boxShadow="sm"
        >
          {step === "select" ? (
            <VStack gap={4} align="stretch">
              {/* 既存ユーザー選択 */}
              {MOCK_USERS.length > 0 && (
                <>
                  <Text fontWeight="bold" fontSize="lg" color="gray.700" _dark={{ color: 'gray.200' }}>
                    登録済みのユーザーで参加
                  </Text>
                  <VStack gap={2} align="stretch">
                    {MOCK_USERS.map((user) => (
                      <Button
                        key={user.userId}
                        variant="outline"
                        size="lg"
                        justifyContent="flex-start"
                        gap={3}
                        p={4}
                        h="auto"
                        borderColor={borderColor}
                        _hover={{ 
                          bg: hoverBg,
                          borderColor: hoverBorderColor
                        }}
                        onClick={() => handleExistingUserLogin(user.userId)}
                        loading={isLoading}
                      >
                        <Image
                          src={user.avatar}
                          alt={user.userName}
                          width={40}
                          height={40}
                        />
                        <Text>{user.userName}</Text>
                      </Button>
                    ))}
                  </VStack>

                  {/* 区切り線 */}
                  <Box position="relative" py={4}>
                    <Box
                      position="absolute"
                      top="50%"
                      left="0"
                      right="0"
                      height="1px"
                      bg={borderColor}
                    />
                    <Text
                      position="relative"
                      display="inline-block"
                      bg={orTextBg}
                      px={4}
                      left="50%"
                      transform="translateX(-50%)"
                      color="gray.500"
                      fontSize="sm"
                    >
                      または
                    </Text>
                  </Box>
                </>
              )}

              {/* 新規ユーザー作成ボタン */}
              <Button
                colorScheme="green"
                size="lg"
                onClick={() => setStep("create")}
                disabled={isLoading}
              >
                <Box as={FiUserPlus} mr={2} />
                新しいユーザーを作成
              </Button>
            </VStack>
          ) : (
            <VStack gap={6} align="stretch">
              {/* 戻るボタン */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep("select")}
                alignSelf="flex-start"
                disabled={isLoading}
              >
                <Box as={FiChevronLeft} mr={2} />
                戻る
              </Button>

              {/* ユーザー作成フォーム */}
              <VStack gap={4} align="stretch">
                <Box>
                  <Text fontWeight="bold" mb={3} color="gray.700" _dark={{ color: 'gray.200' }}>
                    アバターを選択
                  </Text>
                  <SimpleGrid columns={gridColumns} gap={2}>
                    {AVATAR_IMAGES.map((avatar) => (
                      <Box
                        key={avatar.index}
                        position="relative"
                        cursor="pointer"
                        borderRadius="md"
                        border="2px solid"
                        borderColor={
                          selectedAvatar === avatar.index
                            ? selectedBorderColor
                            : "transparent"
                        }
                        bg={
                          selectedAvatar === avatar.index
                            ? selectedBg
                            : "transparent"
                        }
                        p={2}
                        transition="all 0.2s"
                        _hover={{
                          transform: "scale(1.05)",
                          bg: selectedAvatar === avatar.index ? selectedBg : hoverBg,
                          borderColor: selectedAvatar === avatar.index ? selectedBorderColor : "gray.300",
                        }}
                        onClick={() => setSelectedAvatar(avatar.index)}
                      >
                        <Image
                          src={avatar.path}
                          alt={`Avatar ${avatar.index}`}
                          width={60}
                          height={60}
                          style={{ objectFit: "contain" }}
                        />
                        {selectedAvatar === avatar.index && (
                          <Box
                            position="absolute"
                            top={1}
                            right={1}
                            bg={selectedBorderColor}
                            color="white"
                            borderRadius="full"
                            p={0.5}
                          >
                            <FiCheck size={12} />
                          </Box>
                        )}
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={2} color="gray.700" _dark={{ color: 'gray.200' }}>
                    ユーザー名
                  </Text>
                  <Input
                    placeholder="名前を入力（12文字まで）"
                    size="lg"
                    maxLength={12}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    borderColor={borderColor}
                    _focus={{
                      borderColor: focusBorderColor,
                      boxShadow: `0 0 0 1px ${focusBorderColor}`
                    }}
                    _hover={{
                      borderColor: hoverBorderColor
                    }}
                  />
                </Box>

                <Button
                  colorScheme="green"
                  size="lg"
                  onClick={handleCreateUser}
                  loading={isLoading}
                  disabled={!selectedAvatar || !userName.trim()}
                >
                  作成して参加
                </Button>
              </VStack>
            </VStack>
          )}
        </Box>

        {/* ヘルプテキスト */}
        <Text fontSize="sm" color="gray.500" textAlign="center">
          {step === "select"
            ? "既存のユーザーを選択するか、新しいユーザーを作成してください"
            : "アバターとユーザー名を設定してください"}
        </Text>
      </VStack>
    </Container>
  );
}
