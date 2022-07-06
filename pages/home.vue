<template>
  <div>
    <PreLoader />
    <HeaderArea />
    <div
      class="offcanvas offcanvas-start suha-offcanvas-wrap"
      tabindex="-1"
      id="suhaOffcanvas"
      aria-labelledby="suhaOffcanvasLabel"
    >
      <CloseButton />
      <!-- Offcanvas body-->
      <div class="offcanvas-body">
        <SidenavProfile />
        <SideNav />
      </div>
    </div>
    <!-- <PwaInstallAlert /> -->
    <div class="page-content-wrapper">
      <!--<SearchForm />-->
      <Hero />
      <ProductCategory :supercategories="supercategories" />
      <FlashSale />
      <!--<DarkMode />-->
      <!-- <TopProducts /> -->
      <!-- <CtaArea /> -->
      <WeeklyBestSellers />
      <!-- <DiscountCouponCard /> -->
      <!-- <FeaturedProductsWrapper /> -->
      <!-- <Collections /> -->
    </div>
    <!-- Internet Connection Status-->
    <!-- <div class="internet-connection-status" id="internetStatus"></div> -->
    <FooterNav />
  </div>
</template>

<script>
import FlashSale from '~/components/home/FlashSale'
import Hero from '~/components/home/Hero'
import HeaderArea from '~/components/home/HeaderArea'
import PreLoader from '~/components/home/PreLoader'
import SideNav from '~/components/home/SideNav'
import CtaArea from '~/components/home/CtaArea'
import DarkMode from '~/components/home/DarkMode'
import ProductCategory from '~/components/home/ProductCategory'
import PwaInstallAlert from '~/components/home/PwaInstallAlert'
import SearchForm from '~/components/home/SearchForm'
import SidenavProfile from '~/components/home/SidenavProfile'
import TopProducts from '~/components/home/TopProducts'
import WeeklyBestSellers from '~/components/home/WeeklyBestSellers'
import DiscountCouponCard from '~/components/home/DiscountCouponCard'
import FeaturedProductsWrapper from '~/components/home/FeaturedProductsWrapper'
import Collections from '~/components/home/Collections'
import FooterNav from '~/components/home/FooterNav'
import CloseButton from '~/components/home/CloseButton'

export default {
  components: {
    FlashSale,
    Hero,
    HeaderArea,
    PreLoader,
    SideNav,
    CtaArea,
    DarkMode,
    ProductCategory,
    PwaInstallAlert,
    SearchForm,
    SidenavProfile,
    TopProducts,
    WeeklyBestSellers,
    DiscountCouponCard,
    FeaturedProductsWrapper,
    Collections,
    FooterNav,
    CloseButton,
  },
  layout: 'home',
  name: 'HomePage',

  computed: {
    supercategories(){
      if (typeof(this.$store.state.supercategory.items[0])=='object'){
        return this.$store.state.supercategory.items
      }else{
        return []
      }
    }
  },

  async created(){
    await this.$store.dispatch('supercategory/setAllSuperCategories')
  },

  async mounted() {
    $('#collection-component').owlCarousel({
      autoplay: true,
      margin: 10,
      loop: true,
      slideSpeed: 800,
      autoPlaySpeed: 5000,
    })
    $('#flash-sale-component').owlCarousel({
      autoplay: true,
      margin: 10,
      loop: true,
      slideSpeed: 800,
      autoPlaySpeed: 500,
    })
    $('#hero-component').owlCarousel({
      autoplay: true,
      margin: 10,
      loop: true,
      slideSpeed: 800,
      autoPlaySpeed: 250,
      items: 1,
    })
  },
}
</script>
