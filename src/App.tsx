import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomCursor />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          background: '#030712',
          overflowX: 'hidden',
          cursor: 'none',
          '@media (max-width: 900px)': {
            cursor: 'auto',
          },
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <TechStack />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
