import React from 'react'
import { NextPage } from 'next'
import { useTheme, Grid, Collapse, Text, Link } from 'components'
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
              <TypingEffect className="title" style={{ color: 'violet' }}  text={["Портал"]} speed='300'> </TypingEffect>
            </h1>
            <h3 className="desc">
            <TypingEffect  speed='30' text={["Облачная диалоговая операционная система с графическими и текстовыми интерфейсами и интегрированными ИИ-ассистентами"]}> </TypingEffect>
          </h3>
        </div>
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} md={8}>
            <HomeCell
              icon={<PackageIcon />}
              url="/en-us/en-us/portal"
              title={<span style={{ color: 'white' }}>Диалоговая ОС</span>}
              desc="Облачная дислоговая операционная система с управлением на естественном языке   с любого устройства, включая очки, часы"
              />
          </Grid>
          <Grid xs={24} md={8}>
            <HomeCell
              icon={<GitHubIcon />}
              url="https://prtl.cc/en-us/we/"
              title={<span style={{ color: 'white' }}>Умное облако</span>}
              desc="Защищенное облачное хранилище, с интеллектульным семантическим поиском и распознаванием объектов и событий на фото и видео"
              //desc={<span style={{ color: '' }}>Облачное хранилище, различающее объекты и смыл фото, видео, документов для создания базы знаний и обучения ассистентов</span>}
              />
          </Grid>
          <Grid xs={24} md={8}>
            <HomeCell
              title={<span style={{ color: 'white' }}>Автономные ассистенты</span>}
              icon={<FeatherIcon />}
              url="/en-us/we/"
              desc="Персональные автономные цифровые онлайн и оффлайн ассистенты на основе мультимодельных ансамблей"
              />
          </Grid>
        </Grid.Container>
            <h1 className="title"> Портал Ассистенты </h1>
            <h3 className="desc"> Персональные автономные облачные помощники </h3>
        <Collapse.Group>
            <Collapse title="Портал" initialVisible>
              <Text>Спрашивайте у операционной системы, где находится нужный документ или файл мультимедиа, ставьте задачи по выполнению необходимых наборов процедур, начинайте взаимодейтсвие с системой на одном и заканчивайте на другом устройстве.</Text>
            </Collapse>
            <Collapse title="База знаний" initialVisible>
              <Text>Создавайте приложения программируя на естественном языке: задавайте вопросы и получайте интеллектуальные и обоснованные ответы и используйте быстрый неточный семантический поиск.</Text>
            </Collapse>
            <Collapse title="Автономные цифровые ассистенты" initialVisible>
              <Text>Создавайте ИИ-агентов, понимающих документы и медиафайлы и способных работать в автономном режиме, имитируя любые действия человека за компьютером начиная от взаимодейтсвия с браузером и заканчивая созданием новых приложений.</Text>
            </Collapse>
            <Collapse title="Персональный облачный ИИ-дневник" initialVisible>
              <Text>Принципиально новый инновационный инструмент для управления личными данными, саморефлексии и управления стрессом. Идея этого продукта основана на принципах когнитивно-поведенческой терапии, которая признана эффективной для переосмысления негативных мыслей и управления стрессовыми ситуациями.</Text>
            </Collapse>
          </Collapse.Group>
      </div>
        <div className="footer">
        <img src='images/logo.png' alt="Logo" className="logo" />
        <p className="contact">
          <Link href="mailto:portal@ic-ie.com?subject=Открыть Портал&body=Заявка на получение ограниченного доступа к экземпляру ОС Портал" color>
            Оформить подписку за 9999р.
          </Link>
        </p>
        <p className="contact">
          <Link href="https://t.me/prtlcc_bot" color>
            Телеграм-бот
          </Link>
        </p>
        </div>
      <style jsx>{`
        .layout {
          min-height: calc(100vh - var(--geist-page-nav-height));
          max-width: ${theme.layout.pageWidthWithMargin};
          margin: 0 auto;
          padding: 0 ${theme.layout.gap} calc(${theme.layout.gap} * );
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
          font-weight: 700;
          margin: 0;
        }
        .desc {
          color: ${theme.palette.accents_5};
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0 0 ${theme.layout.gap};
        }
        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: ${theme.layout.gap} 0;
        }

        .logo {
          width: 100px;
        }

        .contact {
          margin-top: ${theme.layout.gapHalf};
        }

      `}</style>
    </>
  )
}

export default Application
