<template>
  <div class="v-network">
    <section class="v-network-header-section">
      <HeaderInternal
      title="The Network Steward" 
      subtitle="Public grants for network development" 
      text="The Network Steward is a democratically elected wallet that provides grants for open-source development of the PKT ecosystem. 20% of each mined coinbase is paid to the Network Steward wallet, and every 129,600 blocks (~3 months) 100% of the funds in the wallet must be granted or the coins are automatically burned. This Network Stewards can be changed anytime by way of more than 50% PoS vote." 
      button_1="Submit Proposal" 
      button_2="View On Explorer"
      button_1_link="https://github.com/pkt-cash/ns-projects"
      button_2_link="https://explorer.pkt.cash/"
      button_1_target="_blank"
      button_2_target="_blank"
      is_network />
    </section>
    <section class="v-network-section v-network-section__charter">
      <div class="container">
        <h2 class="v-network-section__title">The Charter</h2>
        <p class="v-network-section__supersmall">The objective of the Network Steward is to provide perpetual funding for the technological and infrastructure development of the PKT Network </p>
        <p class="v-network-section__supersmall">Key aspects of this objective include:</p>
        <Cards :list="objectives_list" />
        <p class="v-network-section__supersmall">In order to achieve these goals, the Network Steward will periodically meet to review funding proposals based on a strict criteria and award grants.</p>
        <nuxt-link to="/network-steward-vote" class="v-network-section__button"><span>View Funding Criteria</span></nuxt-link>
      </div>
    </section>
    <section class="v-network-section v-network-section__request_funding">
      <div class="container">
        <div class="container_flex">
          <div class="v-network-section__left">
            <h2 class="v-network-section__title_small">Request Funding</h2>
            <p class="v-network-section__subtitle">PKT invests in infrastructure</p>
            <p class="v-network-section__text">Getting a proposal accepted is much like getting a pull request merged into a project. You start by socializing what you want to do with the community (try PKT.Chat or Telegram) and when you have rough consensus, you move that conversation to a formal proposal.</p>
            <p class="v-network-section__text">To make a proposal, you must create a pull request to the ns-projects repository which adds a new project markdown file as per the project template and name it according to the naming convention defined in the repository <a href="#" target="_blank" class="v-network-section__text_link">readme</a>.</p>
            <p class="v-network-section__text">The Network Steward meets several times per year to review submitted projects. The minutes of these meetings are published in the ns-projects repository, along with the projects and their status.</p>
            <div class="v-network-section__links">
              <a href="https://github.com/pkt-cash/ns-projects" target="_blank" class="v-network-section__button"><span>Submit a Proposal</span></a>
              <a href="https://github.com/pkt-cash/ns-projects/blob/master/projects/template.md" target="_blank" class="v-network-section__button"><span>Download Template</span></a>
            </div>
          </div>
          <div class="v-network-section__right">
            <img src="/img/network-steward-funding.png" alt="Request Funding" />
          </div>
        </div>
      </div>
    </section>
    <section class="v-network-section v-network-section__progress">
      <div class="container">
        <h2 class="v-network-section__title_small">Projects in Progress</h2>
        <Projects :list="projects_list" />
        <div class="v-network-section__links">
          <a href="#" target="_blank" class="v-network-section__button"><span>View on GitHub</span></a>
          <a href="https://github.com/pkt-cash/ns-projects/tree/master/projects" target="_blank" class="v-network-section__button"><span>Completed Projects</span></a>
        </div>
      </div>
    </section>
    <section class="v-network-section v-network-section__who">
      <div class="container">
        <h2 class="v-network-section__title_small">Who are the Network Stewards?</h2>
        <p class="v-network-section__supersmall">The Network Steward is a multi-signature wallet which requires 3 out of 5 signatures in order to make a payment.</p>
        <img src="/img/network-steward-hand.jpeg" alt="Who are the Network Stewards?" class="v-network-section__who__image" />
        <p class="v-network-section__text">The Network Steward wallet address is:</p>
        <p class="v-network-section__text_highlighted"><a href="https://explorer.pkt.cash/address/pkt1q6hqsqhqdgqfd8t3xwgceulu7k9d9w5t2amath0qxyfjlvl3s3u4sjza2g2" target="_blank">https://explorer.pkt.cash/address/pkt1q6hqsqhqdgqfd8t3xwgceulu7k9d9w5t2amath0qxyfjlvl3s3u4sjza2g2</a></p>
        <p class="v-network-section__supersmall v-network-section__who__supersmall"><span>cjd</span> - cjdns original author</p>
        <p class="v-network-section__supersmall v-network-section__who__supersmall"><span>Arceliar</span> - Yggdrasil original author</p>
        <p class="v-network-section__supersmall v-network-section__who__supersmall"><span>benhylau</span> - Contributor at Toronto Mesh</p>
        <p class="v-network-section__supersmall v-network-section__who__supersmall"><span>NeilAlexander</span> - Yggdrasil release manager</p>
        <p class="v-network-section__supersmall v-network-section__who__supersmall"><span>Backupbrain</span> - Creator of NetNinja VPN device</p>
        <p class="v-network-section__text v-network-section__who__text">All of the participants have agreed not to enter into any relationships which would affect their ability to act impartially on behalf of the PKT project.</p>
        <nuxt-link to="/network-steward-vote" class="v-network-section__button"><span>Voting Details</span></nuxt-link>
      </div>
    </section>
    <section class="v-network-section v-network-section__vote">
      <div class="container">
        <div class="container_flex">
          <div class="v-network-section__left">
            <h2 class="v-network-section__title">Network Steward Vote</h2>
            <p class="v-network-section__text">It is the belief of the PKT founding community members that any unaccountable authority, no matter how benevolent, will eventually fall victim to corruption, inefficiency or simple failure to innovate. Because of this, the PKT blockchain has a solution in case the Network Steward is ever not fulfilling its role of developing technology and infrastructure for the PKT ecosystem.</p>
            <p class="v-network-section__text">Every holder of PKT is able to cast a vote to impeach the Network Steward and allow a new one Network Steward take its place. Impeachment is not an insignificant event. For it to occur, it requires more than a 50% VoteFor of the total PKT ever mined. If impeachment does occur, what follows is an automatic vote count and a change to the Network Steward address.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="v-network-section v-network-section__how_works">
      <div class="container">
        <div class="container_flex">
          <div class="v-network-section__left">
            <h2 class="v-network-section__title">How Voting Works</h2>
            <p class="v-network-section__text">A vote consists of one two parts: VoteFor and VoteAgainst. VoteAgainst is a vote for impeachment while VoteFor is a vote for who should become network steward in the event of an impeachment.</p>
            <p class="v-network-section__text">A Network Steward is represented as a transaction output script rather than a script encoded key. An easy way to get the script for a given address is to pay some money to it and then explore the raw transaction and copy the output.</p>
            <p class="v-network-section__text">Exploring a coinbase transaction we can see the output being paid to the Network Steward <a href="#" target="_blank" class="v-network-section__text_link">https://explorer.pkt.cash/address/</a> and the script for this output is 0020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2</p>
          </div>
        </div>
        <div class="v-network-section__code_wrapper v-network-section__code_long">
          <pre class="v-network-section__code">
