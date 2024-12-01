<template>
  <div
    style="background-image: url('/images/bg-pattern.png')"
    class="w-full h-[calc(100vh-102px)] bg-contain bg-center flex justify-between items-center"
  >
    <section class="max-w-[34vw]">
      <div class="flex items-center gap-x-3">
        <div
          class="size-10 rounded-full bg-primary/10 flex justify-center items-center"
        >
          <img src="/images/rocket.png" />
        </div>
        <span class="font-semibold text-[0.92vw]"
          >بهترین ابزارها در اختیار شما خواهد بود.</span
        >
      </div>

      <div
        class="mt-6 text-[3.5vw] font-bold leading-[4.6vw] w-[40vw] tracking-tight"
      >
        <div>پاتوق رشد</div>
        <div class="flex items-center gap-x-4">
          یوتیوبرهای ایرانی
          <img src="/images/avatars.png" class="w-[8vw]" />
          <v-icon class="translate-x-10 translate-y-[90px] -rotate-[15deg]">
            svg:arrowDownSvg
          </v-icon>
        </div>
      </div>

      <div class="mt-16 w-fit">
        <v-btn color="primary" rounded="full" class="h-[56px]">
          شروع نقد کردن درآمد از یوتیوب
          <v-icon class="stroke-white mr-2.5" size="large">
            svg:arrowLeft
          </v-icon>
        </v-btn>
        <v-btn
          color="black"
          rounded="full"
          variant="outlined"
          class="h-[56px] mr-5 border-[1px] border-primary/15"
        >
          ابزارهای یک تیوبر
        </v-btn>
      </div>

      <div v-html="description" class="mt-20 leading-[2vw] text-[0.84vw]"></div>
    </section>

    <section>
      <img
        src="/images/preface-image.png"
        alt="yektuber"
        class="w-[28vw] mr-auto"
      />
    </section>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "YektuberPreface",

  setup() {
    const description = reactive(
      'یکتیوبر <img src="/images/logo.png" class="w-[26px] mx-0.5 inline-block"/> پاتوق یوتیوبرها و مشاورهای حرفه‌ایه که امکانالت رو بررسی می‌کنن و کلی ایده و ابزار برای رشد توی یوتیوب جلوی پات می‌ذارن ، تازه کانالت رو به حساب ادسنس وصل و درآمدت رو هم برات نقد می‌کنن!'
    );
    return { description };
  },

  mounted() {},

  methods: {},
};
</script>
