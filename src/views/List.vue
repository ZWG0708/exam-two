<template>
    <div class="list">
        <div class="item" v-for="item in list" :key="item.id">
            <div class="item-com">
                <img :src='item.img' alt="">
                <div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['list'],
        created(){
            console.log(this.list);
            
        }
    }
</script>

<style lang="scss" scoped>
.list{
    width: 100%;
    height: 100%;
    overflow: auto;
    .item{
        border-bottom: 1px solid #ccc;
        padding: 0 10px;
        .item-com{
            display: flex;
            align-items: center;
            img{
                margin: 10px;
                border-radius: 50%;
            }
        }
    }
}
</style>