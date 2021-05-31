<template>
  <div class="c-advantage">
    <template v-for="item of list">
      <div
        class="c-advantage__item"
        :class="{ 'c-advantage__item-blue': item.colorBlue }"
        :key="item.title"
		:id="item.aId"
        :style="{ 'background-image': `url(${is_mobile ? item.mobile_img : item.img})` }"
      >
        <div class="id-anchor" :id="item.title"></div>
        <div class="container" :class="{ 'container-blue': item.colorBlue }">
          <div class="c-advantage__wrap" :class="{ 'c-advantage__wrap-right': item.aligh }">
		    <h3 class="c-advantage__up">{{ item.upTitle }}</h3>
            <h1 class="c-advantage__title">
              <svg
                v-if="item.textSVG"
                width="40"
                height="38"
                viewBox="0 0 40 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 11.0232H40V31.0456C40 34.3593 37.3137 37.0456 34 37.0456H14V11.0232Z"
                  fill="#98E0F9"
                />
                <rect x="1" y="10.0223" width="9" height="9.00774" fill="#98E0F9" />
                <rect y="0.0137329" width="6" height="6.00516" fill="#98E0F9" />
                <rect x="15" y="1.01373" width="6" height="6.00516" fill="#98E0F9" />
                <rect x="9" y="2.01544" width="3" height="3.00258" fill="#98E0F9" />
              </svg>
              {{ item.title }}
            </h1>
            <h2 class="c-advantage__sub">{{ item.subTitle }}</h2>
            <p class="c-advantage__text" :id="item.id">{{ item.text }}</p>
			<div id="desktop" :class="item.graphic"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 1366 945" style="enable-background:new 0 0 1366 945;" xml:space="preserve">
		<style type="text/css">
			.st0{fill:none;}
			.st1{fill:#0F1541;}
			.st2{fill:#FFFFFF;}
			.st3{font-family:'Poppins-Regular';}
			.st4{font-size:20px;}
			.st5{opacity:0.39;fill:#144697;enable-background:new    ;}
			.st6{font-family:'Poppins-Bold';}
			.st7{font-size:55px;}
			.st8{fill:#50DD8D;}
			.st9{fill:#949494;}
			.st10{fill:#3CADEF;}
			.st11{font-size:21px;}
			.st12{font-size:28px;}
			.st13{fill:#4DABE0;}
			.st14{fill:#144697;}
			.st15{fill:#1A80C6;}
			.st16{fill:#399EE4;}
			.st17{fill:#70C0F6;}
			.st18{fill:#B5E0F8;}
		</style>
		<rect class="st0" width="1366" height="988"/>
		<rect class="st1" width="1366" height="988"/>
		<rect id="Rectangle_34" class="st1" width="1366" height="990"/>
		<text transform="matrix(1 0 0 1 182.192 463)" class="st2 st3 st4">PacketCrypt Created</text>
		<text transform="matrix(1 0 0 1 182.192 493)" class="st2 st3 st4">Mainnet Launch</text>
		<text transform="matrix(1 0 0 1 182.192 523)" class="st2 st3 st4">CLI Wallet</text>
		<text transform="matrix(1 0 0 1 182.192 553)" class="st2 st3 st4">PKT.Cash Website</text>
		<text transform="matrix(1 0 0 1 182.192 583)" class="st2 st3 st4">Electrum Wallet</text>
		<text transform="matrix(1 0 0 1 182.192 613)" class="st2 st3 st4">GUI Wallet</text>
		<text transform="matrix(1 0 0 1 182.192 643)" class="st2 st3 st4">Community Launch</text>
		<path id="Rectangle_27" class="st5" d="M401,395.7h283.1l0,0v448.4c0,22.6-18.4,41-41,41l0,0H442c-22.6,0-41-18.4-41-41l0,0V395.7
			L401,395.7z"/>
		<text transform="matrix(1 0 0 1 464 463)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#RouteServer">Route Server</a></text>
		<text transform="matrix(1 0 0 1 464 493)" class="st2 st3 st4">Exchange Listing</text>
		<text transform="matrix(1 0 0 1 464 523)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#AnodiumVPN">Anodium VPN</a></text>
		<text transform="matrix(1 0 0 1 464 553)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#Strike">Token Strike</a></text>
		<text transform="matrix(1 0 0 1 464 583)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#MiningWallet">Mining Wallet</a></text>
		<text transform="matrix(1 0 0 1 464 613)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#EdgePointDevice">Edge Point Device</a></text>
		<text transform="matrix(1 0 0 1 464 643)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#Lighting">PKT Lightning</a></text>
		<text transform="matrix(1 0 0 1 464 673)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#LightningPaymaker">Lightning Paymaker</a></text>
		<text transform="matrix(1 0 0 1 464 703)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#WPKTDeFiETH">WPKT DeFi - ETH</a></text>
		<text transform="matrix(1 0 0 1 464 733)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#WPKTDeFiBSC">WPKT DeFi - BSC</a></text>
		<text transform="matrix(1 0 0 1 464 763)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#LINKPKTOracles">LINK/PKT Oracles</a></text>
		<text transform="matrix(1 0 0 1 464 793)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#AtomicSwapMarket">Atomic Swap Market</a></text>
		<text transform="matrix(1 0 0 1 464 823)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#PacketCryptRs">PacketCryptRs</a></text>
		<text transform="matrix(1 0 0 1 464 853)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#PKTNFTs">PKT NFTs</a></text>
		<text transform="matrix(1 0 0 1 749 463)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#PaidVPN">Paid VPN</a></text>
		<text transform="matrix(1 0 0 1 749 493)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#DesktopApp">Desktop App</a></text>
		<text transform="matrix(1 0 0 1 749 523)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#AddrLease">AddrLease</a></text>
		<text transform="matrix(1 0 0 1 749 553)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#BandwidthLease">BandwidthLease</a></text>
		<text transform="matrix(1 0 0 1 749 583)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#PKTVPN">PKT VPN</a></text>
		<text transform="matrix(1 0 0 1 749 613)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#WinCjdns">WinCjdns</a></text>
		<text transform="matrix(1 0 0 1 749 643)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#CjdnsPriority">CjdnsPriority</a></text>
		<text transform="matrix(1 0 0 1 749 673)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#CjdnsMT">CjdnsMT</a></text>
		<text transform="matrix(1 0 0 1 749 703)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#CjdnsDocker">CjdnsDocker</a></text>
		<text transform="matrix(1 0 0 1 749 733)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#CjdnsTool">CjdnsTool</a></text>
		<text transform="matrix(1 0 0 1 749 763)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#CustomerBit">CustomerBit</a></text>
		<text transform="matrix(1 0 0 1 749 793)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#PKTDEX">PKT DEX</a></text>
		<text transform="matrix(1 0 0 1 227.696 169)" class="st2 st6 st7">PKT Roadmap</text>
		<path id="Icon_awesome-check-2" class="st8" d="M157.4,464.5l-8.2-8.2c-0.5-0.5-0.5-1.3,0-1.8c0,0,0,0,0,0l1.8-1.8
			c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l5.5,5.5l11.9-11.9c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l1.8,1.8c0.5,0.5,0.5,1.3,0,1.8
			c0,0,0,0,0,0l-14.6,14.6C158.7,465,157.9,465,157.4,464.5C157.4,464.5,157.4,464.5,157.4,464.5z"/>
		<path id="Icon_awesome-check-3" class="st8" d="M157.4,494.5l-8.2-8.2c-0.5-0.5-0.5-1.3,0-1.8c0,0,0,0,0,0l1.8-1.8
			c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l5.5,5.5l11.9-11.9c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l1.8,1.8c0.5,0.5,0.5,1.3,0,1.8
			c0,0,0,0,0,0l-14.6,14.6C158.7,495,157.9,495,157.4,494.5C157.4,494.5,157.4,494.5,157.4,494.5z"/>
		<path id="Icon_awesome-check-4" class="st8" d="M157.4,524.5l-8.2-8.2c-0.5-0.5-0.5-1.3,0-1.8c0,0,0,0,0,0l1.8-1.8
			c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l5.5,5.5l11.9-11.9c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l1.8,1.8c0.5,0.5,0.5,1.3,0,1.8
			c0,0,0,0,0,0l-14.6,14.6C158.7,525,157.9,525,157.4,524.5C157.4,524.5,157.4,524.5,157.4,524.5z"/>
		<path id="Icon_awesome-check-5" class="st8" d="M157.4,615.5l-8.2-8.2c-0.5-0.5-0.5-1.3,0-1.8c0,0,0,0,0,0l1.8-1.8
			c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l5.5,5.5l11.9-11.9c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l1.8,1.8c0.5,0.5,0.5,1.3,0,1.8
			c0,0,0,0,0,0l-14.6,14.6C158.7,616,157.9,616,157.4,615.5C157.4,615.5,157.4,615.5,157.4,615.5z"/>
		<path id="Icon_awesome-check-6" class="st8" d="M158.8,554.5l-8.2-8.2c-0.5-0.5-0.5-1.3,0-1.8c0,0,0,0,0,0l1.8-1.8
			c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l5.5,5.5l11.9-11.9c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l1.8,1.8c0.5,0.5,0.5,1.3,0,1.8
			c0,0,0,0,0,0l-14.6,14.6C160.1,555,159.3,555,158.8,554.5C158.8,554.5,158.8,554.5,158.8,554.5z"/>
		<path id="Icon_awesome-check-7" class="st8" d="M157.4,645.5l-8.2-8.2c-0.5-0.5-0.5-1.3,0-1.8c0,0,0,0,0,0l1.8-1.8
			c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l5.5,5.5l11.9-11.9c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l1.8,1.8c0.5,0.5,0.5,1.3,0,1.8
			c0,0,0,0,0,0l-14.6,14.6C158.7,646,157.9,646,157.4,645.5C157.4,645.5,157.4,645.5,157.4,645.5z"/>
		<path id="Icon_awesome-check-8" class="st8" d="M158.8,585.5l-8.2-8.2c-0.5-0.5-0.5-1.3,0-1.8c0,0,0,0,0,0l1.8-1.8
			c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l5.5,5.5l11.9-11.9c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l1.8,1.8c0.5,0.5,0.5,1.3,0,1.8
			c0,0,0,0,0,0l-14.6,14.6C160.1,586,159.3,586,158.8,585.5C158.8,585.5,158.8,585.5,158.8,585.5z"/>
		<path id="Icon_awesome-check-10" class="st8" d="M438.6,464.7l-8.2-8.2c-0.5-0.5-0.5-1.3,0-1.8c0,0,0,0,0,0l1.8-1.8
			c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l5.5,5.5l11.9-11.9c0.5-0.5,1.3-0.5,1.8,0c0,0,0,0,0,0l1.8,1.8c0.5,0.5,0.5,1.3,0,1.8
			c0,0,0,0,0,0l-14.6,14.6C439.9,465.2,439.1,465.2,438.6,464.7C438.6,464.7,438.6,464.7,438.6,464.7z"/>
		<path id="Icon_open-reload" class="st8" d="M438.2,498.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,494.9,435.3,497.1,438.2,498.1L438.2,498.1z"/>
		<path id="Icon_open-reload-2" class="st8" d="M438.2,618.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,614.9,435.3,617.1,438.2,618.1L438.2,618.1z"/>
		<path id="Icon_open-reload-3" class="st8" d="M438.2,737.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,733.9,435.3,736.1,438.2,737.1L438.2,737.1z"/>
		<path id="Icon_open-reload-4" class="st8" d="M438.2,558.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,554.9,435.3,557.1,438.2,558.1L438.2,558.1z"/>
		<path id="Icon_open-reload-5" class="st8" d="M438.2,678.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,674.9,435.3,677.1,438.2,678.1L438.2,678.1z"/>
		<path id="Icon_open-reload-6" class="st8" d="M438.2,797.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,793.9,435.3,796.1,438.2,797.1L438.2,797.1z"/>
		<path id="Icon_open-reload-7" class="st8" d="M438.2,826.6c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,823.4,435.3,825.6,438.2,826.6L438.2,826.6z"/>
		<path id="Icon_open-reload-70" d="M438.2,856.6c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4    l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3    l-3,8.3l4.5-2.1C433,853.4,435.3,855.6,438.2,856.6L438.2,856.6z" class="st8"></path>
		<path id="Icon_open-reload-8" class="st8" d="M438.2,528.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,524.9,435.3,527.1,438.2,528.1L438.2,528.1z"/>
		<path id="Icon_open-reload-9" class="st8" d="M438.2,648.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,644.9,435.3,647.1,438.2,648.1L438.2,648.1z"/>
		<path id="Icon_open-reload-10" class="st8" d="M438.2,767.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,763.9,435.3,766.1,438.2,767.1L438.2,767.1z"/>
		<path id="Icon_open-reload-11" class="st8" d="M438.2,588.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,584.9,435.3,587.1,438.2,588.1L438.2,588.1z"/>
		<path id="Icon_open-reload-12" class="st8" d="M438.2,707.1c6.1,2.2,12.9-1,15-7.1c2.2-6.1-1-12.9-7.1-15c-2.9-1-6.1-0.9-8.9,0.4
			l1.3,2.7c4.4-2.1,9.7-0.2,11.7,4.2c2.1,4.4,0.2,9.7-4.2,11.7c-2.1,1-4.6,1.1-6.8,0.3c-2.2-0.8-3.9-2.5-4.9-4.6l4.1-1.9l-8.3-3
			l-3,8.3l4.5-2.1C433,703.9,435.3,706.1,438.2,707.1L438.2,707.1z"/>
		<g id="Group_86" transform="translate(706.841 550)">
			<ellipse id="Ellipse_5" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_173" transform="translate(992.841 550)">
			<ellipse id="Ellipse_5-2" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-2" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_145" transform="translate(706.841 580)">
			<ellipse id="Ellipse_5-3" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-3" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_174" transform="translate(992.841 580)">
			<ellipse id="Ellipse_5-4" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-4" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<path id="Rectangle_5" class="st10" d="M192.5,243h165c15.2,0,27.5,12.3,27.5,27.5l0,0c0,15.2-12.3,27.5-27.5,27.5h-165
			c-15.2,0-27.5-12.3-27.5-27.5l0,0C165,255.3,177.3,243,192.5,243z"/>
		<path id="Rectangle_36" class="st10" d="M459.5,243h165c15.2,0,27.5,12.3,27.5,27.5l0,0c0,15.2-12.3,27.5-27.5,27.5h-165
			c-15.2,0-27.5-12.3-27.5-27.5l0,0C432,255.3,444.3,243,459.5,243z"/>
		<path id="Rectangle_37" class="st10" d="M726.5,243h165c15.2,0,27.5,12.3,27.5,27.5l0,0c0,15.2-12.3,27.5-27.5,27.5h-165
			c-15.2,0-27.5-12.3-27.5-27.5l0,0C699,255.3,711.3,243,726.5,243z"/>
		<path id="Rectangle_35" class="st10" d="M993.5,243h165c15.2,0,27.5,12.3,27.5,27.5l0,0c0,15.2-12.3,27.5-27.5,27.5h-165
			c-15.2,0-27.5-12.3-27.5-27.5l0,0C966,255.3,978.3,243,993.5,243z"/>
		<text transform="matrix(1 0 0 1 235 278)" class="st2 st3 st11"><a href="/roadmap#phase_1">Phase 1</a></text>
		<text transform="matrix(1 0 0 1 222 350)" class="st2 st6 st12">Launch</text>
		<text transform="matrix(1 0 0 1 499 278)" class="st2 st3 st11"><a href="/roadmap#phase_2">Phase 2</a></text>
		<text transform="matrix(1 0 0 1 497 350)" class="st2 st6 st12">Utilize</text>
		<text transform="matrix(1 0 0 1 766 278)" class="st2 st3 st11"><a href="/roadmap#phase_3">Phase 3</a></text>
		<text transform="matrix(1 0 0 1 769 350)" class="st2 st6 st12">Scale</text>
		<text transform="matrix(1 0 0 1 1031.876 463)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#PaidAccess">Paid Access</a></text>
		<text transform="matrix(1 0 0 1 1031.876 493)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#FullPaidNet">Full Paid Net</a></text>
		<text transform="matrix(1 0 0 1 1031.876 523)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#PaidVPN">Paid VPN</a></text>
		<text transform="matrix(1 0 0 1 1031.876 553)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#VRouterLease">VRouter Lease</a></text>
		<text transform="matrix(1 0 0 1 1031.876 583)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#AddrLease">AddrLease</a></text>
		<text transform="matrix(1 0 0 1 1031.876 613)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#CjdnsWiFi">Cjdns WiFi</a></text>
		<text transform="matrix(1 0 0 1 1031.876 643)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#SmartContracts">Smart Contracts</a></text>
		<text transform="matrix(1 0 0 1 1031.876 673)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#PKTCDNBridge">PKT CDN Bridge</a></text>
		<text transform="matrix(1 0 0 1 1031.876 703)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#DappsAPI">Dapps API</a></text>
		<text transform="matrix(1 0 0 1 1031.876 733)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#StreamingAPI">Streaming API</a></text>
		<text transform="matrix(1 0 0 1 1031.876 763)" class="st2 st3 st4"><a href="https://pkt.cash/roadmap#BandwidthMarket">Bandwidth Market</a></text>
		<text transform="matrix(1 0 0 1 1034 278)" class="st2 st3 st11"><a href="/roadmap#phase_4">Phase 4</a></text>
		<text transform="matrix(1 0 0 1 1012.225 350)" class="st2 st6 st12">Innovate</text>
		<g id="Group_87" transform="translate(706.841 610)">
			<ellipse id="Ellipse_5-5" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-5" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_175" transform="translate(992.841 610)">
			<ellipse id="Ellipse_5-6" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-6" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_88" transform="translate(706.841 640)">
			<ellipse id="Ellipse_5-7" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-7" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_176" transform="translate(992.841 640)">
			<ellipse id="Ellipse_5-8" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-8" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_89" transform="translate(706.841 670)">
			<ellipse id="Ellipse_5-9" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-9" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_177" transform="translate(992.841 670)">
			<ellipse id="Ellipse_5-10" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-10" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_90" transform="translate(706.841 700)">
			<ellipse id="Ellipse_5-11" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-11" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_178" transform="translate(992.841 700)">
			<ellipse id="Ellipse_5-12" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-12" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_124" transform="translate(706.841 790)">
			<ellipse id="Ellipse_5-13" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-13" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_180" transform="translate(992.841 790)">
			<ellipse id="Ellipse_5-14" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-14" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_91" transform="translate(706.841 730)">
			<ellipse id="Ellipse_5-15" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-15" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_179" transform="translate(992.841 730)">
			<ellipse id="Ellipse_5-16" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-16" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_123" transform="translate(706.841 820)">
			<ellipse id="Ellipse_5-17" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-17" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_182" transform="translate(992.841 820)">
			<ellipse id="Ellipse_5-18" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-18" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_92" transform="translate(706.841 760)">
			<ellipse id="Ellipse_5-19" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-19" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_181" transform="translate(992.841 760)">
			<ellipse id="Ellipse_5-20" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-20" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_122" transform="translate(706.841 850)">
			<ellipse id="Ellipse_5-21" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-21" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_183" transform="translate(991.841 850)">
			<ellipse id="Ellipse_5-22" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-22" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Group_147" transform="translate(706.841 880)">
			<ellipse id="Ellipse_5-23" class="st9" cx="13.3" cy="-93.7" rx="13.3" ry="13.3"/>
			<path id="Rectangle_26-23" class="st2" d="M9.8-98.2h6.9c0.6,0,1,0.4,1,1v6.9c0,0.6-0.4,1-1,1H9.8c-0.6,0-1-0.4-1-1v-6.9
				C8.8-97.7,9.3-98.2,9.8-98.2z"/>
		</g>
		<g id="Icon_smaller_new_2" transform="translate(124.546 200.3)">
			<path id="Path_218" class="st13" d="M21.9-78.4H3.4V-60h18.5V-78.4z"/>
			<path id="Path_219" class="st13" d="M12.4-98.3H0.7v11.6h11.7V-98.3z"/>
			<path id="Path_220" class="st13" d="M43.8-97.2H31.2v12.5h12.6L43.8-97.2L43.8-97.2z"/>
			<path id="Path_221" class="st13" d="M25.1-94h-6.3v6.3H25L25.1-94L25.1-94z"/>
			<path id="Path_222" class="st13" d="M81.2-76v40.1c0,3.1-1.2,6-3.4,8.2c-1.1,1.1-2.4,1.9-3.8,2.5c-1.4,0.6-2.9,0.9-4.4,0.9H29.1
				V-76H81.2z"/>
		</g>
		<g>
			<path class="st14" d="M277,400.7H125.2c-2.8,0-5-2.2-5-5s2.2-5,5-5H277c2.8,0,5,2.2,5,5S279.8,400.7,277,400.7z"/>
			<path class="st15" d="M542.6,400.7H277c-2.8,0-5-2.2-5-5s2.2-5,5-5h265.6c2.8,0,5,2.2,5,5S545.3,400.7,542.6,400.7z"/>
			<path class="st16" d="M808.1,400.7H542.6c-2.8,0-5-2.2-5-5s2.2-5,5-5h265.6c2.8,0,5,2.2,5,5S810.9,400.7,808.1,400.7z"/>
			<path class="st17" d="M1073.7,400.7H808.1c-2.8,0-5-2.2-5-5s2.2-5,5-5h265.6c2.8,0,5,2.2,5,5S1076.4,400.7,1073.7,400.7z"/>
			<path class="st18" d="M1240.8,400.7h-167.1c-2.8,0-5-2.2-5-5s2.2-5,5-5h167.1c2.8,0,5,2.2,5,5S1243.5,400.7,1240.8,400.7z"/>
			<circle class="st14" cx="277" cy="395.7" r="13.1"/>
			<circle class="st15" cx="542.6" cy="395.7" r="13.1"/>
			<circle class="st16" cx="808.1" cy="395.7" r="13.1"/>
			<circle class="st17" cx="1073.7" cy="395.7" r="13.1"/>
			<path class="st2" d="M812.9,387.4h-9.6v5l3.5,3.3l-3.5,3.3v5h9.6v-5l-3.5-3.3l3.5-3.3V387.4z M811.1,399.8v2.4h-6v-2.4l3-2.8
				L811.1,399.8z M811.1,391.6l-3,2.8l-3-2.8v-2.4h6V391.6z"/>
			<path class="st2" d="M1078.5,387.4h-9.6v5l3.5,3.3l-3.5,3.3v5h9.6v-5l-3.5-3.3l3.5-3.3V387.4z M1076.7,399.8v2.4h-6v-2.4l3-2.8
				L1076.7,399.8z M1076.7,391.6l-3,2.8l-3-2.8v-2.4h6V391.6z"/>
			<path id="Icon_awesome-check-9_1_" class="st8" d="M274.4,402.5l-5.9-5.9c-0.4-0.4-0.4-0.9,0-1.3c0,0,0,0,0,0l1.3-1.3
				c0.4-0.4,0.9-0.4,1.3,0c0,0,0,0,0,0l3.9,3.9l8.4-8.4c0.4-0.4,0.9-0.4,1.3,0c0,0,0,0,0,0l1.3,1.3c0.4,0.4,0.4,0.9,0,1.3c0,0,0,0,0,0
				l-10.3,10.4C275.4,402.9,274.8,402.9,274.4,402.5C274.4,402.5,274.4,402.5,274.4,402.5z"/>
			<circle class="st2" cx="542.6" cy="395.7" r="7"/>
		</g>
		</svg></div>
			<div id="mobile" :class="item.graphic"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="414" height="2195" viewBox="0 0 414 2195">
		  <defs>
			<clipPath id="clip-iPhone_XR_XS_Max_11_3">
			  <rect width="414" height="2195"/>
			</clipPath>
		  </defs>
		  <g id="iPhone_XR_XS_Max_11_3" data-name="iPhone XR/XS Max/11 – 3" clip-path="url(#clip-iPhone_XR_XS_Max_11_3)">
			<rect width="414" height="2195" fill="#0f1541"/>
			<rect id="Rectangle_53" data-name="Rectangle 53" width="414" height="2195" fill="#0f1541"/>
			<path id="Rectangle_52" data-name="Rectangle 52" d="M0,0H287.125a55,55,0,0,1,55,55V470.223a55,55,0,0,1-55,55H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(48 575.5)" fill="#144697" opacity="0.39"/>
			<rect id="Rectangle_48" data-name="Rectangle 48" width="220" height="55" rx="27.5" transform="translate(97 150)" fill="#3cadef"/>
			<text id="PKT_Road_Map" data-name="PKT Road Map" transform="translate(48 78)" fill="#fff" font-size="30" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">PKT Road Map</tspan></text>
			<line id="Line_5" data-name="Line 5" y2="461" transform="translate(49.5 1656.5)" fill="none" stroke="#b5e0f8" stroke-linecap="round" stroke-width="5"/>
			<line id="Line_3" data-name="Line 3" y2="555.146" transform="translate(49.5 590.354)" fill="none" stroke="#399ee4" stroke-linecap="round" stroke-width="5"/>
			<line id="Line_4" data-name="Line 4" y2="511" transform="translate(49.5 1145.5)" fill="none" stroke="#70c0f6" stroke-linecap="round" stroke-width="5"/>
			<line id="Line_1" data-name="Line 1" y2="59.281" transform="translate(49.443 125.5)" fill="none" stroke="#144697" stroke-linecap="round" stroke-width="5"/>
			<line id="Line_2" data-name="Line 2" y2="394.169" transform="translate(49.443 181.331)" fill="none" stroke="#1a80c6" stroke-linecap="round" stroke-width="5"/>
			<text id="Phase_1" data-name="Phase 1" transform="translate(169 185)" fill="#fff" font-size="21" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0"><a href="/roadmap#phase_1">Phase 1</a></tspan></text>
			<circle id="Ellipse_1" data-name="Ellipse 1" cx="14.5" cy="14.5" r="14.5" transform="translate(64 163) rotate(90)" fill="#144697"/>
			<circle id="Ellipse_2" data-name="Ellipse 2" cx="14.5" cy="14.5" r="14.5" transform="translate(64 561) rotate(90)" fill="#1a80c6"/>
			<circle id="Ellipse_3" data-name="Ellipse 3" cx="14.5" cy="14.5" r="14.5" transform="translate(64 1131) rotate(90)" fill="#399ee4"/>
			<circle id="Ellipse_4" data-name="Ellipse 4" cx="14.5" cy="14.5" r="14.5" transform="translate(64 1642) rotate(90)" fill="#70c0f6"/>
			<path id="Icon_awesome-check" data-name="Icon awesome-check" d="M4.925,15.178.212,10.465a.725.725,0,0,1,0-1.025L1.238,8.415a.725.725,0,0,1,1.025,0l3.175,3.175,6.8-6.8a.725.725,0,0,1,1.025,0l1.025,1.025a.725.725,0,0,1,0,1.025L5.95,15.178A.725.725,0,0,1,4.925,15.178Z" transform="translate(42 167.531)" fill="#50dd8d"/>
			<path id="Icon_material-hourglass-empty" data-name="Icon material-hourglass-empty" d="M9,3V9h.01L9,9.01,13,13,9,17l.01.01H9V23H21V17.01h-.01L21,17l-4-4,4-3.99L20.99,9H21V3ZM19,17.5V21H11V17.5l4-4Zm-4-5-4-4V5h8V8.5Z" transform="translate(34.5 1132)" fill="#fff"/>
			<path id="Icon_material-hourglass-empty-2" data-name="Icon material-hourglass-empty" d="M9,3V9h.01L9,9.01,13,13,9,17l.01.01H9V23H21V17.01h-.01L21,17l-4-4,4-3.99L20.99,9H21V3ZM19,17.5V21H11V17.5l4-4Zm-4-5-4-4V5h8V8.5Z" transform="translate(34.5 1643.208)" fill="#fff"/>
			<text id="Launch" transform="translate(154 241)" fill="#fff" font-size="28" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">Launch</tspan></text>
			<text id="Utilize" transform="translate(164 644)" fill="#fff" font-size="28" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">Utilize</tspan></text>
			<text id="Scale" transform="translate(168 1210)" fill="#fff" font-size="28" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">Scale</tspan></text>
			<text id="Innovate" transform="translate(143 1719.998)" fill="#fff" font-size="28" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">Innovate</tspan></text>
			<rect id="Rectangle_49" data-name="Rectangle 49" width="220" height="55" rx="27.5" transform="translate(97 548)" fill="#3cadef"/>
			<rect id="Rectangle_50" data-name="Rectangle 50" width="220" height="55" rx="27.5" transform="translate(97 1118)" fill="#3cadef"/>
			<rect id="Rectangle_51" data-name="Rectangle 51" width="220" height="55" rx="27.5" transform="translate(97 1629)" fill="#3cadef"/>
			<text id="Phase_2" data-name="Phase 2" transform="translate(167 583)" fill="#fff" font-size="21" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0"><a href="/roadmap#phase_2">Phase 2</a></tspan></text>
			<text id="Phase_3" data-name="Phase 3" transform="translate(166 1153)" fill="#fff" font-size="21" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0"><a href="/roadmap#phase_3">Phase 3</a></tspan></text>
			<text id="Phase_4" data-name="Phase 4" transform="translate(166 1664)" fill="#fff" font-size="21" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0"><a href="/roadmap#phase_4">Phase 4</a></tspan></text>
			<text id="PacketCrypt_Created_Mainnet_Launch_Command_Line_Wallet_PKT.Cash_Website_Electrum_Wallet_GUI_Wallet_Community_Launch_" data-name="PacketCrypt Created
		Mainnet Launch
		Command Line Wallet
		PKT.Cash Website
		Electrum Wallet
		GUI Wallet
		Community Launch
		" transform="translate(136 267)" fill="#fff" font-size="20" font-family="Poppins-Regular, Poppins"><tspan x="0" y="21">PacketCrypt Created</tspan><tspan x="0" y="51">Mainnet Launch</tspan><tspan x="0" y="81">CLI Wallet</tspan><tspan x="0" y="111">PKT.Cash Website</tspan><tspan x="0" y="141">Electrum Wallet</tspan><tspan x="0" y="171">GUI Wallet</tspan><tspan x="0" y="201">Community Launch</tspan><tspan x="0" y="231"></tspan></text>
			<g id="Group_249" data-name="Group 249" transform="translate(-2.808)">
			  <path id="Icon_awesome-check-2" data-name="Icon awesome-check" d="M8.606,23.1.371,14.866a1.267,1.267,0,0,1,0-1.792l1.792-1.792a1.267,1.267,0,0,1,1.792,0L9.5,16.83,21.384,4.948a1.267,1.267,0,0,1,1.792,0L24.967,6.74a1.267,1.267,0,0,1,0,1.792L10.4,23.1A1.267,1.267,0,0,1,8.606,23.1Z" transform="translate(98.808 266.423)" fill="#50dd8d"/>
			  <path id="Icon_awesome-check-3" data-name="Icon awesome-check" d="M8.606,23.1.371,14.866a1.267,1.267,0,0,1,0-1.792l1.792-1.792a1.267,1.267,0,0,1,1.792,0L9.5,16.83,21.384,4.948a1.267,1.267,0,0,1,1.792,0L24.967,6.74a1.267,1.267,0,0,1,0,1.792L10.4,23.1A1.267,1.267,0,0,1,8.606,23.1Z" transform="translate(98.808 296.423)" fill="#50dd8d"/>
			  <path id="Icon_awesome-check-4" data-name="Icon awesome-check" d="M8.606,23.1.371,14.866a1.267,1.267,0,0,1,0-1.792l1.792-1.792a1.267,1.267,0,0,1,1.792,0L9.5,16.83,21.384,4.948a1.267,1.267,0,0,1,1.792,0L24.967,6.74a1.267,1.267,0,0,1,0,1.792L10.4,23.1A1.267,1.267,0,0,1,8.606,23.1Z" transform="translate(98.808 326.423)" fill="#50dd8d"/>
			  <path id="Icon_awesome-check-5" data-name="Icon awesome-check" d="M8.606,23.1.371,14.866a1.267,1.267,0,0,1,0-1.792l1.792-1.792a1.267,1.267,0,0,1,1.792,0L9.5,16.83,21.384,4.948a1.267,1.267,0,0,1,1.792,0L24.967,6.74a1.267,1.267,0,0,1,0,1.792L10.4,23.1A1.267,1.267,0,0,1,8.606,23.1Z" transform="translate(98.808 417.423)" fill="#50dd8d"/>
			  <path id="Icon_awesome-check-6" data-name="Icon awesome-check" d="M8.606,23.1.371,14.866a1.267,1.267,0,0,1,0-1.792l1.792-1.792a1.267,1.267,0,0,1,1.792,0L9.5,16.83,21.384,4.948a1.267,1.267,0,0,1,1.792,0L24.967,6.74a1.267,1.267,0,0,1,0,1.792L10.4,23.1A1.267,1.267,0,0,1,8.606,23.1Z" transform="translate(100.182 356.423)" fill="#50dd8d"/>
			  <path id="Icon_awesome-check-7" data-name="Icon awesome-check" d="M8.606,23.1.371,14.866a1.267,1.267,0,0,1,0-1.792l1.792-1.792a1.267,1.267,0,0,1,1.792,0L9.5,16.83,21.384,4.948a1.267,1.267,0,0,1,1.792,0L24.967,6.74a1.267,1.267,0,0,1,0,1.792L10.4,23.1A1.267,1.267,0,0,1,8.606,23.1Z" transform="translate(98.808 447.423)" fill="#50dd8d"/>
			  <path id="Icon_awesome-check-8" data-name="Icon awesome-check" d="M8.606,23.1.371,14.866a1.267,1.267,0,0,1,0-1.792l1.792-1.792a1.267,1.267,0,0,1,1.792,0L9.5,16.83,21.384,4.948a1.267,1.267,0,0,1,1.792,0L24.967,6.74a1.267,1.267,0,0,1,0,1.792L10.4,23.1A1.267,1.267,0,0,1,8.606,23.1Z" transform="translate(100.182 387.423)" fill="#50dd8d"/>
			</g>
			<text id="Route_Server_Exchange_Listing_Anodium_VPN_Token_Strike_Mining_Wallet_Edge_Point_Device_PKT_Lighting_Lightning_Paymaker_WPKT_DeFi_-_BSC_ETH_LINK_PKT_Oracles_Atomic_Swap_Market_PacketCryptRs_PKT_NFTs" data-name="Route Server
		Exchange Listing
		Anodium VPN
		Token Strike
		Mining Wallet
		Edge Point Device
		PKT Lightning
		Lightning Paymaker
		WPKT DeFi - BSC/ETH
		LINK/PKT Oracles
		Atomic Swap Market
		PacketCryptRs
		PKT NFTs" transform="translate(136 668)" fill="#fff" font-size="20" font-family="Poppins-Regular, Poppins"><tspan x="0" y="21"><a href="https://pkt.cash/roadmap#RouteServer">Route Server</a></tspan><tspan x="0" y="51">Exchange Listing</tspan><tspan x="0" y="81"><a href="https://pkt.cash/roadmap#AnodiumVPN">Anodium VPN</a></tspan><tspan x="0" y="111"><a href="https://pkt.cash/roadmap#Strike">Token Strike</a></tspan><tspan x="0" y="141"><a href="https://pkt.cash/roadmap#MiningWallet">Mining Wallet</a></tspan><tspan x="0" y="171"><a href="https://pkt.cash/roadmap#EdgePointDevice">Edge Point Device</a></tspan><tspan x="0" y="201"><a href="https://pkt.cash/roadmap#Lighting">PKT Lightning</a></tspan><tspan x="0" y="231"><a href="https://pkt.cash/roadmap#LightningPaymaker">Lightning Paymaker</a></tspan><tspan x="0" y="261"><a href="https://pkt.cash/roadmap#WPKTDeFiETH">WPKT DeFi - ETH</a></tspan><tspan x="0" y="291"><a href="https://pkt.cash/roadmap#WPKTDeFiBSC">WPKT DeFi - BSC</a></tspan><tspan x="0" y="321"><a href="https://pkt.cash/roadmap#LINKPKTOracles">LINK/PKT Oracles</a></tspan><tspan x="0" y="351"><a href="https://pkt.cash/roadmap#AtomicSwapMarket">Atomic Swap Market</a></tspan><tspan x="0" y="381"><a href="https://pkt.cash/roadmap#PacketCryptRs">PacketCryptRs</a></tspan><tspan x="0" y="411"><a href="https://pkt.cash/roadmap#PKTNFTs">PKT NFTs</a></tspan></text>
			<g id="Group_251" data-name="Group 251" transform="translate(-0.197)">
			  <g id="Group_250" data-name="Group 250">
				<path id="Icon_awesome-check-10" data-name="Icon awesome-check" d="M8.606,23.1.371,14.866a1.267,1.267,0,0,1,0-1.792l1.792-1.792a1.267,1.267,0,0,1,1.792,0L9.5,16.83,21.383,4.948a1.267,1.267,0,0,1,1.792,0L24.967,6.74a1.267,1.267,0,0,1,0,1.792L10.4,23.1A1.267,1.267,0,0,1,8.606,23.1Z" transform="translate(98.99 667.625)" fill="#50dd8d"/>
				<path id="Icon_open-reload" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 728.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-2" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 848.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-3" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 967.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-4" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 788.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-5" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 908.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-6" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 1027.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-7" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 1056.662) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-70" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 1086.175) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-8" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 758.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-9" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 878.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-10" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 997.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-11" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 818.149) rotate(-160)" fill="#50dd8d"/>
				<path id="Icon_open-reload-12" data-name="Icon open-reload" d="M11.765,0a11.765,11.765,0,1,0,8.353,20.118L18,18A8.83,8.83,0,1,1,11.736,2.941a8.556,8.556,0,0,1,6.147,2.677L14.677,8.824H23.5V0L20,3.5A11.7,11.7,0,0,0,11.736,0Z" transform="translate(118.28 937.149) rotate(-160)" fill="#50dd8d"/>
			  </g>
			</g>
			<g id="Group_247" data-name="Group 247" transform="translate(-1)">
			  <g id="Group_223" data-name="Group 223" transform="translate(97 1237)">
				<ellipse id="Ellipse_5" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_224" data-name="Group 224" transform="translate(97 1267)">
				<ellipse id="Ellipse_5-2" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-2" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_225" data-name="Group 225" transform="translate(97 1297)">
				<ellipse id="Ellipse_5-3" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-3" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_226" data-name="Group 226" transform="translate(97 1327)">
				<ellipse id="Ellipse_5-4" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-4" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_227" data-name="Group 227" transform="translate(97 1357)">
				<ellipse id="Ellipse_5-5" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-5" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_228" data-name="Group 228" transform="translate(97 1387)">
				<ellipse id="Ellipse_5-6" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-6" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_229" data-name="Group 229" transform="translate(97 1477)">
				<ellipse id="Ellipse_5-7" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-7" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_230" data-name="Group 230" transform="translate(97 1417)">
				<ellipse id="Ellipse_5-8" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-8" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_231" data-name="Group 231" transform="translate(97 1507)">
				<ellipse id="Ellipse_5-9" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-9" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_232" data-name="Group 232" transform="translate(97 1447)">
				<ellipse id="Ellipse_5-10" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-10" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_233" data-name="Group 233" transform="translate(97 1537)">
				<ellipse id="Ellipse_5-11" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-11" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_234" data-name="Group 234" transform="translate(97 1567)">
				<ellipse id="Ellipse_5-12" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-12" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			</g>
			<text id="Paid_VPN_Desktop_App_AddrLease_BandwidthLease_PKT_VPN_WinCjdns_CjdnsPriority_CjdnsMT_CjdnsDocker_CjdnsTool_CustomerBit_PKT_DEX" data-name="Paid VPN
		Desktop App
		AddrLease
		BandwidthLease
		PKT VPN
		WinCjdns
		CjdnsPriority
		CjdnsMT
		CjdnsDocker
		CjdnsTool
		CustomerBit
		PKT DEX" transform="translate(136 1236)" fill="#fff" font-size="20" font-family="Poppins-Regular, Poppins"><tspan x="0" y="21"><a href="https://pkt.cash/roadmap#PaidVPN">Paid VPN</a></tspan><tspan x="0" y="51"><a href="https://pkt.cash/roadmap#DesktopApp">Desktop App</a></tspan><tspan x="0" y="81"><a href="https://pkt.cash/roadmap#AddrLease">AddrLease</a></tspan><tspan x="0" y="111"><a href="https://pkt.cash/roadmap#BandwidthLease">BandwidthLease</a></tspan><tspan x="0" y="141"><a href="https://pkt.cash/roadmap#PKTVPN">PKT VPN</a></tspan><tspan x="0" y="171"><a href="https://pkt.cash/roadmap#WinCjdns">WinCjdns</a></tspan><tspan x="0" y="201"><a href="https://pkt.cash/roadmap#CjdnsPriority">CjdnsPriority</a></tspan><tspan x="0" y="231"><a href="https://pkt.cash/roadmap#CjdnsMT">CjdnsMT</a></tspan><tspan x="0" y="261"><a href="https://pkt.cash/roadmap#CjdnsDocker">CjdnsDocker</a></tspan><tspan x="0" y="291"><a href="https://pkt.cash/roadmap#CjdnsTool">CjdnsTool</a></tspan><tspan x="0" y="321"><a href="https://pkt.cash/roadmap#CustomerBit">CustomerBit</a></tspan><tspan x="0" y="351"><a href="https://pkt.cash/roadmap#PKTDEX">PKT DEX</a></tspan></text>
			<text id="Paid_Access_Full_Paid_Net_Paid_VPN_VRouter_Lease_AddrLease_Cjdns_WiFI_Smart_Contracts_PKT_CDN_Bridge_Dapps_API_Streaming_API_Bandwidth_Market" data-name="Paid Access
		Full Paid Net
		Paid VPN
		VRouter Lease
		AddrLease
		Cjdns WiFI
		Smart Contracts
		PKT CDN Bridge
		Dapps API
		Streaming API
		Bandwidth Market" transform="translate(136 1746.995)" fill="#fff" font-size="20" font-family="Poppins-Regular, Poppins"><tspan x="0" y="21"><a href="https://pkt.cash/roadmap#PaidAccess">Paid Access</a></tspan><tspan x="0" y="51"><a href="https://pkt.cash/roadmap#FullPaidNet">Full Paid Net</a></tspan><tspan x="0" y="81"><a href="https://pkt.cash/roadmap#PaidVPN">Paid VPN</a></tspan><tspan x="0" y="111"><a href="https://pkt.cash/roadmap#VRouterLease">VRouter Lease</a></tspan><tspan x="0" y="141"><a href="https://pkt.cash/roadmap#AddrLease">AddrLease</a></tspan><tspan x="0" y="171"><a href="https://pkt.cash/roadmap#CjdnsWiFi">Cjdns WiFi</a></tspan><tspan x="0" y="201"><a href="https://pkt.cash/roadmap#SmartContracts">Smart Contracts</a></tspan><tspan x="0" y="231"><a href="https://pkt.cash/roadmap#PKTCDNBridge">PKT CDN Bridge</a></tspan><tspan x="0" y="261"><a href="https://pkt.cash/roadmap#DappsAPI">Dapps API</a></tspan><tspan x="0" y="291"><a href="https://pkt.cash/roadmap#StreamingAPI">Streaming API</a></tspan><tspan x="0" y="321"><a href="https://pkt.cash/roadmap#BandwidthMarket">Bandwidth Market</a></tspan></text>
			<g id="Group_248" data-name="Group 248" transform="translate(-1)">
			  <g id="Group_236" data-name="Group 236" transform="translate(98 1747.995)">
				<ellipse id="Ellipse_5-13" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-13" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_237" data-name="Group 237" transform="translate(98 1777.995)">
				<ellipse id="Ellipse_5-14" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-14" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_238" data-name="Group 238" transform="translate(98 1807.995)">
				<ellipse id="Ellipse_5-15" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-15" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_239" data-name="Group 239" transform="translate(98 1837.995)">
				<ellipse id="Ellipse_5-16" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-16" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_240" data-name="Group 240" transform="translate(98 1867.995)">
				<ellipse id="Ellipse_5-17" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-17" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_241" data-name="Group 241" transform="translate(98 1897.995)">
				<ellipse id="Ellipse_5-18" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0 0)" fill="#949494"/>
				<rect id="Rectangle_26-18" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_242" data-name="Group 242" transform="translate(98 1987.995)">
				<ellipse id="Ellipse_5-19" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-19" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_243" data-name="Group 243" transform="translate(98 1927.995)">
				<ellipse id="Ellipse_5-20" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-20" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_244" data-name="Group 244" transform="translate(98 2017.995)">
				<ellipse id="Ellipse_5-21" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-21" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_245" data-name="Group 245" transform="translate(98 1957.995)">
				<ellipse id="Ellipse_5-22" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-22" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			  <g id="Group_246" data-name="Group 246" transform="translate(97 2047.995)">
				<ellipse id="Ellipse_5-23" data-name="Ellipse 5" cx="13.256" cy="13.256" rx="13.256" ry="13.256" transform="translate(0)" fill="#949494"/>
				<rect id="Rectangle_26-23" data-name="Rectangle 26" width="8.895" height="8.895" rx="1" transform="translate(8.809 8.809)" fill="#fff"/>
			  </g>
			</g>
			<circle id="Ellipse_11" data-name="Ellipse 11" cx="8.5" cy="8.5" r="8.5" transform="translate(41 567)" fill="#fff"/>
		  </g>
		</svg></div>
            <div class="c-advantage__btn-wrapper">
              <template v-if="is_index && !item.linkMore">
                <a
                  href="https://github.com/pkt-cash/ns-projects"
                  target="_blank"
                  class="c-advantage__link blue-btn-arrow"
                  v-if="item.btnText && !item.linkMor"
                >
                  <span>{{ item.btnText }}</span>
                </a>
              </template>
              <template v-else>
                <a
                  :href="item.btnLink"
                  class="c-advantage__link blue-btn-arrow"
                  :class="{ 'mining-center': is_mining && is_mobile }"
                  v-if="item.btnText && !item.linkMore"
                >
                  <span>{{ item.btnText }}</span>
                </a>
              </template>
              <template v-if="item.learnMore">
                <template v-if="!(is_mining && is_mobile)">
                  <nuxt-link
                    :to="{ path: item.lear_link }"
                    class="c-advantage__link-more blue-btn-arrow"
                    v-if="item.learnMore"
                  >
                    <span>Learn More</span>
                  </nuxt-link>
                </template>
              </template>
              <template v-else>
                <template v-if="!(is_mining && is_mobile)">
                  <nuxt-link
                    v-if="item.lear_link"
                    :to="{ path: item.lear_link }"
                    class="c-advantage__link blue-btn-arrow"
                  >
                    <span>Learn More</span>
                  </nuxt-link>
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Advantage",
  props: {
    list: Array,
    is_index: Boolean,
    is_mining: Boolean,
	is_road: Boolean,
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 1024 : false;
    },
  },
};
</script>

<style lang="scss">
.c-advantage {
  &__item {
    position: relative;
    padding: rem(127) rem(25) rem(74);
    @include for-width(-small-lg) {
      padding: rem(29) rem(25) rem(40);
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: $light_blue;
    @include for-width(-small-lg) {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: top center;
    }
    .id-anchor {
      position: absolute;
      top: -100px;
      @include for-width(-tablet) {
        top: -45px;
      }
    }
  }

  &__item-blue {
    color: $light_blue;
    background-color: $dark_blue;
  }

  .container {
    width: 100%;
    max-width: rem(1075);
    margin: 0 auto;
  }

  .container-blue {
    max-width: rem(1248);
  }

  @include for-width(+ tablet) {
    &__wrap {
      padding-right: 50%;
    }
    &__wrap-right {
      padding-left: 50%;
      padding-right: 0;
    }
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(40);
    @include for-width(-tablet) {
      margin-bottom: rem(21);
      @include font_sizes(34, 51);
    }
    word-wrap: normal;
    position: relative;

    & svg {
      position: absolute;
      top: 15%;
      left: rem(-10);
      transform: translateX(-100%);
      @include for-width(-tablet) {
        display: none;
      }
    }
  }

  &__sub {
    @extend %h2-title;
  }

  &__text {
    @extend %regular;
    margin-top: rem(20);
    @include for-width(-tablet) {
      margin-top: 92vw;
    }
    @include font_sizes(20, 32);
    @include for-width(-tablet-lg) {
      @include font_sizes(16, 25);
    }
    @include for-width(-tablet) {
      @include font_sizes(16, 26);
    }
  }

  &__link {
    margin-top: rem(50);
    margin-right: rem(18);
    @include for-width(-small-lg) {
      &.mining-center {
        display: block;
        margin: rem(40) auto 0;
        max-width: rem(223);
      }
    }

    &-more {
      background-color: transparent !important;
      border: 1px solid $light_blue;
      margin-top: rem(18);
    }
  }
  &__btn-wrapper {
    @include for-width(-tablet) {
      display: flex;
      flex-direction: column;
      .blue-btn-arrow {
        width: 100%;
        max-width: rem(223);
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
  #mobile {
		display:none;
	}
  #desktop {
	display:none;
  }
  #pkt_roadmap {
	background-color: #0f1541;
	padding-top: 1rem;
	.c-advantage__title {
		display: none;
	}
	.c-advantage__wrap {
		padding-right: 0;
	}
	.c-advantage__btn-wrapper {
		text-align: center;
		margin-top: 0;
	}
	#mobile {
		display:none;
	}
	#desktop {
		display:block;
	}
	svg text.st2,svg tspan {
		cursor:pointer;
	}
	svg text.st2 a,svg text.st2 a:hover,svg text.st2 a:focus,
	svg tspan a,svg tspan a:hover,svg tspan a:focus {
		color:#fff;
		fill: #fff;
	}
	.c-advantage__link-more {
		background-color: #3cadef !important;
		border-color: #3cadef;
	}
	@include for-width(-tablet-lg) {
		.c-advantage__title svg {
			position: relative;
			top: 0;
			left: 0;
			transform: none;
		}
	}
	@include for-width(-tablet) {
		.c-advantage__text {
			margin: 0;
		}
		#mobile {
			display:block;
		}
		#mobile svg {
			max-width: 100%;
			height: auto;
		}
		#desktop {
			display:none;
		}
	}
  }
}
</style>
