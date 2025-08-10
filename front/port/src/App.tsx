// import reactLogo from './assets/ab529c_9c02d08edc58457a9977d4f891628176~mv2.avif'
import anti from './assets/images.jpeg'
import gene from './assets/ab529c_9c02d08edc58457a9977d4f891628176~mv2.avif'
import './App.css'
import Item from './components'

function App() {

  return (
    <>
    <main>
          <div className="App-header">
            <div className='logo'>
              <img src={anti} id="img" alt="Anti logo" />
              <p>Home</p>
              <p>Projetos</p>
              <p>Info</p>
            </div>

          </div >
          <div className='content'>
            <div>
              <h1>Bem vindo ao meu portfólio</h1>
              <p>Este é um projeto de portfólio pessoal, onde você pode ver alguns dos meus projetos e habilidades.</p>
              <p>Estou sempre aprendendo e melhorando minhas habilidades, então fique à vontade para entrar em contato se tiver alguma dúvida ou sugestão!</p>
              <p>Obrigado por ver essa coisa totalmente generica e chata!</p>
              <p>AMO MINHA NAMORADA</p>
            </div>
          </div>
          <div className='projects'>
            <h2>Projetos</h2>
            <div className='list'>
           <Item img={anti} name="O Anti-édipo" link='https://www.amazon.com.br/anti-%C3%89dipo-Gilles-Deleuze/dp/8573264462/ref=sr_1_1?adgrpid=129574399609&dib=eyJ2IjoiMSJ9.QONyffa3nLZTZeiNZUh9v_mjNlbgNrUhf20I_RWtfDvGXj6BBBWMt638YeIMiNqsnKdtbXNan_0lX0CVNT--oxMsl-5tjK9EL9z-XOxxgh10PAst2iDGdAycNsDuLBWzu7xnyoAPjDW6zxLsKwd0vhyvYzr9sg3sHlOqY3uEwxwYgIq0ODHlG89zEV9fBa1QbO4AI0l0ZJGyMr_1-MGDfp5EDt2I4pmi1ezSsQ92Bk99hokBbEU4jTZqnbQnRDJ-siByGQBHpYeSCKtvlkzaEAWcoXMEYso2PT1KjHuUY3Q.nKCyCpIiSJgOw8Dl0LQRAU2Xs9aS2Gf-8oafnjpdC9I&dib_tag=se&hvadid=595818455179&hvdev=c&hvlocphy=9222793&hvnetw=g&hvqmt=e&hvrand=9653064111328304199&hvtargid=kwd-567548176282&hydadcr=16102_13545524&keywords=o+antiedipo&mcid=63d22110ae753c58a3618c303c503eca&qid=1754868387&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9' />
           <Item img={gene} name="A Genealogia da Moral"  link='https://www.amazon.com.br/genealogia-moral-Friedrich-Nietzsche-ebook/dp/B0BTLHBDP2/ref=sr_1_5?adgrpid=106338306159&dib=eyJ2IjoiMSJ9.077SUnxxA34ekNgD-7Xlqi8PNoaiRz9f1Cusu82LGPnIrxnSSj1aZ6VyDztObO3p49_g0U5TkRBReXkIUX_gC0A8DOHjPcus3HeSCHnqkoId488I42bYcsDpgcwmMpycLaWiTTlVfuvCchdcGhwG_eEZ-yM51psVBfYrSqJZ_t4ziBSnoxglAyqfDU0WETifVRdutSFISE29vAL_11O60e95T2LZNwFYLIE60BmJJK-Bq9amscon0mpggYRTRCfvH4Geam8aCymA9488jYRSS58QvyL7mhyvNc2p46xhOIE.OnNG_1PQdbArvMMrKtNyVRzyAOCOYEqinddGN_wroGo&dib_tag=se&hvadid=595885638401&hvdev=c&hvlocphy=9222793&hvnetw=g&hvqmt=e&hvrand=17610123259857030902&hvtargid=kwd-331870774491&hydadcr=16110_13545570&keywords=genealogia+da+moral&mcid=4fd1a03eb1ab3f4bb9ed65c3fc58226c&qid=1754868440&sr=8-5'/>
              
            </div>
          </div>

          <div className='footer'>
            <p>Feito por Igo</p>
            <p>Você pode me encontrar no <a href="https://sacocheio.tv/">https://sacocheio.tv/</a> 
            </p>  
          </div>
    </main>
  
    </>
  )
}

export default App