// ===== NADI ASTROLOGY CHATBOT =====
// Fully self-contained chatbot for booking consultations and redirecting to WhatsApp

(function () {
    const WHATSAPP_NUMBER = '918289966354';

    // ===== TRANSLATIONS =====
    const t = {
        en: {
            title: 'Nadi Astrology',
            subtitle: 'Book Consultation',
            status: 'Jyothisha Rathna Raja Guruji',
            welcome: '🙏 Namaste! Welcome to Vaitheeswarankoil Temple Nadi Astrology.',
            question: 'Please choose a consultation to book with Guruji:',
            services: [
                { id: 'general', icon: '📜', label: 'General Nadi Reading', desc: 'Complete life reading from sacred palm leaves' },
                { id: 'marriage', icon: '💍', label: 'Marriage & Horoscope Matching', desc: 'Partner compatibility & auspicious timing' },
                { id: 'career', icon: '⭐', label: 'Career & Business', desc: 'Guidance on profession, wealth & success' },
                { id: 'health', icon: '🌿', label: 'Health & Longevity', desc: 'Remedies for health issues & wellbeing' },
                { id: 'children', icon: '👶', label: 'Children & Progeny', desc: 'Blessings for childbirth & children\'s future' },
                { id: 'remedies', icon: '🕉️', label: 'Karma Remedies & Shanthi', desc: 'Parihara rituals for doshas & past karma' },
            ],
            confirmTitle: (svc) => `You selected: ${svc}`,
            confirmMsg: 'Great! To book your consultation, tap below to continue on WhatsApp. Guruji will confirm your appointment personally.',
            whatsappBtn: '💬 Book via WhatsApp',
            backBtn: '← Back',
            fingerprint: 'Send your thumb impression to begin your Nadi reading',
            poweredBy: 'Vaitheeswarankoil Temple • Mahe, Kerala',
            whatsappMessages: {
                general: 'Namaste Guruji 🙏 I would like to book a *General Nadi Leaf Reading* consultation. Please guide me on the next steps.',
                marriage: 'Namaste Guruji 🙏 I would like to book a *Marriage & Horoscope Matching* consultation. Please guide me on the next steps.',
                career: 'Namaste Guruji 🙏 I would like to book a *Career & Business* Nadi consultation. Please guide me on the next steps.',
                health: 'Namaste Guruji 🙏 I would like to book a *Health & Longevity* Nadi consultation. Please guide me on the next steps.',
                children: 'Namaste Guruji 🙏 I would like to book a *Children & Progeny* Nadi consultation. Please guide me on the next steps.',
                remedies: 'Namaste Guruji 🙏 I would like to book a *Karma Remedies & Shanthi* consultation. Please guide me on the next steps.',
            }
        },
        ml: {
            title: 'നാടി ജ്യോതിഷം',
            subtitle: 'ബുക്കിംഗ്',
            status: 'ജ്യോതിഷ രത്ന രാജ ഗുരുജി',
            welcome: '🙏 നമസ്കാരം! വൈതീശ്വരൻകോവിൽ ക്ഷേത്ര നാടി ജ്യോതിഷത്തിലേക്ക് സ്വാഗതം.',
            question: 'ഗുരുജിയുമായി ഒരു കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യൂ:',
            services: [
                { id: 'general', icon: '📜', label: 'പൊതു നാടി വായന', desc: 'ജീവിതത്തിന്റെ സമ്പൂർണ്ണ ഓലവായന' },
                { id: 'marriage', icon: '💍', label: 'വിവാഹ & ജാതക പൊരുത്തം', desc: 'പങ്കാളി അനുയോജ്യതയും ശുഭ സമയവും' },
                { id: 'career', icon: '⭐', label: 'ജോലി & ബിസിനസ്', desc: 'തൊഴിൽ, സമ്പത്ത്, വിജയം' },
                { id: 'health', icon: '🌿', label: 'ആരോഗ്യം & ദീർഘായുസ്സ്', desc: 'ആരോഗ്യ പ്രശ്നങ്ങൾക്കുള്ള പരിഹാരങ്ങൾ' },
                { id: 'children', icon: '👶', label: 'സന്താന ഭാഗ്യം', desc: 'കുഞ്ഞുങ്ങൾക്കും ഭാവിക്കും അനുഗ്രഹം' },
                { id: 'remedies', icon: '🕉️', label: 'കർമ്മ ദോഷ പരിഹാരം', desc: 'ദോഷ ശാന്തിക്കുള്ള ആചാരങ്ങൾ' },
            ],
            confirmTitle: (svc) => `തിരഞ്ഞെടുത്തത്: ${svc}`,
            confirmMsg: 'നല്ലത്! ബുക്കിംഗ് പൂർത്തിയാക്കാൻ WhatsApp-ൽ ഗുരുജിയെ ബന്ധപ്പെടൂ.',
            whatsappBtn: '💬 WhatsApp-ൽ ബുക്ക് ചെയ്യൂ',
            backBtn: '← തിരിച്ചു',
            fingerprint: 'നാടി വായനക്ക് നിങ്ങളുടെ പെരുവിരൽ അടയാളം അയക്കൂ',
            poweredBy: 'വൈതീശ്വരൻകോവിൽ ക്ഷേത്രം • മാഹി, കേരളം',
            whatsappMessages: {
                general: 'നമസ്കാരം ഗുരുജി 🙏 എനിക്ക് *പൊതു നാടി ഓലവായന* ബുക്ക് ചെയ്യണം. അടുത്ത ഘട്ടങ്ങൾ അറിയിക്കണം.',
                marriage: 'നമസ്കാരം ഗുരുജി 🙏 *വിവാഹ & ജാതക പൊരുത്ത* കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യണം.',
                career: 'നമസ്കാരം ഗുരുജി 🙏 *ജോലി & ബിസിനസ്* നാടി കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യണം.',
                health: 'നമസ്കാരം ഗുരുജി 🙏 *ആരോഗ്യം & ദീർഘായുസ്സ്* കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യണം.',
                children: 'നമസ്കാരം ഗുരുജി 🙏 *സന്താന ഭാഗ്യ* കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യണം.',
                remedies: 'നമസ്കാരം ഗുരുജി 🙏 *കർമ്മ ദോഷ പരിഹാര* കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യണം.',
            }
        },
        ta: {
            title: 'நாடி சோதிடம்',
            subtitle: 'பதிவு',
            status: 'ஜோதிஷ ரத்னா ராஜா குருஜி',
            welcome: '🙏 வணக்கம்! வைத்தீஸ்வரன்கோவில் கோவில் நாடி சோதிடத்திற்கு வரவேற்கிறோம்.',
            question: 'குருஜியுடன் ஒரு ஆலோசனையை பதிவு செய்யுங்கள்:',
            services: [
                { id: 'general', icon: '📜', label: 'பொது நாடி வாசிப்பு', desc: 'வாழ்க்கையின் முழு ஓலை வாசிப்பு' },
                { id: 'marriage', icon: '💍', label: 'திருமண & ஜாதக பொருத்தம்', desc: 'துணை பொருத்தம் & சுபமுகூர்த்தம்' },
                { id: 'career', icon: '⭐', label: 'தொழில் & வணிகம்', desc: 'வாழ்க்கை, செல்வம், வெற்றி வழிகாட்டல்' },
                { id: 'health', icon: '🌿', label: 'உடல்நலம் & ஆயுள்', desc: 'உடல் பிரச்சினைகளுக்கு தீர்வு' },
                { id: 'children', icon: '👶', label: 'சந்தான பாக்கியம்', desc: 'குழந்தை வரத்திற்கு ஆசீர்வாதம்' },
                { id: 'remedies', icon: '🕉️', label: 'கர்ம தோஷ பரிகாரம்', desc: 'தோஷங்களுக்கான சாந்தி பூஜைகள்' },
            ],
            confirmTitle: (svc) => `தேர்ந்தெடுத்தது: ${svc}`,
            confirmMsg: 'சரியானது! பதிவை முடிக்க கீழே WhatsApp-ல் குருஜியை தொடர்பு கொள்ளுங்கள்.',
            whatsappBtn: '💬 WhatsApp-ல் பதிவு செய்யுங்கள்',
            backBtn: '← திரும்பு',
            fingerprint: 'நாடி வாசிப்பு தொடங்க உங்கள் கட்டை விரல் அடையாளம் அனுப்புங்கள்',
            poweredBy: 'வைத்தீஸ்வரன்கோவில் கோவில் • மாஹே, கேரளா',
            whatsappMessages: {
                general: 'வணக்கம் குருஜி 🙏 *பொது நாடி வாசிப்பு* ஆலோசனையை பதிவு செய்ய விரும்புகிறேன்.',
                marriage: 'வணக்கம் குருஜி 🙏 *திருமண & ஜாதக பொருத்தம்* பதிவு செய்ய விரும்புகிறேன்.',
                career: 'வணக்கம் குருஜி 🙏 *தொழில் & வணிகம்* நாடி ஆலோசனை பதிவு செய்ய விரும்புகிறேன்.',
                health: 'வணக்கம் குருஜி 🙏 *உடல்நலம் & ஆயுள்* ஆலோசனை பதிவு செய்ய விரும்புகிறேன்.',
                children: 'வணக்கம் குருஜி 🙏 *சந்தான பாக்கியம்* ஆலோசனை பதிவு செய்ய விரும்புகிறேன்.',
                remedies: 'வணக்கம் குருஜி 🙏 *கர்ம தோஷ பரிகாரம்* ஆலோசனை பதிவு செய்ய விரும்புகிறேன்.',
            }
        }
    };

    // ===== STATE =====
    let isOpen = false;
    let step = 'services'; // 'services' | 'confirm'
    let selectedService = null;
    let lang = 'en';

    // ===== INJECT CSS =====
    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');

        /* ===== TOGGLE BUTTON ===== */
        #nadi-chat-toggle {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 62px;
            height: 62px;
            border-radius: 50%;
            background: linear-gradient(145deg, #8B1A1A 0%, #5C0A0A 50%, #3D0707 100%);
            border: 2px solid #C9A84C;
            box-shadow: 0 4px 24px rgba(139,26,26,0.5), 0 0 0 0 rgba(201,168,76,0.4);
            cursor: pointer;
            z-index: 9998;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.3s;
            animation: pulse-ring 3s ease infinite;
        }
        #nadi-chat-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 30px rgba(139,26,26,0.7), 0 0 0 6px rgba(201,168,76,0.2);
        }
        #nadi-chat-toggle svg { width: 36px; height: 36px; }
        #nadi-chat-toggle .r-eye {
            animation: robot-blink 4s ease infinite;
            transform-origin: center;
            transform-box: fill-box;
        }
        #nadi-chat-toggle .r-eye2 { animation: robot-blink 4s ease 0.1s infinite; transform-origin: center; transform-box: fill-box; }
        #nadi-chat-toggle .r-ant { animation: ant-glow 2s ease infinite; }
        @keyframes robot-blink {
            0%, 88%, 100% { transform: scaleY(1); }
            93% { transform: scaleY(0.08); }
        }
        @keyframes ant-glow {
            0%, 100% { fill: #C9A84C; }
            50% { fill: #FFE87C; filter: drop-shadow(0 0 5px rgba(255,232,124,0.9)); }
        }
        #nadi-chat-toggle .nb {
            position: absolute;
            top: -4px; right: -4px;
            background: #C9A84C;
            color: #3D0707;
            width: 20px; height: 20px;
            border-radius: 50%;
            font-size: 11px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Cinzel', serif;
            border: 2px solid #fff;
            animation: badge-pop 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
        }
        @keyframes pulse-ring {
            0% { box-shadow: 0 4px 24px rgba(139,26,26,0.5), 0 0 0 0 rgba(201,168,76,0.5); }
            70% { box-shadow: 0 4px 24px rgba(139,26,26,0.5), 0 0 0 14px rgba(201,168,76,0); }
            100% { box-shadow: 0 4px 24px rgba(139,26,26,0.5), 0 0 0 0 rgba(201,168,76,0); }
        }
        @keyframes badge-pop {
            0% { transform: scale(0); }
            80% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        /* ===== CHAT WINDOW ===== */
        #nadi-chat-window {
            position: fixed;
            bottom: 100px;
            right: 24px;
            width: 360px;
            max-height: 600px;
            border-radius: 20px;
            overflow: hidden;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.3);
            transform: translateY(20px) scale(0.95);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.35s cubic-bezier(0.175,0.885,0.32,1.275), opacity 0.3s ease;
            font-family: 'Crimson Pro', Georgia, serif;
        }
        #nadi-chat-window.open {
            transform: translateY(0) scale(1);
            opacity: 1;
            pointer-events: all;
        }
        @media (max-width: 420px) {
            #nadi-chat-window {
                width: calc(100vw - 20px);
                right: 10px;
                bottom: 90px;
                max-height: 80vh;
            }
        }

        /* ===== HEADER ===== */
        .nadi-header {
            background: linear-gradient(135deg, #1a0505 0%, #3D0707 40%, #5C0A0A 100%);
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid rgba(201,168,76,0.4);
            position: relative;
            overflow: hidden;
        }
        .nadi-header::before {
            content: '';
            position: absolute;
            top: -20px; right: -20px;
            width: 100px; height: 100px;
            background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
            border-radius: 50%;
        }
        .nadi-avatar {
            width: 46px; height: 46px;
            border-radius: 50%;
            background: linear-gradient(145deg, #C9A84C, #8B6914);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            border: 2px solid rgba(201,168,76,0.6);
            flex-shrink: 0;
            box-shadow: 0 0 12px rgba(201,168,76,0.3);
        }
        .nadi-header-text { flex: 1; }
        .nadi-header-text h4 {
            font-family: 'Cinzel', serif;
            font-size: 13px;
            font-weight: 700;
            color: #C9A84C;
            margin: 0 0 2px;
            letter-spacing: 0.5px;
        }
        .nadi-header-text p {
            font-family: 'Crimson Pro', serif;
            font-size: 12px;
            color: rgba(255,255,255,0.65);
            margin: 0;
            font-style: italic;
        }
        .nadi-online {
            width: 8px; height: 8px;
            background: #4CAF50;
            border-radius: 50%;
            display: inline-block;
            margin-right: 5px;
            box-shadow: 0 0 6px rgba(76,175,80,0.8);
            animation: blink-dot 2.5s ease infinite;
        }
        @keyframes blink-dot {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }
        .nadi-close {
            background: none;
            border: none;
            color: rgba(255,255,255,0.5);
            font-size: 18px;
            cursor: pointer;
            width: 28px; height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s, color 0.2s;
            flex-shrink: 0;
        }
        .nadi-close:hover { background: rgba(255,255,255,0.1); color: #fff; }

        /* ===== BODY ===== */
        .nadi-body {
            background: linear-gradient(180deg, #0D0202 0%, #110404 100%);
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 0;
            scrollbar-width: thin;
            scrollbar-color: rgba(201,168,76,0.3) transparent;
        }
        .nadi-body::-webkit-scrollbar { width: 4px; }
        .nadi-body::-webkit-scrollbar-track { background: transparent; }
        .nadi-body::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 2px; }

        /* ===== DECORATIVE TOP BORDER ===== */
        .nadi-ornament {
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, #C9A84C 30%, #E8C96B 50%, #C9A84C 70%, transparent);
        }

        /* ===== MESSAGES ===== */
        .nadi-msgs {
            padding: 16px 16px 8px;
        }
        .nadi-bot-msg {
            display: flex;
            gap: 8px;
            margin-bottom: 12px;
            animation: msg-in 0.4s ease;
        }
        @keyframes msg-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .nadi-bot-msg .mic {
            width: 30px; height: 30px;
            background: linear-gradient(145deg, #5C0A0A, #3D0707);
            border: 1px solid rgba(201,168,76,0.4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            flex-shrink: 0;
            margin-top: 2px;
        }
        .nadi-bot-msg .bubble {
            background: linear-gradient(135deg, rgba(139,26,26,0.2), rgba(61,7,7,0.3));
            border: 1px solid rgba(201,168,76,0.2);
            border-radius: 0 14px 14px 14px;
            padding: 10px 14px;
            color: rgba(255,255,255,0.9);
            font-size: 14px;
            line-height: 1.6;
            max-width: calc(100% - 46px);
        }
        .nadi-bot-msg .bubble strong {
            color: #C9A84C;
            font-weight: 600;
        }

        /* ===== FINGERPRINT HINT ===== */
        .nadi-fp-hint {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0 16px 14px;
            padding: 10px 14px;
            background: rgba(201,168,76,0.06);
            border: 1px solid rgba(201,168,76,0.15);
            border-radius: 10px;
        }
        .nadi-fp-hint span { font-size: 20px; }
        .nadi-fp-hint p {
            font-size: 11.5px;
            color: rgba(201,168,76,0.75);
            margin: 0;
            font-style: italic;
            line-height: 1.4;
        }

        /* ===== SERVICE CARDS ===== */
        .nadi-services {
            padding: 4px 14px 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .nadi-svc-card {
            background: linear-gradient(135deg, rgba(139,26,26,0.15) 0%, rgba(61,7,7,0.25) 100%);
            border: 1px solid rgba(201,168,76,0.2);
            border-radius: 12px;
            padding: 12px 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.25s ease;
            position: relative;
            overflow: hidden;
        }
        .nadi-svc-card::before {
            content: '';
            position: absolute;
            left: 0; top: 0; bottom: 0;
            width: 3px;
            background: linear-gradient(180deg, #C9A84C, #8B6914);
            border-radius: 2px 0 0 2px;
            opacity: 0;
            transition: opacity 0.25s;
        }
        .nadi-svc-card:hover {
            background: linear-gradient(135deg, rgba(139,26,26,0.3) 0%, rgba(61,7,7,0.45) 100%);
            border-color: rgba(201,168,76,0.5);
            transform: translateX(3px);
        }
        .nadi-svc-card:hover::before { opacity: 1; }
        .nadi-svc-icon {
            width: 38px; height: 38px;
            background: linear-gradient(145deg, rgba(201,168,76,0.15), rgba(139,26,26,0.2));
            border: 1px solid rgba(201,168,76,0.3);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-shrink: 0;
        }
        .nadi-svc-text { flex: 1; }
        .nadi-svc-text strong {
            display: block;
            font-family: 'Cinzel', serif;
            font-size: 12px;
            color: #C9A84C;
            font-weight: 600;
            letter-spacing: 0.3px;
            margin-bottom: 2px;
        }
        .nadi-svc-text span {
            font-size: 11px;
            color: rgba(255,255,255,0.5);
            font-style: italic;
        }
        .nadi-svc-arrow {
            color: rgba(201,168,76,0.4);
            font-size: 16px;
            transition: transform 0.2s, color 0.2s;
        }
        .nadi-svc-card:hover .nadi-svc-arrow {
            color: #C9A84C;
            transform: translateX(3px);
        }

        /* ===== CONFIRM STEP ===== */
        .nadi-confirm {
            padding: 16px;
            animation: msg-in 0.35s ease;
        }
        .nadi-confirm-badge {
            display: flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, rgba(201,168,76,0.12), rgba(139,26,26,0.2));
            border: 1px solid rgba(201,168,76,0.35);
            border-radius: 12px;
            padding: 14px;
            margin-bottom: 14px;
        }
        .nadi-confirm-badge .icon { font-size: 28px; }
        .nadi-confirm-badge .text {}
        .nadi-confirm-badge .text strong {
            display: block;
            font-family: 'Cinzel', serif;
            font-size: 12px;
            color: #C9A84C;
            letter-spacing: 0.3px;
            margin-bottom: 3px;
        }
        .nadi-confirm-badge .text span {
            font-size: 11.5px;
            color: rgba(255,255,255,0.6);
        }
        .nadi-confirm-msg {
            font-size: 13.5px;
            color: rgba(255,255,255,0.75);
            line-height: 1.65;
            margin-bottom: 16px;
            padding: 0 2px;
        }
        .nadi-wa-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            padding: 14px 20px;
            background: linear-gradient(135deg, #25D366 0%, #1DA851 100%);
            color: #fff;
            font-family: 'Cinzel', serif;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.5px;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 16px rgba(37,211,102,0.35);
            margin-bottom: 10px;
        }
        .nadi-wa-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 22px rgba(37,211,102,0.5);
        }
        .nadi-back-btn {
            background: none;
            border: 1px solid rgba(201,168,76,0.25);
            color: rgba(201,168,76,0.7);
            font-family: 'Crimson Pro', serif;
            font-size: 13px;
            padding: 9px 16px;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;
            transition: all 0.2s;
        }
        .nadi-back-btn:hover {
            border-color: rgba(201,168,76,0.5);
            color: #C9A84C;
            background: rgba(201,168,76,0.06);
        }

        /* ===== TYPING INDICATOR ===== */
        .nadi-typing {
            display: flex;
            gap: 8px;
            margin-bottom: 12px;
            padding: 0 16px;
        }
        .nadi-typing .dots {
            display: flex;
            gap: 5px;
            padding: 12px 16px;
            background: linear-gradient(135deg, rgba(139,26,26,0.2), rgba(61,7,7,0.3));
            border: 1px solid rgba(201,168,76,0.2);
            border-radius: 0 14px 14px 14px;
        }
        .nadi-typing .dots span {
            width: 7px; height: 7px;
            background: rgba(201,168,76,0.6);
            border-radius: 50%;
            animation: typing-bounce 1.2s ease infinite;
        }
        .nadi-typing .dots span:nth-child(2) { animation-delay: 0.2s; }
        .nadi-typing .dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing-bounce {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
            40% { transform: translateY(-6px); opacity: 1; }
        }

        /* ===== FOOTER ===== */
        .nadi-footer {
            background: rgba(0,0,0,0.4);
            border-top: 1px solid rgba(201,168,76,0.12);
            padding: 8px 16px;
            text-align: center;
        }
        .nadi-footer p {
            font-size: 10.5px;
            color: rgba(201,168,76,0.45);
            margin: 0;
            letter-spacing: 0.5px;
            font-style: italic;
        }

        /* ===== DIVIDER ===== */
        .nadi-divider {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0 16px;
            margin-bottom: 8px;
        }
        .nadi-divider::before, .nadi-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent);
        }
        .nadi-divider span {
            font-family: 'Cinzel', serif;
            font-size: 10px;
            color: rgba(201,168,76,0.5);
            letter-spacing: 1px;
            text-transform: uppercase;
            white-space: nowrap;
        }
    `;
    document.head.appendChild(style);

    // ===== BUILD DOM =====
    function buildChatbot() {
        // Toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'nadi-chat-toggle';
        toggleBtn.setAttribute('aria-label', 'Open Nadi Consultation Chatbot');
        toggleBtn.innerHTML = `
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Antenna stem -->
              <line x1="32" y1="4" x2="32" y2="12" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round"/>
              <!-- Antenna ball -->
              <circle class="r-ant" cx="32" cy="3" r="3" fill="#C9A84C"/>
              <!-- Head -->
              <rect x="10" y="12" width="44" height="30" rx="7" fill="#C9A84C" opacity="0.15"/>
              <rect x="10" y="12" width="44" height="30" rx="7" stroke="#C9A84C" stroke-width="2.2"/>
              <!-- Left eye -->
              <rect class="r-eye" x="18" y="21" width="10" height="10" rx="2.5" fill="#C9A84C"/>
              <!-- Right eye -->
              <rect class="r-eye2" x="36" y="21" width="10" height="10" rx="2.5" fill="#C9A84C"/>
              <!-- Eye shine left -->
              <rect x="20" y="23" width="3" height="3" rx="1" fill="rgba(255,255,255,0.5)"/>
              <!-- Eye shine right -->
              <rect x="38" y="23" width="3" height="3" rx="1" fill="rgba(255,255,255,0.5)"/>
              <!-- Mouth panel -->
              <rect x="18" y="35" width="28" height="4" rx="2" fill="#C9A84C" opacity="0.5"/>
              <!-- Mouth dots -->
              <circle cx="24" cy="37" r="1.5" fill="#C9A84C"/>
              <circle cx="32" cy="37" r="1.5" fill="#C9A84C"/>
              <circle cx="40" cy="37" r="1.5" fill="#C9A84C"/>
              <!-- Neck -->
              <rect x="26" y="42" width="12" height="5" rx="2" fill="#C9A84C" opacity="0.4"/>
              <rect x="26" y="42" width="12" height="5" rx="2" stroke="#C9A84C" stroke-width="1.5"/>
              <!-- Body -->
              <rect x="14" y="47" width="36" height="14" rx="5" fill="#C9A84C" opacity="0.12"/>
              <rect x="14" y="47" width="36" height="14" rx="5" stroke="#C9A84C" stroke-width="2"/>
              <!-- Chest panel -->
              <rect x="22" y="51" width="20" height="6" rx="2" fill="#C9A84C" opacity="0.3"/>
              <!-- Chest light -->
              <circle cx="32" cy="54" r="2.5" fill="#C9A84C" opacity="0.8"/>
              <!-- Left ear bolt -->
              <rect x="6" y="22" width="4" height="8" rx="2" fill="#C9A84C" opacity="0.6" stroke="#C9A84C" stroke-width="1"/>
              <!-- Right ear bolt -->
              <rect x="54" y="22" width="4" height="8" rx="2" fill="#C9A84C" opacity="0.6" stroke="#C9A84C" stroke-width="1"/>
            </svg>
            <span class="nb">1</span>
        `;
        toggleBtn.addEventListener('click', toggleChat);
        document.body.appendChild(toggleBtn);

        // Chat window
        const win = document.createElement('div');
        win.id = 'nadi-chat-window';
        win.setAttribute('role', 'dialog');
        win.setAttribute('aria-label', 'Nadi Astrology Chatbot');
        document.body.appendChild(win);

        render();
    }

    function getLang() {
        // Try to detect current language from the site's language system
        const siteLang = typeof currentLang !== 'undefined' ? currentLang : 
                         localStorage.getItem('preferredLanguage') || 'en';
        return t[siteLang] ? siteLang : 'en';
    }

    function render() {
        lang = getLang();
        const tx = t[lang];
        const win = document.getElementById('nadi-chat-window');
        if (!win) return;

        win.innerHTML = `
            <div class="nadi-header">
                <div class="nadi-avatar" style="background:linear-gradient(145deg,#3D0707,#5C0A0A);overflow:visible;">
                    <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                      <line x1="16" y1="1" x2="16" y2="5" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
                      <circle cx="16" cy="1" r="1.5" fill="#FFE87C"/>
                      <rect x="5" y="5" width="22" height="15" rx="4" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" stroke-width="1.3"/>
                      <rect x="8" y="9" width="5" height="5" rx="1.5" fill="#C9A84C"/>
                      <rect x="19" y="9" width="5" height="5" rx="1.5" fill="#C9A84C"/>
                      <rect x="9" y="10" width="2" height="2" rx="0.5" fill="rgba(255,255,255,0.5)"/>
                      <rect x="20" y="10" width="2" height="2" rx="0.5" fill="rgba(255,255,255,0.5)"/>
                      <rect x="9" y="17" width="14" height="2" rx="1" fill="#C9A84C" opacity="0.5"/>
                      <rect x="13" y="20" width="6" height="3" rx="1.5" stroke="#C9A84C" stroke-width="1.2" fill="rgba(201,168,76,0.15)"/>
                      <rect x="7" y="23" width="18" height="8" rx="3" stroke="#C9A84C" stroke-width="1.3" fill="rgba(201,168,76,0.1)"/>
                      <circle cx="16" cy="27" r="1.5" fill="#C9A84C" opacity="0.8"/>
                      <rect x="3" y="10" width="2" height="5" rx="1" fill="#C9A84C" opacity="0.5"/>
                      <rect x="27" y="10" width="2" height="5" rx="1" fill="#C9A84C" opacity="0.5"/>
                    </svg>
                </div>
                <div class="nadi-header-text">
                    <h4>${tx.title}</h4>
                    <p><span class="nadi-online"></span>${tx.status}</p>
                </div>
                <button class="nadi-close" onclick="nadiChat.close()" aria-label="Close">✕</button>
            </div>
            <div class="nadi-ornament"></div>
            <div class="nadi-body" id="nadi-chat-body">
                ${renderStep(tx)}
            </div>
            <div class="nadi-footer">
                <p>${tx.poweredBy}</p>
            </div>
        `;
    }

    function renderStep(tx) {
        if (step === 'services') {
            const services = tx.services.map(s => `
                <div class="nadi-svc-card" role="button" tabindex="0" 
                     onclick="nadiChat.selectService('${s.id}')"
                     onkeydown="if(event.key==='Enter')nadiChat.selectService('${s.id}')">
                    <div class="nadi-svc-icon">${s.icon}</div>
                    <div class="nadi-svc-text">
                        <strong>${s.label}</strong>
                        <span>${s.desc}</span>
                    </div>
                    <div class="nadi-svc-arrow">›</div>
                </div>
            `).join('');

            return `
                <div class="nadi-msgs" id="nadi-msgs">
                    <div class="nadi-bot-msg">
                        <div class="mic">🤖</div>
                        <div class="bubble">${tx.welcome}</div>
                    </div>
                    <div class="nadi-bot-msg">
                        <div class="mic">📜</div>
                        <div class="bubble">${tx.question}</div>
                    </div>
                </div>
                <div class="nadi-divider"><span>Select Service</span></div>
                <div class="nadi-services">${services}</div>
                <div class="nadi-fp-hint">
                    <span>🖐️</span>
                    <p>${tx.fingerprint}</p>
                </div>
            `;
        }

        if (step === 'confirm' && selectedService) {
            const svc = tx.services.find(s => s.id === selectedService);
            return `
                <div class="nadi-msgs">
                    <div class="nadi-bot-msg">
                        <div class="mic">✨</div>
                        <div class="bubble">${tx.confirmTitle(svc.label)}</div>
                    </div>
                </div>
                <div class="nadi-confirm">
                    <div class="nadi-confirm-badge">
                        <div class="icon">${svc.icon}</div>
                        <div class="text">
                            <strong>${svc.label}</strong>
                            <span>${svc.desc}</span>
                        </div>
                    </div>
                    <p class="nadi-confirm-msg">${tx.confirmMsg}</p>
                    <button class="nadi-wa-btn" onclick="nadiChat.openWhatsApp()">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        ${tx.whatsappBtn}
                    </button>
                    <button class="nadi-back-btn" onclick="nadiChat.goBack()">${tx.backBtn}</button>
                </div>
            `;
        }
    }

    function showTyping(callback) {
        const body = document.getElementById('nadi-chat-body');
        const typing = document.createElement('div');
        typing.className = 'nadi-typing';
        typing.innerHTML = '<div class="dots"><span></span><span></span><span></span></div>';
        body.appendChild(typing);
        body.scrollTop = body.scrollHeight;
        setTimeout(() => {
            typing.remove();
            callback();
        }, 900);
    }

    // ===== PUBLIC API =====
    window.nadiChat = {
        open() {
            isOpen = true;
            const win = document.getElementById('nadi-chat-window');
            const toggle = document.getElementById('nadi-chat-toggle');
            win.classList.add('open');
            const badge = toggle.querySelector('.nb');
            if (badge) badge.remove();
        },
        close() {
            isOpen = false;
            document.getElementById('nadi-chat-window').classList.remove('open');
        },
        selectService(id) {
            selectedService = id;
            showTyping(() => {
                step = 'confirm';
                render();
                if (isOpen) document.getElementById('nadi-chat-window').classList.add('open');
            });
        },
        goBack() {
            step = 'services';
            selectedService = null;
            render();
            if (isOpen) document.getElementById('nadi-chat-window').classList.add('open');
        },
        openWhatsApp() {
            lang = getLang();
            const msg = t[lang].whatsappMessages[selectedService] || t['en'].whatsappMessages[selectedService];
            const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank');
            setTimeout(() => { nadiChat.close(); }, 1200);
        }
    };

    function toggleChat() {
        if (isOpen) nadiChat.close();
        else nadiChat.open();
    }

    // ===== INIT =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildChatbot);
    } else {
        buildChatbot();
    }

    // Re-render when language changes (hook into site's setLanguage if present)
    const origSetLang = window.setLanguage;
    if (typeof origSetLang === 'function') {
        window.setLanguage = function (l) {
            origSetLang(l);
            setTimeout(render, 50);
        };
    }

})();