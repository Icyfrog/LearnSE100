var app = new Vue({
    el: '#asppss',
    data: {
      message: 'Hello Vue!'
    }
})
  

var app2 = new Vue({
      el:'#app-1',
      data: {
          mssss:'页面加载与'
      }

  })

var app3 = new Vue({
    el: '#app-',
    data: {
        seen: true
    }

})

var appr = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习' },
            { text: 'learn' },
            {test:'niuniuniu'}
        ]
    }
})

var app5 = new Vue({
    el: '#app-2114',
    data: {
        message: 'hello, Vue,js'
    },
    methods: {
        RM: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
  

var app6 = new Vue({
    el: '#app-2117',
    data: {
        message:'ruarua'
    }
})