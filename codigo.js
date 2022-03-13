const app = new Vue({
    el: '#app',
    data: {
      seleccionadoClass: null,
        productos : [
            {
              id: 1,
              nombre: 'Cámara Digital',
              img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg'
            },
            {
              id: 2,
              nombre: 'Set VR',
              img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg'
            },
            {
              id: 3,
              nombre: 'PC All in One',
              img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
            },
            {
              id: 4,
              nombre: 'Set Maquillaje',
              img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg'
            }
    ],
    methods: {
      seleccionadoClassClick() {
        console.log(this.seleccionadoClass)
      }
    },
    
}});
