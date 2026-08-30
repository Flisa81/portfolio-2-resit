const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const fields = {
    name: contactForm.elements.name,
    email: contactForm.elements.email,
    telephone: contactForm.elements.telephone,
    message: contactForm.elements.message,
  };

  const validators = {
    name(value) {
      const letterCount = value.match(/\p{L}/gu)?.length ?? 0;
      if (!value.trim()) return "Please enter your name.";
      if (letterCount < 5) return "Your name must contain at least five letters.";
      if (!/^[\p{L}' -]+$/u.test(value.trim())) return "Use letters, spaces, apostrophes, or hyphens only.";
      return "";
    },
    email(value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!value.trim()) return "Please enter your email address.";
      if (value.trim().length < 8) return "Your email must contain at least eight characters.";
      if (!emailPattern.test(value.trim())) return "Enter a valid email address, for example name@example.com.";
      return "";
    },
    telephone(value) {
      const digitCount = value.match(/\d/g)?.length ?? 0;
      if (!value.trim()) return "Please enter your telephone number.";
      if (!/^[+\d\s()-]+$/.test(value.trim())) return "Use digits and common telephone symbols only.";
      if (digitCount < 10) return "Your telephone number must contain at least ten digits.";
      return "";
    },
    message(value) {
      if (!value.trim()) return "Please enter a message.";
      if (value.trim().length < 30) return "Your message must contain at least 30 characters.";
      return "";
    },
  };

  function validateField(fieldName) {
    const field = fields[fieldName];
    const error = validators[fieldName](field.value);
    const errorElement = document.getElementById(`${fieldName}-error`);

    field.setAttribute("aria-invalid", String(Boolean(error)));
    errorElement.textContent = error;
    return !error;
  }

  Object.keys(fields).forEach((fieldName) => {
    fields[fieldName].addEventListener("blur", () => validateField(fieldName));
    fields[fieldName].addEventListener("input", () => {
      if (fields[fieldName].getAttribute("aria-invalid") === "true") {
        validateField(fieldName);
      }
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fieldNames = Object.keys(fields);
    const isValid = fieldNames.map(validateField).every(Boolean);
    const status = document.getElementById("form-status");

    if (!isValid) {
      status.textContent = "Please correct the highlighted fields.";
      const firstInvalidField = fieldNames.find(
        (fieldName) => fields[fieldName].getAttribute("aria-invalid") === "true",
      );
      fields[firstInvalidField].focus();
      return;
    }

    const formValues = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      telephone: fields.telephone.value.trim(),
      message: fields.message.value.trim(),
    };

    console.log("Get in touch form submitted:", formValues);
    status.textContent = "Thanks! Your details were validated and logged to the console.";
    contactForm.reset();
    fieldNames.forEach((fieldName) => fields[fieldName].removeAttribute("aria-invalid"));
  });
}
