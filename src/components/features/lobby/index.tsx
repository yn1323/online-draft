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
  HStack,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/src/components/ui/color-mode";
import Image from "next/image";
import { useState } from "react";
import { FiCheck, FiChevronLeft, FiUserPlus, FiUsers, FiUser } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userCreateSchema, type UserCreateForm } from "@/src/constants/schemas";

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

interface LobbyPageProps {
  groupId: string;
  groupName?: string;
}

export default function LobbyPage({ groupId, groupName = "サンプルグループ" }: LobbyPageProps) {
  const [step, setStep] = useState<"select" | "create">("select");
  const [isLoading, setIsLoading] = useState(false);

  // React Hook Form setup
  const form = useForm<UserCreateForm>({
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      userName: "",
      avatarIndex: "",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = form;

  const watchedAvatarIndex = watch("avatarIndex");

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

  const handleCreateUser = async (data: UserCreateForm) => {
    setIsLoading(true);
    try {
      // TODO: Firebase ユーザー作成処理
      console.log("Create new user:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // router.push(`/draft/${groupId}`);
    } catch (error) {
      console.error("User creation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
      <VStack gap={6} align="stretch">
        {/* ヘッダー部分 - 改善版 */}
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
            size={{ base: "md", md: "lg" }}
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
          </HStack>
        </Box>

        {/* ステップインジケーター */}
        <HStack justify="center" gap={4}>
          <HStack gap={2}>
            <Box
              w={8}
              h={8}
              borderRadius="full"
              bg={step === "select" ? "blue.500" : "gray.300"}
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm"
              fontWeight="bold"
              transition="all 0.3s"
            >
              1
            </Box>
            <Text 
              fontSize="sm" 
              color={step === "select" ? "blue.600" : "gray.500"}
              _dark={{ 
                color: step === "select" ? "blue.400" : "gray.400" 
              }}
              fontWeight={step === "select" ? "bold" : "normal"}
            >
              ユーザー選択
            </Text>
          </HStack>
          <Box w={8} h={0.5} bg="gray.300" />
          <HStack gap={2}>
            <Box
              w={8}
              h={8}
              borderRadius="full"
              bg={step === "create" ? "green.500" : "gray.300"}
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm"
              fontWeight="bold"
              transition="all 0.3s"
            >
              2
            </Box>
            <Text 
              fontSize="sm" 
              color={step === "create" ? "green.600" : "gray.500"}
              _dark={{ 
                color: step === "create" ? "green.400" : "gray.400" 
              }}
              fontWeight={step === "create" ? "bold" : "normal"}
            >
              ユーザー作成
            </Text>
          </HStack>
        </HStack>

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
          {step === "select" && (
              <VStack gap={5} align="stretch">
                {/* 既存ユーザー選択 */}
                {MOCK_USERS.length > 0 && (
                  <>
                    <HStack gap={2} mb={2}>
                      <Box as={FiUser} color="gray.600" _dark={{ color: 'gray.400' }} />
                      <Text fontWeight="bold" fontSize="lg" color="gray.700" _dark={{ color: 'gray.200' }}>
                        登録済みのユーザーで参加
                      </Text>
                      <Badge colorScheme="green" variant="subtle" fontSize="xs">
                        {MOCK_USERS.length}人
                      </Badge>
                    </HStack>
                    <VStack gap={3} align="stretch">
                      {MOCK_USERS.map((user) => (
                        <Button
                          key={user.userId}
                          variant="outline"
                          size="lg"
                          justifyContent="flex-start"
                          gap={4}
                          p={5}
                          h="auto"
                          borderColor={borderColor}
                          color="gray.700"
                          borderRadius="lg"
                          transition="all 0.2s"
                          _hover={{ 
                            bg: hoverBg,
                            borderColor: hoverBorderColor,
                            transform: "translateY(-2px)",
                            boxShadow: "md"
                          }}
                          _dark={{
                            color: "gray.200",
                            _hover: {
                              bg: hoverBg,
                              borderColor: hoverBorderColor,
                              transform: "translateY(-2px)",
                              boxShadow: "md"
                            }
                          }}
                          onClick={() => handleExistingUserLogin(user.userId)}
                          loading={isLoading}
                        >
                          <Box
                            borderRadius="full"
                            overflow="hidden"
                          >
                            <Image
                              src={user.avatar}
                              alt={user.userName}
                              width={48}
                              height={48}
                            />
                          </Box>
                          <VStack align="flex-start" gap={0}>
                            <Text fontWeight="bold" fontSize="md">
                              {user.userName}
                            </Text>
                            <Text fontSize="sm" opacity={0.8}>
                              このユーザーで参加
                            </Text>
                          </VStack>
                        </Button>
                      ))}
                    </VStack>

                  {/* 区切り線 */}
                  <Box position="relative" py={6}>
                    <Box
                      position="absolute"
                      top="50%"
                      left="0"
                      right="0"
                      height="1px"
                      bg={borderColor}
                      opacity={0.6}
                    />
                    <Text
                      position="relative"
                      display="inline-block"
                      bg={orTextBg}
                      px={6}
                      left="50%"
                      transform="translateX(-50%)"
                      color="gray.500"
                      fontSize="sm"
                      fontWeight="medium"
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
                borderRadius="lg"
                h={14}
                fontSize="md"
                fontWeight="bold"
                transition="all 0.2s"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg"
                }}
              >
                <Box as={FiUserPlus} mr={3} />
                新しいユーザーを作成
              </Button>
            </VStack>
            )}

          {step === "create" && (
            <VStack gap={6} align="stretch">
              {/* 戻るボタン */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep("select")}
                alignSelf="flex-start"
                disabled={isLoading}
                borderRadius="md"
                _hover={{ bg: hoverBg }}
              >
                <Box as={FiChevronLeft} mr={2} />
                戻る
              </Button>

              {/* ユーザー作成フォーム */}
              <VStack gap={6} align="stretch">
                <Box>
                  <HStack gap={2} mb={4}>
                    <Text fontWeight="bold" fontSize="lg" color="gray.700" _dark={{ color: 'gray.200' }}>
                      アバターを選択
                    </Text>
                    <Badge 
                      colorScheme={watchedAvatarIndex ? "green" : "gray"} 
                      variant="subtle" 
                      fontSize="xs"
                    >
                      {watchedAvatarIndex ? "選択済み" : "未選択"}
                    </Badge>
                  </HStack>
                  <Text fontSize="sm" color="gray.500" mb={4}>
                    お気に入りの動物アバターを選んでください
                  </Text>
                  <SimpleGrid columns={gridColumns} gap={3}>
                    {AVATAR_IMAGES.map((avatar) => (
                      <Box
                        key={avatar.index}
                        position="relative"
                        cursor="pointer"
                        borderRadius="xl"
                        border="3px solid"
                        borderColor={
                          watchedAvatarIndex === avatar.index
                            ? selectedBorderColor
                            : "transparent"
                        }
                        bg={
                          watchedAvatarIndex === avatar.index
                            ? selectedBg
                            : "transparent"
                        }
                        p={3}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        _hover={{
                          transform: "scale(1.1) rotate(2deg)",
                          bg: watchedAvatarIndex === avatar.index ? selectedBg : hoverBg,
                          borderColor: watchedAvatarIndex === avatar.index ? selectedBorderColor : hoverBorderColor,
                          boxShadow: "md"
                        }}
                        _active={{
                          transform: "scale(0.95)"
                        }}
                        onClick={() => setValue("avatarIndex", avatar.index, { shouldValidate: true })}
                      >
                        <Image
                          src={avatar.path}
                          alt={`Avatar ${avatar.index}`}
                          width={60}
                          height={60}
                          style={{ objectFit: "contain" }}
                        />
                        {watchedAvatarIndex === avatar.index && (
                          <Box
                            position="absolute"
                            top={-1}
                            right={-1}
                            bg={selectedBorderColor}
                            color="white"
                            borderRadius="full"
                            p={1.5}
                            boxShadow="md"
                            transform="scale(1.2)"
                          >
                            <FiCheck size={14} />
                          </Box>
                        )}
                      </Box>
                    ))}
                  </SimpleGrid>
                  {errors.avatarIndex && (
                    <Text fontSize="sm" color="red.500" mt={2}>
                      {errors.avatarIndex.message}
                    </Text>
                  )}
                </Box>

                <Box>
                  <HStack gap={2} mb={3}>
                    <Text fontWeight="bold" fontSize="lg" color="gray.700" _dark={{ color: 'gray.200' }}>
                      ユーザー名
                    </Text>
                    <Badge 
                      colorScheme={watch("userName") ? "green" : "gray"} 
                      variant="subtle" 
                      fontSize="xs"
                    >
                      {watch("userName") ? `${watch("userName").length}/12` : "0/12"}
                    </Badge>
                  </HStack>
                  <Text fontSize="sm" color="gray.500" mb={3}>
                    ドラフト中に表示される名前です
                  </Text>
                  <Input
                    placeholder="名前を入力してください"
                    size="lg"
                    maxLength={12}
                    borderRadius="lg"
                    {...register("userName")}
                    borderColor={errors.userName ? "red.300" : borderColor}
                    _focus={{
                      borderColor: errors.userName ? "red.500" : focusBorderColor,
                      boxShadow: `0 0 0 1px ${errors.userName ? "red.500" : focusBorderColor}`,
                      transform: "scale(1.02)"
                    }}
                    _hover={{
                      borderColor: errors.userName ? "red.400" : hoverBorderColor
                    }}
                    transition="all 0.2s"
                  />
                  {errors.userName && (
                    <Text fontSize="sm" color="red.500" mt={2}>
                      {errors.userName.message}
                    </Text>
                  )}
                </Box>

                <Button
                  colorScheme="green"
                  size="lg"
                  onClick={handleSubmit(handleCreateUser)}
                  loading={isLoading}
                  disabled={!isValid || isLoading}
                  borderRadius="lg"
                  h={14}
                  fontSize="md"
                  fontWeight="bold"
                  transition="all 0.2s"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg"
                  }}
                  _disabled={{
                    opacity: 0.6,
                    cursor: "not-allowed",
                    transform: "none"
                  }}
                >
                  作成して参加
                </Button>
              </VStack>
            </VStack>
            )}
        </Box>

        {/* ヘルプテキスト - 改善版 */}
        <Box 
          bg={useColorModeValue("blue.50", "blue.900")}
          border="1px solid"
          borderColor={useColorModeValue("blue.200", "blue.700")}
          borderRadius="lg"
          p={4}
          textAlign="center"
        >
          <Text fontSize="sm" color={useColorModeValue("blue.700", "blue.300")} fontWeight="medium">
            💡 {step === "select"
              ? "既存のユーザーを選択するか、新しいユーザーを作成してグループに参加しましょう"
              : "お気に入りのアバターを選んで、ドラフトで使う名前を決めてください"}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}

