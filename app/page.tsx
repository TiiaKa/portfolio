import React from 'react';

// 1. Määritellään TypeScript-tyypit projekteille
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

// 2. Mock-data projekteille (myöhemmin tämän voi hakea tietokannasta)
const projects: Project[] = [
  {
    title: 'Oma Portfolio & Full-Stack Sovellus',
    description: 'Next.js, TypeScript ja PostgreSQL -pohjainen sovellus, jossa automaattiset Playwright-testit ja CI/CD-putki.',
    tags: ['Next.js', 'React', 'TypeScript', 'Playwright', 'Vercel'],
    link: 'https://github.com/kayttajatunnus/oma-portfolio',
  },
  {
    title: 'Sää- ja Lämpötila-analysaattori',
    description: 'REST API -rajapintaa hyödyntävä sovellus, joka analysoi ja visualisoi ilmastodataa.',
    tags: ['React', 'Node.js', 'Docker', 'REST API'],
    link: 'https://github.com/kayttajatunnus/saa-analysaattori',
  },
];

// 3. Pääkomponentti (App Router etusivu)
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8 md:p-16 max-w-5xl mx-auto font-sans">
      
      {/* --- HERO-OSIO --- */}
      <section className="mb-16">
        <span className="text-emerald-400 font-mono text-sm tracking-wide">Moi! Olen</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4 text-white">
          Ohjelmistokehittäjä & DevOps-asiantuntija
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Kehitän moderneja web-sovelluksia, kirjoitan automaattisia testejä ja automatisoin 
          julkaisuprosessit pilveen.
        </p>
      </section>

      {/* --- SKILLS-OSIO (Eri roolit edustettuna) --- */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b border-slate-800 pb-2">Osaamisalueet</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="font-bold text-emerald-400 mb-2">Development</h3>
            <p className="text-slate-300 text-sm">React, Next.js, TypeScript, Node.js, PostgreSQL</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="font-bold text-emerald-400 mb-2">DevOps & Cloud</h3>
            <p className="text-slate-300 text-sm">Git, Docker, GitHub Actions, Vercel, CI/CD</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="font-bold text-emerald-400 mb-2">QA & Testing</h3>
            <p className="text-slate-300 text-sm">Playwright, Postman, Manuaali- ja automaatiotestaus</p>
          </div>
        </div>
      </section>

      {/* --- PROJEKTIT-OSIO --- */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b border-slate-800 pb-2">Projektit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{project.description}</p>
              
              {/* Tägit */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-slate-900 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-emerald-400 hover:underline"
              >
                Katso GitHubissa &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* --- YHTEYDENOTTO / ALATUNNISTE --- */}
      <footer className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} - Rakennettu Next.js:llä ja julkaistu Verceliin.</p>
      </footer>

    </main>
  );
}
