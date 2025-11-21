document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('contact-phone');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const successMessage = document.getElementById('form-success');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;

    function validateName() {
        const name = nameInput.value.trim();
        const errorElement = document.getElementById('name-error');
        
        if (name === '') {
            showError(nameInput, errorElement, 'El nombre es requerido');
            return false;
        } else if (name.length < 2) {
            showError(nameInput, errorElement, 'El nombre debe tener al menos 2 caracteres');
            return false;
        } else {
            showSuccess(nameInput, errorElement);
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const errorElement = document.getElementById('email-error');
        
        if (email === '') {
            showError(emailInput, errorElement, 'El email es requerido');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, errorElement, 'Por favor ingresa un email válido');
            return false;
        } else {
            showSuccess(emailInput, errorElement);
            return true;
        }
    }

    function validatePhone() {
        const phone = phoneInput.value.trim();
        const errorElement = document.getElementById('phone-error');
        
        if (phone === '') {
            showSuccess(phoneInput, errorElement);
            return true;
        } else if (!phoneRegex.test(phone)) {
            showError(phoneInput, errorElement, 'Por favor ingresa un teléfono válido');
            return false;
        } else if (phone.replace(/\D/g, '').length < 7) {
            showError(phoneInput, errorElement, 'El teléfono debe tener al menos 7 dígitos');
            return false;
        } else {
            showSuccess(phoneInput, errorElement);
            return true;
        }
    }

    function validateSubject() {
        const subject = subjectInput.value.trim();
        const errorElement = document.getElementById('subject-error');
        
        if (subject === '') {
            showError(subjectInput, errorElement, 'El asunto es requerido');
            return false;
        } else if (subject.length < 3) {
            showError(subjectInput, errorElement, 'El asunto debe tener al menos 3 caracteres');
            return false;
        } else {
            showSuccess(subjectInput, errorElement);
            return true;
        }
    }

    function validateMessage() {
        const message = messageInput.value.trim();
        const errorElement = document.getElementById('message-error');
        
        if (message === '') {
            showError(messageInput, errorElement, 'El mensaje es requerido');
            return false;
        } else if (message.length < 10) {
            showError(messageInput, errorElement, 'El mensaje debe tener al menos 10 caracteres');
            return false;
        } else {
            showSuccess(messageInput, errorElement);
            return true;
        }
    }

    function showError(input, errorElement, message) {
        input.classList.remove('valid');
        input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    function showSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('valid');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
    }

    function clearErrors() {
        const inputs = [nameInput, emailInput, phoneInput, subjectInput, messageInput];
        inputs.forEach(input => {
            input.classList.remove('error', 'valid');
            const errorId = input.id.replace('contact-', '') + '-error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.classList.remove('show');
            }
        });
    }

    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);

    nameInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const errorElement = document.getElementById('name-error');
            if (this.value.trim() !== '') {
                this.classList.remove('error');
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            }
        }
    });

    emailInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const errorElement = document.getElementById('email-error');
            if (this.value.trim() !== '') {
                this.classList.remove('error');
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            }
        }
    });

    phoneInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const errorElement = document.getElementById('phone-error');
            if (this.value.trim() !== '') {
                this.classList.remove('error');
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            }
        }
    });

    subjectInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const errorElement = document.getElementById('subject-error');
            if (this.value.trim() !== '') {
                this.classList.remove('error');
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            }
        }
    });

    messageInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const errorElement = document.getElementById('message-error');
            if (this.value.trim() !== '') {
                this.classList.remove('error');
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            }
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (successMessage) {
            successMessage.style.display = 'none';
        }

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
            const submitBtn = form.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
            }

            setTimeout(function() {
                if (successMessage) {
                    successMessage.style.display = 'block';
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                form.reset();
                clearErrors();

                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar mensaje';
                }

                setTimeout(function() {
                    if (successMessage) {
                        successMessage.style.display = 'none';
                    }
                }, 5000);
            }, 1000);
        } else {
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });
});

