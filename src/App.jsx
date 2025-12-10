import { useState,useEffect ,useRef } from 'react'
import './App.css'


function App() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialise l'angle de rotation à 0 degrés (au niveau du composant App)
  const [rotation, setRotation] = useState(0);

  // Fonction appelée lorsque l'image est cliquée
  const handleImageClick = () => {
    // Incrémente l'angle de 90 degrés à chaque clic en utilisant la valeur précédente
    setRotation(prev => prev + 30);
  };


  const [scanner, setScanner] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScanner = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scanner", handleScanner);
    return () => window.removeEventListener("scanner", handleScanner);
  }, []);





const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 3; // Ajuste la vitesse ici

    const scroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;

        // Réinitialiser la position quand on arrive à la fin
        if (scrollPosition >= scrollContainer.scrollWidth / 5) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition}
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll(); // Démarrer l'animation

    return () => cancelAnimationFrame(animationFrameId);
  }, []);



const services = [
  {
    id: "01",
    title: "Brand Identity Design",
    description:
      "Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates. Kits you need to create a true website within minutes."
  },
  {
    id: "02",
    title: "Visual Design",
    description:
      "Blend of artistic intuition with strategic insight to craft a visual identity."
  },
  {
    id: "03",
    title: "UX Research",
    description:
      "Blend of functionality with aesthetics to create delightful experiences."
  },
  {
    id: "04",
    title: "Art Direction",
    description:
      "Blend of strategic thinking and artistic finesse to craft a visual identity that goes beyond aesthetics."
  }
];


  const [blurredImages, setBlurredImages] = useState([]);

  // Données des images avec leurs positions spécifiques
  const images1 = [
    { 
      id: 1, 
      src: "/images/whatsapp-2025-11-18-14.09.16.jpeg", 
      alt: "LOPE",
      category: "lope",
      gridArea: "lope"
    },
    { 
      id: 2, 
      src: "/images/image-b.jpg", 
      alt: "B",
      category: "B", 
      gridArea: "b"
    },
    { 
      id: 3, 
      src: "/images/image-s.jpg", 
      alt: "S",
      category: "S",
      gridArea: "s"
    },
    { 
      id: 4, 
      src: "/images/video.jpg", 
      alt: "VIDEO",
      category: "VIDEO",
      gridArea: "video"
    },
    { 
      id: 5, 
      src: "/images/rendering.jpg", 
      alt: "RENDERING",
      category: "RENDERING",
      gridArea: "rendering"
    },
    { 
      id: 6, 
      src: "/images/microup.jpg", 
      alt: "MICROUP",
      category: "MICROUP",
      gridArea: "microup"
    },
  ];

  const handleImageClick2 = (imageId) => {
    setBlurredImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  const toggleAllBlur = () => {
    if (blurredImages.length === images.length) {
      setBlurredImages([]);
    } else {
      setBlurredImages(images.map(img => img.id));
    }
  };

 



 const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2 grandes + 3 petites
  const images = [
    { src: 'work1.jpg', text: 'GLASSES OF COCKTAIL' },
    { src: 'work2.jpg', text: 'A BRANCH WITH FLOWERS' },
    { src: 'work3.jpg', text: 'ORANGE ROSE FLOWER' },
    { src: 'work4.jpg', text: 'GREEN PLANT ON A DESK' },
    { src: 'work5.jpg', text: 'ORANGE ROSE FLOWER' },
  ];


  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  };


