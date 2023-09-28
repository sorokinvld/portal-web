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
              <TypingEffect className="title" style={{ color: 'violet' }}  text={["Портал"]} speed='300'> 
              </TypingEffect>
            </h1>
            <h3 className="desc">
            <TypingEffect  speed='30' text={["Облачная текстовая диалоговая операционная система и персональные автономные цифровые ассистенты на основе технологий искуственного интеллекта."]}>
            </TypingEffect>
          </h3>
        </div>
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} md={8}>
            <HomeCell
              icon={<PackageIcon />}
              url="/en-us/components"
              title={<span style={{ color: 'orange' }}>Диалоговая ОС</span>}
              desc="Операционная система с возможностью взаимодейтсвия на естественном языке с любого устройства, включая очки, часы и домашний сервер"
            />
          </Grid>
          <Grid xs={24} md={8}>
            <HomeCell
<<<<<<< HEAD
              icon={<GitHubIcon />}
              url="https://prtl.cc"
              title={<span style={{ color: 'red' }}>Умное облако</span>}
              desc="Персональные автономные онлайн ассистенты с искусственным интеллектом и возможностью дообучения"
              //desc={<span style={{ color: '' }}>Облачное хранилище, различающее объекты и смыл фото, видео, документов для создания базы знаний и обучения ассистентов</span>}
=======
              icon={<FeatherIcon />}
              url="/en-us/components/agent"
              title={<span style={{ color: 'pink' }}>Автономные агенты</span>}
              desc="Персональные автономные онлайн ассистенты с искусственным интеллектом и возможностью дообучения на данных пользователя"
>>>>>>> b15276e79baed01cec5ef8c2666a4910ce2f3f07
            />
          </Grid>
          <Grid xs={24} md={8}>
            <HomeCell
<<<<<<< HEAD
              icon={<FeatherIcon />}
              url="/en-us/components/agent"
              title={<span style={{ color: 'blue' }}>Автономные ассистенты</span>}
              desc="Облачное хранилище, понимающее документы, фото и видео для общения с базой знаний и обучения ассистентов"
              />
=======
              icon={<GitHubIcon />}
              url="https://prtl.cc"
              title={<span style={{ color: 'red' }}>Умное облако</span>}
              desc="Облачное хранилище, понимающее смысл документов, объектов на фото и видео, интегрированное с остальными сервисами экосистемы, например для создания агентов по обработке документов"
              //desc={<span style={{ color: '' }}>Облачное хранилище, различающее объекты и смыл фото, видео, документов для создания базы знаний и обучения ассистентов</span>}
            />
>>>>>>> b15276e79baed01cec5ef8c2666a4910ce2f3f07
          </Grid>
        </Grid.Container>
            <h1 className="title" >
              <TypingEffect className="title" style={{ color: 'violet' }}  text={["Портал Агент"]} speed='300'> 
              </TypingEffect>
            </h1>
            <h3 className="desc">
            <TypingEffect  speed='30' text={["Портал Ассистент - Ваш персональный помощник."]}>
          </TypingEffect>
          </h3>
        <Collapse.Group>
            <Collapse title="Портал" initialVisible>
              <Text>Спрашивайте у операционной системы, где нужный документ, ставьте задачи по выполенению необходимых процедур, описывайте на естественном языке задачу и получайте готовый протестированный код нового рабочего инстумента Агента или отдельное приложение.</Text>
            </Collapse>
<<<<<<< HEAD
            <Collapse title="Вектор" initialVisible>
              <Text>Находите документы легко: задавайте вопросы получаете интеллектуально обоснованные ответы. Система автоматически определит объекты на фото и видео, найдет нужные данные в документах и произведет необходимые транформации.</Text>
            </Collapse>
            <Collapse title="Ассистенты" initialVisible>
              <Text>Создавайте ИИ-агентов, понимающих документы и медиафайлы и способных работать в автономном режиме, имитируя любые действия человека за компьютером начиная от взаимодейтсвия с браузером и заканчивая написанием и исполнением программного кода.</Text>
=======
            <Collapse title="Агенты" initialVisible>
              <Text>  Портал Агент: Реактивный агент с системой памяти, подобной человеческой: это экспериментальный автономный ИИ-агент, цель которого - воспроизвести структуру человеческой памяти и создать AI агента, способного учиться и рассуждать, как человек, с надеждой лучше понять природу человеческого познания.
                      Структура памяти, имитирующая долгосрочную память человека: Процедурная память для хранения и извлечения процедур использования инструментов. Семантическая память для хранения и извлечения понятий и знаний. Эпизодическая память для хранения и извлечения конкретных событий или эпизодов. Способность учиться новым понятиям и запоминать результаты выполнения задач в процессе выполнения задач. Использование инструментов на основе процедурной памяти: Встроенные инструменты включают только стандартный инструмент Google для веб-серфинга. Настройка инструментов, позволяющих пользователям добавлять и модифицировать инструменты в соответствии с их конкретными потребностями и предпочтениями. 
                      </Text>
>>>>>>> b15276e79baed01cec5ef8c2666a4910ce2f3f07
            </Collapse>
          </Collapse.Group>
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
      `}</style>
    </>
  )
}

export default Application
