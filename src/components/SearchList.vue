<template>
    <div>
        <h2 class="text-center mt-4">Search Result</h2>
        <div class="result-container">
            <a href="javascript:;" class="sortBy" @click="sortBy('name')"><i class="fas fa-sort"></i> Order by</a>
            <div class="items" v-for="(item) in filtered" :key="item.name">
                <div class="info">
                     {{ item.order }}. {{ item.name }}
                </div>
                <div class="desc">
                    <span>{{ item.description }}</span>
                </div>
                <div class="created">
                    <span><strong>Created at</strong>: {{ item.created_date }}</span>
                </div>
            </div>
            <div class="pagination-container">
                <pagination v-model="page" :per-page="perpage" :records="dataList.length" @paginate="myCallback"/>
            </div>
        </div>
    </div>
</template>

<script>

import dataList from '../../data.json'

export default {
    props: ["searchDataProp"],
    data(){
        return {
            items: dataList,
            page: 1, 
            perpage: 5,
            dataList  
        }
    },
    computed:{
        filtered(){
            return this.items.filter((elem) => {
                return elem.name.toLowerCase().match(this.searchDataProp.toLowerCase());
            })
        }
    },
    methods: {
        sortBy(val){
            this.items.sort((a,b) => a[val] < b[val] ? -1 : 1)
        },
        myCallback(value){           
            const pageSize = value * this.perpage
            this.items = dataList.slice(pageSize - 5, pageSize)
        }
    },
    created(){
       this.myCallback(1)
    }
}
</script>

<style>

    .result-container .sortBy{
        text-decoration: none;
        text-align: right;
        display: block;
        color: #212529;
        margin-bottom: 15px;
    }

    .result-container .items {
        background-color: #ececec;
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 15px;
    }

    .result-container .items span {
        font-size: 13px;
    }

    .pagination-container {
        text-align: center !important;
    }

    .pagination-container .pagination {
        display: inline-flex !important;
    }
    
</style>