$ ./bin/pktctl getrawtransaction 505d2750577a3d3c739c2a650ec0e03a7ddb1f81080c820ab1a317575020745b 1
{
  "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff10022913000b2f503253482f706b74642fffffffff03cac2a6ee0000000
01976a9147d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae88ac362f5f3b00000000220020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2b000000000000
0000326a3009f91102ffff7f20c70542e4ca2363ce0149e845305f25564e7ce81e33411ad570df0f56f387462021cd01000000000000000000",
  "txid": "505d2750577a3d3c739c2a650ec0e03a7ddb1f81080c820ab1a317575020745b",
  "hash": "505d2750577a3d3c739c2a650ec0e03a7ddb1f81080c820ab1a317575020745b",
  "size": 203,
  "vsize": 203,
  "version": 1,
  "locktime": 0,
  "vin": [
    {
      "coinbase": "022913000b2f503253482f706b74642f",
      "sequence": 4294967295
    }
  ],
  "vout": [
    {
      "value": 40.0390625,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 7d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a9147d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae88ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX"
        ]
      }
    },
    {
      "value": 9.9609375,
      "n": 1,
      "scriptPubKey": {
        "asm": "0 d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2b",
        "hex": "0020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2b",
        "reqSigs": 1,
        "type": "witness_v0_scripthash",
        "addresses": [
          "pkt1q6hqsqhqdgqfd8t3xwgceulu7k9d9w5t2amath0qxyfjlvl3s3u4sjza2g2"
        ]
      }
    },
    {
      "value": 0,
      "n": 2,
      "scriptPubKey": {
        "asm": "OP_RETURN 09f91102ffff7f20c70542e4ca2363ce0149e845305f25564e7ce81e33411ad570df0f56f387462021cd010000000000",
        "hex": "6a3009f91102ffff7f20c70542e4ca2363ce0149e845305f25564e7ce81e33411ad570df0f56f387462021cd010000000000",
        "type": "nulldata"
      }
    }
  ],
  "blockhash": "c77d9026867de1455e573eb47bd3322548fd537b29ed9296a004a00f43d1da18",
  "confirmations": 3,
  "time": 1566221646,
  "blocktime": 1566221646
}
          </pre>
        </div>
        <p class="v-network-section__text">If we double-check by querying pktd to find out what is the Network Steward, we will see that it shows the script that was paid to.</p>
        <div class="v-network-section__code_wrapper">
          <pre class="v-network-section__code">
