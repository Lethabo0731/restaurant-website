import { useState } from "react"
import {
  FiArrowRight,
  FiArrowDown,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiMenu,
  FiX,
  FiCheck,
} from "react-icons/fi"
import "./App.css"

function App() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [reservationSubmitted, setReservationSubmitted] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const menuItems = [
    {
      name: "Burrata & Heirloom Tomato",
      description:
        "Fresh burrata, heirloom tomatoes, basil oil and aged balsamic.",
      price: "R145",
      category: "Starters",
      image:
        "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "French Onion Soup",
      description:
        "Slow-cooked onions, rich beef broth, toasted sourdough and Gruyère.",
      price: "R125",
      category: "Starters",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Seared Scallops",
      description:
        "Pan-seared scallops, cauliflower purée, herbs and citrus beurre blanc.",
      price: "R175",
      category: "Starters",
      image:
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Wild Mushroom Risotto",
      description:
        "Creamy arborio rice, forest mushrooms, parmesan and fresh herbs.",
      price: "R185",
      category: "Mains",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Seared Salmon",
      description:
        "Atlantic salmon, seasonal vegetables and lemon beurre blanc.",
      price: "R245",
      category: "Mains",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Truffle Pasta",
      description:
        "Handmade pasta, black truffle, parmesan and silky cream sauce.",
      price: "R210",
      category: "Mains",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Slow-Braised Beef",
      description:
        "Tender braised beef, creamy mash, seasonal vegetables and red wine jus.",
      price: "R265",
      category: "Mains",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Chocolate Fondant",
      description:
        "Warm dark chocolate fondant with a rich molten centre and vanilla ice cream.",
      price: "R120",
      category: "Desserts",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Crème Brûlée",
      description:
        "Classic vanilla custard finished with a delicate caramelised sugar crust.",
      price: "R110",
      category: "Desserts",
      image:
        "https://simplyhomecooked.com/wp-content/uploads/2023/01/creme-brulee-recipe-6.jpg",
    },
    {
      name: "Lemon Tart",
      description:
        "Silky lemon curd, buttery pastry and lightly whipped cream.",
      price: "R115",
      category: "Desserts",
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80",
    },
  ]

  const filteredMenu =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })

    setMobileMenuOpen(false)
  }

  const handleReservation = (event) => {
    event.preventDefault()

    setReservationSubmitted(true)

    setTimeout(() => {
      setReservationSubmitted(false)
    }, 5000)

    event.target.reset()
  }

  const handleContact = (event) => {
    event.preventDefault()

    setContactSubmitted(true)

    setTimeout(() => {
      setContactSubmitted(false)
    }, 5000)

    event.target.reset()
  }

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">
        <div className="nav-container">

          <button
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            SAVORÉ
          </button>

          <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("menu")}>
              Menu
            </button>

            <button onClick={() => scrollToSection("gallery")}>
              Gallery
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>

            <button
              className="nav-reserve"
              onClick={() => scrollToSection("reservation")}
            >
              Reserve a Table
            </button>

          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </header>


      {/* =========================
          HERO
      ========================= */}

      <section className="hero" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="eyebrow hero-eyebrow">
            Fine Dining · Since 2012
          </p>

          <h1>
            A taste
            <span> worth remembering.</span>
          </h1>

          <div className="hero-divider"></div>

          <p className="hero-description">
            Contemporary cuisine, thoughtful ingredients and unforgettable
            evenings in the heart of the city.
          </p>

          <div className="hero-buttons">

            <button
              className="button button-primary"
              onClick={() => scrollToSection("menu")}
            >
              Explore Our Menu
              <FiArrowRight />
            </button>

            <button
              className="button button-outline"
              onClick={() => scrollToSection("reservation")}
            >
              Reserve a Table
            </button>

          </div>

        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollToSection("about")}
        >
          <span>Scroll to explore</span>
          <FiArrowDown />
        </button>

      </section>


      {/* =========================
          ABOUT
      ========================= */}

      <section className="about section" id="about">

        <div className="about-grid container">

          <div className="about-image-wrapper">

            <img
              className="about-image"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
              alt="Savoré restaurant interior"
            />

            <div className="experience-card">
              <strong>12</strong>

              <span>
                Years of
                <br />
                Excellence
              </span>
            </div>

          </div>

          <div className="about-content">

            <p className="section-label">
              Our Story
            </p>

            <h2>
              Where every dish
              <span> tells a story.</span>
            </h2>

            <p>
              SAVORÉ was born from a simple belief: dining should be more than
              a meal. It should be an experience that stays with you long after
              the last bite.
            </p>

            <p>
              Our kitchen brings together seasonal ingredients, modern
              techniques and timeless flavours to create dishes that feel both
              familiar and extraordinary.
            </p>

            <button
              className="text-link"
              onClick={() => scrollToSection("menu")}
            >
              Discover our menu
              <FiArrowRight />
            </button>

          </div>

        </div>

      </section>


      {/* =========================
          EXPERIENCE
      ========================= */}

      <section className="experience section">

        <div className="container">

          <div className="section-heading centered">

            <p className="section-label">
              The Savoré Experience
            </p>

            <h2>
              Crafted with
              <span> intention.</span>
            </h2>

            <p>
              From the kitchen to your table, every detail is thoughtfully
              considered.
            </p>

          </div>

          <div className="experience-grid">

            <div className="experience-item">

              <span className="experience-number">
                01
              </span>

              <h3>
                Seasonal Ingredients
              </h3>

              <p>
                We work with fresh, carefully selected ingredients that
                celebrate the best of every season.
              </p>

            </div>

            <div className="experience-item">

              <span className="experience-number">
                02
              </span>

              <h3>
                Thoughtful Cuisine
              </h3>

              <p>
                Classic techniques meet modern creativity in every dish that
                leaves our kitchen.
              </p>

            </div>

            <div className="experience-item">

              <span className="experience-number">
                03
              </span>

              <h3>
                Warm Hospitality
              </h3>

              <p>
                Expect attentive service, relaxed elegance and an atmosphere
                designed for memorable moments.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          MENU
      ========================= */}

      <section className="menu section" id="menu">

        <div className="container">

          <div className="section-heading centered">

            <p className="section-label">
              Our Menu
            </p>

            <h2>
              Simple ingredients.
              <span> Beautifully prepared.</span>
            </h2>

            <p>
              A selection of signature dishes created with care and served
              with intention.
            </p>

          </div>

          <div className="menu-categories">

            {["All", "Starters", "Mains", "Desserts"].map(
              (category) => (
                <button
                  key={category}
                  className={`category ${
                    activeCategory === category
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              )
            )}

          </div>

          <div className="menu-grid">

            {filteredMenu.map((item) => (

              <article
                className="menu-card"
                key={item.name}
              >

                <div className="menu-image-wrapper">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <span className="menu-category">
                    {item.category}
                  </span>

                </div>

                <div className="menu-card-content">

                  <div className="menu-card-top">

                    <h3>
                      {item.name}
                    </h3>

                    <span className="menu-price">
                      {item.price}
                    </span>

                  </div>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          GALLERY
      ========================= */}

      <section className="gallery section" id="gallery">

        <div className="container">

          <div className="section-heading centered">

            <p className="section-label">
              Gallery
            </p>

            <h2>
              A glimpse of
              <span> Savoré.</span>
            </h2>

          </div>

          <div className="gallery-grid">

            <div className="gallery-item gallery-large">

              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85"
                alt="Restaurant dining"
              />

            </div>

            <div className="gallery-item">

              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85"
                alt="Fine dining dish"
              />

            </div>

            <div className="gallery-item">

              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85"
                alt="Restaurant interior"
              />

            </div>

            <div className="gallery-item gallery-wide">

              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85"
                alt="Elegant restaurant table"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          RESERVATION
      ========================= */}

      <section
        className="reservation section"
        id="reservation"
      >

        <div className="reservation-grid container">

          <div className="reservation-info">

            <p className="section-label">
              Reservations
            </p>

            <h2>
              Your table
              <span> awaits.</span>
            </h2>

            <p>
              Join us for an evening of thoughtful cuisine, beautiful
              surroundings and warm hospitality.
            </p>

            <div className="reservation-details">

              <div>

                <FiCalendar />

                <div>

                  <strong>
                    Opening Hours
                  </strong>

                  <span>
                    Tuesday – Sunday
                  </span>

                  <span>
                    12:00 – 22:30
                  </span>

                </div>

              </div>

              <div>

                <FiMapPin />

                <div>

                  <strong>
                    Find Us
                  </strong>

                  <span>
                    18 Heritage Lane
                  </span>

                  <span>
                    Johannesburg, South Africa
                  </span>

                </div>

              </div>

            </div>

          </div>


          <div className="reservation-form-wrapper">

            {reservationSubmitted ? (

              <div className="success-message">

                <div className="success-icon">
                  <FiCheck />
                </div>

                <h3>
                  Reservation Request Received
                </h3>

                <p>
                  Thank you. We have received your reservation request and
                  will be in touch shortly.
                </p>

              </div>

            ) : (

              <form
                className="reservation-form"
                onSubmit={handleReservation}
              >

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      Guests
                    </label>

                    <select
                      required
                      defaultValue=""
                    >

                      <option
                        value=""
                        disabled
                      >
                        Select
                      </option>

                      <option>
                        1 Guest
                      </option>

                      <option>
                        2 Guests
                      </option>

                      <option>
                        3 Guests
                      </option>

                      <option>
                        4 Guests
                      </option>

                      <option>
                        5 Guests
                      </option>

                      <option>
                        6+ Guests
                      </option>

                    </select>

                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Date
                    </label>

                    <div className="input-with-icon">

                      <FiCalendar />

                      <input
                        type="date"
                        required
                      />

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Time
                    </label>

                    <div className="input-with-icon">

                      <FiClock />

                      <input
                        type="time"
                        required
                      />

                    </div>

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Special Requests
                  </label>

                  <textarea
                    placeholder="Optional"
                    rows="4"
                  ></textarea>

                </div>


                <button
                  className="button button-primary full-width"
                >
                  Request a Reservation
                  <FiArrowRight />
                </button>


                <p className="form-note">
                  Reservations are confirmed by our team via email.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}

      <section
        className="contact section"
        id="contact"
      >

        <div className="container">

          <div className="section-heading centered">

            <p className="section-label">
              Get In Touch
            </p>

            <h2>
              We'd love to
              <span> hear from you.</span>
            </h2>

          </div>


          <div className="contact-grid">

            <div className="contact-info">

              <div className="contact-detail">

                <FiMapPin />

                <div>

                  <strong>
                    Address
                  </strong>

                  <span>
                    18 Heritage Lane
                  </span>

                  <span>
                    Johannesburg, South Africa
                  </span>

                </div>

              </div>


              <div className="contact-detail">

                <FiPhone />

                <div>

                  <strong>
                    Phone
                  </strong>

                  <span>
                    +27 11 555 0123
                  </span>

                </div>

              </div>


              <div className="contact-detail">

                <FiMail />

                <div>

                  <strong>
                    Email
                  </strong>

                  <span>
                    hello@savore.co.za
                  </span>

                </div>

              </div>

            </div>


            <div className="contact-form-wrapper">

              {contactSubmitted ? (

                <div className="success-message compact">

                  <div className="success-icon">
                    <FiCheck />
                  </div>

                  <h3>
                    Message Sent
                  </h3>

                  <p>
                    Thank you for reaching out. We'll get back to you soon.
                  </p>

                </div>

              ) : (

                <form
                  className="contact-form"
                  onSubmit={handleContact}
                >

                  <div className="form-row">

                    <div className="form-group">

                      <label>
                        Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                      />

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Message
                    </label>

                    <textarea
                      placeholder="How can we help?"
                      rows="6"
                      required
                    ></textarea>

                  </div>


                  <button className="button button-primary">
                    Send Message
                    <FiArrowRight />
                  </button>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="container">

          <div className="footer-grid">

            <div className="footer-brand">

              <button
                className="logo"
                onClick={() => scrollToSection("home")}
              >
                SAVORÉ
              </button>

              <p>
                Contemporary dining.
                <br />
                Thoughtfully created.
              </p>

              <div className="social-links">

                <a
                  href="#instagram"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>

                <a
                  href="#facebook"
                  aria-label="Facebook"
                >
                  <FiFacebook />
                </a>

              </div>

            </div>


            <div className="footer-column">

              <h4>
                Explore
              </h4>

              <button
                onClick={() => scrollToSection("about")}
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("menu")}
              >
                Menu
              </button>

              <button
                onClick={() => scrollToSection("gallery")}
              >
                Gallery
              </button>

              <button
                onClick={() => scrollToSection("reservation")}
              >
                Reservations
              </button>

            </div>


            <div className="footer-column">

              <h4>
                Visit
              </h4>

              <span>
                18 Heritage Lane
              </span>

              <span>
                Johannesburg
              </span>

              <span>
                South Africa
              </span>

            </div>


            <div className="footer-column">

              <h4>
                Hours
              </h4>

              <span>
                Tuesday – Sunday
              </span>

              <span>
                12:00 – 22:30
              </span>

              <span>
                Monday — Closed
              </span>

            </div>

          </div>


          <div className="footer-bottom">

            <span>
              © 2026 SAVORÉ. All rights reserved.
            </span>

            <span>
              Designed with intention.
            </span>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default App