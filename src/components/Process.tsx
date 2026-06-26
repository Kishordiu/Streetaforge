import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PaletteIcon from '@mui/icons-material/Palette';
import DevicesIcon from '@mui/icons-material/Devices';
import ConstructionIcon from '@mui/icons-material/Construction';
import BugReportIcon from '@mui/icons-material/BugReport';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const MotionBox = motion(Box);

const steps = [
  {
    id: 1,
    icon: LightbulbOutlinedIcon,
    label: 'Idea',
    description: 'Capture the core problem and define what success looks like.',
    color: '#FF6B35',
  },
  {
    id: 2,
    icon: SearchIcon,
    label: 'Research',
    description: 'Validate assumptions, study constraints, and map the solution space.',
    color: '#FF8C5A',
  },
  {
    id: 3,
    icon: PaletteIcon,
    label: 'Design',
    description: 'Architect the system, create wireframes, and define the experience.',
    color: '#00D4FF',
  },
  {
    id: 4,
    icon: DevicesIcon,
    label: 'Prototype',
    description: 'Build a working proof of concept to validate the core mechanics.',
    color: '#9B59B6',
  },
  {
    id: 5,
    icon: ConstructionIcon,
    label: 'Build',
    description: 'Full-stack engineering with performance, security, and scale in mind.',
    color: '#00FF88',
  },
  {
    id: 6,
    icon: BugReportIcon,
    label: 'Test',
    description: 'Rigorous QA, stress testing, and edge case validation before launch.',
    color: '#FFD700',
  },
  {
    id: 7,
    icon: RocketLaunchIcon,
    label: 'Launch',
    description: 'Deploy to production with documentation, monitoring, and support.',
    color: '#FF1493',
  },
];

export default function Process() {
  return (
    <Box
      id="process"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        px: { xs: 3, md: 6 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(255,107,53,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative', zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 12 }}
        >
          <Chip
            label="Our Process"
            size="small"
            sx={{
              mb: 3,
              background: 'rgba(0,255,136,0.1)',
              border: '1px solid rgba(0,255,136,0.2)',
              color: '#00FF88',
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
            How We Forge
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 500,
              mx: 'auto',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            A disciplined, repeatable process that takes every idea from a
            spark to a shipped product.
          </Typography>
        </MotionBox>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Connector line — desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: 28,
              left: '7%',
              right: '7%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(255,107,53,0.3) 15%, rgba(255,107,53,0.3) 85%, transparent)',
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2, md: 0 },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'flex-start' },
            }}
          >
            {steps.map((step, i) => (
              <MotionBox
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                sx={{
                  flex: { md: 1 },
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'column' },
                  alignItems: { xs: 'flex-start', md: 'center' },
                  gap: { xs: 2, md: 0 },
                  textAlign: { xs: 'left', md: 'center' },
                  position: 'relative',
                  zIndex: 1,
                  px: { md: 0.5 },
                  minWidth: 0,
                }}
              >
                {/* Icon circle */}
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: `${step.color}15`,
                    border: `2px solid ${step.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: { xs: 0, md: 3 },
                    boxShadow: `0 0 20px ${step.color}20`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: `${step.color}25`,
                      boxShadow: `0 0 35px ${step.color}35`,
                    },
                  }}
                >
                  <step.icon sx={{ fontSize: '1.3rem', color: step.color }} />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: step.color,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      display: 'block',
                      mb: 0.5,
                      fontSize: '0.65rem',
                    }}
                  >
                    0{step.id}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: 'text.primary', mb: 1, fontSize: '0.95rem' }}
                  >
                    {step.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.65,
                      fontSize: '0.8rem',
                      display: { xs: 'block', md: 'block' },
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'none' },
                      width: 1,
                      height: 30,
                      background: `linear-gradient(to bottom, ${step.color}50, transparent)`,
                      ml: '27px',
                      mt: -1,
                    }}
                  />
                )}
              </MotionBox>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
