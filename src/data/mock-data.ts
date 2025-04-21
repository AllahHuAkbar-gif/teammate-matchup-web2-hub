
import { DeveloperProfile } from "@/components/developer/developer-card";
import { Hackathon } from "@/components/hackathon/hackathon-card";
import { MessagePreview } from "@/components/messages/message-preview";
import { Message } from "@/components/messages/message-thread";

// Mock Developers
export const developers: DeveloperProfile[] = [
  {
    id: "dev1",
    name: "Emma Rodriguez",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
    location: "San Francisco",
    bio: "Full-stack developer with 5 years of experience. Passionate about React, Node.js, and building products that make a difference.",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
    hackathons: ["HackMIT", "CalHacks", "HackNY"],
    isRemote: true
  },
  {
    id: "dev2",
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    location: "New York",
    bio: "Backend developer specializing in scalable architectures. I love solving complex problems and contributing to open source.",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "Kubernetes"],
    hackathons: ["HackNY", "PennApps"],
    isRemote: false
  },
  {
    id: "dev3",
    name: "Sophia Williams",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop",
    location: "London",
    bio: "UI/UX designer and frontend developer. I create beautiful, intuitive interfaces that users love.",
    skills: ["UI/UX Design", "Figma", "React", "CSS", "Tailwind"],
    hackathons: ["Global Hackathon Seoul", "AngelHack"],
    isRemote: true
  },
  {
    id: "dev4",
    name: "Michael Johnson",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&h=256&auto=format&fit=crop",
    location: "Berlin",
    bio: "Mobile developer with expertise in React Native and Flutter. I build cross-platform apps that feel native.",
    skills: ["React Native", "Flutter", "JavaScript", "Firebase", "Mobile"],
    hackathons: ["HackGT", "MHacks"],
    isRemote: false
  },
  {
    id: "dev5",
    name: "Olivia Garcia",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop",
    location: "Toronto",
    bio: "Data scientist and ML engineer. I love working with data and creating models that provide real insights.",
    skills: ["Python", "ML/AI", "TensorFlow", "Data Science", "AWS"],
    hackathons: ["HackMIT", "CalHacks"],
    isRemote: true
  },
  {
    id: "dev6",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=256&h=256&auto=format&fit=crop",
    location: "Seoul",
    bio: "Blockchain developer and smart contract enthusiast. I'm building the decentralized future.",
    skills: ["Blockchain", "Solidity", "Ethereum", "JavaScript", "Web3"],
    hackathons: ["ETHGlobal", "HackTX"],
    isRemote: false
  },
  {
    id: "dev7",
    name: "Jessica Taylor",
    avatar: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?q=80&w=256&h=256&auto=format&fit=crop",
    location: "Remote",
    bio: "DevOps engineer focusing on CI/CD pipelines and infrastructure as code. I make deployments smooth and reliable.",
    skills: ["DevOps", "AWS", "Terraform", "Docker", "Kubernetes"],
    hackathons: ["HackIllinois", "HackDuke"],
    isRemote: true
  },
  {
    id: "dev8",
    name: "Robert Martinez",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop",
    location: "Austin",
    bio: "Game developer with a passion for creating immersive experiences. I work with Unity and Unreal Engine.",
    skills: ["Unity", "C#", "Game Development", "3D Modeling", "AR/VR"],
    hackathons: ["HackGT", "YHack"],
    isRemote: false
  }
];

