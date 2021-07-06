import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../GlobalStyles';
// Components
import Footer from '../components/footer/Footer';

function ProjectsPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      Projects Page
      <Footer/>
    </motion.div>
  );
};

export default ProjectsPage;