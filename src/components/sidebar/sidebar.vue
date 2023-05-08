<template>
  <Transition name="TOGGLE-SIDEBAR">
    <div class="SIDEBAR" v-if="show">
      <sidebarItem
        v-for="item in routes"
        :icon="item.icon"
        :title="item.title"
        :link="item.link"
      />
      <sidebarItem
        v-for="item in 10"
        icon="fa fa-square"
        title="item"
        link="item"
      />
      <!-- @click="toggle()" -->
    </div>
  </Transition>
</template>

<script>
import sidebarItem from "./sidebarItem.vue";
export default {
  name: "sidebar",
  components: { sidebarItem },
  data() {
    return {
      routes: [
        {
          icon: "fa fa-bars",
          title: "To Do",
          link: "/todo",
        },
        {
          icon: "fa fa-truck",
          title: "Count supply",
          link: "/supply",
        },
        {
          icon: "fa fa-comments",
          title: "Chat",
          link: "/chat",
        },
        {
          icon: "fa fa-tools",
          title: "Setting",
          link: "/setting",
        },
      ],
    };
  },
  computed: {
    show() {
      return this.$store.getters.sidebar;
    },
  },
};
</script>

<style scoped>
.SIDEBAR {
  position: absolute;
  top: 7%;
  left: 1%;
  bottom: 1%;
  padding: 5px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: rgb(250, 250, 250, 0.7);
  backdrop-filter: blur(3px);
  border: 1px solid var(--teal);
  border-radius: 5px;
  transition: 0.2s all;
  z-index: 1;
}

.TOGGLE-SIDEBAR-enter-from,
.TOGGLE-SIDEBAR-leave-to {
  opacity: 0;
  translate: -100% 0;
}
</style>
