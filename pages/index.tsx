import dynamic from 'next/dynamic'

const HomeCard = dynamic(import('@/organisms/HomeCard'), {
  ssr: false,
})
const Header = dynamic(import('@/templates/Header'), {
  ssr: false,
})

const Home = () => {
  return (
    <>
      <Header location="home" />
      <div className="height-100 align-centerVH">
        <HomeCard />
      </div>
    </>
  )
}

export default Home
