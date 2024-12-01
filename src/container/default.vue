<template>
  <div>
    <default-header></default-header>

    <main>
      <router-view v-slot="{ Component }">
        <div class="px-[80px]">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </div>
      </router-view>
    </main>
  </div>
</template>
