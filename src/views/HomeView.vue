<template>
   <NHeroSection title="RigelSystems" subtitle="The Atlas of Our Journey" content="RigelSystems is dedicated to crafting powerful APIs with Rails and designing an intuitive Vue component library. Atlas serves as the central hub, offering insights into our development process, project progress, and the innovations shaping our ecosystem." :actionButtons="[{label: 'Projects', href: '/projects'}]" />

   <div class="momentum-section">
      <NHeroSection
      layout="right"
      title="Momentum"
      subtitle="Build better habits, one step at a time"
      content="Track your daily routines, set meaningful goals, and stay consistent with visual progress tools designed to keep you motivated."
      :actionButtons="[{label: 'Visit Momentum', href: 'https://momentum.rigelsystems.co.uk/'}]"
      >
         <template #image>
            <img src="/momentum.png" alt="Hero Image" class="hero-image"/>
         </template>
      </NHeroSection>
   </div>

  <div class="gaia-section">
   <NHeroSection
      layout="left"
      title="Gaia"
      subtitle="Connect with nature through mindful tracking"
      content="Log your plant observations, wildlife sightings, and outdoor adventures to build a rich, personal record of the natural world around you."
      :actionButtons="[{label: 'Visit Gaia', href: 'https://gaia.rigelsystems.co.uk/'}]"
      >
         <template #image>
            <img src="/gaia.png" alt="Hero Image" class="hero-image"/>
         </template>
      </NHeroSection>
   </div>

   <div class="celestial-section">
      <NHeroSection
         layout="right"
         title="Celestial"
         subtitle="Never miss a moment under the stars"
         content="Get notified when the skies are clear, discover the best times for stargazing, and stay up to date with the latest space news and celestial events."
         :actionButtons="[{label: 'Visit Celestial', href: 'https://momentum.rigelsystems.co.uk/'}]"
         >
         <template #image>
            <img src="/celestial.png" alt="Hero Image" class="hero-image"/>
         </template>
         </NHeroSection>
   </div>
</template>
  