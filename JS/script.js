document.addEventListener("DOMContentLoaded", () => {
  // Prompt user for their name when the page loads
const userName = prompt("Welcome! Please enter your name:")

if (userName && userName.trim()) {
    document.getElementById("username").textContent = userName.trim()
    localStorage.setItem("portfolioUserName", userName.trim())
} else {
    // Check if name is saved in localStorage
    const savedName = localStorage.getItem("portfolioUserName")
    if (savedName) {
    document.getElementById("username").textContent = savedName
    }
}

  // Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
    })
}

  // Form validation and submission
const contactForm = document.getElementById("contact-form")
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

      // Get form elements
    const name = document.getElementById("contact-name")
    const email = document.getElementById("contact-email")
    const subject = document.getElementById("contact-subject")
    const message = document.getElementById("contact-message")

      // Get error elements
    const nameError = document.getElementById("name-error")
    const emailError = document.getElementById("email-error")
    const subjectError = document.getElementById("subject-error")
    const messageError = document.getElementById("message-error")

      // Reset errors
    ;[nameError, emailError, subjectError, messageError].forEach((error) => {
        if (error) error.classList.add("hidden")
    })

    let isValid = true

      // Validate name
    if (!name.value.trim()) {
        if (nameError) nameError.classList.remove("hidden")
        isValid = false
    }

      // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        if (emailError) emailError.classList.remove("hidden")
        isValid = false
    }

      // Validate subject
    if (!subject.value.trim()) {
        if (subjectError) subjectError.classList.remove("hidden")
        isValid = false
    }

      // Validate message
    if (!message.value.trim()) {
        if (messageError) messageError.classList.remove("hidden")
        isValid = false
    }

      // If form is valid, show success message
    if (isValid) {
        const successMessage = document.getElementById("success-message")
        const formValues = document.getElementById("form-values")

        if (formValues) {
            formValues.innerHTML = `
                <p><strong>Name:</strong> ${name.value}</p>
                <p><strong>Email:</strong> ${email.value}</p>
                <p><strong>Subject:</strong> ${subject.value}</p>
                <p><strong>Message:</strong> ${message.value}</p>
                `
        }

        if (successMessage) {
        successMessage.classList.remove("hidden")
          // Scroll to success message
        successMessage.scrollIntoView({ behavior: "smooth" })
        }

        // Reset form
        this.reset()
    }
    })
}

  // Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
        target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        })
        // Close mobile menu if open
        if (mobileMenu) {
        mobileMenu.classList.add("hidden")
        }
    }
    })
})
})

// Update welcome message function
function updateWelcome() {
const nameInput = document.getElementById("name-input")
const username = document.getElementById("username")

if (nameInput && username && nameInput.value.trim()) {
    const name = nameInput.value.trim()
    username.textContent = name
    localStorage.setItem("portfolioUserName", name)
    nameInput.value = ""
}
}
