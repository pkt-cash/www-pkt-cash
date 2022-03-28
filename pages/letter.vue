<template>
  <div class="v-about">
    <section class="v-about-section-header">
      <HeaderInternal
        title="Letter from CJD" 
        subtitle="This is a letter about the inspiration for PKT, written by PKT lead developer and creator of cjdns, Caleb James DeLisle." 
        button_1="PKT Origin Story" 
        button_1_link="/origin-story"
        />
    </section>
    <section class="v-about-section">
      <div class="container_narrow">
        <h2 class="v-about-section-title_h2">ARPANET<br />Paved the Way</h2>
        <hr />
        <p class="v-about-section-text">It's been just over 50 years since the US military issued the first contract to build ARPANET, the network which would eventually evolve into the Internet.</p>
        <p class="v-about-section-text">The year was 1969: Almost everybody got the daily newspaper, typing was a skill mostly confined to secretaries, and if you wanted to communicate with someone far away you would use the telephone. The telephone system itself was something hard to imagine, in most countries there was only one provider, it was illegal to connect your own telephone to the provider's network, and a 5 minute call from New York to Los Angeles cost the equivalent of $18 in today's money.</p>
        <h3 class="v-about-section-quote">“If a network has the right DNA, it doesn't matter how small it is at the beginning.”</h3>
        <p class="v-about-section-text">It's hard to overstate the impact that the Internet has had on the world. The ability of everyone to become a publisher has lead to entirely new forms of journalism and media. Teleconferencing has given rise to remote work and even entirely remote teams. E-commerce and crowdfunding combined with low volume manufacturing have given customers not only incredible choice, but direct input into what products are made. These phenomenon, while wildly futuristic by 1969 standards, would at least have been comprehensible; but open source software projects, decentralized social media, and blockchains are so far removed from that world that there wouldn't even be a basis to explain them.</p>
        <h3 class="v-about-section-quote">“The Internet has probably been the biggest single force for individual liberation since the printing press.”</h3>
        <p class="v-about-section-text">The core of the Internet has blossomed into a rich ecosystem, but many people are not able to effectively participate because they have limited access or no access at all. The ARPANET architecture has allowed for tens of thousands of independent network operators, but we need to lower the barrier of entry to allow for hundreds of millions of network operators.</p>
        <p class="v-about-section-text">PKT’s plan is to separate the role of infrastructure provider (the boots-on-the-ground job of connecting fiber and pointing antennas), from the role of network operator (the complex technical job of planning routes that data should take). Between these two roles will be a decentralized bandwidth marketplace where the infrastructure providers sell bandwidth leases to the network operators.</p>
        <p class="v-about-section-text">PKT intends to change the dynamic from pay-for-access to pay-for-priority because it makes absolutely no sense that a person should be unable to communicate while there's a perfectly good Internet connection sitting idle.</p>
        <h3 class="v-about-section-quote">"This plan is obviously very ambitious, but like ARPANET started as a couple of computers connected over the telephone, PKT has begun this way as well."</h3>
        <p class="v-about-section-text">PKT also carries forward the belief that communications should be encrypted. This means, nobody should have to apply for https certificates, there should be no question of the origins of a data packet when it is received, and nobody should ever need a VPN to get another Internet connection when they already have one.</p>
        <p class="v-about-section-text">If you believe that the internet should be owned by the people, and that no one should ever be denied access while bandwidth sits unused, if you want to look back on the days of $50 a month the way we look back on the days of $18 phone calls, come build with us. We're just getting started.</p>
        <img src="/img/letter-signature.svg" alt="Caleb James DeLisle" class="v-about-section-signature-image" />
        <p class="v-about-section-signature">Caleb James DeLisle</p>
      </div>
      <div class="v-about-section__links">
        <div class="container">
          <nuxt-link to="/build#roadmap" class="btn_blue_new button_new"><span>PKT Roadmap</span></nuxt-link>
          <nuxt-link to="/origin-story" class="btn_blue_new button_new"><span>PKT Origin Story</span></nuxt-link>
        </div>
      </div>
    </section>
    <section class="v-about-section_involved">
      <div class="container">
        <h2 class="v-about-section-title_h2">Get Involved</h2>
        <nuxt-link to="/resources" class="btn_blue_new button_new"><span>Join the Community</span></nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderInternal from "~/components/Base/HeaderInternal";
