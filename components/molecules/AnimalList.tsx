import { Grid, GridItem } from '@chakra-ui/react'
import { State } from 'Store'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { assetImages } from '@/constants/common'
interface Props {
  callback: (index: string) => void
  selected: string
}
const AnimalList = ({ callback, selected }: Props) => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  const otherUsersAvatars = users.reduce((acc: string[], cur: any) => {
    const avatar = cur.avatarIndex
    return [...acc, avatar]
  }, [])
  // 自動応答用メッセージアイコンを除く
  const excludeAvatarIndexes = [...otherUsersAvatars, '99']
  const images = assetImages.filter(
    ({ index }) => !excludeAvatarIndexes.includes(index)
  )

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={3} mt={3}>
      {images
        .filter(({ index }) => index !== '99')
        .map(({ index, path }, key) => (
          <GridItem
            key={key}
            className={`cursor-pointer align-centerVH ${
              selected === index ? 'is-selected' : ''
            }`}
            onClick={() => callback(index)}
          >
            <Image
              src={path}
              alt="Picture of the author"
              width={52}
              height={52}
              objectFit="contain"
            />
          </GridItem>
        ))}
    </Grid>
  )
}

export default AnimalList
