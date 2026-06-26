import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const MotionBox = motion(Box);

const pillars = [
  {
    icon: LightbulbIcon,
    title: 'Ideation',
    description: 'We start where most stop — at the raw idea. Every project begins with deep research and strategic thinking.',
    color: '#FF6B35',
  },
  {
    icon: BuildIcon,
    title: 'Engineering',
    description: 'From embedded firmware to cloud APIs, our engineering cuts across every layer of the stack.',
    color: '#00D4FF',
  },
  {
    icon: AutoAwesomeIcon,
    title: 'Design',
    description: 'Interfaces that feel native, motion that communicates, and aesthetics that make users trust the product.',
    color: '#9B59B6',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Launch',
    description: "We don't ship half-finished ideas. Every project goes out battle-tested, documented, and production-ready.",
    color: '#00FF88',
  },
];

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        px: { xs: 3, md: 6 },
        maxWidth: 1400,
        mx: 'auto',
        position: 'relative',
      }}
    >
      {/* Section label */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <Chip
          label="About Street Forge"
          size="small"
          sx={{
            mb: 4,
            background: 'rgba(255,107,53,0.1)',
            border: '1px solid rgba(255,107,53,0.2)',
            color: '#FF8C5A',
            fontWeight: 600,
            letterSpacing: '0.1em',
            fontSize: '0.68rem',
          }}
        />
      </MotionBox>

      <Grid container spacing={{ xs: 6, md: 12 }} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              We turn ideas into{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF3300 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                real technology.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.85, fontSize: '1.05rem' }}
            >
              Street Forge is a technology and innovation studio built for builders. We work at the
              intersection of AI, hardware, and software — taking raw concepts and forging them into
              working products through rigorous engineering, intentional design, and fast prototyping.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 1.85, fontSize: '1.05rem' }}
            >
              Whether you need a hackathon-ready MVP, a production IoT system, or an intelligent
              AI-driven platform — we build it from first principles, with precision and purpose.
            </Typography>

            {/* Decorative line */}
            <Box
              sx={{
                mt: 5,
                height: 2,
                width: 80,
                background: 'linear-gradient(90deg, #FF6B35, transparent)',
                borderRadius: 1,
              }}
            />
          </MotionBox>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={3}>
            {pillars.map((pillar, i) => (
              <Grid key={pillar.title} size={{ xs: 12, sm: 6 }}>
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ y: -4 }}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: 'rgba(10,15,30,0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(20px)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: `linear-gradient(90deg, ${pillar.color}, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                    '&:hover': {
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(10,15,30,0.8)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '10px',
                      background: `${pillar.color}18`,
                      border: `1px solid ${pillar.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <pillar.icon sx={{ fontSize: '1.3rem', color: pillar.color }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {pillar.description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
