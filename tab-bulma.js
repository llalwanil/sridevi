Vue.component('tabs', {
  template:`
    <div>
      <div class="tabs is-toggle">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" @click="selectTab(tab)">
            <a>
              <span class="icon is-small"><i :class="tab.icon"></i></span>
              {{ tab.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="class-details">
        <slot></slot>
      </div>
    </div>
  `, 
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selected) {
      this.tabs.forEach( tab => {
        tab.isActive = (tab.name == selected.name)
      })
    }
  }
})

Vue.component('tab', {
  template: `
    <div v-show="isActive"><slot></slot></div>
  `,
  // for taking in data from the directive
  props: {
    name: { required: true },
    icon: { required: true },
    selected: { default: false }
  }, 
  // placeholder for filling data later
  data() {
    return { isActive: false }
  },
  // computed properties so it would not mutate the parent's property
  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, '-')
    }
  },
  // u do not want isActive to be computed,
  // u only want it to create once, then hang
  // it over to the selectTab function in parent
  // component later
  // but how do the parent manipulate children's property
  // all due to that line `this.tabs = this.$children`
  mounted() {
    this.isActive = this.selected
  }
})



new Vue({
  el:'#root'
})