export default {
  components: {
    HeaderInternal,
  },
  head() {
    return {
      title: "Letter from CJD",
      meta: [{ hid: "description", name: "description", content: "This is a letter about the inspiration for PKT, written by PKT lead developer and creator of cjdns, Caleb James DeLisle." }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
};
</script>

<style lang="scss">
.v-about {
  &-section-header {
    & .c-internal-header {
      height:125vh;
      @include for-width(-tablet) {
        height:100vh;
      }
      @include for-width(-small-lg) {
        height:auto;
      }
      &__title {
        @include for-width(-small-lg) {
          font-size: rem(36);
          line-height: rem(42);
          margin-bottom:rem(25);
        }
      }
      &__sub-title {
        max-width:55%;
        margin:rem(15) auto 0;
        text-transform:initial;
        @include for-width(+desktop-xl) {
          max-width:65%;
        }
        @include for-width(+desktop-er) {
          max-width:60%;
        }
        @include for-width(-desktop-med) {
          max-width:65%;
        }
        @include for-width(-laptop) {
          max-width:60%;
        }
        @include for-width(-small-lg) {
          font-size: rem(16);
          line-height: rem(24);
          max-width:80%;
        }
      }
      &__links {
        @include for-width(-small-lg) {
          justify-content: center;
          margin:rem(45) 0 0;
        }
        & .button_new {
          @include for-width(-small-lg) {
            width:auto;
            padding:rem(10) rem(25);
          }
        }
      }
      & .container {
        padding-bottom:25vh;
        @include for-width(-tablet) {
          padding-bottom:15vh;
        }
        @include for-width(-small-lg) {
          margin:0;
          padding:10vw 0 40vw;
        }
      }
      & #stars {
        top:25vh;
        @include for-width(-tablet) {
          top:15vh;
        }
        @include for-width(-small-lg) {
          top:5vh;
        }
      }
    }
  }
  &-section {
    & .container_narrow {
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      background-color:$light_bg;
      max-width:rem(870);
      padding:rem(75) rem(135);
      width:90%;
      margin: auto;
      position: relative;
      margin-top:-40vh;
      @include for-width(-tablet) {
        margin-top:-25vh;
      }
      @include for-width(-small-lg) {
        margin-top:-35vw;
        padding:rem(35) rem(20) rem(65);
        width:calc(100% - 40px);
      }
      &::before {
        content:'';
        background:url(/img/letter-logo.jpg);
        background-repeat:no-repeat;
        background-size:contain;
        background-position:center;
        display:block;
        width:rem(150);
        height:rem(60);
        position:absolute;
        top:0;
        right:rem(60);
        @include for-width(-small-lg) {
          width:rem(55);
          height:rem(25);
          right:rem(24);
          top:-2px;
        }
      }
    }
    &-title_h2 {
      @extend %heading-gradient-dark;
      @extend %heading_internal;
      @extend %t-center;
      margin:0;
      @include for-width(-small-lg) {
        font-size: rem(36);
        line-height: rem(42);
      }
    }
    & hr {
      height:1px;
      background:$light_grey_new;
      width:rem(235);
      max-width:60%;
      margin:rem(45) auto rem(55);
      @include for-width(-small-lg) {
        width:rem(90);
        margin:rem(20) auto;
      }
    }
    &-text {
      @extend %pn;
      @extend %t-center;
      margin-bottom:rem(25);
    }
    &-quote {
      @extend %subheading;
      @extend %t-center;
      text-transform:initial;
      margin-bottom:rem(45);
      padding-top:rem(20);
      @include for-width(-small-lg) {
        font-size: rem(26);
        line-height: rem(36);
        margin-bottom:rem(25);
        padding-top:0;
        font-family: "Poppins-Medium", sans-serif;
      }
    }
    &-signature-image {
      max-width:rem(200);
      display:block;
      margin-right:0;
      margin-left:auto;
      margin-top:rem(50);
      @include for-width(-small-lg) {
        text-align:center;
        margin:rem(40) auto 0;
        max-width:rem(100);
      }
    }
    &-signature {
      @extend %pn;
      @extend %t-right;
      @include for-width(-small-lg) {
        text-align:center;
      }
    }
    &__links {
      padding:rem(100) 0;
      @include for-width(-desktop-medium) {
        padding:rem(75) 0;
      }
      @include for-width(-small-lg) {
        padding:rem(50) 0;
      }
      & .container {
        @extend %df;
        @extend %aic;
        @extend %jcc;
      }
      & .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display:inline-block;
        padding:rem(15) rem(60) rem(14);
        width:auto;
        margin:0 rem(15);
        @include for-width(-small-lg) {
          padding:rem(10) rem(25);
        }
      }
    }
    &_involved {
      padding:rem(75) 0 rem(90);
      background-color:$light_bg;
      @include for-width(-small-lg) {
        padding:rem(45) 0 rem(60);
      }
      & .container {
        @extend %container_new;
        @extend %t-center;
        @include for-width(-tablet) {
          max-width:100%;
          width:100%;
          padding:0 rem(25);
        }
        @include for-width(-small-lg) {
          padding:0 rem(20);
        }
      }
      & .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display:inline-block;
        padding:rem(15) rem(60) rem(14);
        width:auto;
        margin:rem(45) 0 0;
        @include for-width(-small-lg) {
          padding:rem(10) rem(35);
          margin-top:rem(25);
        }
      }
    }
  }
}
</style>
