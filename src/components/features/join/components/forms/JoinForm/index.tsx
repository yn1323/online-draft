'use client';

import { Box, HStack, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { IoEnter } from 'react-icons/io5';

import { FormButton } from '@/src/components/atoms/buttons/FormButton';
import { ThemeInput } from '@/src/components/atoms/inputs/ThemeInput';
import { ThemeText } from '@/src/components/atoms/typography/ThemeText';
import {
  type JoinMeetingForm,
  joinMeetingSchema,
} from '@/src/constants/schemas';

interface JoinFormProps {
  onSubmit: (data: JoinMeetingForm) => Promise<void>;
  isLoading?: boolean;
}

export default function JoinForm({
  onSubmit,
  isLoading = false,
}: JoinFormProps) {
  const form = useForm<JoinMeetingForm>({
    resolver: zodResolver(joinMeetingSchema),
    defaultValues: {
      meetingInput: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = form;

  const handleFormSubmit = async (data: JoinMeetingForm) => {
    await onSubmit(data);
    reset();
  };

  return (
    <Box
      p={{ base: 4, md: 6 }}
      bg="blue.50"
      borderRadius="xl"
      border="1px solid"
      borderColor="blue.200"
      _dark={{
        bg: 'blue.900/20',
        borderColor: 'blue.700',
      }}
    >
      <VStack gap={4}>
        <ThemeInput
          label="参加コード"
          placeholder="ABC123 または招待リンク"
          disabled={isLoading}
          size="lg"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          errorText={errors.meetingInput?.message}
          invalid={!!errors.meetingInput}
          {...register('meetingInput')}
        />

        <FormButton
          colorPalette="blue"
          size="lg"
          width="full"
          isLoading={isLoading}
          isValid={isValid}
          loadingText="参加中..."
          onClick={handleSubmit(handleFormSubmit)}
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="bold"
          aria-label="グループに参加する"
        >
          <HStack gap={2}>
            <IoEnter size={18} aria-hidden="true" />
            <ThemeText>参加する</ThemeText>
          </HStack>
        </FormButton>
      </VStack>
    </Box>
  );
}
