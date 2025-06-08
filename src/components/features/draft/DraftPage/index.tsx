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

			{/* Main Layout */}
			<Grid
				templateColumns={{ base: "1fr", md: "1fr 320px" }}
				gap={6}
				minH="60vh"
			>
				{/* Left: Strategy Information */}
				<GridItem>
					<VStack gap={6} align="stretch">
						{/* Current Round Status */}
						<Box p={4} borderRadius="lg" bg="blue.50" border="1px solid" borderColor="blue.200">
							<Text fontSize="lg" fontWeight="bold" mb={3} color="blue.700">
								📝 Round {roundNumber}: {currentRoundTopic}
							</Text>
							<Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={3}>
								{currentRoundSelections.map((participant) => (
									<Flex
										key={participant.userId}
										align="center"
										gap={2}
										p={2}
										borderRadius="md"
										bg="white"
										border="1px solid"
										borderColor="gray.200"
									>
										<Image
											src={`/img/${participant.avatar}.png`}
											alt={participant.userName}
											width="30px"
											height="30px"
											borderRadius="full"
											objectFit="cover"
										/>
										<VStack gap={0} align="start" flex={1}>
											<Text fontSize="sm" fontWeight="medium" truncate>
												{participant.userName}
											</Text>
											<Text fontSize="xs" color="gray.600" truncate>
												{participant.item}
											</Text>
										</VStack>
										<Text fontSize="sm">
											{statusEmoji[participant.status]}
										</Text>
									</Flex>
								))}
							</Grid>
						</Box>

						{/* Past Rounds - Always Visible */}
						<Box p={4} borderRadius="lg" bg="gray.50" border="1px solid" borderColor="gray.200">
							<Text fontSize="lg" fontWeight="bold" mb={4} color="gray.700">
								📊 過去のラウンド ({pastRounds.length})
							</Text>
							<VStack gap={4} align="stretch">
								{pastRounds.map((round) => (
									<Box
										key={round.roundNumber}
										p={3}
										borderRadius="md"
										bg="white"
										border="1px solid"
										borderColor="gray.200"
									>
										<Text fontSize="sm" fontWeight="bold" mb={2} color="gray.800">
											Round {round.roundNumber}: {round.topic}
										</Text>
										<Grid templateColumns="repeat(auto-fit, minmax(180px, 1fr))" gap={2}>
											{round.selections.map((selection, index) => (
												<Box key={index} p={2} borderRadius="sm" bg="gray.50">
													<Text fontSize="xs" fontWeight="medium" color="gray.700">
														{selection.userName}: {selection.item}
													</Text>
													{selection.comment && (
														<Text fontSize="xs" color="gray.500" mt={1}>
															💭 {selection.comment}
														</Text>
													)}
												</Box>
											))}
										</Grid>
									</Box>
								))}
								{pastRounds.length === 0 && (
									<Text fontSize="sm" color="gray.500" textAlign="center" py={4}>
										過去のラウンドはありません
									</Text>
								)}
							</VStack>
						</Box>
					</VStack>
				</GridItem>

				{/* Right: Input Button */}
				<GridItem>
					<Box position="sticky" top={4}>
						<VStack gap={4} align="stretch">
							{/* Input Button */}
							<Button
								size="lg"
								colorScheme="blue"
								h="60px"
								onClick={() => setIsInputModalOpen(true)}
								fontSize="lg"
							>
								✏️ 選択を入力
							</Button>

							{/* Current User Selection Preview */}
							{currentUserSelection && (
								<Box p={3} borderRadius="md" bg="green.50" border="1px solid" borderColor="green.200">
									<Text fontSize="sm" fontWeight="medium" color="green.700" mb={1}>
										✅ あなたの選択
									</Text>
									<Text fontSize="md" fontWeight="bold">
										{currentUserSelection}
									</Text>
									<Button
										size="sm"
										variant="ghost"
										colorScheme="green"
										onClick={() => setIsInputModalOpen(true)}
										mt={2}
									>
										修正する
									</Button>
								</Box>
							)}

							{/* Participants Quick View */}
							<Box p={3} borderRadius="md" bg="gray.50" border="1px solid" borderColor="gray.200">
								<Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
									👥 参加者状況
								</Text>
								<VStack gap={2} align="stretch">
									{participants.map((participant) => (
										<Flex
											key={participant.id}
											align="center"
											gap={2}
											p={2}
											borderRadius="sm"
											bg="white"
										>
											<Image
												src={`/img/${participant.avatar}.png`}
												alt={participant.name}
												width="24px"
												height="24px"
												borderRadius="full"
												objectFit="cover"
											/>
											<Text fontSize="xs" flex={1}>
												{participant.name}
											</Text>
											<Text fontSize="sm">
												{statusEmoji[participant.status]}
											</Text>
										</Flex>
									))}
								</VStack>
							</Box>
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