<template>
  <div class="px-[82px] flex items-center justify-between h-[102px]">
    <div class="flex items-center gap-x-[70px]">
      <img src="/images/text-logo.png" alt="yektuber" class="w-[110px]" />

      <div
        class="flex items-center gap-x-[50px] text-[14px] font-semibold pt-2"
      >
        <div
          v-for="(item, index) in navItems"
          :key="index"
          class="cursor-pointer hover:text-primary/60 py-8"
        >
          <span
            :class="$route.path == item.path ? 'text-primary' : ''"
            class="duration-300 select-none"
            >{{ item.title }}</span
          >
          <v-icon v-if="item.childern.length" class="duration-300"
            >mdi-chevron-down</v-icon
          >

          <!-- Menu -->
          <v-menu
            v-if="item.childern.length"
            activator="parent"
            class="rounded-large"
            transition="slide-y-transition"
            :close-on-content-click="false"
          >
            <!-- Triangle svg -->
            <v-icon class="absolute -top-5 right-8" size="x-large"
              >svg:triangle</v-icon
            >
            <!-- Menu content -->
            <v-card class="flex">
              <!-- Items box -->
              <div class="p-[24px] flex flex-col relative min-w-[463px] z-10">
                <div
                  v-for="(child, childIndex) in item.childern"
                  @mouseover="hoveredItem = child"
                  @mouseleave="hoveredItem = {}"
                  :key="childIndex"
                  class="flex items-center gap-x-2.5 hover:bg-gray-100 duration-300 px-2 py-4 rounded-[12px] cursor-pointer"
                >
                  <div
                    class="size-[55px] bg-gray-100 rounded-[8px] p-2 flex justify-center items-center"
                  >
                    <img :src="child.logo" :alt="child.title" />
                  </div>

                  <div class="flex flex-col gap-y-1.5 w-full">
                    <div class="flex justify-between items-center">
                      <p class="text-[14px] font-semibold">{{ child.title }}</p>
                      <Transition name="slide-up">
                        <v-icon v-if="hoveredItem == child" class="-mt-1 ml-1">
                          svg:arrowLeftColorful
                        </v-icon>
                      </Transition>
                    </div>

                    <p
                      class="text-[13px] text-gray-400 relative w-full inline-block h-[1rem]"
                    >
                      <Transition name="slide-up">
                        <span
                          class="absolute w-full"
                          v-if="hoveredItem == child"
                        >
                          {{ child.caption }}
                        </span>
                        <span class="absolute w-full" v-else
                          >خلاصه ای از توضیح این افزونه اینجاست</span
                        >
                      </Transition>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Details box -->
              <div
                class="relative bg-gray-100 duration-500 overflow-hidden"
                :class="hoveredItem.title ? 'w-[300px]' : 'w-0'"
              >
                <div
                  class="absolute top-0 left-0 h-full p-[20px_24px] w-[300px]"
                >
                  <div>
                    <v-icon class="stroke-[#292D32]">svg:questionBox</v-icon>
                    <span class="text-[14px] font-semibold pr-2">
                      درباره این افزونه:
                    </span>
                  </div>

                  <div class="mt-4">
                    <p class="text-[13px] leading-6 text-gray-400">
                      {{ hoveredItem.description }}
                    </p>
                  </div>
                </div>

                <div class="absolute bottom-0 left-0 w-[166px]">
                  <img src="/images/bg-logo.png" alt="yektuber" />
                </div>
              </div>
            </v-card>
          </v-menu>
        </div>
      </div>
    </div>

    <div class="flex flex-row-reverse items-center gap-x-2">
      <div
        class="bg-primary/5 size-11 rounded-[8px] flex justify-center items-center"
      >
        <v-icon class="stroke-primary">svg:mobile</v-icon>
      </div>

      <div class="text-left">
        <p class="text-[14px] font-semibold">021-2345678</p>
        <p class="text-[11px] text-gray-400">پشتیبانی 24 ساعته</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "YektuberHeader",

  setup() {
    const navItems = reactive([
      {
        title: "صفحه اصلی",
        path: "/",
        icon: "",
        childern: [],
      },
      {
        title: "خدمات و ابزارها",
        path: "",
        icon: "",
        childern: [
          {
            logo: "/images/services/TubeBuddy.png",
            title: "افزونه TubeBuddy",
            caption: "آنالیزور کانال شما",
            description:
              "این افزونه بهتون کمک میکنه که کانالتون سئو بشه و با استفاده از این افزونه میتونید آنالیز دقیقی از آمار و ارقام کانالتون بدست بیارید!",
          },
          {
            logo: "/images/services/TubeRanker.png",
            title: "افزونه Tube Ranker",
            caption: "بهینه‌سازی و مدیریت کانال‌ شما",
            description:
              "می‌شود. این ابزار برای کمک به تولیدکنندگان محتوا طراحی شده تا ویدئوهای خود را برای الگوریتم یوتیوب بهینه کنند و رتبه‌بندی بهتری در نتایج جستجو به دست آورند!",
          },
          {
            logo: "/images/services/UnboxSocial.png",
            title: "افزونه Unbox Social",
            caption: "مدیریت شبکه‌های اجتماعی و تحلیل عملکرد در این پلتفرم‌ها",
            description:
              "Unbox Social یک ابزار یا افزونه است که برای مدیریت شبکه‌های اجتماعی و تحلیل عملکرد در این پلتفرم‌ها استفاده می‌شود. این ابزار بیشتر برای برندها، مارکترها و اینفلوئنسرها طراحی شده است",
          },
          {
            logo: "/images/services/SocialBlade.png",
            title: "افزونه Social Blade",
            caption: "تحلیل کانال‌های شما",
            description:
              "افزونه Social Blade یک ابزار تحلیل و مانیتورینگ است که برای مشاهده آمار و تحلیل‌های شبکه‌های اجتماعی طراحی شده است. این افزونه معمولاً به صورت یک افزونه مرورگر ارائه می‌شود و اطلاعاتی مانند تعداد دنبال‌کنندگان، میانگین بازدیدها، نرخ رشد، و درآمد تخمینی کاربران را نمایش می‌دهد.",
          },
          {
            logo: "/images/services/VidIQ.png",
            title: "افزونه VidIQ",
            caption: "تحلیل عملکرد ویدئوهای خود",
            description:
              "افزونه VidIQ یک ابزار کاربردی است که به تولیدکنندگان محتوا در یوتیوب کمک می‌کند تا عملکرد ویدئوهای خود را تحلیل کنند و استراتژی‌های بهینه‌تری برای رشد کانال خود تدوین نمایند.",
          },
        ],
      },
      {
        title: "مشاوره",
        path: "/consultation",
        icon: "",
        childern: [],
      },
      {
        title: "تعرفه‌ها",
        path: "/tariffs",
        icon: "",
        childern: [],
      },
      {
        title: "وبلاگ",
        path: "/weblog",
        icon: "",
        childern: [],
      },
      {
        title: "تماس با ما",
        path: "/contactUs",
        icon: "",
        childern: [],
      },
      {
        title: "درباره ما",
        path: "/aboutUs",
        icon: "",
        childern: [],
      },
    ]);
    const hoveredItem = ref({});
    return { navItems, hoveredItem };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss"></style>
