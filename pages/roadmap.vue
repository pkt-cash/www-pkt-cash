<template>
  <div class="v-roadmap">
    <section class="v-header-section">
      <SpotAInternal title="Roadmap" />
    </section>
    <section class="v-tabs-nav">
      <vue-tabs centered active-tab-color="transparent">
        <v-tab title="Introduction">
          <div class="container">
            <div class="v-introduction__inner">
              <div class="v-introduction__inner_left">
                <h2>Introduction</h2>
              </div>
              <div class="v-introduction__inner_right">
                <p>The PKT roadmap is an overview of the PKT ecosystem development. It is separated into four phases: Launch, Utility, Scale, and Innovate. Each phase defines an era of focus. This provides a guide for community developers and contributors regarding what tools, functionality and capabilities are integral to each era.</p>
                <p>While the phases of the roadmap are presented in order, contributors are working concurrently across multiple eras. This nonlinear development invites a wide range of community participation. While many projects cannot be developed in sequence, considering certain dependencies, this development style matches the project’s agile, open source ethos.</p>
                <p>As you explore this roadmap, you will see the years of development effort that are represented across each phase. Each milestone is a community achievement. Each accomplishment moves the project towards its mission of building a decentralized media network. Since PKT has no central infrastructure, no company, no foundation, no DAO, and no bank account, this roadmap represents a collective vision that recognizes the PKT community’s contributions.</p>
              </div>
            </div>
            <div class="v-introduction__papers">
              <div class="v-introduction__papers_single yellow_bg">
                <p>PacketCrypt</p>
                <h4>Yellow Paper</h4>
                <a href="https://pkt.cash/PacketCrypt-2020-09-04.pdf" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>Read now</span></a>
              </div>
              <div class="v-introduction__papers_single white_bg">
                <p>PKT Network</p>
                <h4>White Paper</h4>
                <a href="https://pkt.cash/PKT_Network_v1.0_2021.02.01.pdf" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>Read now</span></a>
              </div>
            </div>
            <div class="v-introduction__chess">
              <BlocksChessCommon :list="chess_list" />
            </div>
          </div>
        </v-tab>

        <v-tab title="Phases">
          <div class="v-phases__inner">
            <div class="container">
              <template>
                <div class="v-phases__inner__navigation">
                  <template v-for="item of phases_list">
                    <div class="c-phase" v-on:click="phase = item.title" :id="item.title">
                      <h4 class="c-phase__title">{{ item.title }}</h4>
                      <img :src="item.img_url" :alt="item.title" class="c-phase__img" />
                      <p class="c-phase__number">{{ item.number }}</p>
                    </div>
                  </template>
                </div>
              </template>
              <div class="v-phases__inner__content">
                <template v-if="phase === item.title" v-for="item of phases_content">
                  <div class="v-phases__inner__content__main">
                    <div class="v-phases__inner__content__main_left">
                      <h3>{{ item.number }}<br />{{ item.title }}</h3>
                    </div>
                    <div class="v-phases__inner__content__main_right">
                      <p>{{ item.description }}</p>
                      <p v-if="item.description_2">{{ item.description_2 }}</p>
                      <p v-if="item.description_3">{{ item.description_3 }}</p>
                      <p v-if="item.description_4">{{ item.description_4 }}</p>
                      <p v-if="item.description_5">{{ item.description_5 }}</p>
                    </div>
                  </div>
                  <template v-if="item.pr_completed">
                    <!-- <div class="v-phases__inner__content__analytics">
                      <div class="container">
                        <div class="v-phases__inner__content__analytics_data orange_bg">
                          <p class="v-phases__inner__content__analytics_data__value">{{ item.pr_completed }}</p>
                          <hr />
                          <h3 class="v-phases__inner__content__analytics_data__title">{{ item.title_1 }}</h3>
                        </div>
                        <div class="v-phases__inner__content__analytics_data blue_bg">
                          <p class="v-phases__inner__content__analytics_data__value">{{ item.months_completion }}</p>
                          <hr />
                          <h3 class="v-phases__inner__content__analytics_data__title">{{ item.title_2 }}</h3>
                        </div>
                        <div class="v-phases__inner__content__analytics_data green_bg">
                          <p class="v-phases__inner__content__analytics_data__value">{{ item.decimations }}</p>
                          <hr />
                          <h3 class="v-phases__inner__content__analytics_data__title">{{ item.title_3 }}</h3>
                        </div>
                      </div>
                    </div> -->
                  </template>
                  <template v-if="item.work_scope === true">
                    <div class="v-phases__inner__content__scope">
                      <h3>Work Scope</h3>
                      <template v-for="project of item.work_scope_items">
                        <div class="v-phases__inner__content__scope_single">
                          <div class="v-phases__inner__content__scope_single_list"><img :src="project.icon" :alt="project.title" v-if="project.icon" /></div>
                          <div class="v-phases__inner__content__scope_single_text">
                            <h5>{{ project.title }}</h5>
                            <p>{{ project.descr }} <span v-if="project.descr_2">{{ project.descr_2 }}</span> <span v-if="project.descr_3">{{ project.descr_3 }}</span></p>
                          </div>
                        </div>
                      </template>
                    </div>
                  </template>
                </template>
              </div>
            </div>
          </div>
        </v-tab>
      </vue-tabs>
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import {VueTabs, VTab} from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import BlocksChessCommon from "~/components/Common/BlocksChessCommon";
export default {
  components: {
    SpotAInternal,
    VueTabs,
    VTab,
    BlocksChessCommon
  },
  data() {
    return {
      phase: 'Launch',
      chess_list: [
        {
          text_direction: "text_left",
          single_title: "Origin Story",
          single_descr: "The PKT blockchain, along with the PacketCrypto proof-of-work was launched on August 20, 2019 by PKT lead dev, and cjdns inventor, Caleb James DeLisle. The PKT project was designed as a financial incentive to scale the cjdns mesh network. The launch as a proof-of-work enabled a fair distribution of the currency. Five years later on August 21, 2024, PKT changed to a token project on Coinbase’s Layer-2 Base blockchain that uses a Stake-to-Earn model to align with its core objective of offering financial incentive to scale the cjdns mesh network. This change expands PKT utility by empowering people to run the network’s infrastructure and stake PKT to earn rewards, instead of proof-of-work mining.",
          single_url: "/cjdns",
          single_link: "Learn more",
          external: false,
          single_img: "/img/roadmap-introduction-origib-story.webp",
        },
        {
          text_direction: "text_right",
          single_title: "Cjdns: Routing Protocol",
          single_descr: "Cjdns uses a novel routing protocol called Compact Source Routing. Compact Source Routing enhances network efficiency by including the directions that data must travel across the network, instead of relying on the IP address of the destination. This approach optimizes network performance and facilitates faster and more secure communication.",
          single_url: "/cjdns",
          external: false,
          single_link: "Learn more",
          single_img: "/img/roadmap-introduction-cjdns.webp",
        }
      ],
      phases_list: [
        {
          title: "Launch",
          img_url: "/img/roadmap-icon-launch.webp",
          number: "01"
        },
        {
          title: "Utility",
          img_url: "/img/roadmap-icon-utility.webp",
          number: "02"
        },
        {
          title: "Scale",
          img_url: "/img/roadmap-icon-scale.webp",
          number: "03"
        },
        {
          title: "Innovate",
          img_url: "/img/roadmap-icon-innovate.webp",
          number: "04"
        },
      ],
      phases_content: [
        {
          number: "01",
          title: "Launch",
          description: "The PKT project evolved from the cjdns mesh networking project, which was created by Caleb James DeLisle circa 2011.  The PKT project was designed as a financial incentive to scale the cjdns mesh network. Caleb created the PacketCrypt proof-of-work in 2019 to provide the economic incentive through mining. Proof-of-work is also known to be the fairest and most transparent way to publicly launch a cryptocurrency and build community. The PKT blockchain mainnet went live on August 20, 2019 (Paris Time).",
          description_2: "The Launch era focused on establishing PKT’s decentralized infrastructure and distributing the coin supply by unifying around PacketCrypt’s bandwidth-hard mining algorithm. Major developments during this era included building multiple PKT wallets, launching the PKT block explorer, the PKT.Cash website, an OTC trading app, and funding the first projects via the Network Steward.",
          title_1: "Projects Completed",
          title_2: "Months of Phase",
          title_3: "Decimations",
          pr_completed: "15",
          months_completion: "20",
          decimations: "6",
          work_scope: true,
          work_scope_items: [
            {
              icon: "/img/roadmap/packetcrypt-bandwidth-hard-proof-of-work.webp",
              title: "PacketCrypt Bandwidth-Hard-Proof-of-Work",
              descr: "PacketCrypt was the proof-of-work for the initial PKT blockchain. It was specifically designed to fairly distribute the PKT coin supply and economically incentivize people to connect their internet bandwidth to power the network. PKT mining yields were directly tied to each miner’s bandwidth and CPU power. PacketCrypt mining enabled a fair distribution of the PKT coin supply.",
            },
            {
              icon: "/img/roadmap/pkt-cash-cryptocurrency.webp",
              title: "PKT Cash Cryptocurrency",
              descr: "PKT Cash is the native cryptocurrency of the PKT project. The inception of PKT Cash is rooted in the belief that access to the fast and censorship-resistant PKT Network should be universal. This vision is what has galvanized the growing PKT community to own and operate the peer-to-peer supported PKT network. On August 21, 2024, PKT Cash converted to a token on the Base blockchain. Holders of PacketCrypt mined coins became eligible to receive a 1:1 airdrop of the PKT token on Base. The airdrop releases in 3 stages that are 6 months apart. In each stage, every PKT holder is eligible to redeem ⅓ of their coins.",
            },
            {
              icon: "/img/roadmap/pkt-command-line-wallet.webp",
              title: "PKT Command Line Wallet",
              descr: "The PKT Command Line Wallet (CLI) was developed as the first wallet for interacting with the PKT blockchain. Its creation was driven by the necessity for a secure, efficient, and versatile wallet that could receive, send, and mine PKT. The CLI wallet could be installed and operated from a command line or terminal instance. It was also the foundational core for many graphical interface wallets.",
            },
            {
              icon: "/img/roadmap/mainnet-launch.webp",
              title: "Mainnet Launch",
              descr: "The mainnet launch on August 20, 2019 (Paris Time) marked the inception of the PKT blockchain. The mainnet launch was announced publicly as a fair mine, with no pre-mine, no founder shares, no team shares and no investors. By design, the PKT blockchain was built as an open source, decentralized blockchain project built on Bitcoin’s btcd code base. It replaced Bitcoin’s SHA-256 proof-of-work with PacketCrypt. The other key changes to the Bitcoin codebase were a 60 second block time and the addition of the Network Steward. The Network Steward is a wallet address that received 20% of every mined block, as a self-funding mechanism for network development. The Network Steward is still part of PKT, and its treasury still accumulates 20% of the daily yields.",
            },
            {
              icon: "/img/roadmap/pkt-cash-website.webp",
              title: "PKT.Cash Website",
              descr: "The first www.pkt.cash website was built as a community-powered informational site about the PKT project. Contributors to the project still build and suggest pages to be added to the website.  As an information hub, the website supports the growing PKT community as a platform for education, engagement, and collaboration within the PKT ecosystem.",
            },
            {
              icon: "/img/roadmap/pkt-block-explorer.webp",
              title: "PKT Block Explorer",
              descr: "The PKT block explorer was developed as one of the first Network Steward funded projects. It offered transparency and accessibility into the PKT Network's blockchain activities and was created as a user-friendly tool to foster trust and engagement within the community. The block explorer enabled users to easily track transactions, wallet balances, and network statistics. Now that PKT is on Base, it uses basescan.org.",
            },
            {
              icon: "/img/roadmap/gridfinity-pkt-mining-pool.webp",
              title: "Gridfinity PKT Mining Pool",
              descr: "The Gridfinity PKT Mining Pool emerged as one of the first community-operated PKT mining pools. Gridfinity was a pioneer in the early days of the PKT blockchain. The Gridfinity team also contributed resources to simplify wallet setup for new PKT miners interested in mining PacketCrypt.",
            },
            {
              icon: "/img/roadmap/gridnode.webp",
              title: "Gridnode",
              descr: "Gridfinity sold the first consumer hardware device to mine PKT, called a Gridnode. The Gridnode was designed to minimize the complexities and technical barriers associated with setting up a PKT node for mining. Each Gridnode had a hardware wallet and began mining PKT as soon as plugged in, making PKT mining accessible globally. Its creation marked a significant step towards democratizing the PKT Network, enabling more users to benefit from and contribute to its decentralized infrastructure.",
            },
            {
              icon: "/img/roadmap/pkt-cash-website.webp",
              title: "PKT Yellowpaper",
              descr: "The PKT yellowpaper outlined the technical specifications of the PacketCrypt proof-of-work. The paper was co-authored by blockchain architect Caleb James DeLisle and mathematician Vishnu Seesahai, who are both leading technologists and thinkers within the PKT community. The PacketCrypt proof-of-work was a cornerstone for developers, contributors, and enthusiasts to understand, develop, and innovate within the PKT ecosystem.",
            },
            {
              icon: "/img/roadmap/pkt-pool-dashboard.webp",
              title: "PKT Network Whitepaper",
              descr: "The PKT whitepaper is the seminal document articulating the vision, architecture, and economic model of the PKT Network. Crafted by founding community members Caleb James DeLisle and Jesse Berger, this whitepaper lays out the vision and aspirations of creating a decentralized network infrastructure powered by mesh networking and blockchain incentives. It provides a detailed blueprint for how the PKT Network aims to incentivize bandwidth sharing and serves as a manifesto for the new era of internet freedom and accessibility. The PKT Network whitepaper was updated on August 21, 2024 to coincide with PKT’s launch on Base.",
            },
            {
              icon: "/img/roadmap/pkt-electrum-wallet.webp",
              title: "PKT Electrum Wallet",
              descr: "The PKT Electrum Wallet was developed as a Network Steward-funded proposal to create a lightweight, secure, and user-friendly wallet for managing PKT Cash. Designed as a fork of Bitcoin’s electrum, the wallet mirrors the ethos of PKT, prioritizing decentralization and security. However, the wallet does not operate as a mining wallet. PKT Electrum has numerous features such as a 12-word seed, the ability to label wallet addresses and ease of managing PKT.",
            },
            {
              icon: "/img/roadmap/zulu-wallet.webp",
              title: "Zulu Wallet",
              descr: "Zulu wallet was developed as a Network Steward-funded proposal. It emerged from the necessity for a versatile and user-friendly graphical interface wallet that allowed PKT mining. It also addressed the needs of early PKT miners who needed to recover mining wallets that used the early hex seeds. The Zulu wallet was only maintained for 2 years and is no longer recommended for use.",
            },
            {
              icon: "/img/roadmap/community-launch.webp",
              title: "Community Launch",
              descr: "The PKT community launch was a Network Steward-funded, team-driven project. It was orchestrated by a collective of passionate people who all contributed their mind share and consistent effort to create the social and web-based foundation of the project. This launch included publishing articles, explanation videos, influencer reviews, social content creation, and community management efforts emphasizing collaboration and open-source principles. This set the stage for the initial awareness, growth and development of the ecosystem.",
            },
            {
              icon: "/img/roadmap/otc-trading-room.webp",
              title: "OTC Trading Chat",
              descr: "The OTC (Over-The-Counter) trading chat is a telegram chat that was launched by community members to enable peer-to-peer trading prior to PKT listing on any exchanges. This initiative included software development to track price and build an order book for matching buyers and sellers. The OTC trading chat embodies the decentralized spirit of the PKT project and is still accessible via Telegram.",
            },
            {
              icon: "/img/roadmap/mining-pool-software-update.webp",
              title: "Mining Pool Software Update",
              descr: "The mining pool software update was released as improvements that resulted in a significant reduction in the time it takes to compute proof trees associated with block mining. With this update, in most observed cases, the tree is complete before the next block arrives. This helped pools ensure there is almost no time spent not mining. As of August 2024, with PKT’s move to Base and new focus on Stake-to-Earn, PKT mining is no longer applicable to the project.",
            },
            {
              title: "Pkteer Pool",
              descr: "The Pkteer pool was established in 2021 as a competitive mining pool in the PKT ecosystem. Its focus was to deliver high yields to announcement miners, incentivize infrastructure expansion of the network and to create inclusive and accessible mining for the PKT Network. Pkteer Pool assisted other competitive pools to start up. Aimed at democratizing the mining process, it enabled miners with varying levels of technical expertise and hardware to contribute to and benefit from the network's growth. As of August 2024, with PKT’s move to Base and new focus on Stake-to-Earn, PKT mining is no longer applicable to the project.",
            },
            {
              title: "PKT World Pool",
              descr: "The PKT World pool was launched in 2021 to compete for mining rewards and offer miners alternative mining pool choices. The PKT World pool launched with an open paymaker so miners could review miner share payouts via a transparent mining experience. The PKT World pool ethos was to ensure stability of the PKT blockchain and promote equitable rewards distribution. The PKT World pool promotes itself as an inclusive and supportive PKT mining pool. As of August 2024, with PKT’s move to Base and new focus on Stake-to-Earn, PKT mining is no longer applicable to the project.",
            },
            {
              title: "PKT World Block Explorer",
              descr: "The PKT World pool built a PKT block explorer as an essential tool for enhancing transparency on the PKT blockchain. The PKT World block explorer was the first platform to display PKT mining pool winning percentages. This provided the PKT community visibility into which pools were winning what percentage of the blocks. The PKT World block explorer also enabled miners to enter their PKT wallet address to track their mining yields and PKT pool payouts. The PKT World block explorer reflects PKT World’s commitment to transparency. It provided a valuable resource for users to navigate the PKT blockchain and gain a deeper understanding of the blockchain’s functionality.",
            },
            {
              title: "PKT Pool",
              descr: "PKT Pool launched its competitive mining pool in 2021. Initially powered with substantial infrastructure, PKT Pool offered PKT miners increased yields based on its winning percentage. PKT Pool operated using an open paymaker, allowing miners to transparently view miner share payouts. As of August 2024, with PKT’s move to Base and new focus on Stake-to-Earn, PKT mining is no longer applicable to the project.",
            },
            {
              title: "PKT Pool Dashboard",
              descr: "PKT Pool launched a block explorer and custom dashboard for the PKT blockchain. This user-friendly interface included several compelling features, including a node explorer. The node explorer provided a visual representation of the PKT blockchain and its associated wallet addresses. The PKT Pool dashboard also provided comprehensive insights into mining performance, earnings, and network status. The PKT Pool dashboard is no longer accessible.",
            },
            {
              title: "Zetahash Pool",
              descr: "The first iteration of the competitive Zetahash pool began in 2021. Powered by substantial processing power and high throughput bandwidth, Zetahash was a force within the PKT blockchain ecosystem. Zetahash used numerous proprietary techniques to achieve high win rates without providing a publicly available paymaker. Zetahash also used a variable miner-share to reward miners that follow its recommended mining settings and prioritize Zetahash in their mining pool order. Zetahash offered alternative mining end points that favored miners with lower bandwidth or higher bandwidth. This versatility was beneficial so that miners on lower throughput residential connections are able to participate. As of August 2024, with PKT’s move to Base and new focus on Stake-to-Earn, PKT mining is no longer applicable to the project.",
            },
            {
              title: "Minr",
              descr: "Minr is an app built by PKT Watch to streamline and enhance the PKT mining process. Recognizing the complexities and technical challenges faced by PKT miners, Minr was developed as an easy solution to provide a more intuitive and efficient mining experience. This app was designed with the goal of making mining accessible to a wider audience for a broader token distribution. Thereby it provided a user-friendly mining interface that was accessible from both Windows, MacOS and Linux operating systems. The interface enabled miners to control their PKT pool configuration, change CPU allocation, and choose which wallet address to mine into. As of August 2024, with PKT’s move to Base and new focus on Stake-to-Earn, PKT mining is no longer applicable to the project.",
            },
            {
              title: "PKT World Wallet",
              descr: "The PKT World wallet is a desktop wallet for Windows, MacOS, and Linux. The PKT World wallet included fast sync technology, which is useful when recovering seeds from legacy wallets or mining wallets that have a lot of transactions. The PKT World wallet can sync 12-word and 15-word seeds, as well as hex seeds used by legacy wallets. The PKT World wallet also used built-in PKT mining capabilities for increased coin distribution. Users could choose how many CPU cores to allocate and can mine directly into a wallet address.",
            },
            {
              title: "Anode iOS Wallet",
              descr: "The Anode iOS Wallet was developed to meet the growing demand among PKT users for a mobile PKT wallet on iPhone. The Anode iOS wallet was built to expand PKT utility and accessibility, including a future integration with PKT VPN.",
            },
            {
              title: "PKT Cube",
              descr: "The PKT Cube was developed by community-member company Routie. The PKT Cubes were designed as the first Edge Point nodes in the PKT Network (as referenced per the PKT Network Whitepaper). These devices functioned as turnkey, dedicated PKT mining devices, without requiring any software installation and run a proprietary operating system called PkteerOS. PkteerOS was designed to push new software features as development of the project continues. The device also uses PKT Network for connectivity and has a wifi chip, so it can do wifi sharing as the PKT technology evolves. The PKT Cube now supports PKT’s new Stake-to-Earn utility and provides infrastructure to the PKT Network.",
            },
            {
              title: "WPKT - Binance Smart Chain",
              descr: "WPKT was an integration with Binance Smart Chain (BSC). It strategically bridged PKT in the ecosystem of EVM (Ethereum Virtual Machine) and the broader ecosystem of decentralized finance (DeFi). Recognizing the opportunity to connect to BSC's efficient, low-cost transaction environment and expansive user base, the creation of WPKT on BSC aimed to enhance liquidity, accessibility, and utility for PKT holders. Now that PKT is on Base, the use case for WPKT is being reimagined.",
            },
            {
              title: "ODapp Bridge",
              descr: "ODapp is a bridge that enables people to swap PKT into WPKT and WPKT into PKT. The ODapp bridge provides seamless interoperability between BSC and PKT. The bridge was developed as a decentralized application dApp. This innovation represents a strategic move enabling users to effortlessly move assets between the PKT proof-of-work network and BSC, thereby expanding the utility and reach of PKT. Now that PKT is on BASE, the use case for WPKT is being reimagined.",
            },
            {
              title: "PKT Watch Website",
              descr: "PKT Watch is a community-member operated website that serves as a comprehensive resource for the PKT Network. PKT Watch features several modules, tools and services for monitoring the PKT ecosystem. These include a mining calculator, which computes projected mining yields based on different hardware CPUs. Decimation Tracking, which provides a real-time countdown until the next decimation. PKT Documentation is a repository for documentation relating to the PKT project. There are also links to unique apps developed by PKT Watch for the PKT ecosystem, including the mining app Minr, the wallet tracking app Watchr, and the blockchain explorer Packetscan.io.",
            },
            {
              title: "Exchange Listings",
              descr: "The community created a listing support team to help onboard PKT into exchanges. Since PKT is a fully decentralized project, the effort to list PKT requires a community effort and investment. The team has overseen exchange integrations and ensured that exchanges listing PKT get the technical and documentation support they need. Exchange listings enhance the visibility of the PKT project, thereby supporting the growth and adoption of the PKT Network.",
            }
          ]
        },
        {
          number: "02",
          title: "Utility",
          description: "The Utility era of PKT focused on the shift of PKT from its proof-of-work roots in 2019 to its relaunch on Base in August 2024 and expanding utility and growing the network. This relaunch required smart contracts to be built that power the Stake-to-Earn technology, as well as creating apps and services so people can use the PKT Network.",
          description_2: "When PKT first went live during the Launch era, the early focus was on mining PKT. The Utility era is a period of hyper growth of the network infrastructure, with a focus on incentivizing the expansion and utility of the PKT Network.",
          description_3: "The Utility era also saw the launch of many new community-run apps and services. These included the launch of the Stake-to-Earn smart contracts, new liquidity pool on Uniswap, as well incentive for scaling infrastructure such as cjdns nodes, PKT VPN, PKT Domains, PKT Nameservers the Route Servers for processing network traffic. The Utility era is the beginning of the network’s real-world utility, setting the stages for bigger developments in the future Scale and Innovate eras.",
          title_1: "Projects Completed",
          title_2: "Months of Phase",
          title_3: "Decimations",
          pr_completed: "18",
          months_completion: "18",
          decimations: "5",
          work_scope: true,
          work_scope_items: [
            {
              icon: "/img/roadmap/route-server.webp",
              title: "PKT Stake to Earn",
              descr: "As of August 21, 2024, PKT moved to Coinbase’s Layer-2 blockchain called Base. Instead of proof-of-work mining, now Pkteers must stake PKT and pair it with infrastructure that powers the PKT Network in order to earn PKT rewards. By incentivizing Pkteers to stake infrastructure to earn, this motivates the growth of the network and creates utility for the PKT token.",
              descr_2: "Over 80% of the 6B total supply of PKT were fairly distributed during the Launch era. Pkteers who own PKT can redeem PKT on the BASE chain 1:1. To redeem, follow the airdrop process here. Pkteers can redeem ⅓ of their holdings immediately. Subsequently, ⅓ can be redeemed on February 21, 2025. The final ⅓ can be redeemed on August 21, 2025.",
              descr_3: "Pkteers can stake-to-earn their PKT by connecting their wallet to the PKT.Cash website dashboard and following the instructions to stake into the lockbox. Upon launch, anyone can stake PKT. On October 26, 2024, with the debut of Infrastructure Day, Pkteers must register one or more infrastructure node types with their staked PKT. Yields will be determined based on staking different types of infrastructure node(s), as well as the amount of PKT staked per node. Each infrastructure node type has different criteria requirements to stake and earn different yield percentages. Yields are diluted based on the quantity of each type of node. There is no limit to how many of each node type that can be staked." 
            },
            {
              icon: "/img/roadmap/pkt-vpn.webp",
              title: "PKT Liquidity Pool",
              descr: "Pkteers are incentivized to stake into the PKT/ETH liquidity pool on Uniswap. Upon staking into the PKT/ETH liquidity pool on Uniswap, Pkteers will receive LP tokens. These tokens represent the amount of PKT and ETH placed into the PKT liquidity pool as well as the percentage of the pool yields. Pkteers can subsequently choose to stake their LP tokens into the lockbox contract on the PKT.Cash dashboard and earn PKT yields. Additionally, for the first 365 days after launch of the Liquidity Pool, a daily bonus of 1 million PKT will be paid to liquidity pool providers, on a proportional basis. The daily bonus is paid in addition to the liquidity pool yields and LP Staking yields.",
            },
            {
              icon: "/img/roadmap/pkt-vpn-android-app.webp",
              title: "Infrastructure Day",
              descr: "Between August 21, 2024 and October 25, 2024 anyone can Stake-to-Earn PKT. On October 26, 2024 with the debut of Infrastructure Day, Pkteers will be required to pair their staked PKT to one or more infrastructure node types. Yields will be based on staking different types of infrastructure nodes, as well as the amount of PKT staked per node. Each infrastructure node type will have a different yield percentage and a maximum amount of PKT that can be staked. Yields will be divided by the number of nodes within each node type. There is no limit to how many of each node type can be staked.",
            },
            {
              icon: "/img/roadmap/pkteer-pool.webp",
              title: "Cjdns Node",
              descr: "Cjdns nodes create a mass propagation of the PKT Network and ensure there are more end-to-end encrypted routing hops around the world. Pkteers are able to stake PKT and pair to a cjdns node to generate PKT yields. A cjdns node can be assigned up to $5,000 worth of yield credits, with each yield credit being valued at 1 PKT. 40% of all yields go to cjdns nodes. Cjdns nodes must have an open port and public peering credentials, so anyone can connect. Every cjdns node is tested, and if the node is found to be in a non-functional state, the node will lose yields for a week. If a node fails 4 weeks in a row, it will be removed from the roster and when it comes back online it will be capped at $5,000 worth of yield credits based on the value at the time it comes back. In order to incentivise geographical distribution of nodes, cjdns nodes will get a bonus if they are on IP address blocks, or ISPs that have few other cjdns nodes. Cjdns nodes are also economically incentivized based on uptime.",
            },
            {
              icon: "/img/roadmap/pkt-world-pool.webp",
              title: "PKT VPN",
              descr: "Anodium VPN was developed as a Network Steward-funded project. It enables users to get a base-line VPN for free and have the option to pay for faster speed using PKT Cash. PKT VPN leverages cjdns exit nodes for VPN access points. The VPN server enables community members to create VPN exits, become listed as inventory on the app, and earn PKT when users pay for connectivity. The VPN servers allow inbound connections, provide a virtual IP address, and route traffic.",
            },
            {
              title: "PKT VPN - Android App",
              descr: "Using PKT’s open-source PKT VPN technology, a user-ready Android app has been developed by community-member company Anode, which combines PKT VPN with a mobile PKT wallet. The PKT VPN app is built to evolve as a gateway to the PKT Network. Users have access to free VPN service and pay for high speed VPN access. The app is designed to eventually combine with a browser to expand accessibility of resources and services built in the PKT Network.",
            },
            {
              title: "PKT VPN Exit Nodes",
              descr: "Pkteers can stake their PKT as a VPN exit node to generate yields. 30% of all yields go to VPN Exits which provide internet access to people in the PKT Network. A VPN Exit can be assigned up to $5,000 worth of yield credits, with each yield credit being valued at 1 PKT. Regular testing rules are the same as cjdns nodes. Geographical distribution bonuses and uptime multipliers are exactly the same as for a cjdns node. A cjdns node and a VPN exit are considered distinct entities, even if running on the same IP address, so configuring a device as both a cjdns node and a VPN exit will allow it to be assigned and yield off of $10,000 worth of yield credits.",
            },
            {
              title: "PKT DNS",
              descr: "PKT is developing a DNS (Domain Name System) that leverages the PKT Network to map domain names to cjdns IP addresses. This setup will ensure that DNS requests are secure, private, and resistant to censorship. As more Pkteers own domains that start with PKT and end with different extensions (i.e. pkt.net, pkt.cash, pkt.ai, etc), and by distributing DNS services across multiple nodes, the PKT Network can ensure that web address lookups are efficient, resilient to attacks, and free from centralized control. This embodies the network's ethos of decentralization and privacy.",
            },
            {
              title: "PKT Domain Nodes",
              descr: "Pkteers can stake PKT and pair with PKT domains. 15% of all yields go to holders of PKT domains. A PKT domain must be pkt.<any TLD> (for example pkt.com or pkt.us). There is no limit to how many yield credits can be assigned to one domain, but there is a severe constraint on pkt domains because there is only one possible pkt domain per top level domain. Domains are tested to verify that they are resolving to registered and functioning Nameservers. In order to encourage jurisdictional diversity of domains, domains will get a yield bonus if they are registered with different registrars, different TLD operators, and in different countries.",
            },
            {
              title: "PKT Nameserver Nodes",
              descr: "Pkteers can stake PKT and pair it with a Nameserver node. 10% of all yields go to operators of Nameservers. There is no limit to the number of yield credits that can be assigned to one nameserver, but it is required to stake a pkt domain in order to run a nameserver node. Every nameserver must serve the entire PKT decentralized zone for every registered domain. Every nameserver must publish, no less than hourly, a DNSSEC signed zone file for their pkt domain such that other nameservers can correctly serve it as DNSSEC. Every nameserver must pull from all other nameservers the DNSSEC signed zone files for their relevant pkt domains and serve them as well. Geographical distribution bonuses are exactly the same as for a cjdns node, however there are no uptime multipliers, ANY observed downtime for a nameserver will cause loss of all yields for that week.",
            },
            {
              title: "Cjdns Route Server",
              descr: "The Route Server bridges cjdns and PKT Network to optimize internet traffic. Pkteers can stake PKT and pair it with a Route Server node. 5% of all yields go to the operators of Route Servers. Each Route Server has a prerequisite of running a nameserver node, and thus a PKT domain node, as well. Every route server must be correctly and continuously operational and up to date. Any significant downtime or misbehavior of a route server will result in loss of yields for that week. The Route Server works as a special broadcasting protocol designed to enhance the interoperability between cjdns's encrypted mesh network and the PKT Network. This is used for powering decentralized VPN services and connectivity. The high performance of the Route Server is fundamental to routing traffic through the PKT Network and connecting to the traditional internet.",
            },
            {
              title: "PKT Voter App",
              descr: "PKT Voter was developed as a graphical interface for Electorium, which enables PKT wallet holders to vote proof-of-stake. This application is now built into the PKT staking dashboard and facilitates the voting process. PKT holders can vote the balance of their wallet stake. PKT Voting underscores the community's commitment to democratic principles, decentralized governance and ensures that the development and allocation of resources within the PKT Network are aligned with the will of the majority of the voters. This project is complete.",
            }
          ]
        },
        {
          number: "03",
          title: "Scale",
          description: "The Scale era of the PKT Network marks a significant leap towards enhancing the network's growth and utility. This period focuses on ease of access to the network, broadening payment options for users and website owners, and introducing tokenization of real world assets (RWAs), such as bandwidth leases, via TokenStrike.",
          description_2: "A primary aim during the Scale era is to simplify the process for both technical and non-technical users to set up functional websites and applications on the PKT Network. This includes straightforward access to web hosting and the use of reverse VPN services so websites are available through mainstream web browsers like Google Chrome and Safari. Since the PKT Network is accessible via VPN, making PKT VPN functional across all operating systems is a priority for the Scale era. As the number of websites built in PKT Network increases, enhancing search engine capabilities and integrated wallet functionality will grow in importance.",
          description_3: "This Scale era also aims to make the internet globally accessible by mesh networking; bypassing traditional ISP geofencing. It's important that non-technical users and local governments can easily set up hardware antennas for internet sharing. This functionality is already possible, but there is a need for a free, user-friendly app interface to facilitate it.",
          description_4: "The Scale era will expand the PKT blockchain’s payment utility and the use of smart contracts. Most notably with the transition to Base, PKT Lightning can now leverage low cost, near-instant payment processing for handling multi-currency ledgers. TokenStrike is designed to foster the development of new tokens and the use of decentralized exchanges for token trading and swapping within the PKT ecosystem. This approach will support both fungible and non-fungible tokens, such as for bandwidth leasing.",
          title_1: "Projects Completed",
          title_2: "Months of Phase",
          title_3: "Decimations",
          pr_completed: "5",
          months_completion: "6",
          decimations: "3",
          work_scope: true,
          work_scope_items: [
            {
              icon: "/img/roadmap/wifi-sharing-hardware.webp",
              title: "PKT Website Builder",
              descr: "The PKT website builder is designed to simplify the web development process in the PKT Network. Using a user-friendly website building tools aim to lower the barriers to entry to receive an IPv6 web URL and create a peer-to-peer hosted website using cjdns. Cjdns websites populate and expand the PKT Network. Recognizing the challenge that non-technical users face in the digital space, the PKT website building enables users to launch a censorship-resistant wordpress website in the PKT Network. This project is complete.",
            },
            {
              icon: "/img/roadmap/governance-system-update.webp",
              title: "PKT Network Web Hosting",
              descr: "A web hosting platform is being built to further simplify setting up cjdns websites in the PKT Network. This web hosting platform will enable users to rent a virtual private server (VPS) with Wordpress pre-installed. Users will be able to pay using PK Cash for the VPS. Users will also be able to choose if the website is only accessible peer-to-peer within the PKT Network, or uses a reverse VPN so the website is accessible from traditional web browsers. Leveraging the PKT blockchain's infrastructure, this PKT Network web hosting offers an alternative to traditional web hosting services, ensuring greater resilience, privacy and security. By decentralizing the hosting process, PKT Network Web Hosting empowers users to maintain control over their online presence while contributing to the growth and decentralization of the PKT ecosystem. This project is under active development.",
            },
            {
              icon: "/img/roadmap/network-steward-voting-app.webp",
              title: "Paid VPN",
              descr: "PKT VPN is designed as a free, decentralized VPN service that operates within the PKT Network. Paid VPN has been successfully demo’d and enables users to pay for faster VPN speeds. Instead of a subscription-based model, Paid VPN offers users premium VPN services on a pay-per-use basis. The value exchange occurs between the user and the VPN exit provider. Phase 1 is completed. Phase 2 of implementing Paid VPN into PKT VPN for public use is under-development.",
            },
            {
              icon: "/img/roadmap/yunohost-website-builder.webp",
              title: "PKT Pay",
              descr: "PKT Pay is a tool being developed to be a streamlined, multi-currency payment solution within the PKT ecosystem. Since websites built in the PKT Network can use their IPv6 web URL as a PKT payment address, there is a need for seamless transactions between users, merchants, and service providers. PKT Pay is aimed to be a user-friendly payment gateway that enhances the usability and adoption of PKT Cash. Merchants using PKT Pay will be able to accept payment for goods and services in various different cryptocurrencies, such as Bitcoin, or Ethereum, or fiat currency, such as a credit card. This project is currently in a research phase.",
            },
            {
              icon: "/img/roadmap/pkt-network-web-hosting.webp",
              title: "PKT VPN Desktop App",
              descr: "PKT VPN was initially developed as a free-to-use Android app, with an integrated PKT wallet. To expand PKT VPN’s utility and usability, it is now being developed as a desktop app for Windows and MacOS operating systems. Initially this desktop app will only feature PKT VPN, with no wallet. This desktop app can help expand user access to the PKT Network and increase utility of the network. This project is currently in a research phase.",
            },
            {
              icon: "/img/roadmap/paid-vpn.webp",
              title: "Wifi Sharing Hardware",
              descr: "In order to scale global internet sharing, the PKT Network needs compatible wifi hotspot hardware. Community member-company Routie.io has developed the first hardware antennas, called Edge Extenders. These antennas work as guest wifi access points. While Routie sells its antennas, this technology is open source so it can now be incorporated into third party hardware. This project is complete.",
            },
            {
              icon: "/img/roadmap/zulu-wallet.webp",
              title: "PKT RWA’s",
              descr: "Base supports NFT technology and smart contracts. Smart contract functionality is a key milestone in diversifying the utility of the PKT Network. This includes supporting DeFi, decentralized bandwidth trading marketplaces, RWAs (real world assets), colored coins, NFTs, and decentralized media distribution. This effectively fast tracking PKT’s vision for TokenStrike by making it possible to tokenize bandwidth leases. This integration aims to expand the capabilities of PKT, fostering innovation and enabling developers to build decentralized applications (dApps) that further drive adoption and diverse use cases for the PKT ecosystem. This project is currently in a research phase.",
            },
            {
              icon: "/img/roadmap/pkt-vpn-desktop-app.webp",
              title: "PKT Search",
              descr: "PKT Network is its own sovereign network within the larger internet. Websites built in the PKT Network are accessible peer-to-peer within the network, or can be reached from traditional web browsers using a reverse VPN service. PKT Network needs its own efficient search engine so users can search websites within the PKT ecosystem. This will offer users a reliable and decentralized method for discovering content and information within PKT’s decentralized web. This project is currently in a research phase.",
            },
            {
              icon: "/img/roadmap/exchange-listings.webp",
              title: "Wifi Access Point Hotspot Map",
              descr: "PKT Network wifi access points are distributed across the world. Creating a hotspot map will help visualize the distribution of network nodes and be a tool for users to locate nearby hotspots and network infrastructure. By showcasing the global distribution of PKT nodes, a hotspot map will provide valuable insights into the network's reach. This can also facilitate the expansion efforts for global wifi access points. This project is currently in a research phase.",
            },
            {
              icon: "/img/roadmap/stacks-integration.webp",
              title: "PKT Hub",
              descr: "PKT Network is built to support decentralized media distribution. PKT Hub is a decentralized media platform that is accessible through the PKT Network. PKT Hub enables media companies and content creators to host next gen library app/channels through which media content can be distributed. Netflix, Hulu and HBO are examples of legacy library apps. PKT Hub functions like Roku or Apple TV, but enables anyone to launch a library app/channels. Content can be accessible via subscription, or pay-per-view. Library app owners will not pay any platform fees. Library apps will have the ability to use traditional payment processing services, or PKT Pay. This project is currently in a research phase.",
            },
            {
              icon: "/img/roadmap/ordinals-integration.webp",
              title: "BIA",
              descr: "BIA is a streaming platform build on the PKT Network. It originated from the vision of creating a decentralized media platform within the PKT ecosystem. BIA will be available as a library app within PKT Hub. Designed to offer viewers access to a diverse range of content, including feature films, and TV shows, BIA provides a decentralized media alternative to traditional media distributors and platforms. By leveraging PKT's decentralized infrastructure and integrated payment rails, BIA pays it audience to support the network. Audience members can then use the income to cash-out, or pay for content. BIA will have no platform fees or distribution fees. This ensures all revenue is programmed to go back to the talent and investors that created the content. This project is currently in a research phase.",
            },
            {
              icon: "/img/roadmap/pkt-world-explorer.webp",
              title: "TokenStrike",
              descr: "TokenStrike has evolved to become PKT’s tokenization strategy for RWAs. (real world assets). This was originally conceived as a solution to enable multi-currency ledger functionality within the PKT ecosystem. Now that PKT has moved to Base, tokenization and smart contract functionality is built-in. TokenStrike will now focus on tokenizing and trading RWAs within the PKT ecosystem. This functionality is required so Edge Points can easily tokenize bandwidth and trade tokens in a decentralized bandwidth trading marketplace (PKT Dex). TokenStrike will empower users to tokenize assets, conduct cross-chain transactions, and unlock new possibilities for DeFi applications. TokenStrike development is currently in a research phase.",
            },
            {
              icon: "/img/roadmap/gridnode.webp",
              title: "Electorium - Network Steward Governance Update",
              descr: "Electorium is an update to the Network Steward governance system. Recognizing the importance of community input and governance, this update is being crafted to empower network participants with a more inclusive, responsive, and decentralized ecosystem. This new system will enable anyone to become a candidate when elected with over 50% of the electorate. Phase 1 enables anyone to vote by proof-of-stake, their staked balance. If a vote goes for someone who does not wish to be a candidate, their vote is delegated to whoever they vote for. If a candidate explicitly votes for themself, their vote is the same as indicating their candidacy. A new election for who becomes Network Steward is automatically held every 7 days. Phase 2 of Electorium will enable the winning candidate to automatically receive the NS blockchain payments to the winning wallet address. Phase 2 is planned for 2025. Phase 1 of this project is complete and is active.",
            }
          ]
        },
        {
          number: "04",
          title: "Innovate",
          description: "The Innovate era of PKT is the phase of expanding consumer applications that aim to replace traditional, centralized tools and services. This era is focused on enhancing the network's scalability, interoperability, and capacity for handling high volumes of transactions. It targets various areas including bandwidth markets, decentralized exchanges, content delivery networks, media distribution, social networks, and supply chain efficiencies.",
          description_2: "The Innovate era will also see the further emergence of Cloud ISPs, boosting the bandwidth market's dynamism and competitiveness. Users will have the opportunity to lease bandwidth guarantees, enabling internet service without relying on traditional ISPs. Improvements to cjdns compact source routing will enhance network resiliency and optimize between router performance and cost. Additionally, PKT will introduce bandwidth trading markets and tokenization that will help support content creators with the use of smart contracts and RWAs.",
          description_3: "Overall, the Innovate era will help PKT become one of the most open, high-performant, and versatile decentralized networks globally. This era aims to strengthen the network's infrastructure to enable media platforms to proliferate across the network.",
          work_scope: false,
        },
      ],
    };
  },
  head() {
    return {
      title: "Roadmap | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This roadmap provides an overview of the PKT ecosystem development, separated into four phases: Launch, Utility, Scale, and Innovate. Each phase defines an era of focus. Therefore, community developers and contributors have a guide for what tools, functionality and capabilities are needed and which relate to each era.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Roadmap | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'This roadmap provides an overview of the PKT ecosystem development, separated into four phases: Launch, Utility, Scale, and Innovate. Each phase defines an era of focus. Therefore, community developers and contributors have a guide for what tools, functionality and capabilities are needed and which relate to each era.'
        }
      ],
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
.v-roadmap {
  background-color:$black_blue;
  position:relative;
  overflow-y:hidden;
  &:before {
    content:'';
    background-image:url(/img/roadmap-layer-top.webp);
    position:absolute;
    top:0;
    right:0;
    width:rem(950);
    height:rem(1500);
    background-position:right top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-desktop-lg) {
      width:rem(750);
      height:rem(1200);
    }
    @include for-width(-laptop_small) {
      width:rem(500);
      height:rem(600);
    }
    @include for-width(-small-lg) {
      width:100%;
      height:rem(700);
      background-position:right -75px top;
    }
  }
  &:after {
    content:'';
    background-image:url(/img/roadmap-layer-bottom.webp);
    position:absolute;
    bottom:-10%;
    left:0;
    width:75%;
    height:80%;
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
    padding:rem(165) 0 rem(15);
    @include for-width(-small-lg) {
      padding:rem(100) 0 rem(32);
    }
  }
  & .v-tabs-nav {
    & .nav-tabs-navigation {
      & .nav-tabs {
        @extend %df;
        @extend %jcc;
        @extend %aic;
        width:100%;
        border-bottom:1px solid rgba(217,217,217,.3);
        @include for-width(-small-lg) {
          padding:0 rem(20);
          justify-content: space-between;
        }
        &:before,&:after {
          display:none;
        }
        & .tab {
          @extend %db;
          width:auto;
          @include for-width(-small-lg) {
            width:50%;
          }
          & .tabs__link {
            border:0;
            font-size: rem(16);
            line-height: rem(30);
            @extend %inter_semibold;
            color:$white_50;
            border-bottom:2px solid transparent;
            padding:rem(18) rem(28);
            border-radius:0;
            margin:0;
            &:hover {
              background:none;
              color:$white;
            }
            &.active_tab {
              color:$white;
              border-color:$green;
            }
          }
        }
      }
    }
    & .tab-content {
      & #p-Introduction {
        padding:rem(80) 0 rem(180);
        @include for-width(-small-lg) {
          padding:rem(45) 0 rem(140);
        }
      }
    }
    & .v-introduction__inner {
      @extend %dg;
      -ms-grid-columns: 38% 62%;
      grid-template-columns: 38% 62%;
      @include for-width(-tablet) {
        display:block;
      }
      &_left {
        & h2 {
          @extend %h2-common;
        }
      }
      &_right {
        padding-top:rem(50);
        @include for-width(-tablet) {
          padding-top:rem(35);
        }
        @include for-width(-small-lg) {
          padding-top:rem(16);
        }
        & p {
          @extend %p-big-common;
          margin-bottom:rem(25);
        }
      }
    }
    & .v-introduction__papers {
      padding:rem(115) 0;
      @extend %df;
      @extend %jcc;
      @extend %fw;
      @include for-width(-tablet) {
        padding:rem(95) 0;
      }
      @include for-width(-small-lg) {
        padding:rem(60) 0 rem(85);
        display:block;
      }
      &_single {
        margin:0 rem(20);
        border-radius:rem(20);
        padding:rem(13) rem(20) rem(20);
        @extend %t-center;
        width:rem(360);
        @include for-width(-tablet) {
          width:rem(320);
          margin:0 rem(10);
        }
        @include for-width(-small-lg) {
          width:100%;
          margin:rem(20) 0 0;
          padding:rem(15) rem(20) rem(30);
        }
        & p {
          @extend %p-common-bold;
          color:$black_blue;
        }
        & h4 {
          @extend %h3-common;
          color:$black_blue;
          margin:rem(10) 0 rem(20);
          @include for-width(-small-lg) {
            margin:rem(5) 0 rem(10);
          }
        }
      }
    }
    & .v-introduction__chess {
      & .c-chess-block {
        @include for-width(-small-lg) {
          margin-left:-15px;
          margin-right:-15px;
        }
        &_inner_single {
          padding-right:0;
          padding-left:0;
        }
        &_inner_single_img {
          & img {
            border-radius:rem(20);
          }
        }
      }
    }
    & .v-phases__inner {
      padding-bottom:rem(116);
      @include for-width(-laptop) {
        padding-bottom:rem(80);
      }
      &__navigation {
        @extend %dg;
          -ms-grid-columns: 1fr 1fr 1fr 1fr;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 0 rem(40);
          padding:rem(40) 0 rem(150);
          cursor:pointer;
          @include for-width(-laptop) {
            grid-gap: 0 rem(20);
            padding:rem(40) 0 rem(100);
          }
          @include for-width(-tablet) {
            -ms-grid-columns: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
            grid-gap: rem(40) rem(40);
          }
          @include for-width(-small-lg) {
            padding:rem(20) 0 rem(50);
            grid-gap: rem(20) rem(20);
          }
          & .c-phase {
            border-radius:rem(20);
            padding:rem(30) rem(40);
            background-color:$black_blue_light;
            @include for-width(-small-lg) {
              padding:rem(10) rem(20) rem(15);
            }
            &:hover {
              background-color:$main_blue_light;
            }
            &:focus {
              background-color:$main_blue_light;
            }
            &__title {
              @extend %p-big-common-bold;
               @include for-width(-small-lg) {
                 text-align:center;
               }
            }
            &__img {
              display:block;
              width:auto;
              height:rem(108);
              margin:rem(20) auto rem(10);
              object-fit:contain;
              object-position:center;
              @include for-width(-small-lg) {
                height:rem(65);
                margin:rem(5) auto rem(15);
              }
            }
            &__number {
              position:relative;
              @extend %p-big-common;
              &:before {
                content:'';
                position:relative;
                width:rem(10);
                height:rem(10);
                border-radius:rem(50);
                margin-right:rem(20);
                display:inline-block;
                vertical-align:middle;
                background-color:$white;
              }
            }
          }
          & #Utility {
            & .c-phase__number {
              &:before {
                background-color:#0DA6E7;
              }
            }
          }
          & #Scale {
            & .c-phase__number {
              &:before {
                background-color:#00B187;
              }
            }
          }
          & #Innovate {
            & .c-phase__number {
              &:before {
                background-color:#F9882F;
              }
            }
          }
      }
      &__content {
        &__main {
          @extend %dg;
          -ms-grid-columns: 35% 65%;
          grid-template-columns: 35% 65%;
          @include for-width(-tablet) {
            display:block;
          }
          &_left {
            & h3 {
              @extend %h3-common;
              @include for-width(-tablet) {
                padding-bottom:rem(16);
              }
            }
          }
          &_right {
            & p {
              @extend %p-big-common;
              margin-bottom:rem(16);
              &:last-child {
                margin-bottom:0;
              }
            }
          }
        }
        &__analytics {
          padding:rem(135) 0 rem(130);
          @include for-width(-tablet) {
            padding:rem(100) 0;
            margin-left:-25px;
            margin-right:-25px;
          }
          @include for-width(-small-lg) {
            padding:rem(85) 0;
          }
          & .container {
            @extend %dg;
            -ms-grid-columns: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 0 rem(40);
            @include for-width(-small-lg) {
              -ms-grid-columns: 1fr;
              grid-template-columns: 1fr;
              grid-gap: rem(20) 0;
            }
          }
          &_data {
            border-radius: rem(20);
            padding:rem(30);
            @extend %t-center;
            &__value {
              color:$black_blue;
              @extend %h2-common;
              @include for-width(-tablet-lg) {
                font-size: rem(36);
                line-height: rem(46);
              }
              @include for-width(-small-lg) {
                font-size: rem(30);
                line-height: rem(36);
              }
            }
            & hr {
              background-color:$black_blue;
              border:0;
              width:rem(120);
              height:rem(1);
              padding:0;
              margin:rem(20) auto rem(23);
              @include for-width(-small-lg) {
                display:none;
              }
            }
            &__title {
              color:$black_blue;
              font-size: rem(16);
              line-height: rem(24);
              @extend %inter_semibold;
            }
          }
        }
        &__scope {
          padding-top:rem(120);
          & h3 {
            @extend %h3-common;
            margin-bottom:rem(26);
            @include for-width(-small-lg) {
              margin-bottom:rem(20);
            }
          }
          &_single {
            @extend %dg;
            -ms-grid-columns: 100px 1fr;
            grid-template-columns: 100px 1fr;
            grid-gap: 0 rem(60);
            padding:rem(20) rem(40) rem(30) 0;
            border-top:1px solid rgba(255,255,255,.2);
            @include for-width(-tablet) {
              padding:rem(20) rem(20) rem(30) 0;
              grid-gap: 0 rem(40);
            }
            @include for-width(-small-lg) {
              display:block;
              padding:rem(25) 0 rem(30);
            }
            &_list {
              width:rem(100);
              height:rem(100);
              border-radius:rem(15);
              background-color:$black_blue_light;
              display:block;
            }
            &_text {
              & h5 {
                @extend %p-big-common-bold;
                margin-bottom:rem(7);
                @include for-width(-small-lg) {
                  margin-top:rem(25);
                }
              }
              & p {
                @extend %p-common-thick;
                color:$white_50;
                & span {
                  display:block;
                  margin-top:rem(20);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>