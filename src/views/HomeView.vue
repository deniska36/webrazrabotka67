<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import ServicesOverview from '../components/home/ServicesOverview.vue'
import CostCalculator from '../components/calculator/CostCalculator.vue'
import PortfolioPreview from '../components/home/PortfolioPreview.vue'
import ReviewsPreview from '../components/home/ReviewsPreview.vue'
import LeadFormSection from '../components/home/LeadFormSection.vue'
import StatsBlock from '../components/home/StatsBlock.vue'
</script>

<template>
  <div>
    <HeroSection />
    <ServicesOverview />
    <CostCalculator />
    <PortfolioPreview />
    <ReviewsPreview />
    <LeadFormSection />
    <StatsBlock />
  </div>
</template>
