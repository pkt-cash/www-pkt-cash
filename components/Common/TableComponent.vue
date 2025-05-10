<template>
<table id="tableComponent" class="table table-bordered table-striped">
  <thead>
    <tr>
      <th  v-for="field in fields" :key='field' @click="sortTable(field)" > 
        {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
       </th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="item in filteredList" :key='item'>
      <td v-for="field in fields" :key='field'>{{item[field]}}</td>
    </tr>
  </tbody>
</table> 
</template>

<script>
export default {
  name: "TableComponent",
};
</script>

<style lang="scss">
.c-common-simple {
  & .container {
    
  }
}
</style>