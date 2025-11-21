document.addEventListener('DOMContentLoaded', function() {
    if (typeof faqs === 'undefined') {
        console.error('FAQs array not found!');
        return;
    }

    const faqsList = document.getElementById('faqs-list');
    if (!faqsList) {
        console.error('FAQs list container not found!');
        return;
    }

    faqsList.innerHTML = '';

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.setAttribute('data-faq-id', faq.id);
        
        const faqHeader = document.createElement('div');
        faqHeader.className = 'faq-header';
        faqHeader.setAttribute('role', 'button');
        faqHeader.setAttribute('tabindex', '0');
        faqHeader.setAttribute('aria-expanded', 'false');
        faqHeader.setAttribute('aria-controls', `faq-answer-${faq.id}`);
        
        const faqQuestion = document.createElement('h3');
        faqQuestion.className = 'faq-question';
        faqQuestion.textContent = faq.question;
        
        const faqIcon = document.createElement('div');
        faqIcon.className = 'faq-icon';
        faqIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        `;
        
        faqHeader.appendChild(faqQuestion);
        faqHeader.appendChild(faqIcon);
        
        const faqAnswer = document.createElement('div');
        faqAnswer.className = 'faq-answer';
        faqAnswer.id = `faq-answer-${faq.id}`;
        faqAnswer.setAttribute('role', 'region');
        faqAnswer.setAttribute('aria-labelledby', `faq-question-${faq.id}`);
        
        const faqAnswerText = document.createElement('p');
        faqAnswerText.textContent = faq.answer;
        
        faqAnswer.appendChild(faqAnswerText);
        
        faqItem.appendChild(faqHeader);
        faqItem.appendChild(faqAnswer);
        
        faqHeader.addEventListener('click', function() {
            toggleFaq(faqItem, faqHeader, faqAnswer);
        });
        
        faqHeader.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFaq(faqItem, faqHeader, faqAnswer);
            }
        });
        
        faqsList.appendChild(faqItem);
    });
});

function toggleFaq(faqItem, faqHeader, faqAnswer) {
    const isExpanded = faqHeader.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
        faqItem.classList.remove('active');
        faqHeader.setAttribute('aria-expanded', 'false');
        faqAnswer.style.maxHeight = null;
    } else {
        const allFaqItems = document.querySelectorAll('.faq-item');
        allFaqItems.forEach(item => {
            if (item !== faqItem && item.classList.contains('active')) {
                const header = item.querySelector('.faq-header');
                const answer = item.querySelector('.faq-answer');
                item.classList.remove('active');
                header.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = null;
            }
        });
        
        faqItem.classList.add('active');
        faqHeader.setAttribute('aria-expanded', 'true');
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        
        setTimeout(() => {
            faqItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

