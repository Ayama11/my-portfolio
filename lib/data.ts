export type Project = {
  id: string;
  title: string;
  short: string;
  image: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  hfUrl?: string;
  details: {
    description: string[];
    objectives: string[];
    features: string[];
    dataset: string[];
    results: string[];
  };
};

export const links = {
  github: "https://github.com/Ayama11",
  linkedin: "https://www.linkedin.com/in/aya-almalla"
};

export const projects: Project[] = [
  {
    id: "shifaa",
    title: "Shifaa: Medical Question Classification",
    short:
      "End-to-end Arabic NLP system that classifies medical questions into 16 categories and returns top predictions with confidence scores.",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/6419bd37-a320-43a3-b73c-31fa184eee64.png",
    tech: ["Transformers", "PyTorch", "Streamlit", "NLP", "AraBERT"],
    demoUrl: "https://shifaa-app-app-kphfdr6vpdwjnhkfilgpu.streamlit.app",
    githubUrl: "https://github.com/Ayama11",
    hfUrl: "https://huggingface.co/aya99ma/shifaa-bert-classifier",
    details: {
      description: [
        "Shifaa Medical Question Classification is an end-to-end Arabic NLP system that automatically categorizes medical questions into 16 medical categories.",
        "It predicts the most relevant category and returns confidence scores to enable faster routing and organization of large-scale medical Q&A content."
      ],
      objectives: [
        "Automate categorization of Arabic medical questions into specialty-based classes.",
        "Improve consistency and reduce manual effort in labeling/routing.",
        "Provide a deployable pipeline from training to production demo.",
        "Expose the model through an interactive interface."
      ],
      features: [
        "16-class Arabic text classification using fine-tuned AraBERT.",
        "Top-k predictions + confidence scores.",
        "Optimized inference with caching.",
        "Model published on Hugging Face Hub with Model Card.",
        "Streamlit web interface deployed publicly."
      ],
      dataset: [
        "Arabic medical consultations/questions (Shifaa-related dataset).",
        "Labels mapped to 16 medical specialties.",
        "Preprocessing for Arabic transformers (tokenization + truncation/padding)."
      ],
      results: [
        "Accuracy ≈ 0.82",
        "F1-macro ≈ 0.70",
        "Deployed as a lightweight web app for real-time testing."
      ]
    }
  },
  {
    id: "platemate",
    title: "PlateMate: AI Meets Petri Dishes 🧫",
    short:
      "AI-powered system automating Antibiotic Susceptibility Testing (AST) with disc detection and inhibition zone measurement.",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/1d49b888-d6ec-427f-9429-8a3e95046a7a.jpeg",
    tech: ["Python", "PyTorch", "OpenCV", "YOLOv8", "U-Net", "ResNet34"],
    demoUrl:
      "https://drive.google.com/file/d/1XFtC8Gjgg-UMypgfO19UU5Gxn0KQ9igf/view?usp=drivesdk",
    githubUrl: "https://github.com/Ayama11/PlateMate",
    details: {
      description: [
        "Computer vision system designed to automate AST, traditionally performed manually by lab technicians.",
        "Detects antibiotic discs and measures inhibition zones with high precision and speed."
      ],
      objectives: [
        "Reduce manual workload for laboratory staff.",
        "Enhance accuracy and reproducibility of inhibition zone measurements.",
        "Enable resource-limited labs using simple imaging tools.",
        "Provide automated reporting from a captured image."
      ],
      features: [
        "Disc detection using YOLOv8 (Precision 0.90+, Recall 0.90+).",
        "Zone segmentation with U-Net + ResNet34 (Dice 0.94, IoU 0.91).",
        "Automated measurement with pixel-level precision.",
        "Instant report generation, mobile-friendly.",
        "Mobile-app compatible interface."
      ],
      dataset: [
        "326 real Petri dish images collected from Damascus laboratories.",
        "40 antibiotic types.",
        "Robust preprocessing for lighting/contamination/inconsistent labeling.",
        "Data augmentation for improved robustness."
      ],
      results: [
        "Disc Detection: Precision >0.90, Recall >0.90",
        "Zone Segmentation: Dice = 0.94, IoU = 0.91",
        "Integrated into a mobile application for real-time analysis."
      ]
    }
  },
  {
    id: "expert",
    title: "Antibiotic Expert System AI",
    short:
      "Rule-based medical expert system recommending antibiotics and dosage for tonsillitis using forward-chaining reasoning.",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/6419bd37-a320-43a3-b73c-31fa184eee64.png",
    tech: ["Python", "Experta", "Knowledge Representation", "Inference Engine"],
    githubUrl: "https://github.com/Ayama11/Antibiotic-Expert-System-AI",
    details: {
      description: [
        "Python rule-driven expert system built with Experta.",
        "Recommends suitable antibiotic + dosage based on age, pregnancy, allergies, renal/liver conditions, and resistance."
      ],
      objectives: [
        "Personalized recommendations for tonsillitis cases.",
        "Filter contraindications automatically.",
        "Calculate dosage for adults/children/pregnancy/dialysis.",
        "Interactive diagnostic Q&A using forward chaining."
      ],
      features: [
        "Rule-based inference engine (Experta/PyKnow style).",
        "Antibiotic scoring + contraindication filtering.",
        "Patient-specific dosage logic.",
        "Interactive question–answer flow."
      ],
      dataset: ["Rule base + encoded medical constraints (knowledge-driven)."],
      results: ["Produces a ranked recommendation with confidence score and dosage plan."]
    }
  },
  {
    id: "voyago",
    title: "Voyago: Your Ultimate Travel Sidekick 🌍",
    short:
      "Smart travel app for curated trips, booking management, payments, maps, and an AI travel assistant.",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/ee840d5c-78bf-4a09-a86c-186900a9eb66.jpeg",
    tech: ["Flutter", "Node.js", "REST API", "Stripe", "Google Maps"],
    demoUrl:
      "https://drive.google.com/file/d/1Wk15NWQm3mijWcTJ_iIKrxdei9vZhxiH/view?usp=drivesdk",
    githubUrl: "https://github.com/Ayaabq/voyago",
    details: {
      description: [
        "Travel app for curated and customizable trips.",
        "Combines real-time data, AI assistance, and seamless payment."
      ],
      objectives: [
        "Curated trips + personalized journey building.",
        "Booking management and secure payments.",
        "AI assistant for instant travel guidance.",
        "Real-time weather/currency/travel updates."
      ],
      features: [
        "Curated trips & custom journey builder.",
        "Stripe payments (wallet/card).",
        "Google Maps & Geocoding.",
        "Weather + currency info.",
        "AI assistant chat."
      ],
      dataset: ["Not applicable (product app)."],
      results: ["End-to-end mobile app experience with integrations and assistant features."]
    }
  }
];
