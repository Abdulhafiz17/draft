<template>
  <h3>Ta'minotda olingan mahsulotlar tan narxini hisoblash</h3>
  <div class="row">
    <div class="col-md-6">
      <h5>Mahsulotlar summasi: {{ _.format(products_balance) }}</h5>
    </div>
    <div class="col-md-6">
      <h5>Chiqimlar summasi: {{ _.format(expense_balance) }}</h5>
    </div>
  </div>
  <hr />
  <div class="row">
    <div class="col-md-5">
      <div class="responsive-y" style="max-height: 85vh">
        <table class="table table-sm table-hover">
          <thead>
            <tr>
              <th style="width: 45%">Mahsulot</th>
              <th style="width: 25%">Narx</th>
              <th style="width: 25%">Hajm</th>
              <th style="width: 5%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <form @submit.prevent="addProduct(new_product)" id="form">
                  <input
                    product-name
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="nomi, artikul . . ."
                    required
                    v-model="new_product.name"
                  />
                </form>
              </td>
              <td>
                <input
                  form="form"
                  type="number"
                  min="0"
                  step="any"
                  class="form-control form-control-sm"
                  placeholder="narx"
                  required
                  v-model="new_product.price_1"
                />
              </td>
              <td>
                <input
                  form="form"
                  type="number"
                  min="0"
                  step="any"
                  class="form-control form-control-sm"
                  placeholder="hajm"
                  required
                  v-model="new_product.quantity"
                />
              </td>
              <td>
                <button class="btn btn-sm btn-outline-primary" form="form">
                  <i class="fa fa-plus" />
                </button>
              </td>
            </tr>
            <tr v-for="(item, index) in products_for_count" :key="item">
              <td>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="nomi, artikul . . ."
                  required
                  readonly
                  v-model="item.name"
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  step="any"
                  class="form-control form-control-sm"
                  placeholder="narx"
                  required
                  readonly
                  v-model="item.price_1"
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  step="any"
                  class="form-control form-control-sm"
                  placeholder="hajm"
                  required
                  readonly
                  v-model="item.quantity"
                />
              </td>
              <td>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="removeProduct(index)"
                >
                  <i class="fa fa-trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-2">
      <button
        class="btn btn-sm btn-outline-success"
        @click="getExpensePrice(products_for_count)"
      >
        <i class="fa fa-sync" /> Hisoblash
      </button>
    </div>
    <div class="col-md-5">
      <div class="responsive-y" style="max-height: 85vh">
        <table class="table table-sm table-hover">
          <thead>
            <tr>
              <th style="width: 50%">Mahsulot</th>
              <th style="width: 25%">Narx</th>
              <th style="width: 25%">Tan narx</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in counted_products" :key="item">
              <td>{{ item.name }}</td>
              <td>{{ _.format(item.price_1) }}</td>
              <td>{{ _.format(item.price_2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import { error } from "@/utils/utils";
export default {
  name: "Supply",
  emits: ["setloading"],
  data() {
    return {
      _: Intl.NumberFormat(),
      new_product: {
        name: null,
        price_1: null,
        price_2: null,
        quantity: null,
        edit: false,
      },
      products_balance: null,
      expense_balance: null,
      products_for_count: [],
      counted_products: [],
    };
  },
  created() {
    this.$emit("setloading", false);
    this.post();
  },
  methods: {
    post() {},
    addProduct(product) {
      this.products_balance = null;
      this.products_for_count.push(product);
      this.new_product = {
        name: null,
        price_1: null,
        price_2: null,
        quantity: null,
      };
      this.products_for_count.forEach((product) => {
        this.products_balance += product.price_1 * product.quantity;
      });
      document.querySelector("[product-name]").focus();
    },
    removeProduct(index) {
      this.products_balance = null;
      this.products_for_count.splice(index, 1);
      this.products_for_count.forEach((product) => {
        this.products_balance += product.price_1 * product.quantity;
      });
    },
    getExpensePrice(products) {
      //   this.$emit("setloading", true);
      swal({
        icon: "info",
        title: "Chiqim summasini kiriting",
        closeOnEsc: false,
        closeOnClickOutside: false,
        content: {
          element: "input",
          attributes: {
            type: "number",
            min: "0",
            step: "any",
            class: "form-control form-control-sm",
            placeholder: "chiqim summasi",
          },
        },
      }).then((value) => {
        if (value) {
          this.expense_balance = value;
          this.countProductsPrice(products, this.products_balance, value);
        } else {
          error().then(() => {
            this.$emit("setloading", false);
          });
        }
      });
    },
    countProductsPrice(products, products_price, expense_price) {
      let percent = null,
        added_price = null;
      products.forEach((product) => {
        percent = (product.price_1 * product.quantity * 100) / products_price;
        added_price = (expense_price * percent) / 100 / product.quantity;
        product.price_2 = product.price_1 + added_price;
        this.counted_products.push(product);
      });
    },
  },
};
</script>
