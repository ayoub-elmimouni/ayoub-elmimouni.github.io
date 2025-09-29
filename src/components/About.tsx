export default function About() {
  const downloadCV = () => {
    // Add your CV download logic here
    console.log('Download CV clicked')
  }

  return (
    <section className="about py-24" id="about">
      <div className="max-width">
        <h2 className="title relative text-center text-4xl font-medium mb-16 pb-5 font-ubuntu">
          About me
        </h2>
        <div className="about-content flex flex-wrap items-center justify-between">
          <div className="left w-2/5">
            <img src="/images/555.jpeg" alt="Profile" className="h-96 w-96 object-cover rounded-md" />
          </div>
          <div className="right w-3/5">
            <div className="text text-2xl font-semibold mb-3">
              I'm El Mimouni Ayoub and I'm a <span className="text-crimson">Marketing Student</span>
            </div>
            <p className="text-justify">
              I am a passionate marketing student with a strong interest in digital marketing, content creation, and brand development. 
              Currently pursuing my studies while gaining practical experience through various projects and internships. 
              I enjoy creating engaging content, analyzing market trends, and developing innovative marketing strategies. 
              My goal is to become a successful digital marketer and help businesses grow their online presence.
            </p>
            <a href="#" onClick={downloadCV} className="inline-block bg-crimson text-white text-xl font-medium py-3 px-8 mt-5 rounded-md border-2 border-crimson transition-all duration-300 hover:text-crimson hover:bg-transparent">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}