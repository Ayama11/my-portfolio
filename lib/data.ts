export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  hfUrl?: string;
  full: {
    description: string[];
    objectives: string[];
    features: string[];
    dataset: string[];
    results: string[];
    tech: string[];
  };
};

export const SOCIALS = {
  github: "https://github.com/Ayama11",
  linkedin: "https://www.linkedin.com/in/aya-almalla"
};

export const PROJECTS: Project[] = [
  {
    id: "shifaa",
    title: "Shifaa: Medical Question Classification",
    subtitle: "Arabic NLP • 16-class classification",
    description:
      "End-to-end NLP system that classifies Arabic medical questions into 16 categories and returns top predictions with confidence scores.",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/6419bd37-a320-43a3-b73c-31fa184eee64.png",
    tags: ["Transformers", "PyTorch", "Streamlit", "NLP"],
    demoUrl: "https://shifaa-app-app-kphfdr6vpdwjnhkfrlgpu.streamlit.app",
    githubUrl: "https://github.com/Ayama11",
    hfUrl: "https://huggingface.co/aya99ma/shifaa-bert-classifier",
    full: {
      description: [
        "Shifaa Medical Question Classification is an end-to-end Arabic NLP system that automatically categorizes medical questions into 16 medical categories.",
        "It predicts the most relevant category and returns confidence scores, enabling faster routing and organization of large-scale medical Q&A content."
      ],
      objectives: [
        "Automate categorization of Arabic medical questions into specialty-based classes.",
        "Improve consistency and reduce manual effort in labeling/routing questions.",
        "Provide a deployable pipeline from training to production-ready demo.",
        "Make the model accessible through an interactive interface for quick testing."
      ],
      features: [
        "Arabic Text Classification (16 classes) using fine-tuned AraBERT.",
        "Top-k Predictions + Confidence Scores for transparent outputs.",
        "Optimized inference with caching for smoother UX.",
        "Model published on HuggingFace with a structured Model Card.",
        "Interactive web interface built with Streamlit and deployed publicly."
      ],
      dataset: [
        "Arabic medical consultations/questions (Shifaa-related dataset).",
        "Labels mapped to 16 medical specialties (pediatrics, neurology, dermatology, surgery, etc.).",
        "Preprocessing pipeline (tokenization, truncation/padding for transformer inputs)."
      ],
      results: ["Accuracy ≈ 0.82", "F1-macro ≈ 0.70", "Deployed as a lightweight web app for real-time testing."],
      tech: ["Python", "PyTorch", "HuggingFace", "AraBERT", "Streamlit"]
    }
  },
  {
    id: "platemate",
    title: "PlateMate: Smart Petri Dish AI",
    subtitle: "Computer Vision • AST automation",
    description:
      "AI-powered system automating Antibiotic Susceptibility Testing with high-precision detection and measurement.",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/1d49b888-d6ec-427f-9429-8a3e95046a7a.jpeg",
    tags: ["PyTorch", "OpenCV", "YOLOv8", "U-Net"],
    demoUrl: "https://drive.google.com/file/d/1XFtC8Gjgg-UMypgfO19UU5Gxn0KQ9igf/view?usp=drivesdk",
    githubUrl: "https://github.com/Ayama11/PlateMate",
    full: {
      description: [
        "PlateMate is a computer vision system designed to automate Antibiotic Susceptibility Testing (AST).",
        "It detects antibiotic discs and measures inhibition zones in Petri dishes with high precision and speed."
      ],
      objectives: [
        "Reduce manual workload for lab staff.",
        "Enhance accuracy and reproducibility of inhibition zone measurements.",
        "Enable resource-limited labs to conduct AST efficiently using simple imaging tools.",
        "Provide automated reporting directly from a captured image."
      ],
      features: [
        "Disc detection using YOLOv8 (Precision 0.90+, Recall 0.90+).",
        "Zone segmentation with U-Net + ResNet34 (Dice 0.94, IoU 0.91).",
        "Automated inhibition zone measurement with pixel-level precision.",
        "Instant report generation in a mobile-friendly format."
      ],
      dataset: [
        "326 real Petri dish images collected from Damascus laboratories.",
        "40 antibiotic types matching real-world medical use cases.",
        "Preprocessing pipeline for lighting variation, contamination, and labeling inconsistencies."
      ],
      results: [
        "Disc detection Precision > 0.90, Recall > 0.90",
        "Zone segmentation Dice = 0.94, IoU = 0.91",
        "Integrated into a mobile application for real-time analysis."
      ],
      tech: ["Python", "PyTorch", "OpenCV", "YOLOv8", "U-Net", "ResNet34"]
    }
  },
  {
    id: "expert",
    title: "Antibiotic Expert System AI",
    subtitle: "Rule-based AI • Experta",
    description: "Rule-based AI system recommending personalized antibiotics and dosages for tonsillitis.",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/6419bd37-a320-43a3-b73c-31fa184eee64.png",
    tags: ["Python", "Experta", "Inference Engine"],
    githubUrl: "https://github.com/Ayama11/Antibiotic-Expert-System-AI",
    demoUrl: "#",
    full: {
      description: [
        "A Python-based medical expert system built using Experta.",
        "Recommends suitable antibiotics and dosage based on patient factors and resistance."
      ],
      objectives: [
        "Provide personalized antibiotic recommendations.",
        "Filter contraindications and calculate proper dosages.",
        "Simulate interactive diagnostic Q&A using forward chaining."
      ],
      features: [
        "Rule-based inference using Experta (PyKnow).",
        "Antibiotic scoring and contraindication filtering.",
        "Dose selection for adult/child/pregnancy cases."
      ],
      dataset: ["Knowledge-base encoded as facts + rules (no external dataset)."],
      results: ["Produces ranked drug recommendations with reasoning constraints applied."],
      tech: ["Python", "Experta", "Knowledge Representation", "Inference Engine"]
    }
  },
  {
    id: "voyago",
    title: "Voyago: Travel Sidekick",
    subtitle: "Mobile + Web • Booking & AI assistant",
    description: "Smart travel app for curated trips, booking management, and an AI travel assistant.",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/ee840d5c-78bf-4a09-a86c-186900a9eb66.jpeg",
    tags: ["Flutter", "Node.js", "REST API", "Stripe"],
    demoUrl: "https://drive.google.com/file/d/1Wk15NWQm3mijWcTJ_iIKrxdei9vZhxiH/view?usp=drivesdk",
    githubUrl: "https://github.com/Ayaabq/voyago",
    full: {
      description: [
        "Voyago is a travel application that provides curated trips and customizable journeys.",
        "Includes real-time data, AI assistance, and secure payment options for a smooth travel experience."
      ],
      objectives: [
        "Provide curated ready-to-go trips and personalized journey building.",
        "Enable booking management and secure payments.",
        "Offer AI chat for instant travel support."
      ],
      features: [
        "Curated trips + custom journey builder.",
        "Stripe payments, reservation management, maps & geocoding.",
        "Real-time weather/currency info.",
        "AI assistant chat."
      ],
      dataset: ["N/A (product app)."],
      results: ["Functional demo app with end-to-end flows implemented."],
      tech: ["Flutter", "Node.js", "REST API", "React.js", "Stripe API", "Google Maps API"]
    }
  }
];
