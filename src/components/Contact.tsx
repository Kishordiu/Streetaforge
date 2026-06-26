import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BoltIcon from '@mui/icons-material/Bolt';

const MotionBox = motion(Box);

const socialLinks = [
  { icon: GitHubIcon, label: 'GitHub', href: '#', color: '#FFFFFF' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#', color: '#0A66C2' },
  { icon: TwitterIcon, label: 'Twitter / X', href: '#', color: '#1DA1F2' },
  { icon: EmailIcon, label: 'Email', href: '#', color: '#FF6B35' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Box
      id="contact"
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
          background:
            'radial-gradient(ellipse 80% 60% at 50% 80%, rgba(255,107,53,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,107,53,0.3) 50%, transparent)',
        }}
      />

      <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative', zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 10 }}
        >
          <Chip
            label="Contact"
            size="small"
            sx={{
              mb: 3,
              background: 'rgba(255,107,53,0.1)',
              border: '1px solid rgba(255,107,53,0.2)',
              color: '#FF8C5A',
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
            Let's Build Something{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #FF6B35, #FF3300)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Real.
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto', lineHeight: 1.8 }}
          >
            Have an idea? A project? A hackathon deadline? Tell us about it.
            We turn sparks into flames — fast.
          </Typography>
        </MotionBox>

        <Grid container spacing={6} alignItems="stretch">
          {/* Left — Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}
            >
              {/* Info card */}
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: 'rgba(10,15,30,0.7)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(20px)',
                  flex: 1,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  {/* Logo placeholder */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #FF6B35 0%, #FF3300 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 25px rgba(255,107,53,0.35)',
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        background: 'rgba(255,255,255,0.15)',
                        borderRadius: '5px',
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '0.05em', lineHeight: 1.1 }}>
                      Street Forge
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.08em' }}>
                      Technology & Innovation Studio
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                  We're a focused team of engineers and designers who build
                  real-world technology across AI, hardware, and software.
                  Every project matters. Every deadline counts.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <EmailIcon sx={{ fontSize: '1rem', color: '#FF6B35' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      hello@streetforge.dev
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <LocationOnIcon sx={{ fontSize: '1rem', color: '#00D4FF' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Building remotely, globally.
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <BoltIcon sx={{ fontSize: '1rem', color: '#FFD700' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Response within 24 hours.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Social links */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social) => (
                  <Box
                    key={social.label}
                    component="a"
                    href={social.href}
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'text.secondary',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        background: `${social.color}15`,
                        border: `1px solid ${social.color}30`,
                        color: social.color,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <social.icon sx={{ fontSize: '1.1rem' }} />
                  </Box>
                ))}
              </Box>
            </MotionBox>
          </Grid>

          {/* Right — Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                background: 'rgba(10,15,30,0.7)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {sent ? (
                <Box sx={{ textAlign: 'center', py: 6 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'rgba(0,255,136,0.15)',
                      border: '2px solid rgba(0,255,136,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    <SendIcon sx={{ color: '#00FF88', fontSize: '1.5rem' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                    Message Sent!
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    We'll get back to you within 24 hours. The flame is already burning.
                  </Typography>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    Start a Conversation
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        value={form.name}
                        onChange={handleChange('name')}
                        required
                        size="small"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        required
                        size="small"
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    label="Project Type (e.g. AI, IoT, Web App)"
                    value={form.project}
                    onChange={handleChange('project')}
                    size="small"
                  />

                  <TextField
                    fullWidth
                    label="Tell us about your idea"
                    multiline
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                    placeholder="Describe your project, goals, timeline, and any technical details..."
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.75,
                      fontSize: '0.95rem',
                      borderRadius: 2,
                      mt: 0.5,
                    }}
                  >
                    Send Message
                  </Button>

                  <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center', letterSpacing: '0.04em' }}>
                    No spam. Just real conversations about building things.
                  </Typography>
                </Box>
              )}
            </MotionBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
