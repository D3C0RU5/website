import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Master from '../src/infra/Master'
import Header from '../src/components/Header'
import Skills from '../src/components/Skills'

interface Props {
  theme: string
}

const Home: React.FC<Props | any> = (props) => {
  return (
    <Master theme={props.theme}>
      <Header />
      <Skills />
    </Master>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = parseCookies(context)
  return {
    props: {
      theme: cookie.theme,
    },
  }
}