$ ./bin/pktctl getnetworksteward
{
  "script": "0020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2b",
  "votesagainst": 0,
  "totalpossible": 21985819476623360
}
          </pre>
        </div>
        <p class="v-network-section__text">So if we wanted, for instance, to change the Network Steward to <a href="#" target="_blank" class="v-network-section__text_link">https://explorer.pkt.cash/address/pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX</a>  we would want to vote for the corresponding script  76a9147d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae88ac, and of course we probably want to vote against the current Network Steward as well.</p>
      </div>
    </section>
    <section class="v-network-section v-network-section__build_tech">
      <div class="container">
        <h2 class="v-network-section__title">Get Funded To Build Tech</h2>
        <div class="container_flex">
          <div class="v-network-section__left">
            <p class="v-network-section__subtitle">The PKT blockchain funds network development</p>
            <p class="v-network-section__text">20% of every block mined is paid to the Network Steward to be allocated for open-sourced development of the PKT ecosystem. The Network Steward has 129600 blocks (approximately 3 months) to deploy 100% of the coins in the wallet or those coins are burned to remove supply as demand increases. This Network Stewards can be changed anytime by way of a PoS based vote.</p>
          </div>
          <div class="v-network-section__right">
            <img src="/img/network-steward-build.png" alt="Get Funded To Build Tech" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderInternal from "~/components/Base/HeaderInternal";
import Cards from "~/components/Base/Cards";
import Projects from "~/components/Base/Projects";

