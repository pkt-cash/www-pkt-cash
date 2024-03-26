<template>
  <div class="v-utility">
    <section class="v-header-section">
      <SpotAInternal 
      title="Building physical infrastructure with PKT"
      text="PKT is a utility-focused cryptocurrency. The blockchain proof-of-work is designed to pay users who power the network's infrastructure. The PKT blockchain also interfaces directly with the PKT Network as payment rails. This seamless alignment between the high speed, encrypted networking and integrated peer-to-peer payments is the next-gen of the decentralized web." 
     />
    </section>
    <section class="v-asymetrical-section">
      <div class="container">
        <div class="v-asymetrical-section__heading">
          <h2>Why build physical infrastructure for  PKT?</h2>
        </div>
        <div class="v-asymetrical-section__inner">
          <BlockAsymmetrical :listFirst="asymetrical_block_list" :listSecond="asymetrical_block_list_second" />
        </div>
      </div>
    </section>
    <section class="v-chess-section">
      <BlocksChessCommon :list="chess_list" />
    </section>
    <section class="v-simple-section">
      <SimpleText :list="simple_block" />
    </section>
    <section class="v-comparison-section">
      <div class="container">
        <h2>PKT Comparison</h2>
        <div class="v-comparison-section_table_wrap">
          <table class="v-comparison-section_table">
            <thead>
              <tr>
                <th></th>
                <th class="pkt"><img src="/img/utility-comprasion-1.svg" title="PKT" /></th>
                <th><img src="/img/utility-comprasion-2.svg" title="Helium" /></th>
                <th><img src="/img/utility-comprasion-3.svg" title="NKN" /></th>
                <th><img src="/img/utility-comprasion-4.svg" title="Orchid" /></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows">
                <td>{{row.compare}}</td>
                <td class="pkt">{{row.pkt}}</td>
                <td>{{row.helium}}</td>
                <td>{{row.nkn}}</td>
                <td>{{row.orchid}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import BlocksChessCommon from "~/components/Common/BlocksChessCommon";
import BlockAsymmetrical from "~/components/Common/BlockAsymmetrical";
import SimpleText from "~/components/Common/SimpleText";
export default {
  components: {
    SpotAInternal,
    BlocksChessCommon,
    BlockAsymmetrical,
    SimpleText,
  },
  data() {
    return {
      chess_list: [
        {
          text_direction: "text_right",
          single_title: "Physical Infrastructure",
          single_descr: "PKT community members own and operate their own physical internet infrastructure. Anyone can support the network by running a PKT miner, setting up a cjdns node, building a website, or operating a PKT mining pool.",
          // single_url: "/pkt-network",
          single_url: "/tech",
          external: false,
          single_link: "Learn more",
          single_img: "/img/utility-1.webp",
        },
        {
          text_direction: "text_left",
          single_title: "Internet Sharing",
          single_descr: "PKT Network enables open internet access through secure, permissionless, mesh wifi connectivity. Individuals and businesses are rewarded for providing accessibility. This fosters a community-driven approach to scaling physical internet infrastructure and access.",
          single_url: "https://github.com/cjdelisle/cjdns",
          external: true,
          single_link: "Learn more",
          single_img: "/img/utility-2.webp",
        },
        {
          text_direction: "text_right",
          single_title: "Decentralized Web ",
          single_descr: "PKT is powering the decentralized web through its open, permissionless ecosystem. Website developers can build censorship resistant websites and anyone can get online peer-to-peer using the network’s mesh access points.",
          single_url: "https://docs.pkt.cash/en/latest/cjdns_websites/",
          external: true,
          single_link: "Learn more",
          single_img: "/img/utility-3.webp",
        },
        {
          text_direction: "text_left",
          single_title: "PKT Lightning Network",
          single_descr: "The forthcoming PKT Lightning Network revolutionizes web payments by enabling websites to receive payments directly to an IPv6 website URL without requiring a third-party processor. PKT Lightning also will deliver near-infinite transactions per second, enhancing speed and efficiency.",
          // single_url: "/developer-central",
          single_url: "/tech",
          external: false,
          single_link: "Learn more",
          single_img: "/img/utility-4.webp",
        }
      ],
      asymetrical_block_list: [
        {
          single_title: "Open Source",
          single_descr: "PKT is fully open source, fostering community collaboration and driving innovation in decentralized network technology.",
          color: "orange_dot"
        },
        {
          single_title: "Expand Global Mesh",
          single_descr: "Through mesh networking, nodes connect peer-to-peer, ensuring network resilience and decentralizing internet access.",
          color: "green_dot"
        }
      ],
      asymetrical_block_list_second: [
        {
          single_title: "Safe and Secure",
          single_descr: "Developers have access to PKT's high speed decentralized, VPN-based infrastructure, with end-to-end encryption and censorship resistance.",
          color: "green_dot"
        },
        {
          single_title: "PKT Lightning Integration",
          single_descr: "In an upcoming release, PKT Lightning Network will deliver near-infinite transactions per second with near-instant settlement for limitless scalability.",
          color: "orange_dot"
        }
      ],
      simple_block: [
        {
          single_title: "Getting the Next Billion People Online",
          single_text: "PKT technology is designed with a focus on open internet access and mesh networking. The mission is to make internet access universal and permissionless. This is accomplished by empowering community-powered physical infrastructure to help get the next billion people online.",
        }
      ],
      rows: [
        { compare: 'Year Launched', pkt: "2019", helium: '2013', nkn: '2019', orchid: '2017' },
        { compare: 'Coin or Token', pkt: "Mined Coin", helium: 'Pre-mined Token', nkn: 'Pre-mined Token', orchid: 'Pre-mined Token' },
        { compare: 'Proof of Work', pkt: "Yes", helium: 'No', nkn: 'No', orchid: 'No' },
        { compare: 'Algorithm', pkt: "PacketCrypt", helium: 'Proof of Coverage', nkn: 'Proof of Relay', orchid: 'Stake-Weighting' },
        { compare: 'Bandwidth-Hard', pkt: "Yes", helium: 'No', nkn: 'No', orchid: 'No' },
        { compare: 'Team/Investor %', pkt: "0%", helium: '35%', nkn: '50%', orchid: '48.90%' },
        { compare: 'Top Network Speed', pkt: "105 GB/sec", helium: '36 GB/sec', nkn: '152 mb/sec', orchid: 'N/A' },
        { compare: 'Ticker', pkt: "PKT", helium: 'HNT', nkn: 'NKN', orchid: 'OXT' },
        { compare: 'Supply Limit', pkt: "6,000,000,000", helium: '223,000,000,000', nkn: '754,831,000', orchid: '979,379,000' },
        { compare: 'Circulating Supply', pkt: "4,826,573,824", helium: '160,875,442', nkn: '754,831,362', orchid: '979,779,108' }
      ]
    };
  },
  head() {
    return {
      title: "Utility - PKT",
      meta: [{ hid: "description", name: "description", content: "Building physical infrastructure with PKT." }],
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
.v-utility {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/utility/utility-top-asset.webp);
  background-size:rem(900);
  background-position:top right;
  background-repeat:no-repeat;
  @include for-width(-desktop-medium-default) {
    background-size:rem(800);
  }
  @include for-width(-laptop) {
    background-size:rem(700);
    background-position:top -350px right -150px;
  }
  @include for-width(-small-lg) {
    background-size:rem(800);
    background-position:top -350px right -250px;
  }
  &:before {
    content:'';
    background-image:url(/img/utility-bg-1.webp);
    position:absolute;
    top:7%;
    right:0;
    width:70%;
    height:75%;
    background-position:right top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
  }
  &:after {
    content:'';
    background-image:url(/img/utility-bg-2.webp);
    position:absolute;
    bottom:15%;
    left:0;
    width:55%;
    height:35%;
    background-position:left top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    @include for-width(-small-lg) {
      padding:rem(145) 0 rem(100);
    }
  }
  .v-chess-section {
    padding-top:rem(50);
    @include for-width(-laptop) {
      padding-top:0;
    }
    & .c-chess-block_inner_single_img {
      & img {
        border-radius:rem(20);
      }
    }
  }
  .v-asymetrical-section {
    padding-bottom:rem(100);
    @include for-width(-laptop) {
      padding-top:rem(100);
    }
    @include for-width(-small-lg) {
      padding:rem(80) rem(20) rem(80);
    }
    & .container {
      @extend %df;
      @extend %jcsb;
      @extend %ais;
      padding:rem(50) 0 0;
      // border-top:1px solid rgba(217,217,217,.2);
      // border-bottom:1px solid rgba(217,217,217,.2);
      @include for-width(-laptop) {
        padding:rem(75) 0 rem(35);
      }
      @include for-width(-tablet) {
        display:block;
      }
      @include for-width(-small-lg) {
        border:0;
        padding:0;
      }
      & .c-common-button {
        @include for-width(-small-lg) {
          display:none;
        }
      }
      & .mobile_only {
        display:none;
        @include for-width(-small-lg) {
          display:block;
          margin-top:rem(25);
        }
      }
    }
    &__heading {
      & h2 {
        @extend %h2-common;
        padding-bottom:rem(35);
        @include for-width(-small-lg) {
          padding-bottom:0;
        }
      }
      width:35%;
      @include for-width(-tablet) {
        width:100%;
        padding-bottom:rem(35);
      }
      @include for-width(-small-lg) {
        padding-bottom:rem(15);
      }
    }
    &__inner {
      width:65%;
      @include for-width(-tablet) {
        width:100%;
      }
      @include for-width(-small-lg) {
        padding:0 rem(20);
      }
    }
  }
  .v-simple-section {
    padding:rem(155) 0 rem(200);
    @include for-width(-laptop) {
      padding:rem(100) 0 rem(150);
    }
    @include for-width(-small-lg) {
      padding:rem(95) 0 rem(110);
    }
  }
  .v-comparison-section {
    padding-bottom:rem(120);
    @include for-width(-small-lg) {
      padding-bottom:rem(80);
    }
    & h2 {
      @extend %h2-common;
      padding-bottom:rem(30);
      margin-bottom:rem(55);
      @include for-width(-laptop) {
        margin-bottom:rem(25);
      }
    }
    &_table_wrap {
      width: 100%;
      @include for-width(-small-lg) {
        overflow-x: scroll;
      }
    }
    &_table {
      width: 100%;
      height: fit-content;
      border-collapse: separate;
      @include for-width(-small-lg) {
        min-width: rem(850);
        padding-bottom:rem(20);
      }
      & thead tr {
        & th {
          padding:rem(25) rem(22) rem(20);
          @extend %t-left;
          &.pkt {
            border:2px solid $blue;
            border-top-left-radius:rem(20);
            border-top-right-radius:rem(20);
            border-bottom:0;
          }
        }
      }
      & tbody tr {
        & td {
          font-size: rem(16);
          line-height: rem(60);
          @extend %inter_medium;
          color:$white_50;
          @extend %t-left;
          padding:0 rem(22) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          @include for-width(-tablet) {
            padding:0 rem(10) 0;
            line-height: rem(24);
          }
          @include for-width(-small-lg) {
            padding:0 rem(20) 0;
            line-height: rem(60);
            font-size: rem(14);
          }
          &.pkt {
            @extend %inter_bold;
            color:$white;
            border-left:2px solid $blue;
            border-right:2px solid $blue;
          }
        }
        &:last-child td {
          padding-bottom:rem(12);
        }
        &:last-child .pkt {
          border-bottom:2px solid $blue;
          border-bottom-left-radius:rem(20);
          border-bottom-right-radius:rem(20);
        }
      }
    }
  }
}
</style>