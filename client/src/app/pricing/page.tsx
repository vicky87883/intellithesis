'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Database,
  Globe,
  MessageSquare,
  ArrowRight,
  Crown,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  isPopular: boolean;
  maxUsers: number;
  maxProjects: number;
  maxStorage: number;
}

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/plans');
      if (response.ok) {
        const data = await response.json();
        setPlans(data.plans);
      } else {
        console.error('API response not ok:', response.status);
        // Fallback to default plans if API fails
        setPlans(defaultPlans);
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
      // Fallback to default plans if API fails
      setPlans(defaultPlans);
    } finally {
      setIsLoading(false);
    }
  };

  const defaultPlans: Plan[] = [
    {
      id: '1',
      name: 'Starter',
      description: 'Perfect for individual researchers and small teams',
      price: 29,
      currency: 'USD',
      billingCycle: 'monthly',
      features: [
        'Up to 5 team members',
        '10 research projects',
        '50GB storage',
        'Basic AI assistance',
        'Email support',
        'Standard analytics'
      ],
      isPopular: false,
      maxUsers: 5,
      maxProjects: 10,
      maxStorage: 50
    },
    {
      id: '2',
      name: 'Professional',
      description: 'Ideal for growing research teams and institutions',
      price: 99,
      currency: 'USD',
      billingCycle: 'monthly',
      features: [
        'Up to 25 team members',
        'Unlimited research projects',
        '500GB storage',
        'Advanced AI assistance',
        'Priority email support',
        'Advanced analytics',
        'Custom integrations',
        'API access'
      ],
      isPopular: true,
      maxUsers: 25,
      maxProjects: -1, // unlimited
      maxStorage: 500
    },
    {
      id: '3',
      name: 'Enterprise',
      description: 'For large institutions and research organizations',
      price: 299,
      currency: 'USD',
      billingCycle: 'monthly',
      features: [
        'Unlimited team members',
        'Unlimited research projects',
        'Unlimited storage',
        'Premium AI assistance',
        '24/7 phone support',
        'Custom analytics',
        'White-label solution',
        'Dedicated account manager',
        'SLA guarantee',
        'Advanced security features'
      ],
      isPopular: false,
      maxUsers: -1, // unlimited
      maxProjects: -1, // unlimited
      maxStorage: -1 // unlimited
    }
  ];

  const getPrice = (plan: Plan) => {
    if (billingCycle === 'yearly') {
      return plan.price * 10; // 2 months free
    }
    return plan.price;
  };

  const getBillingText = (plan: Plan) => {
    if (billingCycle === 'yearly') {
      return `$${getPrice(plan)}/year (save 17%)`;
    }
    return `$${plan.price}/month`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      title: 'AI-Powered Research Assistant',
      description: 'Advanced AI that helps with literature review, data analysis, and research insights',
      icon: Sparkles
    },
    {
      title: 'Collaborative Workspace',
      description: 'Real-time collaboration tools for research teams across the globe',
      icon: Users
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and insights to track research progress and impact',
      icon: Database
    },
    {
      title: 'Global Research Network',
      description: 'Connect with researchers from 150+ countries and 500+ institutions',
      icon: Globe
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and data encryption',
      icon: Shield
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert research team',
      icon: MessageSquare
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading pricing plans...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <motion.div
        className="pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800"
          variants={itemVariants}
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Crown className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Choose Your Plan
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Flexible pricing plans designed for researchers, teams, and institutions of all sizes.
              </motion.p>

              {/* Billing Toggle */}
              <motion.div
                className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-blue-600'
                      : 'text-white hover:text-blue-100'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-white text-blue-600'
                      : 'text-white hover:text-blue-100'
                  }`}
                >
                  Yearly
                  <span className="ml-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 17%
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Plans */}
        <motion.section 
          className="py-16 bg-gray-50 dark:bg-gray-800"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className={`relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl border-2 ${
                    plan.isPopular
                      ? 'border-purple-500 dark:border-purple-400 scale-105'
                      : 'border-gray-200 dark:border-gray-600'
                  } p-8`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {getBillingText(plan)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          className="py-16 bg-white dark:bg-gray-900"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Everything You Need for Research Success
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Powerful features designed to accelerate your research and collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="py-16 bg-gray-50 dark:bg-gray-800"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Everything you need to know about our pricing and plans.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Can I change my plan at any time?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.'
                },
                {
                  question: 'Is there a free trial available?',
                  answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely.'
                },
                {
                  question: 'Do you offer discounts for educational institutions?',
                  answer: 'Yes, we offer special pricing for educational institutions and non-profit organizations. Contact our sales team for more information.'
                },
                {
                  question: 'What happens if I exceed my plan limits?',
                  answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan at any time to continue without interruption.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 bg-gradient-to-r from-blue-600 to-purple-600"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Research?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who trust IntelliThesis to accelerate their research and collaboration.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
} 