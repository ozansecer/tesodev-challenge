<template>
    <div>
        <h2 class="text-center mt-4">Search</h2>
        <div class="searchContainer">
            <input type="text" class="form-control" placeholder="Search" v-model="searchText" @input="changeText">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchText: ""
        }
    },
    methods: {
        changeText(){
            this.$emit("searchData", this.searchText);
        }
    }
}
</script>


<style scoped>
    .searchContainer input {
        border-radius: 10px;
        background-color: #ececec;
        border: none;
    }
</style>