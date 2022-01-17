<template>
  <div class="v-community">
    <section class="v-community-section">
      <BigHeader
        :title="this.$t('community.big_header_title')"
        :subtitle="this.$t('community.big_header_subtitle')"
        :sometext="this.$t('community.big_header_text')"
        bg="/img/community-header-bg.jpg"
        :email="true"
      />
    </section>
    <section class="v-community-section">
      <CommunityList
        :title="this.$t('community.resources_title')"
        :text="this.$t('community.resources_text')"
        :list="resources_list"
      />
    </section>
    <section class="v-community-section">
      <CommunityList
        :title="this.$t('community.join_title')"
        :text="this.$t('community.join_text')"
        :list="join_list"
      />
    </section>
  </div>
</template>

<script>
import BigHeader from "~/components/Base/BigHeader";
import CommunityList from "~/components/Community/List";

export default {
  components: {
    BigHeader,
    CommunityList
  },
  head() {
    return {
      title: this.$t("community.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("home.meta_descr") }],
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
      resources_list: [
        {
          title: this.$t("community.resources_list_title"),
          text:this.$t("community.resources_list_text"),
          img: "/img/community/telegram.svg",
          link: "https://t.me/joinchat/VTzmfU6P3YB7WrYx",
        },
      ],
      join_list: [
        {
          title: this.$t("community.join_list_item_title_1"),
          text: this.$t("community.join_list_item_text_1"),
          img: "/img/community/pkt.svg",
          link: "https://pkt.chat",
        },
        // {
        //   title: "PKT Cash - Community Discussion",
        //   text:
        //     "Community organized chat for discussing PKT project",
        //   img: "/img/community/telegram.svg",
        //   link: "https://t.me/pkt_cash",
        // },
        {
          title: this.$t("community.join_list_item_title_3"),
          text: this.$t("community.join_list_item_text_3"),
          img: "/img/community/pkt_discord.png",
          link: "https://discord.gg/pktcash"
        },
        /*{
          title: "Facebook",
          text:
            "Visit PKT on Facebook for current events and to meet the community.",
          img: "/img/community/facebook.svg",
          link: "https://www.facebook.com/PKT-110041354126488",
        },
        {
          title: "Instagram",
          text:
            "Browse PKT on Instagram for valuable insights about the project.",
          img: "/img/community/instagram.svg",
          link: "https://www.instagram.com/pktcash/",
        },*/
        {
          title: this.$t("community.join_list_item_title_4"),
          text: this.$t("community.join_list_item_text_4"),
          img: "/img/community/twitter.svg",
          link: "https://twitter.com/pkt_cash",
        },
        /*{
          title: "Mastadon",
          text:
            "Follow PKT on Mastadon to stay up to date with news and progress.",
          img: "/img/community/mastadon.svg",
          link: "https://www.facebook.com/PKT-110041354126488",
        },*/
        {
          title: this.$t("community.join_list_item_title_5"),
          text: this.$t("community.join_list_item_text_5"),
          img: "/img/community/irc.svg",
          link: "https://kiwiirc.com/nextclient/irc.freenode.net/pkt?nick=pktwow",
        },
        {
          title: this.$t("community.join_list_item_title_6"),
          text: this.$t("community.join_list_item_text_6"),
          img: "/img/community/matrix.svg",
          link: "https://matrix.to/#/#pkt:matrix.org",
        },
      ],
    };
  },
  // async mounted() {
  //   // console.log(process)
  //   if(process.client) {
  //     await setTimeout(() => {
  //       let test = document.querySelector('.needsclick');
  //       if(!test) location.reload();
  //     }, 500)
  //     //
  //   }
  // },
};
</script>

<style lang="scss">
.test {
  @extend %h1-title;
  height: calc(100vh - 100px);
  background-color: grey;
}
</style>
