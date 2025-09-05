<template>
  <NHeroSection 
    title="About Rigel Systems" 
    subtitle="Building the tools that build the future" 
    content="Rigel Systems is dedicated to creating powerful, developer-friendly tools and applications. From Vue component libraries to full-stack applications, we're committed to crafting solutions that make development faster, more intuitive, and more enjoyable." 
  />

  <div class="info-content">
    <NCard 
      title="🔧 Developer Tools" 
      subtitle="NovaUI - Vue 3 Component Library"
      :actionButtons="[
        {label: '📚 Documentation', href: 'https://rigelsystems.github.io/NovaUI/'},
        {label: '📦 NPM Package', href: 'https://www.npmjs.com/package/@rigelsystems/novaui'}
      ]"
    >
      <template #content>
        <div class="tool-section">
          <p>Our flagship Vue 3 component library that powers all Rigel Systems projects. NovaUI provides a comprehensive collection of production-ready components organized into logical categories:</p>
          
          <div class="component-categories">
            <div class="category">
              <h4>🔧 Inputs</h4>
              <p>User interaction and form elements like buttons, text inputs, selects, and color pickers</p>
            </div>
            
            <div class="category">
              <h4>📐 Layout</h4>
              <p>Page structure and content organization including cards, modals, and hero sections</p>
            </div>
            
            <div class="category">
              <h4>📊 Data Display</h4>
              <p>Information presentation components for tables, timelines, progress indicators, and more</p>
            </div>
            
            <div class="category">
              <h4>🧭 Navigation</h4>
              <p>Content and page navigation with navigation bars, tabs, and routing components</p>
            </div>
            
            <div class="category">
              <h4>💬 Feedback</h4>
              <p>User communication and status components including notifications and badges</p>
            </div>
          </div>

          <div class="features-list">
            <ul>
              <li>TypeScript support out of the box</li>
              <li>Consistent design system with Material Design Icons</li>
              <li>Responsive layouts and utility classes</li>
              <li>Vue 3 Composition API compatible</li>
              <li>Comprehensive documentation with examples</li>
            </ul>
          </div>
          
          <p>Available on npm as <code>@rigelsystems/novaui</code> and used in production applications</p>
        </div>
      </template>
    </NCard>

    <NCard title="🚀 Our Applications" subtitle="Full-stack web applications built with NovaUI">
      <template #content>
        <div class="applications-grid">
          <div class="app-item">
            <h4>Atlas</h4>
            <p>This very website! A showcase of Rigel Systems projects and capabilities, built with Vue 3 and NovaUI.</p>
          </div>
          <div class="app-item">
            <h4>Momentum</h4>
            <p>Habit tracking application helping users build better routines with visual progress tools and motivational features.</p>
          </div>
          <div class="app-item">
            <h4>Gaia</h4>
            <p>Nature tracking platform for logging plant observations, wildlife sightings, and outdoor adventures.</p>
          </div>
          <div class="app-item">
            <h4>Celestial</h4>
            <p>Stargazing companion app with clear sky notifications, celestial events, and space news updates.</p>
          </div>
        </div>
      </template>
    </NCard>

    <NCard title="💻 Technology Stack" subtitle="Modern tools for exceptional experiences">
      <template #content>
        <div class="tech-grid">
          <NPill color="success" label="Vue 3" style="background-color: #5b21b6;" />
          <NPill color="success" label="TypeScript" style="background-color: #6d28d9;" />
          <NPill color="success" label="Ruby on Rails" style="background-color: #7c3aed;" />
          <NPill color="success" label="NovaUI" style="background-color: #9333ea;" />
          <NPill color="success" label="Material Design" style="background-color: #a855f7;" />
          <NPill color="warning" label="Vite" style="background-color: #c4b5fd;" />
        </div>
        <p class="tech-description">
          We believe in using modern, proven technologies that deliver exceptional performance and developer experience. 
          Our full-stack approach combines the power of Ruby on Rails APIs with the flexibility of Vue 3 frontends, 
          all enhanced by our own NovaUI component library.
        </p>
      </template>
    </NCard>

    <NCard title="🌟 Open Source Commitment" subtitle="Free tools for everyone">
      <template #content>
        <p>
          NovaUI is publicly available and free to use. We believe in giving back to the developer community 
          that has given us so much. Whether you're building a personal project or an enterprise application, 
          NovaUI provides the components you need to create beautiful, functional interfaces quickly.
        </p>
        
        <div class="commitment-features">
          <div class="feature">
            <h4>🆓 Free Forever</h4>
            <p>NovaUI will always be free for all developers</p>
          </div>
          <div class="feature">
            <h4>📈 Continuously Updated</h4>
            <p>Regular updates with new components and improvements</p>
          </div>
          <div class="feature">
            <h4>📖 Well Documented</h4>
            <p>Comprehensive docs with examples and best practices</p>
          </div>
        </div>
      </template>
    </NCard>
  </div>
</template>

<script>
export default {
  name: 'InfoView'
}
</script>

<style scoped>
.info-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tool-section h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.tool-section ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.tool-section li {
  margin: 0.5rem 0;
  color: #666;
}

.tool-section code {
  background: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #333;
}

.component-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.category {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #f9f9f9;
}

.category h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1rem;
}

.category p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.features-list {
  margin: 1.5rem 0;
}

.features-list ul {
  margin: 0;
  padding-left: 1.5rem;
}

.features-list li {
  margin: 0.5rem 0;
  color: #666;
}

.tool-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.app-item {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
}

.app-item h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.2rem;
}

.app-item p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-description {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.commitment-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.feature {
  text-align: center;
  padding: 1rem;
}

.feature h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.1rem;
}

.feature p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .info-content {
    padding: 1rem;
  }
  
  .tool-links {
    flex-direction: column;
  }
  
  .applications-grid {
    grid-template-columns: 1fr;
  }
}
</style>