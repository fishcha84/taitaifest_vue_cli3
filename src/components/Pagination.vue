<template>
  <div class="pagination">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{'disabled': !pagination.has_pre}">
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(pagination.current_page - 1)"
          >
            Previous
          </a>
        </li>

        <li
          class="page-item"
          v-for="page in pagination.total_pages"
          :key="page"
          :class="{ 'active': pagination.current_page === page}"
        >
          <a 
            class="page-link" 
            href="#" 
            @click.prevent="changePage(page)"
          >
            {{ page }}
          </a>
        </li>

        <li 
          class="page-item" 
          :class="{'disabled': !pagination.has_next}"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(pagination.current_page + 1)"
          >
            Next
          </a>

        </li>
        
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pagination'],
  data() {
    return {
   
    };
  },
  methods: {
    changePage(pagex) {
      this.$emit('change', pagex);
    },
  },
};
</script>

<style>
</style>