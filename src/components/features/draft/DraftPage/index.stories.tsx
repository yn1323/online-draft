import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DraftPage } from ".";

const meta = {
	title: "Features/Draft/DraftPage",
	component: DraftPage,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		onSubmitSelection: fn(),
	},
} satisfies Meta<typeof DraftPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockParticipants = [
	{
		id: "1",
		name: "たけし",
		avatar: "1",
		status: "thinking" as const,
	},
	{
		id: "2",
		name: "みさき",
		avatar: "2",
		status: "entered" as const,
	},
	{
		id: "3",
		name: "ひろし",
		avatar: "3",
		status: "completed" as const,
	},
	{
		id: "4",
		name: "あやか",
		avatar: "4",
		status: "thinking" as const,
	},
];

const mockPastRounds = [
	{
		roundNumber: 1,
		topic: "好きな食べ物",
		selections: [
			{ userId: "1", userName: "たけし", item: "ラーメン", comment: "深夜に食べたくなる定番" },
			{ userId: "2", userName: "みさき", item: "寿司", comment: "新鮮なネタ" },
			{ userId: "3", userName: "ひろし", item: "カレー" },
			{ userId: "4", userName: "あやか", item: "ピザ", comment: "シェア" },
		],
	},
];

export const RoundInProgress: Story = {
	args: {
		roundNumber: 2,
		totalRounds: 5,
		groupName: "アニメ好き会議",
		participants: mockParticipants,
		currentUserSelection: "",
		pastRounds: mockPastRounds,
		currentRoundTopic: "好きなアニメ",
		logCount: 3,
	},
};

export const WithUserInput: Story = {
	args: {
		...RoundInProgress.args,
		currentUserSelection: "鬼滅の刃",
	},
};

export const FirstRound: Story = {
	args: {
		roundNumber: 1,
		totalRounds: 5,
		groupName: "食べ物好き会議",
		participants: mockParticipants.map((p) => ({ ...p, status: "thinking" as const })),
		currentUserSelection: "",
		pastRounds: [],
		currentRoundTopic: "好きな食べ物",
		logCount: 0,
	},
};

export const FinalRound: Story = {
	args: {
		roundNumber: 5,
		totalRounds: 5,
		groupName: "旅行好き会議",
		participants: mockParticipants,
		currentUserSelection: "",
		pastRounds: [
			...mockPastRounds,
			{
				roundNumber: 2,
				topic: "好きなアニメ",
				selections: [
					{ userId: "1", userName: "たけし", item: "鬼滅の刃", comment: "映画も面白かった" },
					{ userId: "2", userName: "みさき", item: "ワンピース", comment: "長いけど飽きない" },
					{ userId: "3", userName: "ひろし", item: "進撃の巨人" },
					{ userId: "4", userName: "あやか", item: "鬼滅の刃", comment: "被った！" },
				],
			},
			{
				roundNumber: 3,
				topic: "好きなスポーツ",
				selections: [
					{ userId: "1", userName: "たけし", item: "サッカー" },
					{ userId: "2", userName: "みさき", item: "野球", comment: "応援が楽しい" },
					{ userId: "3", userName: "ひろし", item: "バスケ" },
					{ userId: "4", userName: "あやか", item: "テニス", comment: "運動不足解消" },
				],
			},
			{
				roundNumber: 4,
				topic: "好きな映画",
				selections: [
					{ userId: "1", userName: "たけし", item: "君の名は", comment: "感動した" },
					{ userId: "2", userName: "みさき", item: "アベンジャーズ" },
					{ userId: "3", userName: "ひろし", item: "となりのトトロ", comment: "子供の頃から好き" },
					{ userId: "4", userName: "あやか", item: "君の名は", comment: "また被った" },
				],
			},
		],
		currentRoundTopic: "行きたい旅行先",
		logCount: 12,
	},
};

export const ManyParticipants: Story = {
	args: {
		roundNumber: 3,
		totalRounds: 5,
		groupName: "季節好き会議",
		participants: [
			...mockParticipants,
			{
				id: "5",
				name: "ゆうき",
				avatar: "5",
				status: "entered" as const,
			},
			{
				id: "6",
				name: "えみ",
				avatar: "6",
				status: "thinking" as const,
			},
			{
				id: "7",
				name: "だいき",
				avatar: "7",
				status: "completed" as const,
			},
			{
				id: "8",
				name: "なな",
				avatar: "8",
				status: "thinking" as const,
			},
		],
		currentUserSelection: "",
		pastRounds: mockPastRounds,
		currentRoundTopic: "好きな季節",
		logCount: 7,
	},
};