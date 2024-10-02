"use client"

import React from 'react';
import { useRouter } from 'next/navigation'; // Import from 'next/navigation' in the app directory

export default function Home() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/home');  
  };
  return (
    <div className="min-h-screen flex flex-col">
  {/* Hero Section */}
  <header
    className="hero min-h-screen"
    style={{
      background: "linear-gradient(135deg, rgba(5,5,5,1) 0%, rgba(20,10,50,1) 40%, rgba(0,0,0,1) 100%)",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="container mx-auto text-center px-4 hero-content">
      <h1 className="text-7xl font-bold mb-4">AI-Powered SaaS Platform</h1>
      <p className="text-4xl">Revolutionize with the power of AI. Automate, optimize, and scale like never before.</p>
    </div>
  </header>



      {/* Features Section */}
      <section className="container mx-auto my-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">

          <div className="card card-compact bg-base-300 w-150 shadow-xl">
            <figure>
              <img
                src="/image_resize.png"  
                alt="Resize" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Social Media Resizer using AI</h2>
              <p>Resize your images according to different social media platfroms using AI to auto detect faces and text</p>
            </div>
          </div>

        <div className="card card-compact bg-base-300 w-150 shadow-xl">
          <figure>
            <img
              src="/video.jpg"
              alt="Video Compress" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Video Compression</h2>
            <p>Compress your videos upto 60% to 70% and download them from anywhere </p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-content text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Profile?</h2>
          <p className="text-lg mb-8">Sign up today and start using our AI-powered platform to automate your processes.</p>
          <button className="btn btn-primary" onClick={handleGetStartedClick}>
          Get Started
        </button>
        </div>
      </section>

     {/* Footer */}
     <footer className="bg-transparent text-neutral-content py-8">
  <div className="container mx-auto text-center">
    <p>Size Flow an AI-Powered SaaS Platform</p>
    <p className="mt-4 text-sm">Created by Priyamvad Singh</p>

    {/* Social Media Links */}
    <div className="flex justify-center mt-4 space-x-4">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/priyamvad-singh-916692237/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white hover:text-blue-400 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3.25v-10h3.25v10zm-1.625-11.317c-1.071 0-1.938-.866-1.938-1.933 0-1.065.867-1.933 1.938-1.933 1.072 0 1.938.868 1.938 1.933 0 1.067-.866 1.933-1.938 1.933zm13.375 11.317h-3.25v-5.345c0-1.273-.023-2.911-1.775-2.911-1.775 0-2.048 1.387-2.048 2.82v5.436h-3.25v-10h3.121v1.367h.043c.434-.822 1.495-1.684 3.081-1.684 3.296 0 3.904 2.17 3.904 4.992v5.325z" />
        </svg>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Priyam216"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-white hover:text-gray-400 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.743.083-.727.083-.727 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.236-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.804 5.625-5.476 5.92.43.372.814 1.102.814 2.222 0 1.606-.014 2.896-.014 3.292 0 .322.218.694.825.576 4.765-1.589 8.199-6.084 8.199-11.384 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
  </div>
</footer>


    </div>
  );
}
