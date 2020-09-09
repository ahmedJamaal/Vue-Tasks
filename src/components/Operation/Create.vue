<template lang="html">

  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="item.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script lang="js">

  export default  {
    name: 'src-views-create',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      addItem(){
        console.log('hello');
      }
    },
    computed: {

    }
}


</script>

<style scoped>
</style>
