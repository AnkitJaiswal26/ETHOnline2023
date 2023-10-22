import React from "react"

import { features } from "../../consts";
import Navbar from "../../components/Navbar/Navbar";

const Landing = () => {
  return (
    <div className="bg-white">

      <Navbar/>

      {/* Header */}

      <div className="relative isolate px-6 pt-14 lg:px-8 h-5/6">
        <div className="mx-auto max-w-2xl py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Customize, Trade, and Prosper
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Take control of your financial destiny with our DeFi lending platform. Craft personalized lending agreements, trade financial NFTs, and unlock the door to a world of financial opportunities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* Login */}
              <a
                href="/" 
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION 1 */}
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
            Unlock a World of Financial Freedom and Control
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to a future where you have the autonomy to shape your financial path and embrace the world of decentralized finance.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
