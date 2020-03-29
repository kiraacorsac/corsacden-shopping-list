<template>
  <div class="shopping-list">
    <transition-group name="list" tag="ul">
      <NewItem @requested="add" :key="'new'" ref="newItem" />
      <ShoppingItem
        v-for="item in shoppingList.filter(item=>!item.done)"
        :key="item._id"
        :item="item"
        @bought="remove"
      />
    </transition-group>

    <div
      class="msg empty"
      v-if="loaded &&  shoppingList.filter(item=>!item.done).length === 0"
    >¯\_(ツ)_/¯</div>
    <div class="msg error" v-if="error">╥﹏╥</div>
    <Spinner v-if="!loaded && !error" class="spinner" />
  </div>
</template>

<script>
import axios from "axios";
import ShoppingItem from "./ShoppingItem";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
export default {
  components: {
    ShoppingItem,
    NewItem,
    Spinner
  },
  props: ["apiKey"],
  data() {
    return {
      error: false,
      loaded: false,
      shoppingList: [],
      penis: "pepe"
    };
  },

  methods: {
    remove: function(item) {
      this.shoppingList = this.shoppingList.filter(i => i !== item);

      axios.put(
        `${this.$db}/${item._id}`,
        { done: true },
        {
          headers: {
            "x-api-key": this.apiKey
          }
        }
      );
    },
    add: function(item) {
      axios
        .post(
          this.$db,
          { name: item },
          {
            headers: {
              "x-api-key": this.apiKey
            }
          }
        )
        .then(data => {
          this.shoppingList.push(data.data);
          this.$refs.newItem.itemName = "";
          // this.shoppingList.sort((i, i2) => i._id - i2._id);
        })
        .catch(err => {
          this.shoppingList = [];
          this.error = true;
          console.error(err);
        });
    }
  },
  mounted() {
    this.$nextTick().then(() =>
      axios
        .get(this.$db, {
          headers: {
            "x-api-key": this.apiKey
          }
        })
        .then(data => {
          this.loaded = true;
          this.shoppingList = data.data;
          // this.shoppingList.sort((i, i2) => i._id - i2._id);
        })
        .catch(err => {
          this.error = true;
          console.error(err);
        })
    );
  }
};
</script>

<style>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
}

.list-enter,
.list-leave-to {
  animation: removed-item-animation 0.6s cubic-bezier(0.55, -0.04, 0.91, 0.94)
    forwards;
  /*transform origin is moved to the bottom left corner*/
  transform-origin: 0% 100%;
}

@keyframes removed-item-animation {
  0% {
    opacity: 1;
    transform: rotateZ(0);
  }

  100% {
    opacity: 0;
    transform: translateY(600px) rotateZ(90deg);
  }
}

.item {
  background: var(--primary-color);
  color: var(--darker-color);
  margin: 10px 0px;

  font-family: var(--font);
  font-size: 4em;

  padding: 3px;
  padding-top: 25px;
  padding-left: 45px;

  border-left: 6px solid var(--darker-color);
  border-bottom: 3px solid var(--darker-color);
}

.shopping-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 95vw;
}

.msg {
  color: #f0eab3;
  font-size: 3em;
}
</style>