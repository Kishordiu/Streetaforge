import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6B35',
      light: '#FF8C5A',
      dark: '#E5501A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00D4FF',
      light: '#33DDFF',
      dark: '#00AACC',
      contrastText: '#000000',
    },
    background: {
      default: '#030712',
      paper: '#0A0F1E',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
    divider: 'rgba(255,255,255,0.08)',
    error: { main: '#FF4444' },
    success: { main: '#00FF88' },
    info: { main: '#00D4FF' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '5rem',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.65,
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    overline: {
      fontSize: '0.7rem',
      letterSpacing: '0.15em',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          scrollBehavior: 'smooth',
          boxSizing: 'border-box',
        },
        '::-webkit-scrollbar': {
          width: '4px',
        },
        '::-webkit-scrollbar-track': {
          background: '#030712',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(255,107,53,0.4)',
          borderRadius: '2px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(255,107,53,0.7)',
        },
        body: {
          background: '#030712',
          overflowX: 'hidden',
        },
        '::selection': {
          background: 'rgba(255,107,53,0.3)',
          color: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          letterSpacing: '0.02em',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
          boxShadow: '0 0 30px rgba(255,107,53,0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FF8C5A 0%, #FF6B35 100%)',
            boxShadow: '0 0 50px rgba(255,107,53,0.5)',
            transform: 'translateY(-2px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(255,107,53,0.5)',
          color: '#FF6B35',
          '&:hover': {
            borderColor: '#FF6B35',
            background: 'rgba(255,107,53,0.08)',
            boxShadow: '0 0 30px rgba(255,107,53,0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(10,15,30,0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.06)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          letterSpacing: '0.05em',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'rgba(255,255,255,0.03)',
            '& fieldset': {
              borderColor: 'rgba(255,255,255,0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255,107,53,0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF6B35',
            },
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
