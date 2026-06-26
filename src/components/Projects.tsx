import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const MotionBox = motion(Box);

const projects = [
  {
    id: 'neuralflow',
    title: 'NeuralFlow',
    category: 'AI / Web',
    year: '2024',
    description:
      'An AI-powered workflow automation platform that uses LLMs to parse, classify, and route business documents with 97% accuracy. Reduced manual processing by 80%.',
    tags: ['GPT-4', 'Python', 'React', 'Supabase'],
    accentColor: '#FF6B35',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,51,0,0.05) 100%)',
    visual: 'AI',
  },
  {
    id: 'gridwatch',
    title: 'GridWatch',
    category: 'IoT / Embedded',
    year: '2024',
    description:
      'Industrial IoT platform monitoring 500+ smart grid nodes in real time. Features anomaly detection, predictive maintenance alerts, and a live dashboard.',
    tags: ['ESP32', 'MQTT', 'InfluxDB', 'React'],
    accentColor: '#00D4FF',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,136,204,0.05) 100%)',
    visual: 'IoT',
  },
  {
    id: 'hexapod',
    title: 'HexaPod AI',
    category: 'Robotics / Embedded',
    year: '2023',
    description:
      'A six-legged autonomous robot with onboard vision processing, terrain adaptation, and voice command interface. Designed for hazardous environment inspection.',
    tags: ['ROS2', 'OpenCV', 'C++', 'Raspberry Pi'],
    accentColor: '#9B59B6',
    featured: false,
    gradient: 'linear-gradient(135deg, rgba(155,89,182,0.15) 0%, rgba(108,52,131,0.05) 100%)',
    visual: 'ROBOT',
  },
  {
    id: 'pulseapp',
    title: 'Pulse Health',
    category: 'Mobile / AI',
    year: '2024',
    description:
      'A mobile wellness app leveraging wearable biosensor data to deliver personalized health insights. Built in 72 hours, won first place at a national healthtech hackathon.',
    tags: ['Flutter', 'TensorFlow Lite', 'BLE', 'Firebase'],
    accentColor: '#00FF88',
    featured: false,
    gradient: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,204,102,0.05) 100%)',
    visual: 'HEALTH',
  },
  {
    id: 'starkfarm',
    title: 'StarkFarm',
    category: 'IoT / AI',
    year: '2023',
    description:
      'Smart agriculture system with soil sensors, automated irrigation, and crop health prediction. Deployed across 3 farms covering 200+ acres.',
    tags: ['LoRa', 'Edge AI', 'Arduino', 'Next.js'],
    accentColor: '#FFD700',
    featured: false,
    gradient: 'linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(255,140,0,0.05) 100%)',
    visual: 'FARM',
  },
  {
    id: 'chainforge',
    title: 'ChainForge',
    category: 'Web3 / Web',
    year: '2024',
    description:
      'A developer toolkit for Ethereum smart contract testing and auditing. Real-time gas analysis, vulnerability scanning, and visual transaction tracing.',
    tags: ['Solidity', 'TypeScript', 'ethers.js', 'React'],
    accentColor: '#FF1493',
    featured: false,
    gradient: 'linear-gradient(135deg, rgba(255,20,147,0.15) 0%, rgba(255,105,180,0.05) 100%)',
    visual: 'CHAIN',
  },
];

function ProjectVisual({ project }: { project: typeof projects[0] }) {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        background: project.gradient,
        border: `1px solid ${project.accentColor}20`,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Grid pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${project.accentColor}12 1px, transparent 1px),
            linear-gradient(90deg, ${project.accentColor}12 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Center glow */}
      <Box
        sx={{
          position: 'absolute',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${project.accentColor}25 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />
      <Typography
        sx={{
          position: 'relative',
          zIndex: 1,
          fontSize: '1.8rem',
          fontWeight: 900,
          letterSpacing: '0.2em',
          color: project.accentColor,
          opacity: 0.5,
          fontFamily: 'monospace',
        }}
      >
        {project.visual}
      </Typography>
    </Box>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      sx={{
        p: 0,
        borderRadius: 3,
        background: 'rgba(10,15,30,0.7)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        '&:hover': {
          border: `1px solid ${project.accentColor}30`,
          boxShadow: `0 20px 60px ${project.accentColor}15`,
        },
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Box sx={{ p: 0 }}>
        <ProjectVisual project={project} />
      </Box>

      <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Chip
              label={project.category}
              size="small"
              sx={{
                background: `${project.accentColor}12`,
                border: `1px solid ${project.accentColor}25`,
                color: project.accentColor,
                fontWeight: 600,
                fontSize: '0.65rem',
                letterSpacing: '0.05em',
                height: 22,
              }}
            />
            {project.featured && (
              <Chip
                label="Featured"
                size="small"
                sx={{
                  background: 'rgba(255,215,0,0.1)',
                  border: '1px solid rgba(255,215,0,0.2)',
                  color: '#FFD700',
                  fontWeight: 600,
                  fontSize: '0.6rem',
                  letterSpacing: '0.05em',
                  height: 22,
                }}
              />
            )}
          </Box>
          <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.05em' }}>
            {project.year}
          </Typography>
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
          {project.title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75, mb: 2.5, flex: 1 }}>
          {project.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 2.5 }}>
          {project.tags.map((tag) => (
            <Box
              key={tag}
              sx={{
                px: 1.25,
                py: 0.3,
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'text.secondary',
                fontFamily: 'monospace',
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>

        <Button
          variant="text"
          size="small"
          endIcon={<OpenInNewIcon sx={{ fontSize: '0.85rem !important' }} />}
          sx={{
            color: project.accentColor,
            fontSize: '0.8rem',
            fontWeight: 600,
            p: 0,
            letterSpacing: '0.04em',
            '&:hover': { background: 'transparent', opacity: 0.8 },
            justifyContent: 'flex-start',
          }}
        >
          View Case Study
        </Button>
      </Box>
    </MotionBox>
  );
}

export default function Projects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        px: { xs: 3, md: 6 },
        position: 'relative',
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            mb: 10,
          }}
        >
          <Box>
            <Chip
              label="Featured Projects"
              size="small"
              sx={{
                mb: 3,
                background: 'rgba(155,89,182,0.1)',
                border: '1px solid rgba(155,89,182,0.25)',
                color: '#9B59B6',
                fontWeight: 600,
                letterSpacing: '0.1em',
                fontSize: '0.68rem',
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Built to Prove
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1.25,
              fontSize: '0.85rem',
              borderColor: 'rgba(255,107,53,0.3)',
              color: '#FF8C5A',
              flexShrink: 0,
            }}
          >
            All Projects
          </Button>
        </MotionBox>

        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ProjectCard project={project} index={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
