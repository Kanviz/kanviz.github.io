import type { Service } from '../types';

export const services: Service[] = [
  // Visual AI
  {
    id: '1',
    title: 'Data Annotation',
    description: 'High-quality labeling of images, video, LiDAR, and sensor data. We produce precisely annotated datasets — bounding boxes, segmentation masks, keypoints, and more — that give your models the ground truth they need to learn accurately and generalize at scale.',
    icon: 'file-text',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: '2',
    title: 'Computer Vision',
    description: 'End-to-end computer vision engineering: object detection, image classification, semantic segmentation, and real-time tracking. We architect and deploy vision systems that perform reliably — from edge devices to cloud-scale inference pipelines.',
    icon: 'eye',
    color: 'from-purple-500 to-pink-400',
  },
  {
    id: '3',
    title: 'Deep Learning Models',
    description: 'From architecture selection and training to fine-tuning and production deployment, we build deep learning models tailored to your domain. We transform passive pixels into active, actionable intelligence that powers the future of your industry.',
    icon: 'bot',
    color: 'from-orange-500 to-red-400',
  },
  // Language & Agentic AI
  {
    id: '4',
    title: 'LLM Deployment',
    description: 'We deploy and fine-tune large language models — open-source (Llama, Mistral, Phi) and proprietary (GPT-4, Claude, Gemini) — tailored to your domain. From prompt engineering and RLHF to quantization and serving at scale, we handle the full lifecycle.',
    icon: 'message-square',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: '5',
    title: 'RAG Systems',
    description: 'We architect production-grade RAG pipelines that ground LLM responses in your proprietary knowledge base — documents, databases, code repositories, or real-time data streams — eliminating hallucinations and keeping answers current.',
    icon: 'database',
    color: 'from-cyan-500 to-blue-400',
  },
  {
    id: '6',
    title: 'Autonomous Agents',
    description: 'We design and deploy multi-step AI agents that plan, use tools, and execute complex workflows autonomously. From single-agent task runners to multi-agent orchestration systems, we build reliable agentic pipelines that integrate with your existing infrastructure.',
    icon: 'bot',
    color: 'from-indigo-500 to-purple-400',
  },
  {
    id: '7',
    title: 'Vision Language Models',
    description: 'We deploy and fine-tune Vision Language Models — GPT-4o, LLaVA, Qwen-VL, InternVL, PaliGemma — that reason jointly over images and text. From automated image captioning and visual Q&A to document understanding and multimodal RAG, we build systems that see and speak.',
    icon: 'layers',
    color: 'from-pink-500 to-rose-400',
  },
  // AI Transformation Consulting
  {
    id: '8',
    title: 'AI Readiness Assessment',
    description: 'We audit your data infrastructure, team capabilities, and business processes to produce a clear, prioritized AI adoption roadmap — so you invest in the right initiatives first.',
    icon: 'file-text',
    color: 'from-blue-600 to-indigo-400',
  },
  {
    id: '9',
    title: 'Use-Case Discovery & ROI',
    description: 'We identify high-value AI opportunities across your operations, model expected returns, and rank initiatives by feasibility and impact — giving leadership a defensible business case.',
    icon: 'bar-chart',
    color: 'from-emerald-600 to-green-400',
  },
  {
    id: '10',
    title: 'AI Governance & Risk',
    description: 'We design responsible AI frameworks covering bias auditing, explainability requirements, regulatory compliance (GDPR, EU AI Act), and model monitoring policies to protect your organization.',
    icon: 'shield',
    color: 'from-slate-600 to-gray-400',
  },
  {
    id: '11',
    title: 'Architecture Advisory',
    description: 'Choosing between open-source and proprietary models, cloud vs. on-prem, build vs. buy — we provide vendor-neutral guidance grounded in real-world deployment experience, not sales pitches.',
    icon: 'layout-template',
    color: 'from-amber-600 to-orange-400',
  },
  {
    id: '12',
    title: 'Team Enablement',
    description: 'We upskill your engineering and product teams through hands-on workshops, code reviews, and embedded collaboration — so your organization owns its AI capabilities long after the engagement ends.',
    icon: 'graduation-cap',
    color: 'from-purple-600 to-pink-400',
  },
  {
    id: '13',
    title: 'MLOps & Improvement',
    description: 'We establish the pipelines, monitoring dashboards, and retraining triggers that keep your models accurate as data drifts — turning a one-time deployment into a continuously improving asset.',
    icon: 'zap',
    color: 'from-teal-600 to-cyan-400',
  },
];
