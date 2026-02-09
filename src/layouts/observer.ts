export function setupProjectsObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const card = entry.target as HTMLElement;
          const techTags = card.querySelectorAll('.project-lt');
          
          techTags.forEach((tag, index) => {
            setTimeout(() => {
              (tag as HTMLElement).style.opacity = '1';
              (tag as HTMLElement).style.transform = 'translateY(0)';
            }, 100 * (index + 1));
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.project-card').forEach(card => {
      // Configurar estado inicial de las etiquetas de tecnología
      const techTags = card.querySelectorAll('.project-lt');
      techTags.forEach(tag => {
        (tag as HTMLElement).style.opacity = '0';
        (tag as HTMLElement).style.transform = 'translateY(10px)';
        (tag as HTMLElement).style.transition = 'all 0.4s ease';
      });
      
      observer.observe(card);
    });
    
    // NOTA: Se eliminaron los efectos de parallax y hover (scale/translate)
    // para mantener las tarjetas estáticas y menos "estorbosas"
  }
