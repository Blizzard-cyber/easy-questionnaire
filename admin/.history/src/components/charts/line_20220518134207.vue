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
            { month: '5-7', 用户数: 1, 问卷数: 0 },
            { month: '5-8', 用户数: 5, 问卷数: 6 },
            { month: '5-9', 用户数: 13, 问卷数: 17 },
            { month: '5-10', 用户数: 22, 问卷数: 36 },
            { month: '5-11', 用户数: 28, 问卷数: 52},
            { month: '5-12', 用户数: 38, 问卷数: 59 },
            { month: '5-13', 用户数: 48, 问卷数: 76 },
            { month: '5-14', 用户数: 56, 问卷数: 86 },
            { month: '5-15', 用户数: 69, 问卷数: 89 },
            { month: '5-16', 用户数: 153, 问卷数: 96 },
            { month: '5-17', 用户数: 236, 问卷数: 106 },
            { month: '5-18', 用户数: 275, 问卷数: 115 },
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