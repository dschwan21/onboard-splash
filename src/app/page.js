'use client';

import { useState, useEffect } from 'react';

// AI Chat Header Component
function ChatHeader({ title }) {
  return (
    <div className="px-4 py-3 flex items-center justify-between" style={{backgroundColor: '#2f2f2f', borderBottom: '1px solid #4a4a4a'}}>
      {/* Left side - Generic AI chat */}
      <div className="flex items-center space-x-3">
        <div className="text-white text-sm font-medium">
          {title}
        </div>
      </div>
      
      {/* Right side - Share button */}
      <div className="flex items-center space-x-2">
        <button className="text-white/70 text-sm px-3 py-1 rounded-md hover:bg-white/10 transition-colors">
          Share
        </button>
        <button className="text-white/70 hover:text-white">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// ChatGPT Dark Mode Message Component
function ChatMessage({ content, isUser, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isUser && content) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setShowCursor(true);
        
        let index = 0;
        const typeTimer = setInterval(() => {
          if (index < content.length) {
            setDisplayedText(content.slice(0, index + 1));
            index++;
          } else {
            setShowCursor(false);
            setIsTyping(false);
            clearInterval(typeTimer);
          }
        }, 60);
        
        return () => clearInterval(typeTimer);
      }, delay);
      
      return () => clearTimeout(timer);
    } else {
      setDisplayedText(content);
    }
  }, [content, isUser, delay]);

  if (isUser) {
    return (
      <div className="flex justify-end mb-6">
        <div className="max-w-[70%] text-right">
          <div className="text-white/80 text-sm mb-2">You</div>
          <div className="text-white text-sm leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex mb-6">
      <div className="max-w-[85%]">
        <div className="flex items-center mb-2">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-xs font-bold">AI</span>
          </div>
          <div className="text-white/80 text-sm">AI Assistant</div>
        </div>
        <div className="text-white text-sm leading-relaxed">
          <span>
            {displayedText}
            {showCursor && <span className="animate-pulse text-white/60">|</span>}
          </span>
        </div>
      </div>
    </div>
  );
}

