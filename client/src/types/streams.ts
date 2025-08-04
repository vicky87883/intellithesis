// Stream data types
export interface ResearchTopic {
  id: string;
  title: string;
  description: string;
  papers: number;
  image?: string;
}

export interface Stream {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featuredTopics: ResearchTopic[];
  color: string;
  gradient: string;
  icon: string;
  stats: {
    papers: number;
    researchers: number;
    institutions: number;
  };
}

export const streams: Stream[] = [
  {
    id: '1',
    name: 'Computer Science',
    slug: 'computer-science',
    description: 'Explore cutting-edge algorithms, artificial intelligence, and computational systems that power the digital world.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    color: 'blue',
    gradient: 'from-blue-500 to-purple-600',
    icon: 'Code2',
    stats: {
      papers: 15420,
      researchers: 8900,
      institutions: 450
    },
    featuredTopics: [
      {
        id: 'cs-1',
        title: 'Quantum Computing Applications',
        description: 'Revolutionary quantum algorithms and their applications in cryptography, optimization, and machine learning.',
        papers: 2340
      },
      {
        id: 'cs-2',
        title: 'Blockchain Technology',
        description: 'Distributed ledger systems, smart contracts, and decentralized applications transforming digital trust.',
        papers: 1890
      },
      {
        id: 'cs-3',
        title: 'Machine Learning & AI',
        description: 'Neural networks, deep learning, and artificial intelligence systems for pattern recognition and automation.',
        papers: 5670
      },
      {
        id: 'cs-4',
        title: 'Cybersecurity & Privacy',
        description: 'Advanced security protocols, encryption methods, and privacy-preserving technologies.',
        papers: 3120
      },
      {
        id: 'cs-5',
        title: 'Cloud Computing & Distributed Systems',
        description: 'Scalable cloud architectures, microservices, and distributed computing paradigms.',
        papers: 2890
      },
      {
        id: 'cs-6',
        title: 'Human-Computer Interaction',
        description: 'User experience design, virtual reality, and interactive computing systems.',
        papers: 1560
      }
    ]
  },
  {
    id: '2',
    name: 'Physics',
    slug: 'physics',
    description: 'Discover the fundamental laws of nature, from quantum mechanics to cosmology and particle physics.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-600',
    icon: 'Atom',
    stats: {
      papers: 12850,
      researchers: 7200,
      institutions: 380
    },
    featuredTopics: [
      {
        id: 'phy-1',
        title: 'Quantum Mechanics & Entanglement',
        description: 'Wave-particle duality, quantum superposition, and non-local correlations in quantum systems.',
        papers: 3450
      },
      {
        id: 'phy-2',
        title: 'Particle Physics & CERN',
        description: 'Subatomic particles, Higgs boson, and discoveries at the Large Hadron Collider.',
        papers: 2890
      },
      {
        id: 'phy-3',
        title: 'Astrophysics & Cosmology',
        description: 'Dark matter, dark energy, and the evolution of the universe from the Big Bang to present.',
        papers: 4120
      },
      {
        id: 'phy-4',
        title: 'Condensed Matter Physics',
        description: 'Superconductivity, topological insulators, and quantum materials with exotic properties.',
        papers: 2340
      },
      {
        id: 'phy-5',
        title: 'Plasma Physics & Fusion',
        description: 'Nuclear fusion, plasma confinement, and sustainable energy solutions.',
        papers: 1890
      },
      {
        id: 'phy-6',
        title: 'Optics & Photonics',
        description: 'Laser technology, quantum optics, and photonic computing systems.',
        papers: 1560
      }
    ]
  },
  {
    id: '3',
    name: 'Chemistry',
    slug: 'chemistry',
    description: 'Investigate molecular structures, chemical reactions, and materials that shape our world.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop',
    color: 'green',
    gradient: 'from-green-500 to-teal-600',
    icon: 'Flask',
    stats: {
      papers: 11230,
      researchers: 6500,
      institutions: 320
    },
    featuredTopics: [
      {
        id: 'chem-1',
        title: 'Nanotechnology & Materials',
        description: 'Carbon nanotubes, graphene, and advanced materials with extraordinary properties.',
        papers: 2890
      },
      {
        id: 'chem-2',
        title: 'Biochemistry & Enzymes',
        description: 'Protein structures, enzyme catalysis, and molecular mechanisms in living systems.',
        papers: 3450
      },
      {
        id: 'chem-3',
        title: 'Organic Chemistry & Synthesis',
        description: 'Complex molecule synthesis, natural products, and pharmaceutical development.',
        papers: 4120
      },
      {
        id: 'chem-4',
        title: 'Electrochemistry & Batteries',
        description: 'Energy storage systems, fuel cells, and sustainable electrochemical processes.',
        papers: 2340
      },
      {
        id: 'chem-5',
        title: 'Computational Chemistry',
        description: 'Molecular modeling, quantum chemistry, and computer-aided drug design.',
        papers: 1890
      },
      {
        id: 'chem-6',
        title: 'Green Chemistry & Catalysis',
        description: 'Sustainable chemical processes, renewable feedstocks, and environmental catalysis.',
        papers: 1560
      }
    ]
  },
  {
    id: '4',
    name: 'Artificial Intelligence & Machine Learning',
    slug: 'ai-ml',
    description: 'Explore the frontiers of intelligent systems, neural networks, and cognitive computing.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-600',
    icon: 'Brain',
    stats: {
      papers: 9870,
      researchers: 5800,
      institutions: 290
    },
    featuredTopics: [
      {
        id: 'ai-1',
        title: 'Deep Learning & Neural Networks',
        description: 'Convolutional networks, transformers, and advanced neural architectures.',
        papers: 3450
      },
      {
        id: 'ai-2',
        title: 'Natural Language Processing',
        description: 'Language models, text generation, and semantic understanding systems.',
        papers: 2890
      },
      {
        id: 'ai-3',
        title: 'Computer Vision & Robotics',
        description: 'Image recognition, autonomous systems, and robotic perception.',
        papers: 3120
      },
      {
        id: 'ai-4',
        title: 'Reinforcement Learning',
        description: 'Game theory, decision making, and adaptive learning algorithms.',
        papers: 2340
      },
      {
        id: 'ai-5',
        title: 'Explainable AI & Ethics',
        description: 'Transparent AI systems, bias detection, and responsible artificial intelligence.',
        papers: 1890
      },
      {
        id: 'ai-6',
        title: 'AI for Scientific Discovery',
        description: 'Drug discovery, materials science, and AI-driven research acceleration.',
        papers: 1560
      }
    ]
  },
  {
    id: '5',
    name: 'Psychology',
    slug: 'psychology',
    description: 'Understand human behavior, cognition, and the complexities of the mind and brain.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-600',
    icon: 'Brain',
    stats: {
      papers: 8760,
      researchers: 5200,
      institutions: 280
    },
    featuredTopics: [
      {
        id: 'psy-1',
        title: 'Cognitive Neuroscience',
        description: 'Brain imaging, memory systems, and neural correlates of consciousness.',
        papers: 2890
      },
      {
        id: 'psy-2',
        title: 'Clinical Psychology & Therapy',
        description: 'Mental health interventions, psychotherapy, and psychological assessment.',
        papers: 3450
      },
      {
        id: 'psy-3',
        title: 'Social Psychology & Behavior',
        description: 'Group dynamics, social influence, and interpersonal relationships.',
        papers: 2340
      },
      {
        id: 'psy-4',
        title: 'Developmental Psychology',
        description: 'Child development, aging, and lifespan psychological changes.',
        papers: 1890
      },
      {
        id: 'psy-5',
        title: 'Industrial-Organizational Psychology',
        description: 'Workplace behavior, leadership, and organizational effectiveness.',
        papers: 1560
      },
      {
        id: 'psy-6',
        title: 'Positive Psychology & Well-being',
        description: 'Happiness research, resilience, and psychological flourishing.',
        papers: 1230
      }
    ]
  }
];

export function getStreamBySlug(slug: string): Stream | undefined {
  return streams.find(stream => stream.slug === slug);
}

export function getAllStreams(): Stream[] {
  return streams;
} 