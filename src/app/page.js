'use client';

import { useState, useEffect } from 'react';

// 3D Feature Carousel Component
function Feature3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle card
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      id: 1,
      title: "AI Lesson Planner",
      description: "Transform standards into complete lesson plans in seconds",
      icon: "📚",
      preview: {
        input: "Create a 50-minute lesson on linear equations for 8th grade",
        output: "✓ Learning objectives\n✓ Materials list\n✓ Step-by-step activities\n✓ Assessment rubric"
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Parent Email Assistant",
      description: "Draft professional, empathetic emails with the right tone",
      icon: "📧",
      preview: {
        input: "Help communicate about missing assignments supportively",
        output: "✓ Professional greeting\n✓ Supportive language\n✓ Clear action steps\n✓ Collaborative tone"
      },
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Quiz Generator",
      description: "Generate assessments by topic, grade level, and difficulty",
      icon: "🧪",
      preview: {
        input: "Create a photosynthesis quiz for 6th grade science",
        output: "✓ Multiple choice questions\n✓ Short answer prompts\n✓ Answer key included\n✓ Aligned to standards"
      },
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Prompt Library",
      description: "Browse hundreds of tested prompts by subject and grade",
      icon: "📖",
      preview: {
        input: "Browse writing prompts for high school English",
        output: "✓ Creative writing starters\n✓ Essay prompts\n✓ Discussion questions\n✓ Peer review guides"
      },
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "PDP Submission",
      description: "Track progress and submit for professional development credit",
      icon: "🎓",
      preview: {
        input: "Submit completed AI training for PDP credit",
        output: "✓ Progress tracking\n✓ Certificate generation\n✓ Hour documentation\n✓ District submission"
      },
      color: "from-indigo-500 to-indigo-600"
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
            className={`card-3d absolute top-0 left-1/2 w-80 md:w-96 h-full cursor-pointer transition-all duration-500 ease-out ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              ...getCardStyle(index),
              transformOrigin: 'center center',
              marginLeft: '-160px', // Half of card width for centering
            }}
            onClick={() => goToSlide(index)}
          >
            {/* Feature Card */}
            <div className="w-full h-full bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              {/* Card Header */}
              <div className={`h-16 bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>

                {/* Preview Box */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Preview</div>
                  
                  {/* Input */}
                  <div className="text-xs">
                    <div className="text-gray-600 mb-1">Input:</div>
                    <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-400 text-gray-800">
                      {feature.preview.input}
                    </div>
                  </div>

                  {/* Output */}
                  <div className="text-xs">
                    <div className="text-gray-600 mb-1">Output:</div>
                    <div className="bg-green-50 p-2 rounded border-l-2 border-green-400 text-gray-800 whitespace-pre-line">
                      {feature.preview.output}
                    </div>
                  </div>
                </div>
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
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
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
              <button className="btn-primary text-lg px-8 py-4">
                Get the Free Prompt Pack
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
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
              <button className="btn-secondary w-full">Get Started</button>
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
              <button className="btn-primary w-full">Start Course</button>
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
              <button className="btn-secondary w-full">Upgrade</button>
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
          <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg text-lg transition-all">
            Get Started with the Prompt Pack
          </button>
        </div>
      </section>
    </div>
  );
}