// ChatGPT Dark Mode Interface Component
function ChatInterface({ prompt, response, isActive, title }) {
  return (
    <div className="flex-1 px-6 py-6 font-[var(--font-inter)]" style={{backgroundColor: '#212121'}}>
      <ChatMessage content={prompt} isUser={true} />
      {isActive && (
        <ChatMessage 
          content={response} 
          isUser={false} 
          delay={800}
        />
      )}
      
      {/* Input area simulation */}
      <div className="mt-6 pt-4" style={{borderTop: '1px solid #4a4a4a'}}>
        <div className="flex items-center space-x-3 px-4 py-3 rounded-lg" style={{backgroundColor: '#2f2f2f', border: '1px solid #4a4a4a'}}>
          <div className="text-white/40 text-sm flex-1">
            Message AI Assistant...
          </div>
          <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
            <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3D Feature Carousel Component
function Feature3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle card
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      id: 1,
      title: "AI Lesson Planner",
      url: "onboard.ai/tools/lesson-planner",
      prompt: "Create a 50-minute lesson on linear equations for 8th grade",
      response: "Here's your complete lesson plan:\n\n**Learning Objectives:**\n• Students will solve one-step linear equations\n• Students will identify real-world applications\n\n**Materials:**\n• Graphing calculators\n• Worksheet packet\n• Interactive whiteboard\n\n**Activities:**\n1. Warm-up review (10 min)\n2. Direct instruction (15 min)\n3. Guided practice (20 min)\n4. Exit ticket (5 min)"
    },
    {
      id: 2,
      title: "Parent Email Assistant",
      url: "onboard.ai/tools/email-assistant",
      prompt: "Draft a professional email to parents about missing assignments",
      response: "**Subject:** Partnership Opportunity - Supporting [Student Name]'s Success\n\nDear [Parent Name],\n\nI hope this message finds you well. I'm reaching out because I believe in [Student Name]'s potential and want to work together to support their continued growth.\n\nI've noticed a few recent assignments that haven't been submitted, and I'd love to collaborate with you to help [Student Name] get back on track...\n\nWould you be available for a brief conversation this week?"
    },
    {
      id: 3,
      title: "Quiz Generator",
      url: "onboard.ai/tools/quiz-generator",
      prompt: "Create a photosynthesis quiz for 6th grade science",
      response: "**Photosynthesis Quiz - 6th Grade**\n\n**Multiple Choice:**\n1. What do plants need for photosynthesis?\n   a) Water and carbon dioxide\n   b) Sunlight and oxygen\n   c) Water, carbon dioxide, and sunlight ✓\n\n**Short Answer:**\n2. Explain why leaves are green.\n\n**Word Bank:** chlorophyll, glucose, oxygen, carbon dioxide"
    },
    {
      id: 4,
      title: "Prompt Library",
      url: "onboard.ai/tools/prompt-library",
      prompt: "Browse writing prompts for high school English",
      response: "**Featured Writing Prompts:**\n\n**Creative Writing:**\n• \"Write from the perspective of an object in your bedroom\"\n• \"Describe a world where music is illegal\"\n\n**Analytical Essays:**\n• \"How does symbolism enhance theme in Romeo & Juliet?\"\n• \"Compare conflict resolution in two novels\"\n\n**Discussion Starters:**\n• \"Should social media be taught as a literacy?\""
    },
    {
      id: 5,
      title: "PDP Submission",
      url: "onboard.ai/tools/pdp-tracker",
      prompt: "Submit completed AI training for PDP credit",
      response: "**Submission Confirmed** ✓\n\n**Course:** AI Tools for Educators\n**Hours Completed:** 6.5\n**Verification Code:** EDU-2024-1127\n\n**Next Steps:**\n• Certificate will be emailed within 24 hours\n• Transcript updated automatically\n• District notification sent\n\n**Progress:** 6.5/6 hours complete"
    }
  ];

  // Auto-advance with pause on hover
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isHovered, features.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const totalCards = features.length;
    
    // Handle wrapping
    let position = diff;
    if (diff > totalCards / 2) position = diff - totalCards;
    if (diff < -totalCards / 2) position = diff + totalCards;

    if (position === 0) {
      // Center card
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        zIndex: 10,
        opacity: 1,
      };
    } else if (position === -1) {
      // Left card
      return {
        transform: 'translateX(-60%) scale(0.85) rotateY(30deg)',
        zIndex: 5,
        opacity: 0.6,
      };
    } else if (position === 1) {
      // Right card
      return {
        transform: 'translateX(60%) scale(0.85) rotateY(-30deg)',
        zIndex: 5,
        opacity: 0.6,
      };
    } else if (position === -2) {
      // Far left card
      return {
        transform: 'translateX(-120%) scale(0.7) rotateY(45deg)',
        zIndex: 1,
        opacity: 0.3,
      };
    } else if (position === 2) {
      // Far right card
      return {
        transform: 'translateX(120%) scale(0.7) rotateY(-45deg)',
        zIndex: 1,
        opacity: 0.3,
      };
    } else {
      // Hidden cards
      return {
        transform: 'translateX(200%) scale(0.5) rotateY(60deg)',
        zIndex: 0,
        opacity: 0,
      };
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Carousel Container */}
      <div 
        className="carousel-3d relative h-96 md:h-[500px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: '1000px' }}
      >
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`card-3d absolute top-0 left-1/2 w-[420px] md:w-[480px] h-full cursor-pointer transition-all duration-500 ease-out ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              ...getCardStyle(index),
              transformOrigin: 'center center',
              marginLeft: '-210px', // Half of card width for centering (420px / 2)
            }}
            onClick={() => goToSlide(index)}
          >
            {/* ChatGPT Dark Mode Card */}
            <div 
              className={`w-full h-full rounded-2xl border overflow-hidden transition-all duration-500 ease-out ${
                index === currentIndex 
                  ? 'shadow-[0_12px_32px_rgba(0,0,0,0.15)]' 
                  : 'shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
              }`}
              style={{
                backgroundColor: '#212121', 
                borderColor: '#4a4a4a',
                filter: index === currentIndex ? 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.08))' : 'none'
              }}
            >
              {/* ChatGPT Header */}
              <ChatHeader title={feature.title} />
              
              {/* Chat Interface */}
              <div className="flex flex-col h-96">
                <ChatInterface 
                  prompt={feature.prompt}
                  response={feature.response}
                  isActive={index === currentIndex}
                  title={feature.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="navigation-arrows">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-20 md:flex hidden"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-20 md:flex hidden"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="text-center mt-6">
        <p className="text-gray-600 text-lg font-medium">
          Real tools for real classrooms — see what Onboard can do.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, #e8ecf7 0%, #f9fafb 100%)`
      }}>
        {/* Radial Glow for Carousel Area */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 30%, rgba(0,0,0,0.04) 0%, transparent 60%)`,
            filter: 'blur(60px)'
          }}
        ></div>
        
        {/* Subtle Grid Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        ></div>
        
        {/* Subtle Grain Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Isn&apos;t Coming. It&apos;s Here.
              <br />
              <span className="text-blue-600">Let&apos;s Make It Useful.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Onboard gives teachers like you structured paths to build confidence with tools like ChatGPT — with PD-credit alignment when available, and real value even when it&apos;s not.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="text-lg px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(to right, #3b82f6, #6366f1)',
                  boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)'
                }}
              >
                Get the Free Prompt Pack
              </button>
              <button 
                className="text-lg px-8 py-4 rounded-full font-medium text-gray-700 bg-white border border-gray-300 transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
              >
                Preview the Course
              </button>
            </div>
          </div>
          
          {/* 3D Feature Carousel */}
          <div className="mt-16">
            <Feature3DCarousel />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Teachers Use Onboard
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Hours Every Week</h3>
              <p className="text-gray-600">Plan lessons, write emails, and generate assessments in seconds.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learn AI, No Jargon</h3>
              <p className="text-gray-600">Step-by-step training designed for real classrooms, not coders.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optional PD Credit</h3>
              <p className="text-gray-600">Aligned with HQPD standards. Use it for certification or just better teaching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Getting Started Is Simple
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start the Course</h3>
              <p className="text-gray-600">Self-paced, built for beginners — get familiar with AI in under 6 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Use AI Right Away</h3>
              <p className="text-gray-600">Generate lessons, quizzes, feedback, and communications with our built-in tools.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Grow and Reflect</h3>
              <p className="text-gray-600">Earn a certificate, track your progress, and join a growing AI-powered teacher community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Preview Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your AI Teaching Toolkit
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lesson Plan Generator</h3>
              <p className="text-gray-600 text-sm">Turn standards into full plans instantly</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Parent Email Assistant</h3>
              <p className="text-gray-600 text-sm">Draft sensitive or routine messages with tone control</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quiz Generator</h3>
              <p className="text-gray-600 text-sm">Auto-generate quizzes by topic and difficulty</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prompt Library</h3>
              <p className="text-gray-600 text-sm">Browse real examples by grade level and subject</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Massachusetts PDP Eligible
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Built by Educators
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              100+ Early Access Teachers
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Educators Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-blue-600">ST</span>
                </div>
                <div>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">&quot;I finally feel like PD is helping me teach better.&quot;</p>
              <p className="text-sm text-gray-500">— 8th Grade ELA Teacher, MA</p>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-green-600">IC</span>
                </div>
                <div>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">&quot;Planning lessons now takes 10 minutes instead of 2 hours.&quot;</p>
              <p className="text-sm text-gray-500">— Instructional Coach, TX</p>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-purple-600">HT</span>
                </div>
                <div>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">&quot;The tools are great, but honestly, the confidence is the real value.&quot;</p>
              <p className="text-sm text-gray-500">— High School History Teacher, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Start Free. Upgrade If It Helps.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card relative">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">Free</div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Prompt pack</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1 free module</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Limited AI access</li>
              </ul>
              <button className="w-full py-3 px-4 rounded-lg font-medium text-gray-700 bg-white border border-gray-300 transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md">
                Get Started
              </button>
            </div>
            <div className="card relative border-2 border-blue-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Access</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$49</div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full course + deliverables</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> PDP certificate</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Community access</li>
              </ul>
              <button 
                className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(to right, #3b82f6, #6366f1)',
                  boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)'
                }}
              >
                Start Course
              </button>
            </div>
            <div className="card relative">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro Plan</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$12<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All tools</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> AI portfolio builder</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Teacher journal</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Bonus content</li>
              </ul>
              <button className="w-full py-3 px-4 rounded-lg font-medium text-gray-700 bg-white border border-gray-300 transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "Do I need to be tech-savvy?",
                answer: "Not at all! Onboard is designed specifically for educators who may not consider themselves technical. We start with the basics and build up gradually."
              },
              {
                question: "Does this count for PD credit?",
                answer: "Yes, our course is aligned with Massachusetts PDP standards and can count toward your professional development requirements. Check with your district for specific policies."
              },
              {
                question: "What if I'm not in Massachusetts?",
                answer: "The course content is valuable regardless of location! While PD credit alignment is specific to Massachusetts, the skills and tools work everywhere."
              },
              {
                question: "Is there a refund policy?",
                answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course, we'll refund your payment, no questions asked."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="text-gray-500">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Teach Smarter — and Save Time Doing It?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of teachers learning how to use AI with confidence. Start free, learn at your pace.
          </p>
          <button 
            className="font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(to right, #3b82f6, #6366f1)',
              boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
              color: 'white'
            }}
          >
            Get Started with the Prompt Pack
          </button>
        </div>
      </section>
    </div>
  );
}
