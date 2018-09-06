Vue.component('message', {
  props:['title', 'body'],
  data() {
    return {
      isVisible: true
    }
  }, 
  template:`
    <article class="message">
      <div class="message-header">
        {{ title }}
        <button class="delete is-pulled-right" @click="isVisible = !isVisible" v-if="isVisible"></button>
        <button class="is-pulled-right" @click="isVisible = !isVisible" v-else><i class="fa fa-angle-down"></i></button>
      </div>
      <div class="message-body" v-if="isVisible">
        {{ body }}
      </div>
    </article>
  `
  // methods: {
  //   toggleMessage() {
  //     this.isVisible = !this.isVisible
  //   }
  // }
})



Vue.component('task', {
  template:'<li><slot></slot></li>'

})

Vue.component('task-list', {
  template:"<div><task v-for='t in tasks'>{{t.task}}</task></div>",
  data() {
    return {
      tasks: [
        { task: 'Go to the store', complete: true },
        { task: 'Go to the email', complete: false },
        { task: 'Go to the farm', complete: true },
        { task: 'Go to the company', complete: false }
      ]
    }
  }
})

new Vue({
  el:'#root',
  // data: {
    
  // }
})