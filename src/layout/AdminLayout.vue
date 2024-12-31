<script setup>
import { RouterLink } from 'vue-router';

const menus = [
    {
        name: 'Dashboard',
        routeName: 'admin-dashboard',
    },
    {
        name: 'Users',
        routeName: 'admin-users-list',
    },
    {
        name: 'Travel List',
        routeName: 'admin-travel-list',
    },
    {
        name: 'Reviews',
        routeName: 'admin-review-list',
    },
    {
        name: 'Logout',
        routeName: 'admin-login',
    },
]

</script>

<template>
  <div class="drawer drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content -->
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li><a class="text-2xl font-bold"> Admin Dashboard </a></li>
        <!-- Sidebar content here -->
        <li v-for="menu in menus" :key="menu.name">
            <RouterLink :to="{ name: menu.routeName }">{{ menu.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

