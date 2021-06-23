<template>
  <div class="v-trademark">
    <section class="v-trademark-section-top">
      <SimpleHeader mobile_img="" title="The PKT Wordmarks and Logo Creative Commons 4.0" subtitle="" bg="" />
    </section>
    <section class="v-trademark-section">
		<div class="container">
			<p class="v-trademark-section__text">You are free to use the <a href="/brand">PKT logos</a> as follows:</p>
			<ol>
				<li>Share — copy and redistribute the material in any medium or format.</li>
				<li>Adapt — remix, transform, and build upon the material for any purpose, even commercially.</li>
				<li>Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the PKT endorses you or your use.</li>
				<li>No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.</li>
			</ol>
			<p class="v-trademark-section__text">Notices:</p>
			<ul>
				<li>You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.</li>
				<li>No warranties are given.</li>
				<li>If you want to report misuse of a PKT mark, please post a message at <a href="https://pkt.chat" target="_blank">http://pkt.chat</a></li>
			</ul>

			<h4 class="v-trademark-section__list-title">Uses</h4>
			<p class="v-trademark-section__text">You may:</p>
			<ul>
				<li>Use PKT wordmarks and logo at will.</li>
			</ul>
			
			<h4 class="v-trademark-section__list-title">Unacceptable Uses</h4>
			<p class="v-trademark-section__text">Some specific things you should not do include:</p>
			<ul>
				<li>Don’t use PKT wordmarks and logo in anything dishonest or fraudulent.</li>
				<li>Don’t use PKT wordmarks and logo to endorse products, groups, or services not associated with the PKT project.</li>
			</ul>
		</div>
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";

export default {
  components: {
    SimpleHeader,
  },
  head() {
    return {
      title: "Trademark - PKT",
      meta: [{ hid: "description", name: "description", content: "The world’s first bandwidth-hard blockchain protocol, built to incentivize the growth of infrastructure." }],
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
.v-trademark-section-top {
	& .c-simple-header {
		padding: rem(150) 0 rem(50);
		min-height: 1px;
		@include for-width(-tablet-lg) {
			padding: rem(75) 0 rem(50);
		}
		@include for-width(-small-lg) {
			padding: rem(60) 0 rem(25);
			height: auto;
		}
		& .container {
			max-width: rem(1217);
			padding: 0;
			@include for-width(-tablet-lg) {
			  padding: 0 rem(30);
			}
		}
		&__title {
			color: #191944;
			text-align: center;
			max-width: rem(865);
			margin: 0 auto;
		}
	}
}
.v-trademark-section {
	& .container {
		width: 100%;
		max-width: rem(1217);
		margin: 0 auto rem(100);
		@include for-width(-tablet-lg) {
			padding: 0 rem(30);
		}
	}
	&__text {
		@extend %text-main;
		color: $dark_blue;
		margin-bottom: rem(20);
		@include for-width(-tablet) {
		  margin-bottom: rem(10);
		}
	}
	&__list-title {
		@extend %h2-title;
		  margin-bottom: rem(30);
		  @include for-width(-tablet) {
			margin-bottom: rem(15);
			@include font_sizes(16, 26);
		  }
	}
	&__list-subtitle {
		@extend %h3-title;
		  margin-bottom: rem(10);
		  @include for-width(-tablet) {
			margin-bottom: rem(5);
			@include font_sizes(16, 26);
		  }
	}
	& ol,& ul {
		padding-left: rem(50);
		@extend %text-main;
		color: $dark_blue;
		margin-bottom: rem(20);
	}
	& ol li {
		display:list-item;
		list-style-type: decimal;
	}
	& ul li {
		display:list-item;
		list-style-type: disc;
	}
	& ul ul li {
		list-style-type: circle;
	}
}
</style>
