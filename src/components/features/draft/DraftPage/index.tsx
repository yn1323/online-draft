"use client";

import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	GridItem,
	Image,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import { DialogRoot, DialogContent, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogCloseTrigger } from "@chakra-ui/react";
import { useState } from "react";

interface DraftPageProps {
	roundNumber: number;
	totalRounds: number;
	groupName: string;
	participants: {
		id: string;
		name: string;
		avatar: string;
		status: "thinking" | "entered" | "completed";
	}[];
	currentUserSelection?: string;
	onSubmitSelection: (selection: string, comment?: string) => void;
	pastRounds?: {
		roundNumber: number;
		topic: string;
		selections: { userId: string; userName: string; item: string; comment?: string }[];
	}[];
	currentRoundTopic?: string;
	logCount?: number;
}

const statusEmoji = {
	thinking: "⏳",
	entered: "⏳", 
	completed: "✅",
};

export const DraftPage = ({
	roundNumber,
	totalRounds,
	groupName,
	participants,
	currentUserSelection = "",
	onSubmitSelection,
	pastRounds = [],
	currentRoundTopic = "今回のお題",
}: DraftPageProps) => {
	const [selection, setSelection] = useState(currentUserSelection);
	const [comment, setComment] = useState("");
	const [isInputModalOpen, setIsInputModalOpen] = useState(false);

	const handleSubmit = () => {
		if (selection.trim()) {
			onSubmitSelection(selection.trim(), comment.trim() || undefined);
			setIsInputModalOpen(false);
		}
	};

	const currentRoundSelections = participants.map(p => ({
		userId: p.id,
		userName: p.name,
		avatar: p.avatar,
		status: p.status,
		item: p.status === "completed" ? "選択済み" : p.status === "entered" ? "入力済み" : "考え中",
	}));

	return (
		<Container maxW="container.xl" p={4}>
			{/* Header */}
			<Flex justify="space-between" align="center" mb={6}>
				<Text fontSize="lg" fontWeight="bold">
					Round {roundNumber}/{totalRounds}
				</Text>
				<Text fontSize="md" color="gray.600">
					{groupName}
				</Text>
			</Flex>

			{/* Main Layout - Strategy First Design */}
			<Grid
				templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
				gap={8}
				minH="70vh"
			>
				{/* Left: Strategy Analysis Area (70%) */}
				<GridItem>
					<VStack gap={6} align="stretch">
						{/* Past Rounds - Main Strategy Information */}
						<Box p={6} borderRadius="xl" bg="purple.50" border="2px solid" borderColor="purple.200">
							<Text fontSize="xl" fontWeight="bold" mb={6} color="purple.700">
								🎯 戦略分析エリア - 過去のラウンド ({pastRounds.length})
							</Text>
							{pastRounds.length === 0 ? (
								<Box p={8} textAlign="center" bg="white" borderRadius="lg" border="1px dashed" borderColor="purple.200">
									<Text fontSize="md" color="purple.500" fontWeight="medium">
										📊 過去のラウンドはまだありません
									</Text>
									<Text fontSize="sm" color="purple.400" mt={2}>
										ラウンドが進むと、ここに戦略分析情報が表示されます
									</Text>
								</Box>
							) : (
								<VStack gap={4} align="stretch">
									{/* Table Header */}
									<Grid 
										templateColumns={`60px repeat(${participants.length}, 1fr)`} 
										gap={3} 
										p={3} 
										bg="purple.100" 
										borderRadius="lg"
										fontWeight="bold"
										fontSize="sm"
										color="purple.800"
									>
										<Text textAlign="center">R</Text>
										{participants.map((participant) => (
											<VStack key={participant.id} gap={1}>
												<Image
													src={`/img/${participant.avatar}.png`}
													alt={participant.name}
													width="28px"
													height="28px"
													borderRadius="full"
													objectFit="cover"
												/>
												<Text fontSize="xs" fontWeight="bold">{participant.name}</Text>
											</VStack>
										))}
									</Grid>

									{/* Table Body */}
									{pastRounds.map((round) => (
										<Grid
											key={round.roundNumber}
											templateColumns={`60px repeat(${participants.length}, 1fr)`}
											gap={3}
											p={3}
											bg="white"
											border="1px solid"
											borderColor="purple.100"
											borderRadius="lg"
											_hover={{ bg: "purple.25" }}
											alignItems="center"
										>
											<Text textAlign="center" fontWeight="bold" color="purple.800" fontSize="lg">
												{round.roundNumber}
											</Text>
											{participants.map((participant) => {
												const selection = round.selections.find(s => s.userId === participant.id);
												return (
													<Box key={participant.id} textAlign="center" px={2}>
														{selection ? (
															<VStack gap={1}>
																<Text fontSize="sm" fontWeight="bold" color="gray.800" lineHeight="1.2">
																	{selection.item}
																</Text>
																{selection.comment && (
																	<Text fontSize="xs" color="gray.600" fontStyle="italic" lineHeight="1.2">
																		💭 {selection.comment}
																	</Text>
																)}
															</VStack>
														) : (
															<Text fontSize="sm" color="gray.400" fontWeight="medium">
																未参加
															</Text>
														)}
													</Box>
												);
											})}
										</Grid>
									))}
								</VStack>
							)}
						</Box>
					</VStack>
				</GridItem>

				{/* Right: Current Round & Actions (30%) */}
				<GridItem>
					<Box position="sticky" top={4}>
						<VStack gap={4} align="stretch">
							{/* Current Round - Minimized */}
							<Box p={4} borderRadius="lg" bg="blue.50" border="1px solid" borderColor="blue.200">
								<Text fontSize="md" fontWeight="bold" mb={3} color="blue.700">
									📝 Round {roundNumber}: {currentRoundTopic}
								</Text>
								<Text fontSize="sm" color="blue.600" mb={3}>
									{participants.filter(p => p.status === "completed").length}/{participants.length} 完了
								</Text>
								<VStack gap={3} align="stretch">
									{currentRoundSelections.map((participant) => (
										<Flex
											key={participant.userId}
											align="center"
											gap={3}
											p={2}
											borderRadius="sm"
											bg="white"
											border="1px solid"
											borderColor="blue.100"
										>
											<Image
												src={`/img/${participant.avatar}.png`}
												alt={participant.userName}
												width="20px"
												height="20px"
												borderRadius="full"
												objectFit="cover"
											/>
											<Text fontSize="xs" flex={1} truncate>
												{participant.userName}
											</Text>
											<Text fontSize="xs">
												{statusEmoji[participant.status]}
											</Text>
										</Flex>
									))}
								</VStack>
							</Box>

							{/* Main Action Button */}
							<Button
								size="xl"
								colorScheme="orange"
								h="80px"
								onClick={() => setIsInputModalOpen(true)}
								fontSize="xl"
								fontWeight="bold"
								borderRadius="xl"
								boxShadow="lg"
								_hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
								_active={{ transform: "translateY(0)" }}
							>
								🎯 戦略的選択！
							</Button>

							{/* Current User Selection Preview */}
							{currentUserSelection && (
								<Box p={4} borderRadius="lg" bg="green.50" border="2px solid" borderColor="green.300">
									<Text fontSize="sm" fontWeight="bold" color="green.700" mb={2}>
										✅ あなたの戦略選択
									</Text>
									<Text fontSize="lg" fontWeight="bold" color="green.800">
										{currentUserSelection}
									</Text>
									<Button
										size="sm"
										variant="outline"
										colorScheme="green"
										onClick={() => setIsInputModalOpen(true)}
										mt={3}
										w="full"
									>
										戦略を変更
									</Button>
								</Box>
							)}
						</VStack>
					</Box>
				</GridItem>
			</Grid>

			{/* Input Modal */}
			<DialogRoot open={isInputModalOpen} onOpenChange={(details) => setIsInputModalOpen(details.open)}>
				<DialogContent maxW="md">
					<DialogHeader>
						<DialogTitle>Round {roundNumber}: {currentRoundTopic}</DialogTitle>
					</DialogHeader>
					<DialogBody>
						<VStack gap={4} align="stretch">
							<Box>
								<Text fontSize="sm" fontWeight="medium" mb={2}>
									あなたの選択
								</Text>
								<Input
									size="lg"
									value={selection}
									onChange={(e) => setSelection(e.target.value)}
									placeholder="例: 鬼滅の刃"
									borderWidth={2}
									_focus={{
										borderColor: "blue.500",
										boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)",
									}}
								/>
							</Box>
							<Box>
								<Text fontSize="sm" fontWeight="medium" mb={2}>
									コメント（任意）
								</Text>
								<Input
									value={comment}
									onChange={(e) => setComment(e.target.value)}
									placeholder="例: 最近人気だから"
									maxLength={50}
								/>
							</Box>
						</VStack>
					</DialogBody>
					<DialogFooter>
						<DialogCloseTrigger asChild>
							<Button variant="ghost">キャンセル</Button>
						</DialogCloseTrigger>
						<Button
							colorScheme="blue"
							onClick={handleSubmit}
							disabled={!selection.trim()}
						>
							決定
						</Button>
					</DialogFooter>
				</DialogContent>
			</DialogRoot>
		</Container>
	);
};