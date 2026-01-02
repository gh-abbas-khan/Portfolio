emailjs.init('NMN5RxADrGKVMd5AR');

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.querySelector('.submit-btn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    showError('Please fill in all fields');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    await emailjs.send(
      'service_420pxtg',
      'template_g0jvs2x',
      {
        from_name: name,
        from_email: email,
        message: message
      }
    );

    showSuccess('✓ Message sent successfully!');
    contactForm.reset();

  } catch (error) {
    console.error('EmailJS Error:', error);
    showError('✗ Error sending message.');
  }

  submitBtn.disabled = false;
  submitBtn.textContent = 'Send Message';
});

function showSuccess(msg) {
  formStatus.textContent = msg;
  formStatus.className = 'form-status success';
  formStatus.style.display = 'block';
}

function showError(msg) {
  formStatus.textContent = msg;
  formStatus.className = 'form-status error';
  formStatus.style.display = 'block';
}

  // <!-- Modal JavaScript (must be AFTER the project items) -->


const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imageModalImg');
    const modalClose = document.getElementById('imageModalClose');

    document.querySelectorAll('.project-item').forEach(card => {
      card.addEventListener('click', () => {
        const imgSrc = card.getAttribute('data-image');
        if (!imgSrc) return;
        modalImg.src = imgSrc;
        modal.classList.add('open');
      });
    });

    function closeModal() {
      modal.classList.remove('open');
      modalImg.src = '';
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('image-modal-backdrop')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });