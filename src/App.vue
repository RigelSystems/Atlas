<script setup>

</script>

<template>
  <NNavigationBar :links="links"/>

  <NHeroSection title="Hero Section Title" subtitle="Hero Section Subtitle" content="Some example text for this hero section" :actionButtons="[{label: 'Action Button', url: '/home'}]" />

  <NRow :cols="{sm: [100], md: [60,40,40,60], lg: [33.33,33.33,33.33]}">
    <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
    <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
    <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
    <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
    <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
    <NCard title="Card Title" subtitle="Card Subtitle" content="Some example text for this card" :actionButtons="[{label: 'Action Button', url: '/home'}]" />
  </NRow>

  <NRow :cols="{sm: [100], md: [33.3,33.3,33.3]}">
    <NDropdown label="Click Me" content="Some hidden information!" />
    <NDropdown label="Don't click me!" content="What did I say..." />
    <NDropdown label="Ummmmm" content="Wow, you're an explorer!" />
  </NRow>

  <h2>Contact Form</h2>
  <p>Please enter your details below and we'll contact you shortly!</p>

  <NRow :cols="{sm: [100], md: [50,50,100,100]}">
    <NTextInput label="First Name" placeholder="John" />
    <NTextInput label="Last Name" placeholder="Doe" />
    <NTextInput label="Email" placeholder="Enter your email address" />
    <NTextInput label="Message" placeholder="Enter your message here" />
    <NButton label="Submit" />
  </NRow>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