export default {
  components: {
    HeaderInternal,
    Cards,
    Projects
  },
  head() {
    return {
      title: this.$t("steward.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("about.meta_descr") }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
  data() {
    return {
      objectives_list: [
        {
          title: "Point 1",
          descr: "Financing the development of open source software, technology documentation and education resources for the PKT Network and community.",
        },
        {
          title: "Point 2",
          descr: "Lobbying for an improved regulator environment for small network operators and more generally, to promote internet freedom, privacy, and decentralized internet access.",
        },
        {
          title: "Point 3",
          descr: "Purchasing property such as proprietary software or radio frequency spectrum rights in order to put these things in the commons.",
        },
      ],
      projects_list: [
        {
          file: "2019_12_14_pkt-whitepaper-website.md",
          date: "7 months ago"
        },
        {
          file: "2020_02_28_pkt-vpn-uitility-wireframes.png",
          date: "2 years ago"
        },
        {
          file: "2020_02_28_pkt_vpn_utility.md",
          date: "9 months ago"
        },
        {
          file: "2020_07_25_tokenstrike.md",
          date: "15 months ago"
        },
        {
          file: "2020_11_14-double_wallet.md",
          date: "9 months ago"
        },
        {
          file: "2020_11_14-pkt-community.md",
          date: "4 months ago"
        },
        {
          file: "2020_11_14_Ongoing_Tech_Support_Proposal.md",
          date: "11 months ago"
        },
        {
          file: "2021_05_09_user_operated_internet_fund.md",
          date: "5 months ago"
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-network {
  // Top section
  &-header-section {
    & .c-internal-header {
      height:auto;
      min-height:100vh;
      @include for-width(-small-lg) {
        padding:rem(65) 0 rem(25);
      }
      & .container {
        @include for-width(-small-lg) {
          display: -webkit-flex;
          display: -moz-flex;
          display: -ms-flex;
          display: -o-flex;
          display: flex;
          -webkit-flex-direction: column;
          -moz-flex-direction: column;
          -ms-flex-direction: column;
          -o-flex-direction: column;
          flex-direction: column;
        }
      }
      &__title {
        max-width:50%;
        margin: rem(135) auto 0;
        line-height:rem(86);
        @include for-width(+desktop-er) {
          max-width:75%;
          line-height:rem(110);
        }
        @include for-width(-laptop) {
          max-width:75%;
        }
        @include for-width(-tablet) {
          margin:rem(25) auto rem(15);
        }
        @include for-width(-small-lg) {
          font-size: rem(36);
          line-height:rem(42);
          order:1;
        }
      }
      &__sub-title {
        @include for-width(-small-lg) {
          margin:0 rem(35) rem(20);
          font-size: rem(22);
          line-height:rem(34);
          order:2;
        }   
      }
      &__text {
        @include for-width(-laptop) {
          max-width:60%;
        }
        @include for-width(-tablet) {
          max-width:70%;
        }
        @include for-width(-small-lg) {
          order:4;
          max-width:85%;
        }
      }
      &__links {
        @include for-width(-small-lg) {
          order:3;
          margin:0 auto rem(25);
          justify-content: space-between;
          width:100%;
        }
        & .button_new {
          @include for-width(-small-lg) {
            padding:rem(10) rem(25);
            margin:0;
          }
        }
      }
      &__indexes {
        @include for-width(-small-lg) {
          order:5;
        }
      }
    }
  }
  // Common
  &-section {
    padding:rem(75) 0 rem(100);
    @include for-width(+desktop-xl) {
      padding:rem(100) 0 rem(125);
    }
    @include for-width(-desktop-lg) {
      padding:rem(50) 0 rem(75);
    }
    @include for-width(-small-lg) {
      padding:rem(40) 0 rem(75);
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
    &__title {
      @extend %heading-mlarge;
      @extend %heading-gradient-dark;
      margin-bottom:rem(30);
      @include for-width(+desktop-xl) {
        margin-bottom:rem(40);
      }
      @include for-width(-desktop-lg) {
        margin-bottom:rem(25);
      }
      @include for-width(-laptop) {
        margin-bottom:rem(15);
      }
      @include for-width(-small-lg) {
        font-size: rem(50);
        line-height:rem(60);
        margin-bottom:rem(30);
      }
    }
    &__title_small {
      @extend %heading_internal;
      @extend %heading-gradient-dark;
    }
    &__subtitle {
      @extend %subheading;
      @include for-width(-small-lg) {
        font-size: rem(16);
        line-height:rem(24);
      }
    }
    &__supersmall {
      @extend %heading-small;
      max-width:50%;
      margin:0 auto rem(50);
      @extend %semibold;
      text-transform: initial;
      @include for-width(+desktop-xl) {
        margin-bottom:rem(60);
        max-width:65%;
      }
      @include for-width(-desktop-lg) {
        margin:0 auto rem(35);
      }
      @include for-width(-laptop) {
        max-width:70%;
        margin-bottom:rem(25);
      }
      @include for-width(-tablet) {
        max-width:80%;
      }
      @include for-width(-small-lg) {
        margin-bottom:rem(20);
        max-width:100%;
      }
    }
    &__text {
      @extend %pn;
      margin-bottom:rem(25);
    }
    &__text_link {
      text-decoration-line: underline;
      color:$light_blue_new;
    }
    &__links {
      @extend %df;
      @extend %aic;
      @extend %jcs;
      margin-top:rem(55);
      @include for-width(-desktop-medium) {
        margin-top:rem(35);
      }
    }
    &__button {
      @extend %btn-new;
      @extend %btn_blue_new;
      padding:rem(15) rem(50);
      @include for-width(-desktop-lg) {
        display:inline-block;
        width:auto;
      }
      @include for-width(-laptop) {
        padding:rem(12) rem(35);
      }
      @include for-width(-small-lg) {
        padding:rem(10) rem(25);
      }
    }
    &__text_highlighted {
      margin:rem(35) auto rem(35);
      width:75%;
      background:$light_bg;
      @include for-width(+desktop-xl) {
        margin:rem(45) auto rem(45);
      }
      @include for-width(-desktop-medium) {
        width:auto;
        display:inline-block;
        padding:0 rem(25);
      }
      @include for-width(-laptop) {
        margin:rem(25) auto rem(25);
      }
      @include for-width(-tablet) {
        font-size:rem(14);
        word-break:break-all;
      }
      & a {
        text-decoration-line: underline;
        color:$light_blue_new;
        padding:rem(20) 0;
        display:inline-block;
        @include for-width(-laptop) {
          padding:rem(15) rem(10);
        }
        @include for-width(-tablet) {
          padding:rem(15) rem(20);
        }
        @include for-width(-small-lg) {
          padding:rem(25) rem(20);
          text-align:left;
        }
      }
    }
    &__left {
      @extend %t-left;
      width:50%;
      @include for-width(-tablet) {
        width:100%;
      }
    }
    &__right {
      @extend %t-right;
      width:50%;
      @include for-width(-tablet) {
        width:100%;
      }
    }
    &__code_wrapper {
      background: #E6F3FF;
      @extend %t-left;
      padding:rem(45);
      height:28vh;
      overflow:scroll;
      margin:rem(35) 0;
      @include for-width(-laptop) {
        margin:rem(15) 0 rem(25);
        padding:rem(25);
      }
      @include for-width(-tablet) {
        height:15vh;
      }
      @include for-width(-small-lg) {
        height:35vh;
      }
      &::-webkit-scrollbar-button {
          background-repeat: no-repeat;
          width: rem(4);
          height: rem(4);
      }
      &::-webkit-scrollbar-track {
        background-color: $white;
      }
      &::-webkit-scrollbar-thumb {
        -webkit-border-radius: rem(15);
        border-radius: rem(15);
        background-color: $dark_blue_new;
      }
      &::-webkit-scrollbar {
        height: rem(4);
        width: rem(4);
      }
    }
    &__code_long {
      height:45vh;
      @include for-width(-tablet) {
        height:35vh;
      }
      @include for-width(-small-lg) {
        height:50vh;
      }
    }
    &__code {
      @extend %pn;
      margin:0;
    }
  }
  // Sections
  &-section__charter {
    padding-bottom:0;
    & .v-cards {
      margin:rem(45) auto rem(65);
      max-width:90%;
      @extend %fw;
      align-items: stretch;
      @include for-width(-desktop-lg) {
        margin:rem(45) auto rem(35);
      }
      @include for-width(-laptop) {
        max-width:100%;
      }
      @include for-width(-small-lg) {
        margin:rem(35) auto;
        display:block;
      }
      &__card {
        width:32%;
        background: $light_bg;
        padding:rem(25) rem(15) rem(50);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
        @include for-width(-small-lg) {
          width:95%;
          margin:0 auto rem(35);
        }
        &__title {
          @extend %subheading;
        }
        &__descr {
          @extend %pn;
          margin-bottom:0;
        }
      }
    }
    & .v-network-section__button {
      @include for-width(-small-lg) {
        margin:rem(15) auto;
      }
    }
  }
  &-section__request_funding {
    background-color: $dark_blue_new;
    background-image:url(/img/network-steward-funding-bg.jpeg);
    background-repeat:no-repeat;
    background-size:100% auto;
    background-position:top center;
    padding-top:rem(175);
    @include for-width(-desktop-medium) {
      padding-top:rem(125);
    }
    @include for-width(-tablet) {
      padding-top:rem(100);
    }
    @include for-width(-small-lg) {
      padding-top:rem(75);
      background-size:160% auto;
    }
    .container_flex {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      @include for-width(-tablet) {
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
      }
    }
    & .v-network-section__title_small {
      @extend %heading-gradient-light;
      margin-bottom:rem(10);
      @include for-width(-small-lg) {
        font-size: rem(36);
        line-height:rem(42);
      }
    }
    & .v-network-section__subtitle {
      color:$white;
      margin-bottom:rem(25);
      @include for-width(-small-lg) {
        margin:rem(15) auto;
      }
    }
    & .v-network-section__text {
      color:$white;
      width:80%;
      @include for-width(-tablet) {
        margin:0 auto rem(15);
      }
      @include for-width(-small-lg) {
        width:85%;
      }
    }
    & .v-network-section__links {
      width:80%;
      @include for-width(-desktop-medium) {
        width:90%;
      }
      @include for-width(-tablet) {
        margin:rem(35) auto 0;
        justify-content: center;
      }
      @include for-width(-small-lg) {
        width:100%;
        justify-content: space-between;
      }
      & .v-network-section__button {
        padding:rem(15) rem(30);
        @include for-width(-laptop) {
          padding:rem(12) rem(30);
        }
        @include for-width(-small-lg) {
          padding:rem(10) rem(15);
        }
        &:nth-child(odd) {
          margin-right:rem(35);
          @include for-width(-small-lg) {
            margin:0;
          }
        }
      }
    }
    & .v-network-section__left {
      @include for-width(-desktop-medium) {
        width:55%;
      }
      @include for-width(-tablet) {
        width:100%;
        order:2;
        text-align:center;
      }
    }
    & .v-network-section__right {
      @extend %t-center;
      @include for-width(-desktop-medium) {
        width:45%;
      }
      @include for-width(-tablet) {
        width:100%;
        order:1;
        margin-bottom:rem(50);
      }
      @include for-width(-small-lg) {
        margin-bottom:rem(35);
      }
      & img {
        vertical-align:middle;
        width:75%;
        @include for-width(-laptop) {
          width:85%;
        }
        @include for-width(-tablet) {
          width:50%;
        }
        @include for-width(-small-lg) {
          width:80%;
        }
      }
    }
  }
  &-section__progress {
    background:$light_bg;
    padding-bottom:rem(100);
    @include for-width(-laptop) {
      padding-bottom:rem(75);
    }
    .v-lines {
      padding:rem(75) rem(100) rem(10);
      @include for-width(-desktop-medium) {
        padding:rem(50) rem(75) 0;
      }
      @include for-width(-laptop) {
        padding:rem(35) rem(50) rem(10);
      }
      @include for-width(-tablet) {
        padding:rem(35) 0 0;
      }
      @include for-width(-small-lg) {
        overflow-x:scroll;
        -ms-align-items: flex-start;
        align-items: flex-start;
      }
      &::-webkit-scrollbar-button {
        @include for-width(-small-lg) {
          background-repeat: no-repeat;
          width: rem(4);
          height: rem(4);
        }
      }
      &::-webkit-scrollbar-track {
        @include for-width(-small-lg) {
          background-color: $white;
        }
      }
      &::-webkit-scrollbar-thumb {
        @include for-width(-small-lg) {
          -webkit-border-radius: rem(15);
          border-radius: rem(15);
          background-color: $dark_blue_new;
        }
      }
      &::-webkit-scrollbar {
        @include for-width(-small-lg) {
          height: rem(4);
          width: rem(4);
        }
      }
      &__line {
        background:$white;
        border-radius: rem(20);
        margin-bottom:rem(15);
        padding:rem(15) rem(30);
        position:relative;
        @include for-width(+desktop-xl) {
          padding:rem(20) rem(40);
        }
        @include for-width(-tablet) {
          padding:rem(15) rem(20);
        }
        @include for-width(-small-lg) {
          width: rem(650);
        }
        &__file {
          @extend %heading-super-small;
          margin-left:rem(35);
          @include for-width(-tablet) {
            margin-left:rem(20);
          }
        }
        &__date {
          @extend %heading-super-small;
          position:absolute;
          right:rem(30);
          @include for-width(-tablet) {
            right:rem(20);
          }
        }
      }
    }
    & .v-network-section__links {
      @extend %df;
      @extend %jcc;
      @extend %aic;
      margin:rem(45) auto 0;
      @include for-width(-desktop-lg) {
        margin-top:rem(35);
      }
      @include for-width(-laptop) {
        margin-top:rem(25);
      }
      @include for-width(-tablet) {
        margin-top:rem(45);
      }
      @include for-width(-small-lg) {
        max-width:100%;
        width:100%;
        justify-content: space-between;
      }
      & .v-network-section__button {
        width:auto;
        margin:0 rem(15);
        @include for-width(-small-lg) {
          padding:rem(10) rem(20);
          width:auto;
          margin:0;
        }
      }
    }
  }
  &-section__who {
    & .v-network-section__title_small {
      width:50%;
      margin:0 auto rem(35);
      @include for-width(+desktop-xl) {
        width:55%;
      }
      @include for-width(-laptop) {
        width:55%;
        margin-bottom:rem(15);
      }
      @include for-width(-tablet) {
        width:70%;
      }
      @include for-width(-small-lg) {
        width:100%;
      }
    }
    &__image {
      transform: rotate(-3.08deg);
      width:90%;
      margin:0 auto rem(25);
      @include for-width(-desktop-lg) {
        width:75%;
      }
      @include for-width(-small-lg) {
        width:100%;
      }
    }
    &__supersmall {
      margin:0 auto;
      & span {
        color:$light_blue_new;
      }
      @include for-width(-small-lg) {
        font-size: rem(14);
        line-height:rem(20);
        width:100%;
        max-width: 100%;
      }
    }
    &__text {
      margin:rem(35) auto rem(50);
      width:60%;
      @include for-width(+desktop-xl) {
        margin:rem(45) auto rem(75);
      }
      @include for-width(-small-lg) {
        margin:rem(25) auto rem(35);
        width:90%;
      }
    }
  }
  &-section__vote {
    background-image:url(/img/network-steward-vote-bg.png);
    background-color: $dark_blue_new;
    background-repeat:no-repeat;
    background-size:90% auto;
    background-position:top right;
    padding:rem(90) 0 rem(125);
    @include for-width(-laptop) {
      padding:rem(75) 0;
    }
    @include for-width(-tablet) {
      background-size:100% auto;
      padding:rem(50) 0;
    }
    @include for-width(-small-lg) {
      background-image:url(/img/network-steward-vote-bg-mobile.png);
      background-size:100% auto;
      background-position:bottom center;
      padding:rem(50) 0 rem(175);
    }
    .container_flex {
      @extend %df;
      @extend %aib;
      @extend %jcsb;
      @include for-width(-tablet) {
        display:block;
      }
    }
    & .v-network-section__left {
      width:55%;
      @include for-width(-tablet) {
        width:100%;
      }
    }
    & .v-network-section__title {
      @extend %heading-gradient-light;
      max-width:85%;
    }
    & .v-network-section__text {
      color:$white;
    }
  }
  &-section__how_works {
    background-color:$light_bg;
    padding-top:0;
    @include for-width(-laptop) {
      padding-bottom:rem(50);
    }
    .container_flex {
      @extend %df;
      @extend %aib;
      @extend %jcsb;
      background-image:url(/img/network-steward-how_works.png);
      background-repeat:no-repeat;
      background-size:contain;
      background-position:top right;
      padding-top:rem(75);
      @include for-width(-laptop) {
        padding-top:rem(50);
        background-size:50% auto;
      }
      @include for-width(-tablet) {
        display:block;
        background:$light_bg;
      }
    }
    & .v-network-section__text {
      @extend %t-left;
    }
    & .v-network-section__left .v-network-section__text {
      padding-right:rem(100);
      @include for-width(-laptop) {
        padding-right:rem(25);
      }
      @include for-width(-tablet) {
        padding-right:0;
      }
    }
  }
  &-section__build_tech {
    padding-bottom:0;
    .container_flex {
      @extend %df;
      @extend %ais;
      @extend %jcsb;
      @include for-width(-tablet) {
        display:block;
      }
    }
    & .v-network-section__title {
      margin-bottom:0;
      @extend %t-left;
      width:45%;
      @include for-width(+desktop-xl) {
        width:60%;
      }
      @include for-width(-desktop-lg) {
        width:50%;
      }
      @include for-width(-tablet) {
        width:100%;
      }
      @include for-width(-small-lg) {
        font-size: rem(42);
        line-height: rem(50);
        width:90%;
      }
    }
    & .v-network-section__subtitle {
      margin-bottom:rem(25);
      @include for-width(+desktop-xl) {
        margin-bottom:rem(35);
      }
      @include for-width(-laptop) {
        margin-bottom:rem(15);
      }
    }
    & .v-network-section__left {
      width:45%;
      padding-top:rem(45);
      @include for-width(-laptop) {
        padding-top:rem(10);
      }
      @include for-width(-tablet) {
        width:100%;
      }
    }
    & .v-network-section__right {
      width:55%;
      @extend %t-center;
      @include for-width(+desktop-xl) {
        text-align:right;
      }
      @include for-width(-tablet) {
        width:100%;
      }
      & img {
        vertical-align: bottom;
        width:55%;
        margin-top:-10%;
        @include for-width(-tablet) {
          margin:0 auto;
          width:45%;
        }
        @include for-width(-small-lg) {
          width:65%;
        }
      }
    }
  }
}
</style>
