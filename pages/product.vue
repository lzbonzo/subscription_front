<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="ibox">
        <div class="ibox-title">
          <h5>Продукты</h5>
<!--          <div class="ibox-tools">-->
<!--            <a href="{% url 'product-create' %}{% if type %}?type={{ type }}{% endif %}" class="btn btn-primary btn-xs">Добавить запись</a>-->
<!--          </div>-->
        </div>
        <div class="ibox-content">
          <input type="text" class="form-control form-control-sm m-b-xs" id="filter" placeholder="Поиск по названию">
          <table class="footable table table-stripped" data-page-size="20" data-filter=#filter>
            <thead>
            <tr>
              <th class="footable-sortable footable-sorted-desc">Название<span class="footable-sort-indicator"></span></th>
              <th>Тип</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="product in products" class="" style="">
              <td class="footable-visible"><a class="text-primary" href="#"><span class="footable-toggle"></span>{{ product.name }}</a></td>
              <td class="footable-visible">{{ types[product.type] }}</td>
              <td>
                <button class="btn btn-xs btn-white" data-toggle="modal" data-target="#DeleteModal"><i class="fa fa-trash"></i> </button>
              </td>
            </tr>
<!--            <div class="modal inmodal" id="DeleteModal" tabindex="-1" role="dialog"  aria-hidden="true">-->
<!--              <div class="modal-dialog">-->
<!--                <div class="modal-content animated fadeIn">-->
<!--                  <div class="modal-content">-->
<!--                    <div class="modal-body">-->
<!--&lt;!&ndash;                      <p><strong>Точно желаете удалить {{ product.name }}?</strong></p>&ndash;&gt;-->
<!--                    </div>-->
<!--                    <div class="modal-footer">-->
<!--                      <button type="button" class="btn btn-white" data-dismiss="modal">Отменить</button>-->
<!--&lt;!&ndash;                      <button type="button" onclick="deleteProduct('{{ product.uid }}')" class="btn btn-primary btn-danger">Удалить</button>&ndash;&gt;-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

            </tbody>
            <tfoot>
            <tr class="footable-even">
              <td colspan="6" class="footable-visible">
                <ul class="pagination float-right">
                  <li class="footable-page-arrow disabled">
                    <a data-page="first" href="#first">«</a>
                  </li>
                  <li class="footable-page-arrow disabled">
                    <a data-page="prev" href="#prev">‹</a>
                  </li>
                  <li class="footable-page active">
                    <a data-page="0" href="#">1</a>
                  </li>
                  <li class="footable-page">
                    <a data-page="1" href="#">2</a>
                  </li>
                  <li class="footable-page-arrow">
                    <a data-page="next" href="#next">›</a>
                  </li>
                  <li class="footable-page-arrow">
                    <a data-page="last" href="#last">»</a>
                  </li>
                </ul>
              </td>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "product",
  data() {
    return {
      products: [],
      types: {
        1: "Журнал АиГ",
        2: "Журнал НиП",
        3: "Подписка АиГ",
        4: "Подписка НиП",
        5: "Сертификат АиГ",
        6: "Сертификат НиП",
        7: "Книга",
      }
    }
  },
  mounted() {
     fetch(
        'http://localhost:8060/api/v1/product/'
    ).then(res => res.json()).then(json => {this.products = json.results});
    $(document).ready(function() {
      $('.footable').footable();
    });

  }
}
// function deleteProduct(uid) {
//   queryParam = location.search;
//   $.ajax({"url": "{% url 'product-list' %}" + uid + "/delete/", "method": "post", headers: {
//       'X-CSRFToken': $('[name="csrfmiddlewaretoken"]').val()}, "success": function (data){
//       location.href="{% url 'product-list' %}" + queryParam;
//     }}
//   );
// }


</script>
<!--<script src="assets/js/plugins/footable/footable.all.min.js"></script>-->

<style scoped>

</style>