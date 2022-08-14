<template>
  
    <router-link to="/"></router-link>
    <router-link to='/helloworld'>Hello World</router-link> <br/>
    <router-link to='/newcomponent'>New Component</router-link> <br/>
    <router-link to='/buttonComponent'>Button Component</router-link> <br/>
    <router-link to='/lecTen'>Lec Ten</router-link> <br/>
    <router-link to='/lecTen'>Lec Ten</router-link> <br/>
    <router-link to='/lecEleven'>Lec Eleven</router-link> <br/>
    <router-link to='/lecTwelve'>Lec Twelve</router-link> <br/>
    <router-link to='/ifCondition'>If Condition</router-link> <br/>
    <router-link to='/loopList'>Loop List</router-link> <br/>
    <router-link to='/parentComponent'>Parent Component</router-link> <br/>
    <router-link to='/parentReuse'>Parent Reuse</router-link> <br/>
    <router-link to='/htmlBinding'>Html Binding</router-link> <br/>
    <router-link to='/classBinding'>Class binding</router-link> <br/>
    <router-link to='/propsTwo'>Props Two</router-link> <br/>
    <router-link to='/refComponent'>Ref Components</router-link> <br/>
    <router-link to='/simpleForm'>Simple Form</router-link> <br/>
    <router-link to='/upperLevelDataParent'>Upper Level Data Transfer</router-link> <br/>
    <router-link to='/completeForm'></router-link> <br/>
    <router-link to='/formValidation'></router-link> <br/>
    <router-link to='/formModifier'></router-link> <br/>
    <router-link to='/nonPropsDataParent'></router-link> <br/>

    <router-view></router-view>
  
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
