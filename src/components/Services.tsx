export default function Services() {
  const services = [
    {
      icon: "fas fa-paint-brush",
      title: "Web Design",
      description: "Creating beautiful and functional web designs that engage users and drive conversions."
    },
    {
      icon: "fas fa-chart-line",
      title: "Digital Marketing",
      description: "Developing comprehensive digital marketing strategies to boost your online presence."
    },
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Building responsive and modern websites using the latest technologies and best practices."
    }
  ]

  return (
    <section className="services py-24 text-white bg-gray-900" id="services">
      <div className="max-width">
        <h2 className="title relative text-center text-4xl font-medium mb-16 pb-5 font-ubuntu">
          My services
        </h2>
        <div className="serv-content flex flex-wrap items-center justify-between">
          {services.map((service, index) => (
            <div key={index} className="card w-1/3 bg-gray-800 text-center rounded-md p-12 cursor-pointer transition-all duration-300 hover:bg-crimson mb-5 mx-2">
              <div className="box transition-all duration-300 hover:scale-105">
                <i className={`${service.icon} text-5xl text-crimson transition-colors duration-300`}></i>
                <div className="text text-2xl font-medium my-3">{service.title}</div>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}