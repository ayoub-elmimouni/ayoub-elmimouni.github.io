export default function Skills() {
  return (
    <section className="skills py-24" id="skills">
      <div className="max-width">
        <h2 className="title relative text-center text-4xl font-medium mb-16 pb-5 font-ubuntu">
          My Skills
        </h2>
        <div className="skills-content flex flex-wrap items-center justify-between">
          <div className="column w-1/2 pr-8">
            <div className="text text-xl font-semibold mb-3">Mes Aptitudes.</div>
            <p className="text-justify mb-4">
              Je possède une solide expérience en marketing et techniques commerciales, avec une spécialisation en marketing digital. 
              Mon parcours m'a permis de développer des compétences en veille concurrentielle et en benchmarking, des outils essentiels 
              pour identifier les opportunités de marché et optimiser les stratégies de croissance. J'ai également une bonne maîtrise 
              des logiciels de conception graphique et de modélisation tels que Photoshop, Adobe et Blender, ainsi que des outils de 
              productivité comme le Pack Office et Canva.

              Grâce à mon intérêt pour l'analyse de données, j'utilise régulièrement Google Analytics pour affiner les stratégies 
              digitales et optimiser les performances. Je gère également les réseaux sociaux, où mes compétences en copywriting et 
              en SEO me permettent de créer des contenus attractifs et bien référencés. Enfin, j'ai une expérience avec les systèmes 
              de gestion de contenu (CMS) tels que WordPress et Shopify, ce qui m'aide à mettre en place des solutions digitales 
              performantes et adaptées aux besoins de chaque projet.
            </p>
            <a href="https://ayoubelmimouni.my.canva.site/portfolio" className="inline-block bg-crimson text-white text-lg font-medium py-2 px-4 mt-5 rounded-md border-2 border-crimson transition-all duration-300 hover:text-crimson hover:bg-transparent">
              Read more
            </a>
          </div>
          <div className="column w-1/2">
            <div className="bars mb-4">
              <div className="info flex mb-1 items-center justify-between">
                <span className="font-medium text-lg">Arab</span>
                <span>100%</span>
              </div>
              <div className="line h-1 w-full bg-gray-300 relative">
                <div className="absolute h-full left-0 top-0 bg-crimson w-full"></div>
              </div>
            </div>
            <div className="bars mb-4">
              <div className="info flex mb-1 items-center justify-between">
                <span className="font-medium text-lg">French-C1</span>
                <span>90%</span>
              </div>
              <div className="line h-1 w-full bg-gray-300 relative">
                <div className="absolute h-full left-0 top-0 bg-crimson w-[90%]"></div>
              </div>
            </div>
            <div className="bars mb-4">
              <div className="info flex mb-1 items-center justify-between">
                <span className="font-medium text-lg">English-B2</span>
                <span>80%</span>
              </div>
              <div className="line h-1 w-full bg-gray-300 relative">
                <div className="absolute h-full left-0 top-0 bg-crimson w-[80%]"></div>
              </div>
            </div>
            <div className="bars mb-4">
              <div className="info flex mb-1 items-center justify-between">
                <span className="font-medium text-lg">Spanish</span>
                <span>30%</span>
              </div>
              <div className="line h-1 w-full bg-gray-300 relative">
                <div className="absolute h-full left-0 top-0 bg-crimson w-[30%]"></div>
              </div>
            </div>
            <div className="bars mb-4">
              <div className="info flex mb-1 items-center justify-between">
                <span className="font-medium text-lg">German</span>
                <span>10%</span>
              </div>
              <div className="line h-1 w-full bg-gray-300 relative">
                <div className="absolute h-full left-0 top-0 bg-crimson w-[10%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}