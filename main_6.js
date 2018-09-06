// shared Event instance
// for the communication between any components
// window.Event = new Vue();

// EMCA2016 syntax
window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event,data=null) {
    this.vue.$emit(event, data);
  }

  listen(event,callback) {
    this.vue.$on(event, callback);
  }
}

// declare component before the Vue instance
Vue.component('coupon', {
  props:[],
  data() {
    return {
    }
  }, 
  template:`
    <input type="text" placeholder="Enter your coupon code" @keyup.enter="onCouponApplied"/>
  `,
  methods: {
    onCouponApplied() {
      Event.fire('applied')
      // Event.$emit('applied')
    }
  }
})



new Vue({
  el:'#root',
  data: {
    couponApplied: false
  }, 
  created() {
    Event.listen('applied', ()=> alert('Handling it'))
    // Event.$on('applied', ()=> alert('Handling it'))
  }
  // methods: {
  //   onCouponApplied() {
  //     this.couponApplied = true
  //   }
  // }
})