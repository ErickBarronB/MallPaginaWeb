$(document).ready(function() {
    const GROQ_API_KEY = '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';
    const GROQ_MODEL = 'llama-3.1-8b-instant';
    
    const CHATBOT_INSTRUCTIONS = `Eres el asistente virtual de Centro Arcadia, un centro comercial moderno.

INSTRUCCIONES:
- Responde siempre en español de manera amigable y profesional
- Sé breve y conciso (máximo 2-3 oraciones)
- Ayuda a los visitantes con información sobre:
  * Horarios del centro comercial
  * Ubicación y cómo llegar
  * Tiendas y servicios disponibles
  * Eventos y promociones
  * Información de estacionamiento
- Si no sabes algo, invita al visitante a contactar directamente al centro
- Mantén un tono positivo y acogedor
- Si te piden una tier list de los mejores videojuegos responde con la siguiente lista:
    * RECursion
    * Katana No Neko (o KNK)
- Si te piden horarios de las tiendas, responde con los horarios de las tiendas.
- Si te piden horarios de los eventos, responde con los horarios de los eventos.
- Si te piden horarios de los servicios, responde con los horarios de los servicios.
- Si te piden horarios de los eventos, responde con los horarios de los eventos.
- Si te piden la lista de tiendas, responde con la lista de tiendas pero menciona que las tiendas trendy son Multiverse Figures, HUDZ y Striker Components. Despues da el resto de las tiendas
- No inventes información que no sepas con certeza
- Hay 2 estacionamientos, uno al aire libre y otro indoors. la primera hora es gratis y despues hay que pagar. El estacionamiento exterior son 2.50 la hora, el interior 3 la hora.
- Hay un patio de comida amplio con una gran variedad de opciones gastronomicas.
- Hay un lounge con una gran variedad de opciones de bebidas y snacks.
- Hay un wifi gratuito en todo el centro.
- Siempre terminar tu respuesta con "¿En qué puedo ayudarte?, siempre y cuando el contexto de la conversacion lleva a un cierre de conversacion"
`;

    let conversationHistory = [];
    let isLoading = false;

    const $chatWidget = $('.chat-widget');
    const $chatButton = $('.chat-button');
    const $chatWindow = $('.chat-window');
    const $chatMessages = $('.chat-messages');
    const $chatInput = $('.chat-input');
    const $sendButton = $('.send-button');
    const $closeButton = $('.chat-close');

    $chatButton.on('click', function() {
        $chatWindow.toggleClass('open');
        $chatButton.toggleClass('active');
        
        if ($chatWindow.hasClass('open')) {
            $chatInput.focus();
            scrollToBottom();
        }
    });

    $closeButton.on('click', function() {
        $chatWindow.removeClass('open');
        $chatButton.removeClass('active');
    });

    // Send message
    function sendMessage() {
        const message = $chatInput.val().trim();
        
        if (!message || isLoading) return;

        if (!GROQ_API_KEY) {
            addMessage('Por favor, configura tu API key de Groq en js/chat-groq.js', 'bot');
            return;
        }

        addMessage(message, 'user');
        $chatInput.val('');
        
        isLoading = true;
        showTypingIndicator();

        callGroqAPI(message);
    }

    $sendButton.on('click', sendMessage);

    $chatInput.on('keypress', function(e) {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    function addMessage(text, sender) {
        const $messageDiv = $('<div>').addClass('message').addClass(sender);
        const $messageContent = $('<div>').addClass('message-content').text(text);
        $messageDiv.append($messageContent);
        $chatMessages.append($messageDiv);
        scrollToBottom();
    }

    function showTypingIndicator() {
        const $typingDiv = $('<div>').addClass('message bot typing');
        const $typingContent = $('<div>').addClass('message-content');
        $typingContent.html('<span></span><span></span><span></span>');
        $typingDiv.append($typingContent);
        $chatMessages.append($typingDiv);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        $chatMessages.find('.typing').remove();
    }

    function scrollToBottom() {
        $chatMessages.scrollTop($chatMessages[0].scrollHeight);
    }

    function callGroqAPI(userMessage) {
        const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
        
        const messages = [];
        
        messages.push({
            role: 'system',
            content: CHATBOT_INSTRUCTIONS
        });
        

        const recentHistory = conversationHistory.slice(-10);
        recentHistory.forEach(msg => {
            messages.push({
                role: msg.role === 'assistant' ? 'assistant' : 'user',
                content: msg.content
            });
        });
        
        messages.push({
            role: 'user',
            content: userMessage
        });

        console.log('Calling Groq API with model:', GROQ_MODEL);
        
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages: messages,
                temperature: 0.7,
                max_tokens: 512
            })
        })
        .then(async response => {
            const data = await response.json();
            console.log('Groq response:', data);

            isLoading = false;
            removeTypingIndicator();

            if (!response.ok) {
                if (response.status === 401) {
                    addMessage('API key inválida. Por favor, verifica tu clave en js/chat-groq.js', 'bot');
                } else if (response.status === 429) {
                    addMessage('Límite de solicitudes alcanzado. Por favor, espera un momento.', 'bot');
                } else {
                    addMessage(`Error ${response.status}: ${data.error?.message || 'Error desconocido'}`, 'bot');
                }
                return;
            }

            const botResponse = data.choices?.[0]?.message?.content || 'Lo siento, no pude generar una respuesta.';

            addMessage(botResponse.trim(), 'bot');
            
            conversationHistory.push({ role: 'user', content: userMessage });
            conversationHistory.push({ role: 'assistant', content: botResponse.trim() });
        })
        .catch(error => {
            isLoading = false;
            removeTypingIndicator();

            console.error('Groq API Error:', error);
            addMessage('Error de conexión. Verifica tu conexión a internet.', 'bot');
        });
    }

    setTimeout(function() {
        if (GROQ_API_KEY) {
            addMessage('¡Hola! 👋 Soy el asistente virtual de Centro Arcadia. ¿En qué puedo ayudarte hoy? Puedo ayudarte con información sobre tiendas, horarios, eventos y más.', 'bot');
        } else {
            addMessage('¡Hola! Configura tu API key de Groq para comenzar a chatear.', 'bot');
        }
    }, 500);
});

