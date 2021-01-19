<template>
<div>
  <Navbar />
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-8">
          <Search @searchData="searchDataProp" />
          <SearchList :searchDataProp="searchTextData" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>


import Navbar from './components/navigations/Navbar'
import Search from './components/Search'
import SearchList from './components/SearchList'

export default {
  name: 'App',
  data(){
    return {
      searchTextData: ""
    }
  },
  components: {
    Navbar,
    Search,
    SearchList
  },
  methods: {
    searchDataProp(value){
      this.searchTextData = value
    }
  }
}
</script>

<style>

</style>
