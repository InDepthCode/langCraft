import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // =========================================================================
  // SPANISH ('es') - UNIT 1 - LESSON 1: Hello and Goodbye
  // =========================================================================
  {
    id: "es-unit-1-lesson-1",
    unitId: "es-unit-1",
    number: 1,
    title: "Hello and Goodbye",
    description: "Learn to greet people, ask how they are, and say polite farewells.",
    xpReward: 50,
    goals: [
      "Greet people politely in Spanish using different terms depending on the time of day",
      "Ask 'How are you?' and give simple positive responses",
      "Say goodbye and say you'll see them later"
    ],
    aiPrompt: "You are Sofia, a warm, lively Spanish teacher from Madrid. Today is the student's first lesson! Keep your voice encouraging, speak slowly and clearly. Introduce the Spanish language briefly, teach them the difference between 'Hola' (informal) and 'Buenos días' (formal), then guide them through saying 'Adiós' and 'Hasta luego'. Ask them to repeat after you and reward their effort with praise.",
    vocabulary: [
      {
        id: "es-vocab-hola",
        word: "Hola",
        translation: "Hello / Hi",
        pronunciation: "OH-lah",
        partOfSpeech: "greeting",
        exampleSentence: "Hola, ¿qué tal?",
        exampleTranslation: "Hello, how's it going?"
      },
      {
        id: "es-vocab-adios",
        word: "Adiós",
        translation: "Goodbye",
        pronunciation: "ah-dee-OHS",
        partOfSpeech: "greeting",
        exampleSentence: "Adiós, mi amigo.",
        exampleTranslation: "Goodbye, my friend."
      },
      {
        id: "es-vocab-buenos-dias",
        word: "Buenos días",
        translation: "Good morning",
        pronunciation: "BWEH-nos DEE-ahs",
        partOfSpeech: "greeting",
        exampleSentence: "Buenos días, mamá.",
        exampleTranslation: "Good morning, mom."
      },
      {
        id: "es-vocab-gracias",
        word: "Gracias",
        translation: "Thank you",
        pronunciation: "GRAH-syahs",
        partOfSpeech: "other",
        exampleSentence: "Muchas gracias por la comida.",
        exampleTranslation: "Thank you very much for the food."
      },
      {
        id: "es-vocab-por-favor",
        word: "Por favor",
        translation: "Please",
        pronunciation: "por fah-VOR",
        partOfSpeech: "other",
        exampleSentence: "Un café, por favor.",
        exampleTranslation: "A coffee, please."
      }
    ],
    phrases: [
      {
        id: "es-phrase-como-estas",
        phrase: "¿Cómo estás?",
        translation: "How are you?",
        pronunciation: "KOH-moh ehs-TAHS",
        context: "Commonly used to ask how someone is doing in an informal way."
      },
      {
        id: "es-phrase-estoy-bien",
        phrase: "Estoy bien, gracias.",
        translation: "I'm doing well, thank you.",
        pronunciation: "ehs-TOY byehn, GRAH-syahs",
        context: "A standard polite reply to '¿Cómo estás?'."
      },
      {
        id: "es-phrase-hasta-luego",
        phrase: "Hasta luego.",
        translation: "See you later.",
        pronunciation: "AHS-tah LWEH-go",
        context: "A casual way to say goodbye when you expect to see the person again soon."
      }
    ],
    activities: [
      {
        id: "es-u1l1-act1",
        type: "video",
        title: "Meet Sofia, Your AI Teacher",
        instructions: "Watch Sofia introduce Spanish greetings and explain the silent 'H' in 'Hola'. Listen to her pronunciation and pay close attention.",
        xpReward: 10,
        videoUrl: "https://example.com/videos/spanish-intro.mp4",
        streamVideoAgentId: "agent_sofia_intro",
        aiPrompt: "Speak directly to the student in friendly Spanish, introducing yourself as Sofia, and explain that 'H' is silent in Spanish. Say 'Hola' and prompt them to speak."
      },
      {
        id: "es-u1l1-act2",
        type: "multiple-choice",
        title: "Morning Greetings",
        instructions: "Choose the correct Spanish phrase for the morning greeting.",
        xpReward: 10,
        question: "How do you say 'Good morning' in Spanish?",
        options: ["Hola", "Buenos días", "Adiós", "Buenas noches"],
        correctOptionIndex: 1,
        explanation: "'Buenos días' specifically translates to 'Good morning'. 'Hola' is hello, 'Adiós' is goodbye, and 'Buenas noches' is good night."
      },
      {
        id: "es-u1l1-act3",
        type: "audio",
        title: "Pronunciation Practice",
        instructions: "Listen to the pronunciation and repeat the phrase aloud clearly.",
        xpReward: 10,
        phrasesToRepeat: [
          {
            phrase: "Hola, buenos días.",
            translation: "Hello, good morning.",
            pronunciation: "OH-lah, BWEH-nos DEE-ahs"
          },
          {
            phrase: "Hasta luego.",
            translation: "See you later.",
            pronunciation: "AHS-tah LWEH-go"
          }
        ]
      },
      {
        id: "es-u1l1-act4",
        type: "translation",
        title: "Translating Conversation",
        instructions: "Translate the Spanish question into English.",
        xpReward: 10,
        sourceText: "¿Cómo estás?",
        targetText: "How are you",
        options: ["How", "are", "you", "hello", "goodbye", "good"]
      },
      {
        id: "es-u1l1-act5",
        type: "chat",
        title: "Chat with Sofia",
        instructions: "Say hello to Sofia and tell her how you are doing in Spanish!",
        xpReward: 10,
        aiSystemPrompt: "You are Sofia, an AI tutor. You are greeting your student in a chat interface. Keep your response short, enthusiastic, and simple. Respond in Spanish, but if the student struggles, offer friendly help in English. Standard greeting: '¡Hola! ¿Cómo estás?'",
        initialMessage: "¡Hola! Bienvenido a tu primera clase de español. ¿Cómo estás?"
      },
      {
        id: "es-u1l1-act6",
        type: "vocabulary-match",
        title: "Match the Meanings",
        instructions: "Match the Spanish word on the left with its English translation.",
        xpReward: 10,
        pairs: [
          { word: "Hola", translation: "Hello" },
          { word: "Adiós", translation: "Goodbye" },
          { word: "Gracias", translation: "Thank you" },
          { word: "Por favor", translation: "Please" }
        ]
      }
    ]
  },

  // =========================================================================
  // SPANISH ('es') - UNIT 1 - LESSON 2: Introducing Yourself
  // =========================================================================
  {
    id: "es-unit-1-lesson-2",
    unitId: "es-unit-1",
    number: 2,
    title: "Introducing Yourself",
    description: "Learn how to state your name, ask others for theirs, and tell where you are from.",
    xpReward: 50,
    goals: [
      "Introduce yourself using 'Me llamo...' and 'Soy...'",
      "Ask others their name in Spanish",
      "Express that it's nice to meet someone using 'Mucho gusto'"
    ],
    aiPrompt: "You are Sofia, a warm, lively Spanish teacher. In this lesson, guide the student through self-introductions. Teach them '¿Cómo te llamas?' and 'Me llamo [name]'. Emphasize the double 'll' sound, which is pronounced like a 'y'. Prompt them to introduce themselves, then congratulate them warmly.",
    vocabulary: [
      {
        id: "es-vocab-yo",
        word: "Yo",
        translation: "I",
        pronunciation: "yoh",
        partOfSpeech: "pronoun",
        exampleSentence: "Yo soy estudiante.",
        exampleTranslation: "I am a student."
      },
      {
        id: "es-vocab-llamo",
        word: "Me llamo",
        translation: "My name is (lit: I call myself)",
        pronunciation: "meh YAH-moh",
        partOfSpeech: "verb",
        exampleSentence: "Me llamo Mateo.",
        exampleTranslation: "My name is Mateo."
      },
      {
        id: "es-vocab-de",
        word: "De",
        translation: "From / Of",
        pronunciation: "deh",
        partOfSpeech: "preposition",
        exampleSentence: "Soy de Colombia.",
        exampleTranslation: "I am from Colombia."
      },
      {
        id: "es-vocab-soy",
        word: "Soy",
        translation: "I am",
        pronunciation: "soy",
        partOfSpeech: "verb",
        exampleSentence: "Soy de España.",
        exampleTranslation: "I am from Spain."
      }
    ],
    phrases: [
      {
        id: "es-phrase-como-te-llamas",
        phrase: "¿Cómo te llamas?",
        translation: "What is your name?",
        pronunciation: "KOH-moh teh YAH-mahs",
        context: "Used to ask someone's name in informal situations."
      },
      {
        id: "es-phrase-mucho-gusto",
        phrase: "Mucho gusto.",
        translation: "Nice to meet you.",
        pronunciation: "MOO-choh GOOS-toh",
        context: "A standard polite phrase used immediately after meeting someone for the first time."
      },
      {
        id: "es-phrase-encantado",
        phrase: "Encantado / Encantada",
        translation: "Pleased to meet you.",
        pronunciation: "ehn-kahn-TAH-doh",
        context: "Another way of saying nice to meet you. Men say 'Encantado', women say 'Encantada'."
      }
    ],
    activities: [
      {
        id: "es-u1l2-act1",
        type: "video",
        title: "Self-Introductions with Sofia",
        instructions: "Listen to Sofia introduce herself and pay attention to how 'll' in 'llamas' sounds like 'y' in English. Practice saying your own name.",
        xpReward: 10,
        videoUrl: "https://example.com/videos/spanish-intro-yourself.mp4",
        streamVideoAgentId: "agent_sofia_self_intro",
        aiPrompt: "Explain the double-L sound in 'llamarse'. Introduce yourself as Sofia, and prompt the user to respond with 'Me llamo [their name]'."
      },
      {
        id: "es-u1l2-act2",
        type: "multiple-choice",
        title: "Asking Their Name",
        instructions: "Identify the correct way to ask someone's name in Spanish.",
        xpReward: 10,
        question: "How do you ask 'What is your name?' in Spanish?",
        options: ["¿De dónde eres?", "¿Cómo estás?", "¿Cómo te llamas?", "Mucho gusto"],
        correctOptionIndex: 2,
        explanation: "'¿Cómo te llamas?' directly means 'What is your name?'."
      },
      {
        id: "es-u1l2-act3",
        type: "audio",
        title: "Speak Your Name",
        instructions: "Listen to the prompt and introduce yourself out loud using 'Me llamo' followed by your name.",
        xpReward: 10,
        phrasesToRepeat: [
          {
            phrase: "Mucho gusto, me llamo Carlos.",
            translation: "Nice to meet you, my name is Carlos.",
            pronunciation: "MOO-choh GOOS-toh, meh YAH-moh CAR-los"
          }
        ]
      },
      {
        id: "es-u1l2-act4",
        type: "translation",
        title: "I am from Spain",
        instructions: "Arrange the words to say 'I am from Spain' in Spanish.",
        xpReward: 10,
        sourceText: "I am from Spain",
        targetText: "Yo soy de España",
        options: ["Yo", "soy", "de", "España", "gracias", "cómo", "hola"]
      },
      {
        id: "es-u1l2-act5",
        type: "chat",
        title: "Meet a New Friend",
        instructions: "Introduce yourself to a friendly Spanish speaker named Mateo.",
        xpReward: 10,
        aiSystemPrompt: "You are Mateo, a friendly 23-year-old student from Buenos Aires, Argentina. You meet the student for the first time. Keep it extremely simple. Ask them their name and where they are from. Encourage them in Spanish.",
        initialMessage: "¡Hola! Mucho gusto. Me llamo Mateo. ¿Cómo te llamas?"
      }
    ]
  },

  // =========================================================================
  // FRENCH ('fr') - UNIT 1 - LESSON 1: Bonjour! Greetings
  // =========================================================================
  {
    id: "fr-unit-1-lesson-1",
    unitId: "fr-unit-1",
    number: 1,
    title: "Bonjour! First Steps",
    description: "Master essential French greetings, learn the magical word 'salut', and say goodbye.",
    xpReward: 50,
    goals: [
      "Greet people formally with 'Bonjour' and informally with 'Salut'",
      "Say thank you ('Merci') and please ('S'il vous plaît')",
      "Bid farewell with 'Au revoir'"
    ],
    aiPrompt: "You are Lucas, a charming and supportive French teacher from Paris. Introduce the beautiful sounds of French. Teach the student how to say 'Bonjour' (emphasizing the soft 'j' sound) and 'Salut' (noting that the final 't' is silent). Walk them through basic courtesies like 'Merci' and 'S'il vous plaît'. Encourage them with words like 'Très bien!' and 'Excellent!'",
    vocabulary: [
      {
        id: "fr-vocab-bonjour",
        word: "Bonjour",
        translation: "Hello / Good morning",
        pronunciation: "bohn-zhoor",
        partOfSpeech: "greeting",
        exampleSentence: "Bonjour, monsieur.",
        exampleTranslation: "Good morning, sir."
      },
      {
        id: "fr-vocab-salut",
        word: "Salut",
        translation: "Hi / Bye (informal)",
        pronunciation: "sah-loo",
        partOfSpeech: "greeting",
        exampleSentence: "Salut, Thomas! Ça va?",
        exampleTranslation: "Hi, Thomas! How's it going?"
      },
      {
        id: "fr-vocab-merci",
        word: "Merci",
        translation: "Thank you",
        pronunciation: "mair-see",
        partOfSpeech: "other",
        exampleSentence: "Merci beaucoup pour l'aide.",
        exampleTranslation: "Thank you very much for the help."
      },
      {
        id: "fr-vocab-au-revoir",
        word: "Au revoir",
        translation: "Goodbye",
        pronunciation: "oh ruh-vwahr",
        partOfSpeech: "greeting",
        exampleSentence: "Au revoir, à demain!",
        exampleTranslation: "Goodbye, see you tomorrow!"
      }
    ],
    phrases: [
      {
        id: "fr-phrase-comment-ca-va",
        phrase: "Comment ça va?",
        translation: "How is it going?",
        pronunciation: "koh-mahn sah vah",
        context: "A highly common and versatile casual question used with friends or family."
      },
      {
        id: "fr-phrase-ca-va-bien",
        phrase: "Ça va bien.",
        translation: "It's going well.",
        pronunciation: "sah vah byehn",
        context: "A direct, positive answer to 'Ça va?' or 'Comment ça va?'."
      },
      {
        id: "fr-phrase-sil-vous-plait",
        phrase: "S'il vous plaît",
        translation: "Please (formal/plural)",
        pronunciation: "seel voo pleh",
        context: "Used to show politeness, especially in formal situations or when speaking to strangers."
      }
    ],
    activities: [
      {
        id: "fr-u1l1-act1",
        type: "video",
        title: "Bonjour with Lucas",
        instructions: "Watch Lucas explain standard French greetings. Note how the French 'r' is pronounced in the throat, and 't' is silent in 'Salut'.",
        xpReward: 10,
        videoUrl: "https://example.com/videos/french-intro.mp4",
        streamVideoAgentId: "agent_lucas_intro",
        aiPrompt: "Say hello and explain the silent 't' in 'Salut'. Pronounce 'Bonjour' and 'Au revoir' slowly, showing how the mouth moves, and ask the student to replicate it."
      },
      {
        id: "fr-u1l1-act2",
        type: "multiple-choice",
        title: "Chic Courtesies",
        instructions: "Choose the correct translation for expressing gratitude in French.",
        xpReward: 10,
        question: "How do you say 'Thank you' in French?",
        options: ["Bonjour", "Salut", "Merci", "Au revoir"],
        correctOptionIndex: 2,
        explanation: "'Merci' is the standard French word for thank you."
      },
      {
        id: "fr-u1l1-act3",
        type: "audio",
        title: "French Vocal Warm-up",
        instructions: "Listen to the native pronunciation and repeat these classic French greetings.",
        xpReward: 10,
        phrasesToRepeat: [
          {
            phrase: "Bonjour, comment ça va?",
            translation: "Hello, how is it going?",
            pronunciation: "bohn-zhoor, koh-mahn sah vah"
          },
          {
            phrase: "Ça va bien, merci.",
            translation: "It's going well, thank you.",
            pronunciation: "sah vah byehn, mair-see"
          }
        ]
      },
      {
        id: "fr-u1l1-act4",
        type: "translation",
        title: "Please, Monsieur",
        instructions: "Translate 'Please, monsieur' into French.",
        xpReward: 10,
        sourceText: "S'il vous plaît, monsieur.",
        targetText: "Please monsieur",
        options: ["Please", "monsieur", "thank", "you", "hello", "goodbye"]
      },
      {
        id: "fr-u1l1-act5",
        type: "chat",
        title: "Order at a French Café",
        instructions: "Order a coffee and practice greeting a Parisian barista named Jean.",
        xpReward: 10,
        aiSystemPrompt: "You are Jean, a friendly waiter in a cute café in Montmartre, Paris. The student has just sat down. Speak in simple French, welcome them, ask how they are, and ask what they would like, but keep sentences very beginner-friendly.",
        initialMessage: "Bonjour! Bienvenue au Café de Flore. Comment ça va aujourd'hui?"
      }
    ]
  },

  // =========================================================================
  // JAPANESE ('ja') - UNIT 1 - LESSON 1: First Greetings
  // =========================================================================
  {
    id: "ja-unit-1-lesson-1",
    unitId: "ja-unit-1",
    number: 1,
    title: "First Greetings",
    description: "Learn iconic Japanese greetings, simple polite words, and how to bid goodbye.",
    xpReward: 50,
    goals: [
      "Say 'Konnichiwa' (Hello) correctly with standard flat intonation",
      "Express gratitude using 'Arigatou' (Thank you)",
      "Politely say goodbye with 'Sayounara'"
    ],
    aiPrompt: "You are Kenji, a polite, passionate Japanese teacher from Kyoto. Today, introduce the beautiful, rhythmic Japanese language. Explain that Japanese is syllable-timed. Teach the students 'Konnichiwa' (Good afternoon / Hello) and how the 'n' is nasalized. Explain the polite bow, and guide them through saying 'Arigatou' (Thank you) and 'Sayounara' (Goodbye). Be incredibly encouraging and supportive.",
    vocabulary: [
      {
        id: "ja-vocab-konnichiwa",
        word: "こんにちは",
        translation: "Hello / Good afternoon",
        pronunciation: "kon-nee-chee-wah",
        partOfSpeech: "greeting",
        exampleSentence: "皆さん、こんにちは。",
        exampleTranslation: "Hello, everyone."
      },
      {
        id: "ja-vocab-arigatou",
        word: "ありがとう",
        translation: "Thank you (informal)",
        pronunciation: "ah-ree-gah-toh",
        partOfSpeech: "other",
        exampleSentence: "友達、ありがとう！",
        exampleTranslation: "Friend, thank you!"
      },
      {
        id: "ja-vocab-hai",
        word: "はい",
        translation: "Yes",
        pronunciation: "hai",
        partOfSpeech: "other",
        exampleSentence: "はい、そうです。",
        exampleTranslation: "Yes, that's correct."
      },
      {
        id: "ja-vocab-iie",
        word: "いいえ",
        translation: "No",
        pronunciation: "ee-eh",
        partOfSpeech: "other",
        exampleSentence: "いいえ、違います。",
        exampleTranslation: "No, that's wrong."
      }
    ],
    phrases: [
      {
        id: "ja-phrase-o-genki-desu-ka",
        phrase: "お元気ですか？",
        translation: "Are you well? / How are you?",
        pronunciation: "oh-gen-kee deh-soo kah",
        context: "A polite way to ask about someone's health or well-being."
      },
      {
        id: "ja-phrase-genki-desu",
        phrase: "元気です。",
        translation: "I am well.",
        pronunciation: "gen-kee deh-soo",
        context: "The standard response to 'O-genki desu ka?'."
      },
      {
        id: "ja-phrase-hajimemashite",
        phrase: "はじめまして。",
        translation: "Nice to meet you (for the first time).",
        pronunciation: "hah-jee-meh-mah-shee-teh",
        context: "Lit: 'It is a beginning.' Used only when meeting someone for the very first time."
      }
    ],
    activities: [
      {
        id: "ja-u1l1-act1",
        type: "video",
        title: "Greetings with Kenji",
        instructions: "Watch Kenji explain the bow and teach 'Konnichiwa'. Note the flat tone structure and silent vowels in Japanese endings (e.g. 'desu' is often pronounced 'des').",
        xpReward: 10,
        videoUrl: "https://example.com/videos/japanese-intro.mp4",
        streamVideoAgentId: "agent_kenji_intro",
        aiPrompt: "Demonstrate a respectful bow while saying 'Konnichiwa'. Teach the flat rhythm of Japanese syllables. Guide the student to repeat 'Arigatou' and praise them."
      },
      {
        id: "ja-u1l1-act2",
        type: "multiple-choice",
        title: "Yes or No?",
        instructions: "Match the Japanese word with its correct affirmative translation.",
        xpReward: 10,
        question: "What is the Japanese word for 'Yes'?",
        options: ["いいえ (Iie)", "ありがとう (Arigatou)", "はい (Hai)", "さようなら (Sayounara)"],
        correctOptionIndex: 2,
        explanation: "'はい' (Hai) means 'Yes', while 'いいえ' (Iie) means 'No'."
      },
      {
        id: "ja-u1l1-act3",
        type: "audio",
        title: "Polite Introductions",
        instructions: "Listen to the native pronunciation and repeat the introduction out loud.",
        xpReward: 10,
        phrasesToRepeat: [
          {
            phrase: "はじめまして。",
            translation: "Nice to meet you.",
            pronunciation: "hah-jee-meh-mah-shee-teh"
          },
          {
            phrase: "元気です、ありがとう。",
            translation: "I am well, thank you.",
            pronunciation: "gen-kee deh-soo, ah-ree-gah-toh"
          }
        ]
      },
      {
        id: "ja-u1l1-act4",
        type: "translation",
        title: "Greeting a Friend",
        instructions: "Translate 'Hello' in Japanese characters.",
        xpReward: 10,
        sourceText: "Hello",
        targetText: "こんにちは",
        options: ["こんにちは", "ありがとう", "はい", "いいえ"]
      },
      {
        id: "ja-u1l1-act5",
        type: "chat",
        title: "First Encounter with Sakura",
        instructions: "Greet Sakura politely in Japanese and ask how she is doing.",
        xpReward: 10,
        aiSystemPrompt: "You are Sakura, a friendly host at a guest house in Kyoto. The student is checking in. Keep sentences extremely short. Welcome them, say 'Hajimemashite' (Nice to meet you), and ask if they are doing well.",
        initialMessage: "はじめまして、さくらです！お元気ですか？"
      }
    ]
  }
];
