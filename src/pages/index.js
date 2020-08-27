import React from 'react';

import { Layout, SEO } from '../components';
import products from '../data/products.json';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="py-12 text-gray-800">
        <ul class="lg:flex flex-wrap">
          {products.map((product) => (
            <li key={product.id} class="flex px-3 lg:w-1/4 mb-7">
              <a href="#" class="flex h-100 shadow-lg rounded-lg overflow-hidden">
                <div class="flex flex-col">
                  <div class="w-full h-64 overflow-hidden">
                    <img src={product.image} class="" />
                  </div>
                  <div class="flex-grow w-full flex flex-col">
                    <div class="p-4">
                      <h3 class="font-bold text-lg mb-5">{product.name}</h3>
                      <p class="text-gray-500">{product.description}</p>
                    </div>
                    <div class="p-4 bg-green-500 mt-auto">
                      <p class="text-2xl text-center text-white">
                        <strong>$ {product.price}</strong></p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}