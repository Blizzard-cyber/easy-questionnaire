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
            { month: '5-7', 用户数: 7.0, 问卷数: 3.9 },
            { month: '5-8', 用户数: 6.9, 问卷数: 4.2 },
            { month: '5-9', 用户数: 9.5, 问卷数: 5.7 },
            { month: '5-10', 用户数: 14.5, 问卷数: 8.5 },
            { month: '5-11', 用户数: 18.4, 问卷数: 11.9 },
            { month: '5-12', 用户数: 21.5, 问卷数: 15.2 },
            { month: '5-13', 用户数: 25.2, 问卷数: 17.0 },
            { month: '5-14', 用户数: 26.5, 问卷数: 16.6 },
            { month: '5-15', 用户数: 23.3, 问卷数: 14.2 },
            { month: '5-16', 用户数: 18.3, 问卷数: 10.3 },
            { month: '5-17', 用户数: 13.9, 问卷数: 6.6 },
            { month: '5-18', 用户数: 9.6, 问卷数: 4.8 },
            { month: '5-19', 用户数: 7.0, 问卷数: 4.0 },
            { month: '5-20', 用户数: 5.7, 问卷数: 3.3 },
            { month: '5-21', 用户数: 5.2, 问卷数: 3.0 },
            { month: '5-22', 用户数: 4.5,
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