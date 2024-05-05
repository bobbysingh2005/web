<template>
<div id="eduApp">
<h1>Coming Soon</h1>
<p>
content writing work is ongoing{{ dots }}
</p>
{{ counter(count+1)}}
-- {{ count }}
</div>
</template>

<script>
export default {
name: "EduApp",
data () {
return {
count: 0,
dots: '...',
totalTime: 15
}
},
methods: {
counter(arg){
if(this.totalTime==arg) this.$router.push({ name: 'Home'})
setTimeout(()=>{
let dt = ["",".","..","..."];
this.dots = dt[arg % 4]
this.count = arg;
},1000);
}

},
};//end;

</script>