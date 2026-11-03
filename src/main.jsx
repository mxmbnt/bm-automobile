import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Vehicles from './pages/Vehicles.jsx'
import Category from './pages/Category.jsx'
import VehicleDetail from './pages/VehicleDetail.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import Legal from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'
import { categories, legalPages } from './data/site.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vehicules" element={<Vehicles />} />
            <Route path="vehicules/:slug" element={<VehicleDetail />} />
            {Object.keys(categories).map((slug) => (
              <Route key={slug} path={slug} element={<Category slug={slug} />} />
            ))}
            <Route path="services" element={<Services />} />
            <Route path="a-propos" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
            {Object.keys(legalPages).map((k) => (
              <Route key={k} path={k} element={<Legal kind={k} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>
)
