import React from 'react'
import { NextPage } from 'next'
import { useTheme, Grid, Collapse, Text } from 'components'
import PackageIcon from '@geist-ui/icons/package'
import FeatherIcon from '@geist-ui/icons/feather'
import GitHubIcon from '@geist-ui/icons/github'
import { HomeCell } from 'lib/components'
import TypingEffect from 'react-typing-effect'





const Application: NextPage<{}> = () => {
  const theme = useTheme()

  return (
    <>
      <div className="layout">
        <div className="hero">
            <h1 className="title" >
              <TypingEffect className="title" style={{ color: 'purple' }}  text={["Портал"]} speed='300'> 
              </TypingEffect>
            </h1>
            <h3 className="desc">
            <TypingEffect  speed='30' text={["Облачная текстовая диалоговая операционная система и персональные автономные цифровые ассистенты на основе технологий искуственного интеллекта."]}>
            </TypingEffect>
          </h3>
        </div>
        <Grid.Container gap={3} justify="center">
          <Grid xs={24} md={8}>
            <HomeCell
              icon={<PackageIcon />}
              url="/en-us/components"
              title={<span style={{ color: 'orange' }}>Customizable</span>}
              desc="Взаимодействуйте с системой на естественном языке с любого устройства, включая очки, часы и домашний сервер"
            />
          </Grid>
          <Grid xs={24} md={8}>
            <HomeCell
              icon={<FeatherIcon />}
              url="/en-us/guide/themes"
              title={<span style={{ color: 'violet' }}>Customizable</span>}
              desc="Персональные автономные онлайн ассистенты с искусственным интеллектом и возможностью дообучения"
            />
          </Grid>
          <Grid xs={24} md={8}>
            <HomeCell
              icon={<GitHubIcon />}
              url="https://prtl.cc"
              title={<span style={{ color: 'red' }}>Customizable</span>}
              desc="Облачное хранилище, различающее объекты и смыл фото, видео, документов для создания базы знаний и обучения ассистентов"
              //desc={<span style={{ color: '' }}>Облачное хранилище, различающее объекты и смыл фото, видео, документов для создания базы знаний и обучения ассистентов</span>}
            />
          </Grid>
        </Grid.Container>
        <Collapse.Group>
            <Collapse title="Персональная корпоративная база знаний" initialVisible>
              <Text>Находите документы легко задавайте вопросы получаете интеллектуально обоснованные ответы. Система автоматически определит объекты на фото</Text>
            </Collapse>
            <Collapse title="Question B">
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Collapse>
          </Collapse.Group>
      </div>
      <style jsx>{`
        .layout {
          min-height: calc(100vh - var(--geist-page-nav-height));
          max-width: ${theme.layout.pageWidthWithMargin};
          margin: 0 auto;
          padding: 0 ${theme.layout.gap} calc(${theme.layout.gap} * 2);
          box-sizing: border-box;
        }
        .hero {
          height: calc(100vh - var(--geist-page-nav-height) - 300px);
          min-height: 30vh;
          max-width: 500px;
          margin: 0 auto;
          text-align: center;
          align-items: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .title {
          font-size: 3.75rem;
          font-weight: 800;
          margin: 0;
        }
        .desc {
          color: ${theme.palette.accents_5};
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0 0 ${theme.layout.gap};
        }
      `}</style>
    </>
  )
}

export default Application
