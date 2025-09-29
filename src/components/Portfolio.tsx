export default function Portfolio() {
  const portfolioItems = [
    {
      image: "/images/3.png",
      title: "Marketing Campaign",
      description: "A comprehensive digital marketing campaign that increased brand awareness by 150% and generated significant ROI for the client."
    },
    {
      image: "/images/4.png", 
      title: "Brand Identity Design",
      description: "Complete brand identity design including logo, color palette, and marketing materials for a tech startup."
    },
    {
      image: "/images/5.png",
      title: "Social Media Strategy",
      description: "Developed and executed a social media strategy that grew followers by 300% and increased engagement rates."
    },
    {
      image: "/images/7.png",
      title: "Website Redesign",
      description: "Complete website redesign that improved user experience and increased conversion rates by 45%."
    },
    {
      image: "/images/8.png",
      title: "Content Marketing",
      description: "Created a content marketing strategy that positioned the brand as an industry thought leader."
    }
  ]

  return (
    <section className="teams py-24 text-white bg-gray-900" id="teams">
      <div className="max-width">
        <h2 className="title relative text-center text-4xl font-medium mb-16 pb-5 font-ubuntu">
          Mon Portfolio
        </h2>
        <div className="carousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="card bg-gray-800 rounded-md p-8 text-center overflow-hidden transition-all duration-300 hover:bg-crimson h-96 flex flex-col">
              <div className="box flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 h-full">
                <img src={item.image} alt={item.title} className="h-32 w-32 object-cover rounded-full border-4 border-crimson transition-all duration-300 mb-4" />
                <div className="text text-2xl font-medium my-3">{item.title}</div>
                <p className="text-sm leading-relaxed mt-auto overflow-hidden line-clamp-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}