// Mock Hackathons
export const hackathons: Hackathon[] = [
  {
    id: "hack1",
    name: "HackMIT",
    location: "Cambridge, MA",
    isRemote: false,
    startDate: "2025-09-15",
    endDate: "2025-09-17",
    description: "MIT's annual hackathon bringing together the most creative and innovative minds from around the world.",
    category: "General",
    technologies: ["AI/ML", "Web", "Hardware", "Mobile", "Blockchain"],
    participantsCount: 450
  },
  {
    id: "hack2",
    name: "ETHGlobal",
    location: "Remote",
    isRemote: true,
    startDate: "2025-05-10",
    endDate: "2025-05-12",
    description: "The world's largest Ethereum hackathon, focusing on blockchain technology and decentralized applications.",
    category: "Blockchain",
    technologies: ["Ethereum", "Solidity", "Web3", "DeFi", "NFTs"],
    participantsCount: 800
  },
  {
    id: "hack3",
    name: "TreeHacks",
    location: "Stanford, CA",
    isRemote: false,
    startDate: "2025-02-20",
    endDate: "2025-02-22",
    description: "Stanford University's premier hackathon focused on solving real-world problems with technology.",
    category: "Social Impact",
    technologies: ["AI/ML", "Data Science", "Web", "Mobile", "Healthcare"],
    participantsCount: 600
  },
  {
    id: "hack4",
    name: "HackNY",
    location: "New York, NY",
    isRemote: false,
    startDate: "2025-04-05",
    endDate: "2025-04-07",
    description: "A hackathon organized by NYU and Columbia, focused on the New York tech ecosystem.",
    category: "General",
    technologies: ["Web", "Data Science", "FinTech", "AR/VR", "Mobile"],
    participantsCount: 350
  },
  {
    id: "hack5",
    name: "Global Hackathon Seoul",
    location: "Seoul, South Korea",
    isRemote: false,
    startDate: "2025-06-15",
    endDate: "2025-06-17",
    description: "Asia's largest hackathon bringing together developers from across the continent.",
    category: "General",
    technologies: ["AI/ML", "Blockchain", "IoT", "Mobile", "Cloud"],
    participantsCount: 500
  },
  {
    id: "hack6",
    name: "AngelHack Remote",
    location: "Remote",
    isRemote: true,
    startDate: "2025-07-20",
    endDate: "2025-07-22",
    description: "A global remote hackathon with participants from over 100 countries working on cutting-edge technology.",
    category: "General",
    technologies: ["Web", "Mobile", "AI/ML", "Cloud", "DevOps"],
    participantsCount: 1200
  }
];

// Current User (for the demo)
export const currentUser: DeveloperProfile = {
  id: "current-user",
  name: "Sam Taylor",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
  location: "Seattle",
  bio: "Full-stack developer experienced in React and Node.js. Looking for teammates for upcoming hackathons!",
  skills: ["React", "JavaScript", "Node.js", "MongoDB", "UI/UX"],
  hackathons: ["HackMIT", "TreeHacks"],
  isRemote: true
};

// Mock Messages
export const messageThreads: Record<string, {
  contact: DeveloperProfile,
  messages: Message[]
}> = {
  "thread1": {
    contact: developers[0],
    messages: [
      {
        id: "msg1",
        senderId: developers[0].id,
        text: "Hi there! I saw your profile and noticed we're both interested in HackMIT. Would you like to team up?",
        timestamp: new Date(2025, 3, 18, 14, 30)
      },
      {
        id: "msg2",
        senderId: currentUser.id,
        text: "Hey Emma! That sounds great. I was actually looking for teammates. What kind of project are you thinking of working on?",
        timestamp: new Date(2025, 3, 18, 14, 45)
      },
      {
        id: "msg3",
        senderId: developers[0].id,
        text: "I was thinking of something in the healthcare space using AI/ML. Maybe an app that helps predict potential health issues based on symptoms?",
        timestamp: new Date(2025, 3, 18, 15, 0)
      }
    ]
  },
  "thread2": {
    contact: developers[2],
    messages: [
      {
        id: "msg4",
        senderId: currentUser.id,
        text: "Hi Sophia! I really like your UI/UX work. I'm working on a project for AngelHack and could use someone with your skills.",
        timestamp: new Date(2025, 3, 17, 10, 15)
      },
      {
        id: "msg5",
        senderId: developers[2].id,
        text: "Thanks Sam! I'd be interested in learning more about your project. What are you building?",
        timestamp: new Date(2025, 3, 17, 11, 30)
      }
    ]
  }
};

// Message Previews (for the inbox view)
export const messagePreviews: MessagePreview[] = [
  {
    id: "thread1",
    senderId: developers[0].id,
    senderName: developers[0].name,
    senderAvatar: developers[0].avatar,
    lastMessage: "I was thinking of something in the healthcare space using AI/ML...",
    timestamp: new Date(2025, 3, 18, 15, 0),
    unread: true
  },
  {
    id: "thread2",
    senderId: developers[2].id,
    senderName: developers[2].name,
    senderAvatar: developers[2].avatar,
    lastMessage: "Thanks Sam! I'd be interested in learning more about your project. What are you building?",
    timestamp: new Date(2025, 3, 17, 11, 30),
    unread: false
  }
];
