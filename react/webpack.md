# Advanced Webpack Interview Questions

This document contains a list of **advanced Webpack interview questions** that cover various aspects of Webpack, including configuration, optimization, performance, and advanced features. These questions are intended for senior-level Webpack and frontend developers.

## 🔧 Configuration & Performance

1. **How does Webpack handle tree shaking? What are the requirements for it to work properly?**
2. **Explain the difference between `development` and `production` mode in Webpack. What optimizations does production mode enable by default?**
3. **What strategies would you use to optimize Webpack build performance for a large project?**
4. **How would you implement code splitting in Webpack? What are the different types of code splitting it supports?**
5. **What’s the role of `webpack-bundle-analyzer` and how do you use it to improve performance?**

## 🧠 Advanced Concepts

6. **Explain how Webpack's module resolution works. What are `resolve.alias`, `resolve.extensions`, and `resolve.modules` used for?**
7. **How does Webpack's caching work and how would you implement long-term caching for production?**
8. **How does Webpack’s `DllPlugin` and `DllReferencePlugin` work? In what scenarios would you use them?**
9. **What is the difference between `Loaders` and `Plugins` in Webpack? Can you give an example of when to use one over the other?**
10. **What is the `ModuleFederationPlugin` introduced in Webpack 5, and how does it enable micro frontends?**

## ⚙️ Customization & Internals

11. **How would you write a custom Webpack plugin? What are compiler and compilation hooks?**
12. **Explain how HMR (Hot Module Replacement) works internally in Webpack.**
13. **What are virtual modules in Webpack and when might you use them?**
14. **Describe how Webpack handles circular dependencies. What problems can arise and how can you prevent them?**
15. **How would you debug a Webpack build issue, like a module not being found or a loader not applying as expected?**

## 🧪 Use Cases & Real-World Scenarios

16. **If your Webpack bundle is too large, how would you go about identifying the issue and reducing its size?**
17. **How can you conditionally load different configurations or environment variables in Webpack?**
18. **How do you manage multiple entry points in a complex application using Webpack?**
19. **How do you handle legacy libraries that are not ES module compatible in Webpack?**
20. **How do you configure Webpack to work with TypeScript, SCSS, and React at the same time?**


# Advanced Webpack Setup

An advanced Webpack configuration for building scalable, performant front-end applications using modern JavaScript, TypeScript, React, and SCSS.

## 🚀 Features

- ⚡ Production & Development modes
- 📦 Code splitting & lazy loading
- 🧠 Tree shaking
- 🔥 Hot Module Replacement (HMR)
- 🎯 TypeScript support
- 🎨 SCSS/SASS support
- 🧩 Module Federation (Webpack 5)
- 📊 Bundle analysis with `webpack-bundle-analyzer`
- 💾 Long-term caching
- ✨ Custom Webpack plugins & loaders ready

## 🛠️ Tech Stack

- Webpack 5
- TypeScript
- React
- SCSS/SASS
- Babel
- PostCSS
- ESLint + Prettier

## 📁 Folder Structure

```bash
├── public/
# Static assets
├── src/
│ ├── components/
  # React components
│ ├── styles/
  # SCSS styles
│ ├── index.tsx
  # App entry point
│ └── ...
├── webpack/
│ ├── webpack.common.js
│ ├── webpack.dev.js
│ └── webpack.prod.js
├── .babelrc
├── tsconfig.json
└── package.json
```

