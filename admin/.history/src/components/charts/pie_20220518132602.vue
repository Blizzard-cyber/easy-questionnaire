<template>
    <div :id="id">
    
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
         const data = [
            { item: '科学技术', count: 23, percent: 0.23 },
            { item: '专利成果', count: 8, percent: 0.08 },
            { item: '人文社科', count: 25, percent: 0.25 },
            { item: '农业科技', count: 6, percent: 0.06 },
            { item: '营销', count: 9, percent: 0.09 },
            { item: '管理', count: 12, percent: 0.12 },
            { item: '产品调研', count: 8, percent: 0.08 },
            { item: '日常调研', count: 9, percent: 0.09 }
        ];
        const chart = new G2.Chart({
            container: this.id,
            forceFit: true,
            height: 300
        });
        chart.source(data, {
            percent: {
                formatter: val => {
                    val = (val * 100) + '%';
                    return val;
                }
            }
        });
        chart.coord('theta', {
            radius: 0.75
        });
        chart.tooltip({
            showTitle: false,
            itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        });
        chart.intervalStack()
            .position('percent')
            .color('item')
            .label('percent', {
                formatter: (val, item) => {
                    return item.point.item + ': ' + val;
                }
            })
            .tooltip('item*percent', (item, percent) => {
                percent = percent * 100 + '%';
                return {
                    name: item,
                    value: percent
                };
            })
            .style({
                lineWidth: 1,
                stroke: '#fff'
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