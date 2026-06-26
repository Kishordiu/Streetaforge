import { useRef, useEffect, useState, lazy, Suspense } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BoltIcon from '@mui/icons-material/Bolt';

const HeroCanvas = lazy(() => import('./HeroCanvas'));

const MotionBox = motion(Box);

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['rgba(255,107,53,', 'rgba(0,212,255,', 'rgba(155,89,182,'];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

function GlowGrid() {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,107,53,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,53,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 0,
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToExplore = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      ref={containerRef}
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 120% 100% at 50% -10%, rgba(255,107,53,0.12) 0%, rgba(3,7,18,0) 60%), #030712',
      }}
    >
      {/* Background glow effects */}
      <Box sx={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: { xs: 300, md: 600 },
        height: { xs: 300, md: 600 },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        filter: 'blur(30px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <GlowGrid />
      <ParticleField />

      {/* 3D Canvas */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        {mounted && (
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        )}
      </Box>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="hero-content"
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            px: { xs: 3, md: 6 },
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Chip
              icon={<BoltIcon sx={{ fontSize: '0.85rem !important', color: '#FF6B35 !important' }} />}
              label="Technology & Innovation Studio"
              size="small"
              sx={{
                mb: 4,
                background: 'rgba(255,107,53,0.1)',
                border: '1px solid rgba(255,107,53,0.25)',
                color: '#FF8C5A',
                fontWeight: 600,
                letterSpacing: '0.06em',
                fontSize: '0.7rem',
                backdropFilter: 'blur(10px)',
                py: 2.5,
              }}
            />
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem', lg: '7rem' },
                fontWeight: 900,
                letterSpacing: { xs: '-0.03em', md: '-0.05em' },
                lineHeight: 0.95,
                mb: 2,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 40%, #FF6B35 70%, #FF3300 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none',
              }}
            >
              Street Forge
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typography
              variant="h4"
              component="p"
              sx={{
                fontWeight: 300,
                color: 'text.secondary',
                letterSpacing: '0.02em',
                mb: 5,
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                fontStyle: 'italic',
              }}
            >
              Every Idea is a Spark.{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #FF6B35, #FF3300)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'normal',
                  fontWeight: 600,
                }}
              >
                Build the Flame.
              </Box>
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={scrollToExplore}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: '0.95rem',
                borderRadius: 2,
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF3300 100%)',
                boxShadow: '0 0 40px rgba(255,107,53,0.4)',
                '&:hover': {
                  boxShadow: '0 0 60px rgba(255,107,53,0.6)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              Explore Projects
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={scrollToContact}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: '0.95rem',
                borderRadius: 2,
                borderColor: 'rgba(255,107,53,0.4)',
                color: '#FF8C5A',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255,107,53,0.05)',
                '&:hover': {
                  borderColor: '#FF6B35',
                  background: 'rgba(255,107,53,0.12)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 0 30px rgba(255,107,53,0.2)',
                },
              }}
            >
              Let's Build
            </Button>
          </MotionBox>

          {/* Stats row */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            sx={{
              mt: 8,
              display: 'flex',
              gap: { xs: 3, md: 6 },
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '50+', label: 'Projects Built' },
              { value: '8', label: 'Domains' },
              { value: '100%', label: 'Idea-to-Launch' },
            ].map((stat) => (
              <Box key={stat.label} sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.1em' }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </MotionBox>
        </Box>
      </motion.div>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.15em' }}>
          SCROLL
        </Typography>
        <Box
          sx={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, rgba(255,107,53,0.8), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
            '@keyframes scrollPulse': {
              '0%, 100%': { opacity: 0.3, transform: 'scaleY(0.8)' },
              '50%': { opacity: 1, transform: 'scaleY(1)' },
            },
          }}
        />
      </Box>
    </Box>
  );
}
