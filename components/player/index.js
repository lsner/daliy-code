//Component Object
Component({
  properties: {
    innerText: {
      type: String,
      value: 'default value',
      observer: function () { 
        console.log("=======测试observer======")
      }
    }
  },
  data: {
    initData:{
      
    }
  },
  methods: {

  },
  created: function () {

  },
  attached: function () {

  },
  ready: function () {

  },
  moved: function () {

  },
  detached: function () {

  },
});