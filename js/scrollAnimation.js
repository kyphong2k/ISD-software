// section scroll animation

const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    // dinh nghia animation
  });

// top
sr.reveal(``,

{
    origin: 'top',
    interval: 300,
});
// left
sr.reveal(`.shortcodes-widget,.about-content-title,.our-team-list`, 
    {
        origin: 'left',
        interval: 300
    }
);
//right
sr.reveal(`.about-content-skills,.about-customer-list,.testimonial-feedback`,
    {
        origin: 'right',
        interval: 300
    }
);
//bottom
sr.reveal(`.about-content-desc`,
    {
        origin: 'bottom',
        interval: 300
    }
);
  