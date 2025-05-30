'use client';

import { useState, useEffect } from 'react';

// Custom hook for typing animation
function useTypingEffect(text, speed = 60) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    let i = 0;
    
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete };
}

// Feature Carousel Component
function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const slides = [
    {
      title: "AI Lesson Planner",
      prompt: "Create a 50-minute lesson plan for 8th grade math on linear equations with hands-on activities",
      response: {
        title: "Introduction to Linear Equations",
        objective: "Students will understand and solve basic linear equations using multiple methods",
        materials: "Whiteboard, graphing paper, calculators, balance scales (manipulatives)",
        activities: [
          "Warm-up: Real-world equation examples (10 min)",
          "Direct instruction: Solving methods (15 min)", 
          "Guided practice: Balance scale activity (20 min)",
          "Independent work: Problem set (15 min)"
        ]
      }
    },
    {
      title: "Parent Email Assistant", 
      prompt: "Draft a professional email to parents about a student's missing assignments with a supportive tone",
      response: {
        subject: "Supporting [Student Name] with Assignment Completion",
        greeting: "Dear Mr. and Mrs. [Last Name],",
        body: "I wanted to reach out regarding some missing assignments for [Student Name]. I've noticed they're struggling to keep up with recent math homework. I'd love to work together to support them. Could we schedule a brief conversation this week?",
        closing: "Looking forward to partnering with you,"
      }
    },
    {
      title: "Quiz Generator",
      prompt: "Generate a 10-question quiz on photosynthesis for 6th grade with multiple choice and short answer",
      response: {
        title: "Photosynthesis Quiz - 6th Grade",
        questions: [
          "Multiple Choice: What gas do plants release during photosynthesis? A) Oxygen B) Carbon dioxide C) Nitrogen",
          "Short Answer: Name the two main ingredients plants need for photosynthesis",
          "Multiple Choice: Where in the plant does photosynthesis occur? A) Roots B) Leaves C) Stem"
        ],
        answerKey: "Included with detailed explanations"
      }
    }
  ];

  const { displayedText: currentPrompt, isComplete: promptComplete } = useTypingEffect(
    slides[currentSlide].prompt,
    60
  );

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(true);
    }, 8000); // 8 seconds per slide

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAnimating(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Feature Label */}
      <div className="text-center mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {slides[currentSlide].title}
        </span>
      </div>

      {/* Browser Window */}
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Browser Header */}
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 border">
              onboard.ai/tools/{slides[currentSlide].title.toLowerCase().replace(' ', '-')}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-6">
          {/* Prompt Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Your Prompt</label>
            <div className="relative">
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg resize-none bg-gray-50 text-gray-800 font-mono text-sm"
                rows="3"
                value={currentPrompt}
                readOnly
              />
              {!promptComplete && (
                <div className="absolute bottom-4 right-4 w-0.5 h-4 bg-blue-500 animate-pulse"></div>
              )}
            </div>
          </div>

          {/* AI Response */}
          <div className={`space-y-2 transition-all duration-500 ${
            promptComplete ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            <label className="block text-sm font-medium text-gray-700">AI Response</label>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
              {slides[currentSlide].response.title && (
                <div>
                  <strong className="text-green-800">Lesson Title:</strong>
                  <p className="text-green-700">{slides[currentSlide].response.title}</p>
                </div>
              )}
              {slides[currentSlide].response.objective && (
                <div>
                  <strong className="text-green-800">Objective:</strong>
                  <p className="text-green-700">{slides[currentSlide].response.objective}</p>
                </div>
              )}
              {slides[currentSlide].response.materials && (
                <div>
                  <strong className="text-green-800">Materials:</strong>
                  <p className="text-green-700">{slides[currentSlide].response.materials}</p>
                </div>
              )}
              {slides[currentSlide].response.subject && (
                <div>
                  <strong className="text-green-800">Subject:</strong>
                  <p className="text-green-700">{slides[currentSlide].response.subject}</p>
                </div>
              )}
              {slides[currentSlide].response.body && (
                <div>
                  <p className="text-green-700">{slides[currentSlide].response.body}</p>
                </div>
              )}
              {slides[currentSlide].response.questions && (
                <div>
                  <strong className="text-green-800">Sample Questions:</strong>
                  <ul className="list-disc list-inside text-green-700 space-y-1">
                    {slides[currentSlide].response.questions.slice(0, 2).map((question, idx) => (
                      <li key={idx} className="text-sm">{question}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
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
          
          {/* Feature Carousel */}
          <div className="mt-16">
            <FeatureCarousel />
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