const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  };







 const testimonials = [
    {
      text: "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tionilo know ledige in about how.",
      name: "ZONATHON DOE",
      position: "CEO & Founder X",
      logo: "author1.jpg", // Chemin direct vers le logo
      type: 'large'
    },
    {
      text: "Hello planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tionilo know ledige in about how.",
      name: "METHALL DEV",
      position: "Managing Director – Terydeek",
      logo: "author2.jpg", // Chemin direct vers le logo
      type: 'large'
    },
    {
      text: "Asian planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tionilo know ledige in about how.",
      name: "MARTIN SMITH",
      position: "CEO & Founder Google",
      logo: "author3.jpg", // Chemin direct vers le logo
      type: 'small'
    },
    {
      text: "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tionilo know ledige in about how.",
      name: "ELIANA TWET",
      position: "CEO & Founder Tesla",
      logo: "author4.jpg", // Chemin direct vers le logo
      type: 'small'
    },
    {
      text: "Yelp planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tionilo know ledige in about how.",
      name: "HENRY CLARK",
      position: "Founder Coyzen",
      logo: "author5.jpg", // Chemin direct vers le logo
      type: 'small'
    }
  ];

  const largeCards = testimonials.filter(item => item.type === 'large');
  const smallCards = testimonials.filter(item => item.type === 'small');






  const stories = [
    {
        category: "POSTED ON AUG 28",
      title: "CREATE A LANDING PAGE THAT PERFORMS GREAT",
   
      img: "blog1.jpg"
    },
    {
         category: "POSTED ON AUG 28",
      title: "STARTING AND GROWING A CAREER IN WEB DESIGN",
    
      img: "blog2.jpg"
    },
    {
      category: "POSTED ON AUG 28",
      title: "HOW CAN DESIGNERS PREPARE FOR THE FUTURE?",
     
      img: "blog3.jpg"
    }
  ];






  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Message envoyé !");
  };



  return (
 <>
 
    {/* NAVBAR 
 <nav className={`fixed top-0 left-0 w-full bg-[#F4F3ED] py-2 md:py-4 z-50 ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <img src="logo.png" alt="Logo" className="w-14 md:w-20 m-2 md:m-5" />

<button className="md:hidden text-black text-3xl mr-1" onClick={() => setOpen(!open)}>
  ☰
</button>


    <ul className={`md:flex md:space-x-6 md:static absolute bg-[#F4F3ED] top-full left-0 w-full md:w-auto
            transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-4" : "max-h-0 md:max-h-none"}`}>

          <li><a href="#" style={{color:'black'}} className="block  px-4 py-2">HOME</a></li>
          <li><a href="#" style={{color:'black'}} className="block text-black px-4 py-2">ABOUT</a></li>
          <li><a href="#" style={{color:'black'}} className="block text-black px-4 py-2">SERVICE</a></li>
          <li><a href="#" style={{color:'black'}} className="block text-black px-4 py-2">PROJECTS</a></li>
          <li><a href="#" style={{color:'black'}} className="block text-black px-4 py-2">BLOG</a></li>
          <li><a href="#" style={{color:'black'}} className="block text-black px-4 py-2">CONTACT</a></li>
        </ul>

      </div>
    </nav>
     */}



    <div className="body"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center p-4">
  <h1 className='texte2'>
    NINO WALKER
  </h1>
  <div>
    <img 
      src="me.jpg"
      alt="Cliquez pour faire pivoter"
      onClick={handleImageClick}
      className="myImage"
      style={{ transform: `rotate(${rotation}deg)` }} 
    />
  </div>


<p className='texte1 '>
Hi, I’m Walker, a passionate UX<br /> 
Designer dedicated to creating<br />user-friendly 
digital<br />experiences.
<button className='boutton'>Get In  touch</button>
</p>

</div>


   <div class="bloc">
      <div class="flex -space-x-3 mb-2">
        <img src="01.jpg" className="w-15 h-15 rounded-full border-2 border-white" />
        <img src="02.jpg" className="w-15 h-15 rounded-full border-2 border-white" />
        <img src="03.jpg" className="w-15 h-15 rounded-full border-2 border-white" />
      </div>
       <p class="font-semibold text-2xl">
    100+ reviews <span class="text-gray-500 font-normal text-xl">(4.96 of 5)</span>
  </p>
  <p class="text-gray-600 text-lg">
    Five-star reviews from my <br />esteemed clients.
  </p>
      </div>
 



     <div className="body2 ">
        <p className="titre">Company I Worked With</p>

        <div className="horizontal-scroll-container overflow-hidden" ref={scrollContainerRef}>
          <div className="horizontal-scroll-content flex gap-6">
            <img src="partner1.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner2.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner3.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner4.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner5.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />

        
            <img src="partner1.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner2.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner3.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner4.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner5.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
          </div>
        </div>
<section className="about">
      <div className="about-container">

        <h3 className="about-title">About Me</h3>

        <p className="about-text">
          I am Nino Walker, a seasoned UX designer with over 8 years of
          experience in crafting intuitive and engaging digital experiences.
          My journey began with a background in graphic design, where I
          discovered my passion for understanding user behavior and
          translating it into seamless interactions.
        </p>

        <div className="about-stats">
          <div className="stat">
            <h2>8+</h2>
            <p>Years Of Experience</p>
          </div>
          <div className="stat">
            <h2>1k+</h2>
            <p>Completed Projects</p>
          </div>
          <div className="stat">
            <h2>90%+</h2>
            <p>Client Satisfactions</p>
          </div>
        </div>

      </div>
    </section>
      </div>




 

    <div className="services-container">
      <h1 className="services-title">SERVICES</h1>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-header">
              <span className="service-id">{service.id}</span>
              <span className="service-arrow">↗</span>
            </div>

            <h2 className="service-title">{service.title}</h2>

            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>








 <div className="app">
      <img src='work-scribble.svg' className="title" />

      {/* SECTION 1 — 2 GRANDES IMAGES */}
      <div className="big-section">
        {images.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="hover-container"
            onClick={() => openCarousel(index)}
          >
            <img src={item.src} alt="" />
            <div className="hover-text">{item.text}</div>
          </div>
        ))}
      </div>

      {/* SECTION 2 — 3 PETITES IMAGES */}
      <div className="small-section">
        {images.slice(2).map((item, index) => (
          <div
            key={index + 2}
            className="hover-container"
            onClick={() => openCarousel(index + 2)}
          >
            <img src={item.src} alt="" />
            <div className="hover-text">{item.text}</div>
          </div>
        ))}
         </div>

      {/* CARROUSEL MODAL */}
      {isCarouselOpen && (
        <div className="carousel-modal" onClick={closeCarousel}>
          <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeCarousel}>×</button>
            <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
            <img className="carousel-image" src={images[currentIndex].src} alt=""/>
            <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
            <div className="counter">{currentIndex + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </div>
 








 <div className="app2">
      <h1>Testimonials</h1>
      
      {/* Section des grandes cartes */}
      <div className="large-cards-section">
        {largeCards.map((testimonial, index) => (
          <div key={index} className="testimonial-card large">
            <div className="logo-container">
              <img 
                src={testimonial.logo} 
                alt={`${testimonial.position} logo`}
                className="company-logo"
                onError={(e) => {
                  // Fallback si l'image ne charge pas
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            
            <p className="testimonial-text">"{testimonial.text}"</p>
            
            <div className="testimonial-author">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section des petites cartes */}
      <div className="small-cards-section">
        {smallCards.map((testimonial, index) => (
          <div key={index} className="testimonial-card small">
            <div className="logo-container">
              <img 
                src={testimonial.logo} 
                alt={`${testimonial.position} logo`}
                className="company-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            
            <p className="testimonial-text">"{testimonial.text}"</p>
            
            <div className="testimonial-author">
              <h3>{testimonial.name}</h3> <p>{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>





<div className='body3'> 
 <div className="stories-container">
      <h1 className="title">STORIES</h1>

      {stories.map((item, i) => (
        <div key={i} className="story-card">
          <div className="image-wrapper">
            <img src={item.img} className="story-img" />
          </div>

          <div className="story-info">
            <p className="category">{item.category}</p>
            <h2 className="story-title">{item.title}</h2>
       
            <button className="btn">Read more →</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  



 <div className="contact-section">

      <h2 className="title">CONTACT ME</h2>

      <div className="container">

        {/* LEFT SIDE */}
        <div className="left">📍 
          <h3>OUR OFFICE:</h3>
          <p>Jurain, Dhaka Bangladesh</p>

         📞 <h3> CONTACT NUMBER:</h3>
          <p>+123 456 789</p>

         ✉️<h3>EMAIL US:</h3>
          <p>welakestorm@gmail.com</p>

          <h3>SOCIALS:</h3>
          <div className="socials">
            <button>FB</button>
            <button>X</button>
            <button>IN</button>
            <button>GIT</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="right" onSubmit={handleSubmit}>
          <div className="row">
            
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />  
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="send-button">Send Me Message ✉️</button>
        </form>
      </div>
      <h1 className="big-title">LET'S WORK</h1>
    </div>












    </>
  );
}

export default App










    {/* 







import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [open, setOpen] = useState(false);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageClick = () => setRotation(prev => prev + 30);

  // Scroll horizontal infini
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full bg-[#F4F3ED] py-2 md:py-4 z-50 ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <img src="logo.png" alt="Logo" className="w-14 md:w-20 m-2 md:m-5" />

          <button 
            className="md:hidden text-black text-3xl mr-2" 
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <ul className={`md:flex md:space-x-6 md:static absolute bg-[#F4F3ED] top-full left-0 w-full md:w-auto
            transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-4" : "max-h-0 md:max-h-none"}`}>
            <li><a href="#" className="block px-4 py-2 text-black">HOME</a></li>
            <li><a href="#" className="block px-4 py-2 text-black">ABOUT</a></li>
            <li><a href="#" className="block px-4 py-2 text-black">SERVICE</a></li>
            <li><a href="#" className="block px-4 py-2 text-black">PROJECTS</a></li>
            <li><a href="#" className="block px-4 py-2 text-black">BLOG</a></li>
            <li><a href="#" className="block px-4 py-2 text-black">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      <div className="body relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center p-4">
          <h1 className="texte text-5xl font-extrabold">NINO WALKER</h1>
          <div className="my-4">
            <img 
              src="me.jpg"
              alt="Cliquez pour faire pivoter"
              onClick={handleImageClick}
              className="mx-auto w-40 h-40 object-cover rounded-full"
              style={{ transform: `rotate(${rotation}deg)` }} 
            />
          </div>

          <p className="texte1 text-lg mt-4 mb-4">
            Hi, I’m Walker, a passionate UX<br /> 
            Designer dedicated to creating<br />user-friendly digital<br />experiences.
          </p>
          <button className="boutton bg-blue-600 text-white px-6 py-2 rounded-full">Get In Touch</button>
        </div>
      </div>

      <div className="bloc mt-40 text-center">
        <div className="flex justify-center -space-x-3 mb-2">
          <img src="01.jpg" className="w-12 h-12 rounded-full border-2 border-white" />
          <img src="02.jpg" className="w-12 h-12 rounded-full border-2 border-white" />
          <img src="03.jpg" className="w-12 h-12 rounded-full border-2 border-white" />
        </div>
        <p className="font-semibold text-2xl">
          100+ reviews <span className="text-gray-500 font-normal text-xl">(4.96 of 5)</span>
        </p>
        <p className="text-gray-600 text-lg mt-2">
          Five-star reviews from my esteemed clients.
        </p>
      </div>

      <div className="body2 mt-20 px-6">
        <p className="titre text-2xl font-bold text-center mb-4">Company I Worked With</p>

        <div className="horizontal-scroll-container overflow-hidden" ref={scrollContainerRef}>
          <div className="horizontal-scroll-content flex gap-6">
            <img src="partner1.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner2.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner3.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner4.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner5.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />

        Dupliquer les logos pour l'effet infini 
            <img src="partner1.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner2.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner3.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner4.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
            <img src="partner5.png" alt="logo" className="scroll-item w-40 h-20 object-contain" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

*/}