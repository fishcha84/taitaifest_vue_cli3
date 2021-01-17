<template>
  <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
    <div class="tar m-2">
      <button class="btn btn-outline-primary" @click="openProductModal(true)">
        add new product
      </button>
    </div>
    <table class="m-2">
      <thead>
        <tr>
          <th>category</th>
          <th>title</th>
          <th>original_price</th>
          <th>price</th>
          <th>is_enabled</th>
          <th>edit</th>
          <th>del</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span v-if="item.is_enabled === 1">launched</span>
            <span v-else>unlaunched</span>
          </td>
          <td>
            <a class="edit" @click.prevent="openProductModal(false, item)"
              ><i class="fas fa-edit"></i
            ></a>
          </td>
          <td>
            <a class="del" @click.prevent="openDelProductModal(item)"
              ><i class="fas fa-trash-alt"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pagination="pagination" @change="getProducts" />

    <!-- productModal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              v-if="this.isNew === true"
              class="modal-title"
              id="exampleModalLabel"
            >
              add new product
            </h5>
            <h5 v-else class="modal-title" id="exampleModalLabel">
              edit product
            </h5>
          </div>

          <div class="modal-body">
            <div>
              <label for="imageurl"> enter image url</label>
              <input
                id="imageurl"
                class="form-control"
                type="text"
                v-model="product.imageUrl"
              />
            </div>

            <div>
              <label for="uploadimagefile"> OR upload image file</label>
              <input
                id="uploadimagefile"
                class="form-control"
                type="file"
                ref="files"
                :src="product.imageUrl"
                @change="uploadFile"
              />
            </div>
            <div v-if="product.imageUrl">
              <label for="imagepreview">image preview</label>
              <div>
                <img
                  id="imagepreview"
                  style="width: 80px; height: 80px"
                  :src="product.imageUrl"
                />
              </div>
            </div>
            <div>
              <label for="title">title</label>
              <input
                id="title"
                class="form-control"
                name="title"
                type="text"
                v-model="product.title"
              />
            </div>

            <div>
              <label for="category">category</label>
              <input
                id="category"
                class="form-control"
                name="category"
                type="text"
                v-model="product.category"
              />
            </div>

            <div>
              <label for="unit">unit</label>
              <input
                id="unit"
                class="form-control"
                name="unit"
                type="text"
                v-model="product.unit"
              />
            </div>

            <div>
              <label for="origin_price">original price</label>
              <input
                id="origin_price"
                class="form-control"
                name="origin_price"
                type="text"
                v-model="product.origin_price"
              />
            </div>

            <div>
              <label for="price">price</label>
              <input
                id="price"
                class="form-control"
                name="price"
                type="text"
                v-model="product.price"
              />
            </div>

            <div>
              <label for="description">description</label>
              <input
                id="description"
                class="form-control"
                name="description"
                type="text"
                v-model="product.description"
              />
            </div>

            <div>
              <label for="content">content</label>
              <input
                id="content"
                class="form-control"
                name="content"
                type="text"
                v-model="product.content"
              />
            </div>

            <div>
              <input
                name="is_enabled"
                :true-value="1"
                :false-value="0"
                type="checkbox"
                v-model="product.is_enabled"
              />launched
            </div>

            <div class="jcsb">
              <button
                type="button"
                class="btn btn-outline-secondary jcsbbtn"
                data-dismiss="modal"
              >
                cancel
              </button>
              <button
                type="button"
                class="btn btn-outline-primary jcsbbtn"
                @click="updateProduct"
                v-if="isNew === true"
              >
                add new product
              </button>
              <button
                type="button"
                class="btn btn-primary jcsbbtn"
                @click="updateProduct"
                v-else
              >
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- delProductModal -->
    <div class="modal" tabindex="-1" id="delProductModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" style="color: red">del</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure to del {{ product.title }}?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              No, I regret.
            </button>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="delProduct"
            >
              Yes, make it like an ex-girlfriend.
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import $ from "jquery";

import Pagination from "../components/Pagination.vue";

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

export default {
  data() {
    return {
      products: [],
      product: {},
      isNew: true,
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    ...mapActions(["updateLoading"]),
    getProducts(page = 1) {
      this.$store.dispatch("updateLoading", true);
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.products = response.data.products;
          vm.pagination = response.data.pagination;
          vm.$store.dispatch("updateLoading", false);
        }
      });
    },
    openProductModal(isNew, item) {
      if (isNew) {
        this.isNew = true;
        this.product = {};
      } else {
        this.isNew = false;
        // this.product=Object.assign({},item);
        this.product = { ...item };
      }
      $("#productModal").modal("show");
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let method = "post";
      const vm = this;

      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.product.id}`;
        method = "put";
      }
      vm.$http[method](api, { data: vm.product }).then((response) => {
        if (response.data.success) {
          $("#productModal").modal("hide");
          vm.getProducts();
        }
      });
    },
    uploadFile() {
      const vm = this;
      const uploadedFile = this.$refs.files.files[0];
      const fd = new FormData();
      fd.append("file-to-upload", uploadedFile);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.$http
        .post(api, fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.success) {
            vm.$set(vm.product, "imageUrl", response.data.imageUrl);
          }
        });
    },
    openDelProductModal(item) {
      const vm = this;
      $("#delProductModal").modal("show");
      vm.product = { ...item };
    },
    delProduct() {
      const vm = this;
      vm.$store.dispatch("updateLoading", true);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.product.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch("updateLoading", false);
          vm.getProducts();
          $("#delProductModal").modal("hide");
        }
      });
    },
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
  created() {
    this.getProducts();
  },
};
</script>
