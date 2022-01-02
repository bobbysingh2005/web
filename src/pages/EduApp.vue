<template>
<div id="EduApp">
<h1>Coming Soon</h1>
<p>
content writing work is ongoing{{ dots }}
</p>
{{ counter(count+1)}}
</div>
</template>

<script>
const timer = {
    el: "#EduApp",
    data () {
        return {
            count: 0,
            dots: '...'
            }
    },
    methods: {
        counter(arg){
            setTimeout(()=>{
                let dt = ["",".","..","..."];
                this.dots = dt[arg % 4]
            this.count = arg;
            },2000);
        }
        
    },
};//end;

export default timer;
</script>