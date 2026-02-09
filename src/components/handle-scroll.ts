// handle-scroll.ts

export function handleScroll(topBar: HTMLElement | null): void {
    if (!topBar) return;
    
    const scrollY = window.scrollY;
    
    // Get section elements
    const projectsSection = document.getElementById('projects');
    const aboutMeSection = document.getElementById('about-me');
    
    // Calculate offsets (default to large numbers if not found so logic falls through correctly)
    const projectsTop = projectsSection ? projectsSection.offsetTop - 100 : 99999;
    const aboutMeTop = aboutMeSection ? aboutMeSection.offsetTop - 100 : 99999;
    
    // Helper to clean classes
    const removeAllClasses = () => {
      topBar.classList.remove('scrolled', 'scrolled1', 'scrolled2');
    };
    
    // Logic based on sections
    if (scrollY >= aboutMeTop) {
      // In or past 'About Me' section
      if (!topBar.classList.contains('scrolled1')) {
        removeAllClasses();
        topBar.classList.add('scrolled1');
      }
    } else if (scrollY >= projectsTop) {
      // In 'Projects', 'Languages' or 'Technologies' section
      if (!topBar.classList.contains('scrolled')) {
        removeAllClasses();
        topBar.classList.add('scrolled');
      }
    } else {
      // In 'Hero' section (Top)
      if (!topBar.classList.contains('scrolled2')) {
        removeAllClasses();
        topBar.classList.add('scrolled2');
      }
    }
    
    // Add parallax effect to the tech grid
    const techGrid = topBar.querySelector('.tech-grid') as HTMLElement;
    if (techGrid) {
      const parallaxValue = scrollY * 0.05;
      techGrid.style.backgroundPosition = `${parallaxValue}px ${parallaxValue}px`;
    }
  }
