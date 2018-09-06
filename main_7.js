Vue.component('modal', {
  props:['name'],
  data() {
    return {
    }
  }, 
  template:`
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="header"></slot>
          </p>
          <button class="delete" @click="$emit('close')"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">
            <slot>Default content here</slot>
          </div>
        </section>
        <footer class="modal-card-foot">
          <slot name="footer"></slot>
         
        </footer>
      </div>
    </div>
  `
})

new Vue({
  el:'#root',
  data: {
    isOpen: false
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
})