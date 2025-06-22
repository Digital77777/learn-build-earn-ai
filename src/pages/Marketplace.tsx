
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Star, ShoppingCart, TrendingUp, Filter } from 'lucide-react';

const Marketplace = () => {
  const categories = ['All', 'Templates', 'Tools', 'Datasets', 'Models', 'Scripts', 'Courses'];
  
  const products = [
    {
      title: 'ChatGPT Clone Template',
      seller: 'DevMaster',
      price: 49,
      rating: 4.8,
      sales: 1250,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      category: 'Templates',
      tags: ['React', 'OpenAI', 'Full-Stack']
    },
    {
      title: 'E-commerce Recommendation Dataset',
      seller: 'DataPro',
      price: 29,
      rating: 4.9,
      sales: 890,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      category: 'Datasets',
      tags: ['ML', 'E-commerce', 'Recommendations']
    },
    {
      title: 'AI Image Generator Script',
      seller: 'CodeWizard',
      price: 79,
      rating: 4.7,
      sales: 675,
      image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=300&h=200&fit=crop',
      category: 'Scripts',
      tags: ['Python', 'Stable Diffusion', 'API']
    },
    {
      title: 'Fine-tuned GPT Model',
      seller: 'AILabs',
      price: 199,
      rating: 4.9,
      sales: 432,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop',
      category: 'Models',
      tags: ['GPT', 'Fine-tuned', 'Enterprise']
    },
    {
      title: 'AI SaaS Dashboard Kit',
      seller: 'UIExperts',
      price: 149,
      rating: 4.8,
      sales: 298,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      category: 'Templates',
      tags: ['Dashboard', 'SaaS', 'React']
    },
    {
      title: 'Computer Vision Toolkit',
      seller: 'VisionTech',
      price: 89,
      rating: 4.6,
      sales: 567,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop',
      category: 'Tools',
      tags: ['OpenCV', 'Detection', 'Classification']
    }
  ];

  const featuredSellers = [
    { name: 'DevMaster', sales: '5,000+', rating: 4.9, products: 45 },
    { name: 'AILabs', sales: '3,200+', rating: 4.8, products: 23 },
    { name: 'DataPro', sales: '4,100+', rating: 4.9, products: 67 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Marketplace</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Buy, sell, and trade AI solutions, templates, and digital products
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input placeholder="Search products..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={20} />
                Filters
              </Button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant="secondary"
                  className="cursor-pointer hover:bg-blue-100 whitespace-nowrap"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Sellers */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Sellers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredSellers.map((seller, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                      {seller.name.charAt(0)}
                    </div>
                    <CardTitle>{seller.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-gray-900">{seller.sales}</div>
                        <div className="text-gray-600">Sales</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {seller.rating}
                        </div>
                        <div className="text-gray-600">Rating</div>
                      </div>
                      <div className="col-span-2">
                        <div className="font-semibold text-gray-900">{seller.products}</div>
                        <div className="text-gray-600">Products</div>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">View Store</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp size={16} />
                <span>Trending</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/50 text-white">
                        {product.sales} sold
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2">{product.category}</Badge>
                        <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                        <CardDescription className="mt-2">by {product.seller}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.sales})</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </div>
                    </div>

                    <Button className="w-full">
                      <ShoppingCart size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;
