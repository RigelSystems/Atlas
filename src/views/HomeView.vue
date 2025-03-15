<template>
   <NHeroSection title="RigelSystems" subtitle="The Atlas of Our Journey" content="RigelSystems is dedicated to crafting powerful APIs with Rails and designing an intuitive Vue component library. Atlas serves as the central hub, offering insights into our development process, project progress, and the innovations shaping our ecosystem." :actionButtons="[{label: 'Projects', href: '/projects'}]" />

   <NRow :cols="{sm: [100], md: [50, 50]}" title="Row Title" subtitle="Row Subtitle" :style="{background: '#f5f5f5', padding: '1rem'}">
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', href: '/home', primary: true}, {label: 'Action Button', href: '/home', primary: false}]" />
      <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', href: '/home'}]" />
    </NRow>
</template>
  