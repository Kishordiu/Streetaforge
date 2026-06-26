import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const navLinks = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Process', '#process'],
  ['Stack', '#stack'],
  ['Contact', '#contact'],
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(3,7,18,0.95)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        pt: { xs: 8, md: 10 },
        pb: 4,
        px: { xs: 3, md: 6 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top glow */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 400,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,107,53,0.5) 50%, transparent)',
        }}
      />

      <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 6,
            mb: 6,
          }}
        >
          {/* Brand */}
          <Box sx={{ maxWidth: 360 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              {/* Logo placeholder — replace with <img src={logo} /> */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF3300 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(255,107,53,0.35)',
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '3px',
                    border: '1px solid rgba(255,255,255,0.3)',
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  background: 'linear-gradient(135deg, #FFFFFF 30%, #FF6B35 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textTransform: 'uppercase',
                }}
              >
                Street Forge
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}
            >
              Every Idea is a Spark. Build the Flame.
              <br />
              A technology and innovation studio building AI, IoT, Robotics, and
              beyond — from concept to production.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<ArrowForwardIcon sx={{ fontSize: '0.8rem !important' }} />}
              onClick={() => scrollTo('#contact')}
              sx={{ px: 2.5, py: 1, fontSize: '0.8rem', borderRadius: 1.5 }}
            >
              Start a Project
            </Button>
          </Box>

          {/* Links */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 4, md: 8 },
              flexWrap: 'wrap',
            }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{ color: 'text.secondary', display: 'block', mb: 2, letterSpacing: '0.12em' }}
              >
                Navigate
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {navLinks.map(([label, href]) => (
                  <Typography
                    key={label}
                    variant="body2"
                    onClick={() => scrollTo(href)}
                    sx={{
                      color: 'text.secondary',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: '#FF6B35' },
                      letterSpacing: '0.02em',
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography
                variant="overline"
                sx={{ color: 'text.secondary', display: 'block', mb: 2, letterSpacing: '0.12em' }}
              >
                Connect
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {[
                  { icon: GitHubIcon, href: '#', color: '#FFFFFF' },
                  { icon: LinkedInIcon, href: '#', color: '#0A66C2' },
                  { icon: TwitterIcon, href: '#', color: '#1DA1F2' },
                ].map(({ icon: Icon, href, color }, i) => (
                  <Box
                    key={i}
                    component="a"
                    href={href}
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'text.secondary',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        color,
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: '1rem' }} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Street Forge. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              letterSpacing: '0.05em',
            }}
          >
            Built with{' '}
            <Box
              component="span"
              sx={{ color: '#FF6B35', fontWeight: 700 }}
            >
              precision
            </Box>
            {' '}and{' '}
            <Box
              component="span"
              sx={{ color: '#FF6B35', fontWeight: 700 }}
            >
              purpose.
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
