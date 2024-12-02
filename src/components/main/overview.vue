<template>
  <div class="grid grid-cols-3 gap-x-12">
    <!-- Box #1 -->
    <div class="overview-box bg-[#FFF3EC]">
      <!-- icon -->
      <div class="icon-section">
        <div class="icon-box bg-[#FBCFB6]">
          <v-icon>svg:alert</v-icon>
        </div>
      </div>

      <!-- content -->
      <div class="pr-16">
        <p>دلیل انتخاب ما</p>
      </div>

      <div class="box-label">چرا یکتیوبر را انتخاب کنیم؟</div>

      <div class="box-description">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
        است، و برای شرایط فعلی تکنولوژی مورد است.
      </div>
    </div>
    <!-- Box #2 -->
    <div class="overview-box bg-[#F4F0FF]">
      <!-- icon -->
      <div class="icon-section">
        <div class="icon-box bg-[#B6B9FB]">
          <v-icon>svg:profile</v-icon>
        </div>
      </div>

      <!-- content -->
      <div class="pr-16">
        <p>مشتریان ما</p>
      </div>

      <div class="box-label">1200+</div>

      <div class="box-description">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان است
      </div>

      <img src="/images/avatars.png" class="w-[92px] mt-3" />
    </div>
    <!-- Box #3 -->
    <div class="overview-box bg-[#FFF0F3]">
      <!-- icon -->
      <div class="icon-section">
        <div class="icon-box bg-[#FBB6D3]">
          <v-icon>svg:dollarCircle</v-icon>
        </div>
      </div>

      <!-- content -->
      <div class="pr-16">
        <p>درآمد ها</p>
      </div>

      <div class="box-label">10,000$+</div>

      <div class="box-description">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان چاپگرها و متون بلکه روزنامه برای شرایط فعلی تکنولوژی مورد است.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YektuberOverview",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
.overview-box {
  @apply relative rounded-[34px] p-[24px_32px];

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 76px;
    width: 24px;
    height: 24px;
    border-radius: 0 34px 0 0;
    box-shadow: 6px -6px 0 0px white;
  }

  &::after {
    content: "";
    position: absolute;
    top: 64px;
    right: 0;
    width: 24px;
    height: 24px;
    border-radius: 0 34px 0 0;
    box-shadow: 6px -6px 0 2px white;
  }

  .icon-section {
    @apply p-3 pt-0 bg-white w-fit absolute top-0 right-0 rounded-[0_0_0_34px];

    .icon-box {
      @apply size-[52px] rounded-full flex justify-center items-center;

      .v-icon {
        @apply stroke-[#292D32];
      }
    }
  }

  .box-label {
    @apply mt-8 text-[30px] font-bold;
  }

  .box-description {
    @apply text-[14px] text-justify mt-5 leading-[26px];
  }
}
</style>
