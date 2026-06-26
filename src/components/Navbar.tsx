import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const handleNav = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(3,7,18,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Toolbar sx={{ py: 1.5, px: { xs: 2, md: 4 }, maxWidth: 1400, mx: 'auto', width: '100%' }}>
          {/* Logo placeholder */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF3300 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(255,107,53,0.4)',
                border: '1px solid rgba(255,107,53,0.3)',
                flexShrink: 0,
              }}
            >
              {/* Logo placeholder — replace with <img src={logo} /> */}
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
            <Box
              component="span"
              sx={{
                fontSize: '1.1rem',
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
            </Box>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.75,
                    letterSpacing: '0.03em',
                    '&:hover': {
                      color: 'text.primary',
                      background: 'rgba(255,255,255,0.05)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleNav('#contact')}
                sx={{ ml: 1.5, px: 2.5, py: 0.85, fontSize: '0.85rem' }}
              >
                Let's Build
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(3,7,18,0.97)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
            p: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleNav(item.href)}
                sx={{
                  borderRadius: 1,
                  '&:hover': { background: 'rgba(255,107,53,0.1)' },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    fontSize: '1.1rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 3, px: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleNav('#contact')}
            sx={{ py: 1.5 }}
          >
            Let's Build
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
