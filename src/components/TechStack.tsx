import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const techStack = [
  { name: 'React', category: 'Frontend', color: '#61DAFB', symbol: 'Re' },
  { name: 'TypeScript', category: 'Language', color: '#3178C6', symbol: 'TS' },
  { name: 'Three.js', category: '3D / Graphics', color: '#FFFFFF', symbol: '3J' },
  { name: 'Blender', category: 'Design / 3D', color: '#FF7043', symbol: 'Bl' },
  { name: 'Python', category: 'AI / Backend', color: '#FFD43B', symbol: 'Py' },
  { name: 'ESP32', category: 'Embedded', color: '#E7173A', symbol: '32' },
  { name: 'Arduino', category: 'Embedded', color: '#00979D', symbol: 'Ar' },
  { name: 'Supabase', category: 'Database', color: '#3ECF8E', symbol: 'Sb' },
  { name: 'Node.js', category: 'Backend', color: '#339933', symbol: 'No' },
  { name: 'Docker', category: 'DevOps', color: '#2496ED', symbol: 'Dk' },
  { name: 'ROS2', category: 'Robotics', color: '#22314E', symbol: 'RO' },
  { name: 'TensorFlow', category: 'ML', color: '#FF6F00', symbol: 'TF' },
];

function TechIcon({ tech, index }: { tech: typeof techStack[0]; index: number }) {
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        y: -10,
        scale: 1.08,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1.5,
        cursor: 'default',
        p: 2,
        borderRadius: 3,
        border: '1px solid transparent',
        '&:hover': {
          background: `${tech.color}08`,
          border: `1px solid ${tech.color}20`,
        },
        transition: 'all 0.3s ease',
      }}
    >
      {/* Icon box */}
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '16px',
          background: `linear-gradient(135deg, ${tech.color}18 0%, ${tech.color}08 100%)`,
          border: `1px solid ${tech.color}25`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxShadow: `0 4px 20px ${tech.color}15`,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: `0 8px 35px ${tech.color}30`,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 900,
            color: tech.color,
            fontFamily: 'monospace',
            letterSpacing: '-0.05em',
          }}
        >
          {tech.symbol}
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            fontWeight: 700,
            color: 'text.primary',
            fontSize: '0.78rem',
            letterSpacing: '0.02em',
          }}
        >
          {tech.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: 'text.secondary',
            fontSize: '0.65rem',
            letterSpacing: '0.06em',
          }}
        >
          {tech.category}
        </Typography>
      </Box>
    </MotionBox>
  );
}

function FloatingOrbs() {
  return (
    <>
      {[
        { top: '10%', left: '5%', size: 200, color: '#FF6B35', opacity: 0.06 },
        { top: '60%', right: '5%', size: 250, color: '#00D4FF', opacity: 0.05 },
        { bottom: '10%', left: '40%', size: 150, color: '#9B59B6', opacity: 0.06 },
      ].map((orb, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: orb.top,
            left: orb.left,
            right: (orb as { right?: string }).right,
            bottom: (orb as { bottom?: string }).bottom,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
            opacity: orb.opacity,
            pointerEvents: 'none',
            animation: `float${i} ${4 + i}s ease-in-out infinite`,
          }}
        />
      ))}
    </>
  );
}

export default function TechStack() {
  return (
    <Box
      id="stack"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        px: { xs: 3, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, transparent 0%, rgba(10,15,30,0.4) 50%, transparent 100%)',
        '@keyframes float0': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        '@keyframes float1': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(15px)' },
        },
        '@keyframes float2': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-15px)' },
        },
      }}
    >
      <FloatingOrbs />

      <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative', zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 10 }}
        >
          <Chip
            label="Tech Stack"
            size="small"
            sx={{
              mb: 3,
              background: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.2)',
              color: '#FFD700',
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
            Tools of the Trade
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 550,
              mx: 'auto',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            Our arsenal of battle-tested technologies, spanning frontend, backend,
            AI, embedded systems, and everything in between.
          </Typography>
        </MotionBox>

        {/* Grid of tech icons */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(3, 1fr)',
              sm: 'repeat(4, 1fr)',
              md: 'repeat(6, 1fr)',
            },
            gap: { xs: 1, md: 2 },
          }}
        >
          {techStack.map((tech, i) => (
            <TechIcon key={tech.name} tech={tech} index={i} />
          ))}
        </Box>

        {/* Bottom marquee strip */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{
            mt: 10,
            py: 3,
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 6,
              animation: 'marquee 30s linear infinite',
              '@keyframes marquee': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
              width: 'max-content',
            }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <Typography
                key={`${tech.name}-${i}`}
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  letterSpacing: '0.15em',
                  opacity: 0.4,
                  whiteSpace: 'nowrap',
                  fontSize: '0.7rem',
                }}
              >
                {tech.name}
              </Typography>
            ))}
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}
