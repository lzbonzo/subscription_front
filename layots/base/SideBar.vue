<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu">
        <li>
          <a href=""><i class="fa fa-book"></i> <span class="nav-label">Продукты</span><span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse" aria-expanded="false" style="">
            <li><a href="?type=magazine">Журналы</a></li>
            <li><a href="?type=subscription">Подписки</a></li>
            <li><a href="?type=certificate">Сертификаты</a></li>
            <li><a href="?type=book">Книги</a></li>
            <li><a href="">Все</a></li>
          </ul>
        </li>
        <li>
          <a href=""><i class="fa fa-shopping-cart"></i><span class="nav-label">Заказы</span></a>
        </li>
        <li>
          <a href=""><i class="fa fa-address-book"></i><span class="nav-label">Адреса</span></a>
        </li>
        <li>
          <a href=""><i class="fa fa-credit-card"></i><span class="nav-label">Платежи</span></a>
        </li>
        <li>
          <a href=""><i class="fa fa-file-text"></i><span class="nav-label">Счета</span></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  }

</script>

<style scoped>

</style>