import { Text } from '@chakra-ui/react'
import BasicTemplate from '@/templates/BasicTemplate'

const NoPage = () => {
  return (
    <BasicTemplate location="home">
      <Text>
        ページが見つかりません。
        <br />
        URLが正しいか再度確認ください。
      </Text>
    </BasicTemplate>
  )
}

export default NoPage
