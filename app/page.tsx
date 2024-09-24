import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js image optimization

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="container mx-auto text-center px-4 hero-content">
    <h1 className="text-5xl font-bold mb-4">AI-Powered SaaS Platform</h1>
    <p className="text-lg mb-8">Revolutionizing your profile with the power of AI. Automate, optimize, and scale like never before.</p>
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
              <p>Resize your images according to different social media platfroms using AI</p>
            </div>
          </div>

        <div className="card card-compact bg-base-300 w-150 shadow-xl">
          <figure>
            <img
              src="/image_resize.png"
              alt="Video Compress" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Video Compression</h2>
            <p>Compress your videos upto 60% and download them from anywhere </p>
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
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent text-neutral-content py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AI-Powered SaaS Platform. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 link link-hover">Privacy Policy</a>
            <a href="#" className="mx-2 link link-hover">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
