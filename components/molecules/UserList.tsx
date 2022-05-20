import { HStack, Text, VStack } from '@chakra-ui/react'
import { Users } from 'Store'
import Image from 'next/image'

interface Props {
  title?: string
  users: Users[]
  callback: (id: string) => void
}

const UserList = ({ title = '', users, callback }: Props) => {
  return (
    <VStack justifyContent={'flex-start'} alignItems="flex-start" w="100%">
      <Text mb="3">{title}</Text>
      {users.map(({ avatar, userName, userId }, i) => (
        <HStack
          key={i}
          onClick={() => callback(userId)}
          w="100%"
          h={50}
          as="button"
          _hover={{ backgroundColor: '#f5f5f5' }}
          px={4}
        >
          <Image
            src={avatar}
            width={36}
            height={36}
            alt="avatar"
            objectFit="contain"
          />
          <Text>{userName}</Text>
        </HStack>
      ))}
    </VStack>
  )
}

export default UserList
