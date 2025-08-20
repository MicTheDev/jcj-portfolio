'use client'

import { useState, useEffect } from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Chip, Grid, Skeleton, Link, Button } from '@mui/material'
import { OpenInNew, Movie, Tv, VideoLibrary } from '@mui/icons-material'

interface ExternalWork {
  title: string
  url: string
  type: 'movie' | 'tv' | 'other'
  description?: string
  image?: string
  year?: string
}

const externalWorks: ExternalWork[] = [
  {
    title: "She's Not Our Sister (TV)",
    url: "https://www.imdb.com/title/tt2123667/",
    type: "tv",
    description: "TV adaptation of the original play, premiered on GMC Network (now Up Lift Network) with over 2 million viewers.",
    year: "2011"
  },
  {
    title: "The Love You Save",
    url: "https://www.imdb.com/title/tt1976607/",
    type: "movie",
    description: "Film adaptation starring Robin Givens, Christopher Williams, and gospel artist Kierra 'Kiki' Sheard.",
    year: "2012"
  },
  {
    title: "Swirl Films - The Love You Save",
    url: "https://www.swirlfilms.com/our-work/the-love-you-save/",
    type: "other",
    description: "Production company showcase of the film adaptation.",
    year: "2012"
  },
  {
    title: "Additional IMDB Credit",
    url: "https://www.imdb.com/title/tt2050643/",
    type: "other",
    description: "Additional writing credit in film and television.",
    year: "N/A"
  }
]

export default function ExternalWorks() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for external content
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const getIcon = (type: string) => {
    switch (type) {
      case 'movie':
        return <Movie />
      case 'tv':
        return <Tv />
      default:
        return <VideoLibrary />
    }
  }

  const getColor = (type: string) => {
    switch (type) {
      case 'movie':
        return 'primary'
      case 'tv':
        return 'secondary'
      default:
        return 'default'
    }
  }

  if (loading) {
    return (
      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Card>
              <Skeleton variant="rectangular" height={200} />
              <CardContent>
                <Skeleton variant="text" height={32} />
                <Skeleton variant="text" height={20} />
                <Skeleton variant="text" height={60} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, color: 'text.primary' }}>
        External Works & Credits
      </Typography>
      <Grid container spacing={3}>
        {externalWorks.map((work, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                }
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  height: 200,
                  background: `linear-gradient(45deg, ${
                    work.type === 'movie' ? '#1976d2, #42a5f5' :
                    work.type === 'tv' ? '#dc004e, #ff4081' :
                    '#666, #999'
                  })`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    fontSize: '4rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {getIcon(work.type)}
                </Box>
                {work.year && work.year !== 'N/A' && (
                  <Chip
                    label={work.year}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(0,0,0,0.6)',
                      color: 'white',
                    }}
                  />
                )}
              </CardMedia>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                  {work.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60 }}>
                  {work.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip
                    icon={getIcon(work.type)}
                    label={work.type.toUpperCase()}
                    color={getColor(work.type) as 'primary' | 'secondary' | 'default'}
                    size="small"
                  />
                  <Button
                    component={Link}
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    startIcon={<OpenInNew />}
                    sx={{ color: 'primary.main' }}
                  >
                    View
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
} 