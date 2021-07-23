<template>
<div>
<div style="width:500px;height:500px" ref="chart"></div>
</div>
</template>
<script>
const echarts = require('echarts');
export default{
data () {
return {};
},
mounted () {
    this.initCharts();
    this.init()
    window.addEventListener('resize', this.handleResize)
},
methods: {
initCharts () {
let myChart = echarts.init(this.$refs.chart);
// 绘制图表
myChart.setOption({
    
    title: { text: '在Vue中使用echarts' },
    tooltip: {},
    xAxis: {
    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
    }]
    });
    window.onresize = myChart.resize;
},
    handleResize() {
            this.myChart && this.myChart.resize()
        },
    beforeDestroy() {
        this.myChart && this.myChart.dispose()
        this.myChart = null
        window.removeEventListener('resize', this.handleResize)
    },
},
}
</script>