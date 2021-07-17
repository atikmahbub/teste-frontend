import React from 'react'
import NavigationBar from '../components/Navbar'
import {
  Grid,
  Box,
  TextareaAutosize,
  Button,
  Typography,
} from '@material-ui/core'
import AddTitle from '../components/AddTitle'
import TextInput from '../components/CustomTextFiled'
import CustomizedButtons from '../components/CustomButton'
import CARD1 from '../asstes/card1.png'
import CARD2 from '../asstes/card2.png'
import CARD3 from '../asstes/card3.png'
import CARD4 from '../asstes/card4.png'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import SERVICE_ICON from '../asstes/service.png'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import CustomizedProgressBars from '../components/CustomProgress'
import BG1 from '../asstes/back1.png'
import PP from '../asstes/person.png'
import HERO from '../asstes/hero.png'

const Home = () => {
  const fullref = React.useRef()
  const [navigate, setNavigate] = React.useState(false)

  React.useEffect(() => {
    document.addEventListener('scroll', function (e) {
      let offsetTop = fullref.current.getBoundingClientRect().top
      if (offsetTop < -2000) {
        setNavigate(true)
      } else {
        setNavigate(false)
      }
    })
  }, [])
  return (
    <div ref={fullref}>
      <NavigationBar />
      <Grid container spacing={0} justify="center" className="home-container">
        <Grid
          container
          item
          md={10}
          xs={12}
          className="hero-container"
          spacing={4}
          alignItems="center"
          id="home"
        >
          <Box className="hero-div">
            <Box className="left">
              <Typography className="text1">Inovação, Design e </Typography>
              <Typography className="text2">Experiência</Typography>
              <Typography className="text3">
                Sempre a frente em soluções digitais
              </Typography>
              <CustomizedButtons name="Saiba mais" radius />
            </Box>
            <Box className="right">
              <img src={HERO} />
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          item
          md={10}
          className="about-container"
          spacing={4}
          alignItems="center"
          id="about"
        >
          <Grid item md={12} xs={12}>
            <AddTitle title="Sobre nós" />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="about-image">
              <img src={PP} />
              <img src={BG1} className="bg-image" />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="about-right">
              <Typography className="title">
                Qual o seu próximo projeto?
              </Typography>
              <Typography className="details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet volutpat consequat mauris nunc congue nisi. Lorem ipsum
                dolor sit amet. Ut diam quam nulla porttitor massa id neque.
              </Typography>
              <CustomizedButtons name="Download CV" />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          md={10}
          className="service-container"
          spacing={3}
          alignItems="center"
          id="service"
        >
          <Grid item md={12} xs={12}>
            <AddTitle
              title="serviços"
              subTitle="Proporcionamos uma melhor experiência"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="service-left">
              <Box className="progress-card">
                <Box className="percentage">85%</Box>
                <CustomizedProgressBars />
                <Box className="ui">Design UI</Box>
                <Box className="photo">Photoshop, Illustrator</Box>
              </Box>
              <img src={BG1} className="bg-image" />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              className="service-right"
              display="flex"
              justifyContent="center"
            >
              <span className="logo-container">
                <img src={SERVICE_ICON} alt="service-logo" />
              </span>
              <Box className="design">Design</Box>

              <Box className="bar">
                <span></span>
                <span></span>
                <span></span>
              </Box>
              <Box className="details">
                Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit
                amet. sed diam eirmod tempor dolore.
              </Box>
              <Box className="button-text">
                <Box>Saiba mais</Box>
                <ArrowRightAltIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          md={10}
          xs={12}
          className="portfolio-container"
          spacing={3}
          id="portfolio"
        >
          <Grid item md={12} xs={12}>
            <AddTitle title="PORTFOLIO" subTitle="Meus trabalhos" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className="card">
              <img src={CARD1} alt="card-image" />
              <div className="image-overlay">
                <Typography className="text">Phone Mockup</Typography>
                <AddCircleOutlineIcon className="icon" />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className="card">
              <img src={CARD2} alt="card-image" />

              <div className="image-overlay">
                <Typography className="text">Phone Mockup</Typography>
                <AddCircleOutlineIcon className="icon" />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className="card">
              <img src={CARD3} alt="card-image" />

              <div className="image-overlay">
                <Typography className="text">Phone Mockup</Typography>
                <AddCircleOutlineIcon className="icon" />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className="card">
              <img src={CARD4} alt="card-image" />

              <div className="image-overlay">
                <Typography className="text">Phone Mockup</Typography>
                <AddCircleOutlineIcon className="icon" />
              </div>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          md={8}
          xs={12}
          spacing={4}
          className="contact-container"
          id="contact"
        >
          <Grid item md={12} xs={12}>
            <AddTitle title="Contato" subTitle="Envie sua mensagem" />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextInput placeholder="Name" />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextInput placeholder="Telefone" />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextInput placeholder="Email" />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextareaAutosize
              minRows={7}
              placeholder="Mensagem"
              className="custom-textarea"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CustomizedButtons name="Enviar" />
            </Box>
          </Grid>
        </Grid>
        <img src={BG1} className="bg-image" />
      </Grid>
    </div>
  )
}

export default Home
