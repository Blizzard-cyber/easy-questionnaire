<template>
    <div  :id="id">
    
    </div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {
         // 在一行中保存多个城市的数据，需要将数据转换成
        // {month: 'Jan', city: 'Tokyo', temperature: 3.9}
        const data = [
            { month: '5-7', Tokyo: 7.0, London: 3.9 },
            { month: '5-8', Tokyo: 6.9, London: 4.2 },
            { month: '5-9', Tokyo: 9.5, London: 5.7 },
            { month: '5-10', Tokyo: 14.5, London: 8.5 },
            { month: '5-11', Tokyo: 18.4, London: 11.9 },
            { month: '5-12', Tokyo: 21.5, London: 15.2 },
            { month: '5-13', Tokyo: 25.2, London: 17.0 },
            { month: '5-14', Tokyo: 26.5, London: 16.6 },
            { month: '5-15', Tokyo: 23.3, London: 14.2 },
            { month: '5-16', Tokyo: 18.3, London: 10.3 },
            { month: '5-17', Tokyo: 53.9, London: 6.6 },
            { month: '5-18', Tokyo: 9.6, London: 4.8 }
        ];
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
        dv.transform({
            type: 'fold',
            fields: ['用户数', '问卷数'], // 展开字段集
            key: 'city', // key字段
            value: 'temperature' // value字段
        });
        const chart = new G2.Chart({
            container: this.id,
            forceFit: true,
            // padding: '0',
            height: 300
        });
        chart.source(dv, {
            month: {
                range: [0, 1]
            }
        });
        chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        chart.axis('temperature', {
            label: {
                formatter: val => {
                    return val ;
                }
            }
        });
        chart
            .line()
            .position('month*temperature')
            .color('city')
            .shape('smooth');
        chart
            .point()
            .position('month*temperature')
            .color('city')
            .size(4)
            .shape('circle')
            .style({
                stroke: '#fff',
                lineWidth: 1
            });
        chart.render();
        const e = document.createEvent('Event')
        e.initEvent('resize', true, true)
        window.dispatchEvent(e)
    }
}
</script>
<style scoped>

</style>