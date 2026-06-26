import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { motion, AnimatePresence } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RouterIcon from '@mui/icons-material/Router';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const MotionBox = motion(Box);

const services = [
  {
    id: 'ai',
    icon: PsychologyIcon,
    title: 'Artificial Intelligence',
    shortTitle: 'AI',
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF3300 100%)',
    description:
      'Machine learning models, NLP pipelines, computer vision, and intelligent automation systems tailored for real-world deployment.',
    tags: ['LLMs', 'CV', 'NLP', 'ML Ops'],
  },
  {
    id: 'iot',
    icon: RouterIcon,
    title: 'Internet of Things',
    shortTitle: 'IoT',
    color: '#00D4FF',
    gradient: 'linear-gradient(135deg, #00D4FF 0%, #0088CC 100%)',
    description:
      'Connected device ecosystems, real-time sensor networks, MQTT/LoRa protocols, and cloud-integrated smart systems.',
    tags: ['MQTT', 'LoRa', 'Edge', 'Cloud'],
  },
  {
    id: 'robotics',
    icon: PrecisionManufacturingIcon,
    title: 'Robotics',
    shortTitle: 'Robotics',
    color: '#9B59B6',
    gradient: 'linear-gradient(135deg, #9B59B6 0%, #6C3483 100%)',
    description:
      'Autonomous systems, motion planning, ROS integration, servo control, and sensor fusion for intelligent robotic platforms.',
    tags: ['ROS', 'Servo', 'Sensors', 'Vision'],
  },
  {
    id: 'embedded',
    icon: MemoryIcon,
    title: 'Embedded Systems',
    shortTitle: 'Embedded',
    color: '#00FF88',
    gradient: 'linear-gradient(135deg, #00FF88 0%, #00CC66 100%)',
    description:
      'Bare-metal and RTOS firmware, microcontroller programming, custom PCB design, and low-latency real-time control systems.',
    tags: ['C/C++', 'RTOS', 'PCB', 'Firmware'],
  },
  {
    id: 'web',
    icon: CodeIcon,
    title: 'Web Development',
    shortTitle: 'Web',
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
    description:
      'High-performance web applications with modern frameworks, server-side rendering, real-time data, and exceptional UX.',
    tags: ['React', 'Next.js', 'Node', 'Supabase'],
  },
  {
    id: 'mobile',
    icon: SmartphoneIcon,
    title: 'Mobile Development',
    shortTitle: 'Mobile',
    color: '#00D4FF',
    gradient: 'linear-gradient(135deg, #00D4FF 0%, #7B2FBE 100%)',
    description:
      'Cross-platform and native mobile apps that feel premium, perform fast, and integrate seamlessly with backend services.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    id: 'hardware',
    icon: BuildCircleIcon,
    title: 'Hardware Prototypes',
    shortTitle: 'Hardware',
    color: '#FFD700',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
    description:
      'From concept to physical prototype — 3D printing, custom enclosures, electronics assembly, and hardware-software integration.',
    tags: ['3D Print', 'CAD', 'Assembly', 'Testing'],
  },
  {
    id: 'hackathon',
    icon: EmojiEventsIcon,
    title: 'Hackathon Projects',
    shortTitle: 'Hackathon',
    color: '#FF1493',
    gradient: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
    description:
      'Rapid-fire innovation under competition pressure. We specialize in 24–72 hour buildouts that impress judges and win.',
    tags: ['MVP', 'Rapid', 'Pitch', 'Win'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      sx={{
        position: 'relative',
        p: { xs: 3, md: 3.5 },
        borderRadius: 3,
        background: 'rgba(10,15,30,0.7)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
        cursor: 'default',
        overflow: 'hidden',
        height: '100%',
        '&:hover': {
          border: `1px solid ${service.color}30`,
          background: 'rgba(10,15,30,0.9)',
          boxShadow: `0 20px 60px ${service.color}18`,
        },
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Animated background glow */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at 30% 30%, ${service.color}10 0%, transparent 60%)`,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        )}
      </AnimatePresence>

      {/* Top accent line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: service.gradient,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Icon */}
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: '14px',
            background: `${service.color}15`,
            border: `1px solid ${service.color}25`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2.5,
            transition: 'all 0.3s ease',
            ...(hovered && {
              background: `${service.color}22`,
              border: `1px solid ${service.color}40`,
              boxShadow: `0 0 20px ${service.color}25`,
            }),
          }}
        >
          <service.icon sx={{ fontSize: '1.5rem', color: service.color }} />
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
          {service.title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75, mb: 2.5 }}>
          {service.description}
        </Typography>

        {/* Tags */}
        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
          {service.tags.map((tag) => (
            <Box
              key={tag}
              sx={{
                px: 1.25,
                py: 0.35,
                borderRadius: '4px',
                background: `${service.color}10`,
                border: `1px solid ${service.color}20`,
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: service.color,
                fontFamily: 'monospace',
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function Services() {
  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        px: { xs: 3, md: 6 },
        position: 'relative',
        background: 'linear-gradient(180deg, transparent 0%, rgba(10,15,30,0.3) 50%, transparent 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ maxWidth: 1400, mx: 'auto', position: 'relative', zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 10 }}
        >
          <Chip
            label="What We Build"
            size="small"
            sx={{
              mb: 3,
              background: 'rgba(0,212,255,0.1)',
              border: '1px solid rgba(0,212,255,0.2)',
              color: '#00D4FF',
              fontWeight: 600,
              letterSpacing: '0.1em',
              fontSize: '0.68rem',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2.5,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            From Atoms to APIs
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            We build across every layer of the technology stack — from bare-metal firmware
            to intelligent cloud systems and everything in between.
          </Typography>
        </MotionBox>

        <Grid container spacing={3}>
          {services.map((service, i) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ServiceCard service={service} index={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
