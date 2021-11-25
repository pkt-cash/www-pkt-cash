<template>
  <div class="c-content-main">
    <div class="container">
      <div class="c-content-main__wrap">
        <!-- Navigation -->
        <div class="c-content-main__navigation">
          <ul class="c-content-main__navigation-list">
            <li class="c-content-main__navigation-item">
              <a href="#how-voting-works" @click="itm_link = 'how-voting-works'" :class="{ active: itm_link === 'how-voting-works'}" class="c-content-main__navigation-link">{{ $t("steward_vote.steward_vote_nav_01") }}</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a href="#how-to-vote" @click="itm_link = 'how-to-vote'" :class="{ active: itm_link === 'how-to-vote'}" class="c-content-main__navigation-link">{{ $t("steward_vote.steward_vote_nav_02") }}</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a href="#resources" @click="itm_link = 'resources'" :class="{ active:itm_link === 'resources'}" class="c-content-main__navigation-link">{{ $t("steward_vote.steward_vote_nav_03") }}</a>
            </li>
          </ul>
        </div>
        <!-- // Navigation -->

        <!-- Item 1 -->
        <div class="c-content-anchor" id="how-voting-works"></div>
        <div class="c-content-main__content">
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">{{ $t("steward_vote.steward_vote_nav_01") }}</h2>
            <p class="c-content-main__text">{{ $t("steward_vote.steward_vote_01_content_01") }}</p>
            <p class="c-content-main__text">{{ $t("steward_vote.steward_vote_01_content_02") }}</p>
            <p class="c-content-main__text">{{ $t("steward_vote.steward_vote_01_content_03") }}
              <a href="https://explorer.pkt.cash/address/" target="_blank">https://explorer.pkt.cash/address/</a> {{ $t("steward_vote.steward_vote_01_content_04") }}
              <b>0020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2</b>
            </p>
            <pre class="c-content-main__scroll">$ ./bin/pktctl getrawtransaction 505d2750577a3d3c739c2a650ec0e03a7ddb1f81080c820ab1a317575020745b 1
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
}</pre>
            <p class="c-content-main__text">{{ $t("steward_vote.steward_vote_01_content_05") }}</p>
            <pre class="c-content-main__scroll">$ ./bin/pktctl getnetworksteward
{
  "script": "0020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2b",
  "votesagainst": 0,
  "totalpossible": 21985819476623360
}</pre>
            <p class="c-content-main__text">{{ $t("steward_vote.steward_vote_01_content_06") }}
              <a href="https://explorer.pkt.cash/address/pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX" target="_blank">https://explorer.pkt.cash/address/pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX </a>,
              {{ $t("steward_vote.steward_vote_01_content_07") }}
              <a
                href="https://explorer.pkt.cash/address/"
                target="_blank"
              >76a9147d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae88ac</a>, {{ $t("steward_vote.steward_vote_01_content_08") }}
            </p>
          </div>
          <!-- // Item 1 -->

          <!-- Item 2 -->
          <div class="c-content-anchor" id="how-to-vote"></div>
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">{{ $t("steward_vote.steward_vote_nav_02") }}</h2>
            <p class="c-content-main__text">{{ $t("steward_vote.steward_vote_02_content_01") }}</p>
            <p class="c-content-main__text">
              {{ $t("steward_vote.steward_vote_02_content_02") }}
              <a href="https://explorer.pkt.cash/address/pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX " target="_blank">https://explorer.pkt.cash/address/pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX </a> {{ $t("steward_vote.steward_vote_02_content_03") }}
              <a
                href="https://explorer.pkt.cash/address"
                target="_blank"
              >https://explorer.pkt.cash/address</a>, {{ $t("steward_vote.steward_vote_02_content_04") }}
            </p>
            <pre class="c-content-main__scroll">$ ./bin/pktctl --wallet getnetworkstewardvote
{}
$ ./bin/pktctl --wallet setnetworkstewardvote default 76a9147d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae88ac 0020d5c1005c0d4012d3ae2672319e7f
9eb15a57516aeefabbbc062265f67e308f2b
{}
$ ./bin/pktctl --wallet getnetworkstewardvote
{
  "votefor": "76a9147d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae88ac",
  "voteagainst": "0020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2b"
}</pre>
          </div>
          <!-- // Item 2 -->

          <!-- Item 3 -->
          <div class="c-content-anchor" id="resources"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">{{ $t("steward_vote.steward_vote_nav_03") }}</h2>
            <ul class="c-content-main__list--small">
              <li class="c-content-main__list--small-item">{{ $t("steward_vote.steward_vote_03_content_01") }}: <a href="https://t.me/pktpal" target="_blank">https://t.me/pktpal</a></li>
              <li class="c-content-main__list--small-item">Matrix: <a href="https://matrix.to/#/#pkt:matrix.org" target="_blank">https://matrix.to/#/#pkt:matrix.org</a></li>
              <li class="c-content-main__list--small-item">IRC: <a href="mainlto:#pkt@freenode.net" target="_blank">#pkt@freenode.net</a></li>
            </ul>
          </div>
          <!-- // Item 3 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NetworkStewardVoteMain",
  props: {
    title: String,
    text: String,
    bg: String,
  },
  data() {
    return {
      itm_link: null
    }
  },
  methods: {
    getCoords(name) {
      const box = document.querySelector(name).getBoundingClientRect()
      //
      return box.top + pageYOffset;
    }
  },
  mounted() {
    if(process.client) {
      document.addEventListener('scroll', () => {
        const condition = window.innerWidth > 1100 ? 80 : 60;
        const section_0 = this.getCoords('#how-voting-works') - condition;
        const section_1 = this.getCoords('#how-to-vote') - condition;
        const section_2 = this.getCoords('#resources') - condition;
        let scroll_y = window.innerWidth > 1100 ? window.scrollY : window.scrollY + 30;
        if(scroll_y < section_0) {
          this.itm_link = null
        }
        if(scroll_y >= section_0) {
          this.itm_link = 'how-voting-works'
        }
        if(scroll_y >= section_1) {
          this.itm_link = 'how-to-vote'
        }
        if(scroll_y >= section_2) {
          this.itm_link = 'resources'
        }
      })
    }
  }
};
</script>

<style lang="scss">
.c-content-main {
  & .container {
    width: 100%;
    max-width: rem(1182);
  }

  &__content {
    width: 100%;
    max-width: calc(100% - 440px);
    @include for-width(-tablet) {
      max-width: 100%;
    }
  }

  &__navigation {
    width: rem(220);
  }
}
</style>
