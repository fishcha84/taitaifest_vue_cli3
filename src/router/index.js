import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'INDEX',
    component: Home,
    meta: {
      breadcrumb: [{ name: 'Home' }],
    },
  },
  {
    path: '/home',
    name: 'HOME',
    component: Home,
    meta: {
      breadcrumb: [{ name: 'Home' }],
    },
  },
  {
    path: '/news',
    name: 'NEWS',
    component: () => import('../views/News.vue'),
    meta: {
      breadcrumb: [{ name: 'Home', link: '/home' }, { name: 'News' }],
    },
  },

  {
    path: '/lineup',
    name: 'LINEUP',
    component: () => import('../views/Lineup.vue'),
    meta: {
      breadcrumb: [{ name: 'Home', link: '/home' }, { name: 'Lineup' }],
    },
  },
  {
    path: '/result',
    name: 'RESULT',
    component: () => import('../views/Result.vue'),
    meta: {
      breadcrumb: [{ name: 'Home', link: '/home' }, { name: 'Lineup', link: '/lineup' }, { name: 'Result' }],
    },
  },

  {
    path: '/timetable',
    name: '節目表',
    component: () => import('../views/Timetable.vue'),
    meta: {
      breadcrumb: [{ name: 'Home', link: '/home' }, { name: 'Timetable' }],
    },
  },
  {
    path: '/shopping',
    name: 'SHOPPING',
    component: () => import('../views/Shopping.vue'),
    meta: {
      breadcrumb: [{ name: 'Home', link: '/home' }, { name: 'Shopping' }],
    },
    children: [
      {
        name: 'CUSTOMERORDERS',
        path: 'customer_orders',
        component: () => import('../views/CustomerOrders.vue'),
        meta: {
          breadcrumb: [{ name: 'Home', link: '/home' }, { name: 'Shopping' }, { name: 'step 1/3: Select' }],
        },
      },
      {
        name: 'CUSTOMERCART',
        path: 'customer_cart',
        component: () => import('../views/CustomerCart.vue'),
        meta: {
          breadcrumb: [
            { name: 'Home', link: '/home' },
            { name: 'Shopping' },
            { name: 'step 1/3: Select', link: '/shopping/customer_orders' },
            { name: 'step 2/3: Cart' },
          ],
        },
      },
      {
        name: 'CUSTOMERFAVORITE',
        path: 'customer_favorite',
        component: () => import('../views/CustomerFavorite.vue'),
        meta: {
          breadcrumb: [
            { name: 'Home', link: '/home' },
            { name: 'Shopping' },
            { name: 'step 1/3: Select', link: '/shopping/customer_orders' },
            { name: 'step 2.5/3: Favorite' },
          ],
        },
      },
      {
        name: 'CUSTOMERCHECKOUT',
        path: 'customer_checkout/:orderId',
        component: () => import('../views/CustomerCheckout.vue'),
        meta: {
          breadcrumb: [
            { name: 'Home', link: '/home' },
            { name: 'Shopping' },
            { name: 'step 1/3: Select', link: '/shopping/customer_orders' },
            { name: 'step 2/3: Cart', link: '/shopping/customer_cart' },
            { name: 'step 3/3: Check' },
          ],
        },
      },

      {
        name: 'SIGNIN',
        path: 'signin',
        component: () => import('../views/Signin.vue'),
        meta: {
          breadcrumb: [
            { name: 'Home', link: '/home' },
            { name: 'Shopping', link: '/shopping/customer_orders' },
            { name: 'Vendor Owners' },
          ],
        },
      },

      {
        name: 'ADMIN',
        path: 'admin',
        component: () => import('../components/Dashboard.vue'),
        children: [
          {
            name: 'PRODUCTS',
            path: 'products',
            component: () => import('../views/Products.vue'),
            meta: {
              requiresAuth: true,
              breadcrumb: [
                { name: 'Home', link: '/home' },
                { name: 'Shopping', link: '/shopping/customer_orders' },
                { name: 'Vendor Owners' },
                { name: 'Add Products' },
              ],
            },
          },

          {
            name: 'ORDERS',
            path: 'orders',
            component: () => import('../views/Orders.vue'),
            meta: {
              requiresAuth: true,
              breadcrumb: [
                { name: 'Home', link: '/home' },
                { name: 'Shopping', link: '/shopping/customer_orders' },
                { name: 'Vendor Owners' },
                { name: 'Check Orders' },
              ],
            },
          },
          {
            name: 'COUPONS',
            path: 'coupons',
            component: () => import('../views/Coupons.vue'),
            meta: {
              requiresAuth: true,
              breadcrumb: [
                { name: 'Home', link: '/home' },
                { name: 'Shopping', link: '/shopping/customer_orders' },
                { name: 'Vendor Owners' },
                { name: 'Create Coupons' },
              ],
            },
          },
        ],
      },
    ],
  },

  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/Faq.vue'),
    meta: {
      breadcrumb: [{ name: 'Home', link: '/home' }, { name: 'Faq' }],
    },
  },

  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes,
})

export default router
