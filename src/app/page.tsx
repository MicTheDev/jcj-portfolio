'use client'

import { useEffect, useRef } from 'react'
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, Chip, Paper } from '@mui/material'
import { PlayArrow, Movie, Book, MusicNote, Business, School, TravelExplore } from '@mui/icons-material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ExternalWorks from '@/components/ExternalWorks'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const worksRef = useRef<HTMLDivElement>(null)
  const scriptsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5,
          ease: "power3.out"
        }
      )
    }

    // Section animations
    const sections = [bioRef, worksRef, scriptsRef, contactRef]
    sections.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Navigation */}
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          bgcolor: 'rgba(10, 10, 10, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
              JOHNNIE
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {[
                { label: 'About', ref: bioRef },
                { label: 'Works', ref: worksRef },
                { label: 'Scripts', ref: scriptsRef },
                { label: 'Contact', ref: contactRef }
              ].map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.ref)}
                  sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h1" sx={{ mb: 3, color: 'text.primary' }}>
                Johnnie
              </Typography>
              <Typography variant="h2" sx={{ mb: 4, color: 'primary.main', fontWeight: 300 }}>
                Writer • Producer • Director
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.2rem' }}>
                Over 100 copyright works • IMDB Credits • TV & Film Productions
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection(bioRef)}
                sx={{ 
                  px: 4, 
                  py: 2, 
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                  }
                }}
              >
                Explore My Work
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '8rem',
                    color: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  ✍️
                </Box>
                <Typography variant="h3" sx={{ color: 'white', textAlign: 'center', zIndex: 1 }}>
                  Creative Vision
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bio Section */}
      <Box ref={bioRef} sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'text.primary' }}>
            About Johnnie
          </Typography>
          <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', fontSize: '1.1rem' }}>
                A native of Oklahoma City, Oklahoma, Johnnie has been writing since his days in elementary school. Over the years he has written several dozen plays, screenplays and short stories with over 100 copyright works, in addition to songs, poems and spoken-word.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', fontSize: '1.1rem' }}>
                He has several IMDB credits as a writer for TV and film. He was the founder of Soul-Conscious Productions, Inc. – the company that produced his earlier plays, including the 1998 original version of &ldquo;She&apos;s Not Our Sister&rdquo;, which premiered at the Majestic Theater in downtown Dallas, Texas.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', fontSize: '1.1rem' }}>
                In 2011 &ldquo;She&apos;s Not Our Sister&rdquo; was reintroduced to a new audience and presented at Friendship West Baptist Church, where it packed the house to over 4,200 patrons. Subsequently, Johnnie was approached about adapting the play for TV and within 5 months, &ldquo;She&apos;s Not Our Sister&rdquo; premiered on GMC Network (now Up Lift Network) with over 2 million viewers watching the presentation.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', bgcolor: 'background.default' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    Education & Background
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <School sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Bachelor&apos;s in Business Administration
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <School sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Law Degree from SMU
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Business sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Financial Services & Real Estate
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TravelExplore sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Travel & Cultural Enthusiast
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Works Section */}
      <Box ref={worksRef} sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'text.primary' }}>
            Notable Works
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <PlayArrow sx={{ fontSize: '4rem', color: 'white' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
                    She&apos;s Not Our Sister
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Premiered at Majestic Theater in Dallas (1998), later adapted for TV on GMC Network with over 2 million viewers.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip label="Play" size="small" color="primary" />
                    <Chip label="TV Adaptation" size="small" color="secondary" />
                    <Chip label="4,200+ Patrons" size="small" variant="outlined" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    background: 'linear-gradient(45deg, #dc004e, #ff4081)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Movie sx={{ fontSize: '4rem', color: 'white' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
                    The Love You Save
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Film adaptation starring Robin Givens, Christopher Williams, and gospel artist Kierra &ldquo;Kiki&rdquo; Sheard.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip label="Film" size="small" color="primary" />
                    <Chip label="DVD Release" size="small" color="secondary" />
                    <Chip label="Star Cast" size="small" variant="outlined" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ bgcolor: 'background.paper' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
                    Production Company
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Founded Soul-Conscious Productions, Inc. to produce his creative works and support other aspiring artists in the Dallas area.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip icon={<PlayArrow />} label="Play Production" color="primary" />
                    <Chip icon={<Movie />} label="Film Production" color="primary" />
                    <Chip icon={<Book />} label="Script Development" color="primary" />
                    <Chip icon={<MusicNote />} label="Creative Consulting" color="primary" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
          {/* External Works Component */}
          <ExternalWorks />
        </Container>
      </Box>

      {/* Scripts Section */}
      <Box ref={scriptsRef} sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'text.primary' }}>
            Script Portfolio
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
            A diverse collection of scripts spanning multiple genres from romantic comedies and dramas to sci-fi thrillers.
          </Typography>
          <Grid container spacing={2}>
            {[
              'LEAVE OF ABSENCE', 'THE OTHER SIDE OF ME', 'MEMOIRS OF A SIDE PIECE',
              'IN LOVE WITH A KILLER', 'LOVE IN A BOTTLE', 'A JONES FAMILY AFFAIR',
              'BLOOD ON THE ALTAR', 'A PRINCESS IN THE GHETTO', 'SUGA WOMAN - PART UN',
              'SUGA WOMAN - PART DEUX', 'SUGA WOMAN - PART TROIS', 'BRUTHA\'S KEEPER',
              'IN BETWEEN TIME', 'MATCH MY LOVE', 'FRIENDS FOR LIFE (BLOOD BONDS)'
            ].map((script, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    bgcolor: 'background.default',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                      borderColor: 'primary.main',
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
                    {script}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Script #{index + 1}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box ref={contactRef} sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'text.primary' }}>
            Get In Touch
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Card sx={{ bgcolor: 'background.paper', p: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'text.primary', textAlign: 'center' }}>
                  Johnnie&apos;s Motto
                </Typography>
                                  <Typography variant="h6" sx={{ mb: 4, color: 'primary.main', textAlign: 'center', fontStyle: 'italic' }}>
                    &ldquo;By satisfying the spirit of others, one&apos;s own spirit will be satisfied.&rdquo;
                  </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 4 }}>
                  Currently focused on writing, developing, and producing creative works. Available for collaborations, consulting, and creative partnerships.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Button variant="contained" size="large" startIcon={<PlayArrow />}>
                    View Productions
                  </Button>
                  <Button variant="outlined" size="large" startIcon={<Book />}>
                    Read Scripts
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: 'background.paper', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            © 2024 Johnnie. All rights reserved. | Writer • Producer • Director
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
