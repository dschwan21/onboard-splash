'use client';

import { useState } from 'react';

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
          
          {/* Hero Visual */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="card bg-white shadow-xl border-2 border-gray-100">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 rounded-t-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600 font-mono">AI Lesson Planner</span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm text-gray-600 mb-2">📝 Prompt:</p>
                    <p className="text-gray-800">&quot;Create a 50-minute lesson plan for 8th grade math on linear equations...&quot;</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-sm text-gray-600 mb-2">🤖 AI Response:</p>
                    <div className="space-y-2 text-gray-800">
                      <p><strong>Lesson Title:</strong> Introduction to Linear Equations</p>
                      <p><strong>Objective:</strong> Students will understand and solve basic linear equations...</p>
                      <p><strong>Materials:</strong> Whiteboard, graphing paper, calculators...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
