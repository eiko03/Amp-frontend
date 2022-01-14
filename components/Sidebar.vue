<template>
    <v-card
      width="256"
      height="auto"
      class="rounded-lg px-4 py-2"
      style="margin-top: 2rem; position: fixed; box-shadow: rgb(0 0 0 / 15%) 0px 0px 50px;"
    >
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          flat
        >
        <v-list-item-group
        v-model="selectedItem"
        color="black"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.url"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>
<script>
  export default {
    data () {
      return {
        selectedItem: 0,
        items: [
          { title: 'Home', icon: 'mdi-home', url: '/' },
          { title: 'Chat', icon: 'mdi-chat', url: '/chat' },
          { title: 'Settings', icon: 'mdi-cogs', url: '/settings' },
        ],
      }
    },
  }
</script>
