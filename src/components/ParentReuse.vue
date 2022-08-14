<template>
    <div>
    <hr/>
    <h1> Re Use Component check ParentReuse and ChildReuse components </h1>
    <ul>
        <li v-for="item in users" :key="item.email">
            <ChildReuse :item="item" :parentShowData="parentShowData" />
        </li>
    </ul>
    </div>
</template>

<script>
import ChildReuse from "./ChildReuse.vue"

export default {
        name:"ParentReuse",
        components:{
            ChildReuse
        },
        data(){
            return{
                users:[{
                    name:"mujtaba",
                    email:"mujtabatarar@gmail.com"
                },{
                    name:"Danial",
                    email:"danialKhan69@hotmail.com"
                },{
                    name:"Rima",
                    email:"rimatarar@gmail.com"
                }]
            }
        },
        methods:{
            parentShowData(){
                alert("this is parent alert, this is one function that is passed to each child.");
            }
        }
}
</script>