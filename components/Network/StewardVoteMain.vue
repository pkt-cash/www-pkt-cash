<template>
  <div class="c-content-main">
    <div class="container">
      <div class="c-content-main__wrap">
        <!-- Navigation -->
        <div class="c-content-main__navigation">
          <ul class="c-content-main__navigation-list">
            <li class="c-content-main__navigation-item">
              <a href="#how-voting-works" @click="itm_link = 'how-voting-works'" :class="{ active: itm_link === 'how-voting-works'}" class="c-content-main__navigation-link">How voting works</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a href="#how-to-vote" @click="itm_link = 'how-to-vote'" :class="{ active: itm_link === 'how-to-vote'}" class="c-content-main__navigation-link">How to vote</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a href="#resources" @click="itm_link = 'resources'" :class="{ active:itm_link === 'resources'}" class="c-content-main__navigation-link">Resources</a>
            </li>
          </ul>
        </div>
        <!-- // Navigation -->

        <!-- Item 1 -->
        <div class="c-content-anchor" id="how-voting-works"></div>
        <div class="c-content-main__content">
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">How voting works</h2>
            <p
              class="c-content-main__text"
            >A vote consists one two parts, VoteFor and VoteAgainst, VoteAgainst is a vote for impeachment while VoteFor is a vote for who should become network steward in the event of an impeachment.</p>
            <p
              class="c-content-main__text"
            >A network steward is represented as a transaction output script rather than a script encoded key. An easy way to get the script for a given address is to pay some money to it and then explore the raw transaction and copy the output.</p>
            <p class="c-content-main__text">
              Exploring a coinbase transaction we can see the output being paid to the network steward
              <a
                href="https://explorer.pkt.cash/address/"
              >https://explorer.pkt.cash/address/</a> and the script for this output is
              <b
              >0020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2</b>
            </p>
            <pre class="c-content-main__scroll">$ btcctl -u x -P x getrawtransaction 505d2750577a3d3c739c2a650ec0e03a7ddb1f81080c820ab1a317575020745b 1
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
            <p
              class="c-content-main__text"
            >If we double-check by querying pktd to find out what is the network steward, we will see that it shows the script that was paid to.</p>
            <pre class="c-content-main__scroll">$ btcctl -u x -P x getnetworksteward
{
  "script": "0020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2b",
  "votesagainst": 0,
  "totalpossible": 21985819476623360
}</pre>
            <p class="c-content-main__text">
              So if we wanted, for instance, to change the network steward to
              <a
                href="https://explorer.pkt.cash/address/pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX "
              >https://explorer.pkt.cash/address/pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX </a>,
              we would want to vote for the corrisponding script
              <a
                href="#"
              >76a9147d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae88ac</a>, and of course we probably want to vote against the current network steward as well.
            </p>
          </div>
          <!-- // Item 1 -->

          <!-- Item 2 -->
          <div class="c-content-anchor" id="how-to-vote"></div>
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">How to vote</h2>
            <p
              class="c-content-main__text"
            >Voting is done by configuring your wallet to vote, whenever you spend money, your wallet will include a vote in every future payment of PKT which is made. If you want to speed up the voting process, you can configure your wallet to vote and then transfer all of your PKT to another wallet, in order to be sure it will all be voting.</p>
            <p class="c-content-main__text">
              To configure your wallet to vote for
              <a href="https://explorer.pkt.cash/address/pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX ">https://explorer.pkt.cash/address/pGzmtW4Q2v4AWHcX8TYGqG5c1Eh5Ykg6fX </a> and against
              <a
                href="https://explorer.pkt.cash/address"
              >https://explorer.pkt.cash/address</a>, you would use the following workflow:
            </p>
            <pre class="c-content-main__scroll">$ btcctl -u x -P x --wallet getnetworkstewardvote
{}
$ btcctl -u x -P x --wallet setnetworkstewardvote default 76a9147d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae88ac 0020d5c1005c0d4012d3ae2672319e7f
9eb15a57516aeefabbbc062265f67e308f2b
{}
$ btcctl -u x -P x --wallet getnetworkstewardvote
{
  "votefor": "76a9147d9df4279212fd7def4c47abf2d5f3a6c6eaf4ae88ac",
  "voteagainst": "0020d5c1005c0d4012d3ae2672319e7f9eb15a57516aeefabbbc062265f67e308f2b"
}</pre>
          </div>
          <!-- // Item 2 -->

          <!-- Item 3 -->
          <div class="c-content-anchor" id="resources"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">Resources</h2>
            <ul class="c-content-main__list--small">
              <li class="c-content-main__list--small-item">Telegram: <a href="https://t.me/pktproject<">https://t.me/pktproject</a></li>
              <li class="c-content-main__list--small-item">Matrix: <a href="https://riot.im/app/#/room/#pkt:m.trnsz.com">https://riot.im/app/#/room/#pkt:m.trnsz.com</a></li>
              <li class="c-content-main__list--small-item">IRC: <a href="mainlto:#pkt@freenode.net">#pkt@freenode.net</a></li>
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
