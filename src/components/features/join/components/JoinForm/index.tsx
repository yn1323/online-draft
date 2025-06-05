'use client';

import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { IoEnter } from 'react-icons/io5';

import { Field } from '@/src/components/ui/field';
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
        <Field
          label="参加コード"
          invalid={!!errors.meetingInput}
          errorText={errors.meetingInput?.message}
        >
          <Input
            {...register('meetingInput')}
            placeholder="ABC123 または招待リンク"
            disabled={isLoading}
            size="lg"
            bg="white"
            borderColor={errors.meetingInput ? 'red.300' : 'blue.300'}
            _dark={{
              bg: 'gray.800',
              borderColor: errors.meetingInput ? 'red.400' : 'blue.500',
            }}
            _focus={{ borderColor: 'blue.500' }}
            aria-label="参加コードまたは招待リンク"
          />
        </Field>

        <Button
          colorPalette="blue"
          size="lg"
          width="full"
          disabled={!isValid || isLoading}
          loading={isLoading}
          onClick={handleSubmit(handleFormSubmit)}
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="bold"
          _hover={{
            bg: 'blue.600',
          }}
          aria-label="グループに参加する"
        >
          <HStack gap={2}>
            <IoEnter size={18} aria-hidden="true" />
            <Text>参加する</Text>
          </HStack>
        </Button>
      </VStack>
    </Box>
  );
}
