const Footer = () => {
  return (
    <footer id="studio" className="relative border-t border-dim px-6 pb-10 pt-20 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2">
              <img 
                src={`${import.meta.env.BASE_URL}Text 2.v1.png`} 
                alt="Elion" 
                className="h-[200px] w-auto opacity-90 transition-opacity hover:opacity-100" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand">Studio</h4>
            <ul className="space-y-3 text-sm text-bone/80">
              <li><a href="#work" className="hover:text-bone">Work</a></li>
              <li><a href="#approach" className="hover:text-bone">Approach</a></li>
              <li><a href="#results" className="hover:text-bone">Results</a></li>
              <li><a href="#contact" className="hover:text-bone">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand">Connect</h4>
            <ul className="space-y-3 text-sm text-bone/80">
              <li><a href="mailto:hello@elion.studio" className="hover:text-bone">hello@elion.studio</a></li>
              <li><a href="#" className="hover:text-bone">LinkedIn</a></li>
              <li><a href="#" className="hover:text-bone">X / Twitter</a></li>
              <li><a href="#" className="hover:text-bone">Dribbble</a></li>
            </ul>
          </div>
        </div>


        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-dim pt-6 text-[11px] uppercase tracking-[0.2em] text-sand/60 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Elion Studio. All rights reserved.</span>
          <span>Crafted with intent · Optimized continuously</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
