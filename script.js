let vm = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data:() => ({
    c: [
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0]
    ],
    solved: [
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0]
    ],
    fab: false,
    test: 0
  }),
  computed: {
    counted() {
      let x = [], y = [], px = 0, py = 0, c = this.c;

      for (let i = 0; i < 8; i++) {
        x.push([0])
        y.push([0])

        px = 0
        py = 0
        for(let j = 0; j < 8; j++) {

          if(c[i][j] == px) {
            x[i][x[i].length-1]++
          } else {
            x[i].push(1)
            px = (px == 1) ? 0 : 1
          }

          // prev = 0
          if(c[j][i] == py) {
            y[i][y[i].length-1]++
          } else {
            y[i].push(1)
            py = (py == 1) ? 0 : 1
          }
        }
      }

      x = x.map(x => x.filter((x, i) => i%2 == 1))
      y = y.map(x => x.filter((x, i) => i%2 == 1))

      return {x, y}
    },
    ans() {
      return this.c.map(x => x.slice())
    }
  },
  methods: {
    check(x, y) {
      Vue.set(this.solved[x], y, 1)
      if(this.solved[x][y] == this.ans[x][y]) {
        Vue.set(this.ans[x], y, 0)
      }
    },
    reset() {
      this.solved = this.c.map(val => val.map(val => 0))
    },
    refresh() {
      this.reset()
      this.c = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
      ]
      this.c.forEach((x, i) => {
        this.c[i] = x.map(x => Math.floor(Math.random() * Math.floor(2)))
      })
      //Vue.set(this.c[0], 0, Math.floor(Math.random() * Math.floor(2)))
      console.log(this.c)
    }
  },
  created() {
    this.refresh()
  },
  mounted() {
    // setInterval(() => {
    //   this.test = Date.now()
    // }, 1)
  }
})