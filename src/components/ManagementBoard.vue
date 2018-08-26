<template>
  <div class="container">
    <h3>매뉴 관리</h3>
    <hr>
    <div class="row">
      <div class="col-lg-3" style="padding: 18.2px">
        <div class="text-center">
          <div id="" class="btn-group ">
            <button class="li_btn color"><i class="fas fa-angle-double-up"></i></button>
            <button class="li_btn color"><i class="fas fa-angle-up"></i></button>
            <button class="li_btn color"><i class="fas fa-angle-down"></i></button>
            <button class="li_btn color"><i class="fas fa-angle-down"></i></button>
            <button class="li_btn"><i class="fas fa-minus"></i><a>삭제</a></button>
            <button class="li_btn"><i class="fas fa-plus"></i><a>추가</a></button>
          </div>
        </div>
        <div >
          <ul class="list-group list-group-flush" style="margin-right: 10px; margin-left: 10px">
            <li type="button" class="list-group-item list-group-item-action">Cras justo odio</li>
            <li type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</li>
            <li type="button" class="list-group-item list-group-item-action">Morbi leo risus</li>
            <li type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</li>
            <li type="button" class="list-group-item list-group-item-action">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
      <div id="div_btn" class="col-lg-1">
        <!--<button id="add_board" class=""><i class="fas fa-plus"></i></button>-->
      </div>
      <div class="col-lg-7" style="padding: 10px;">
        <div>
          <!--<div class="col-lg-3">-->
            <!--<label for="menu_title">메뉴명</label>-->
            <!--<br>-->
            <!--<label for="menu_explan">메뉴설명</label>-->

          <!--</div>-->
          <!--<div class="col-lg-8">-->
            <!--<input type="text"id="menu_title" value="메뉴명" style="width: 100%; float: right;"><br>-->
            <!--<input type="text"id="menu_explan" value="매뉴설명" style="width: 100%; float: right;"><br>-->

          <!--</div>-->
          <form>
            <label for="menu_title">메뉴명</label>
            <input class="mb_info" type="text"id="menu_title" value="메뉴명" style="width: 50%; float: right;"><br>
            <label class="mb_info" for="menu_explan">메뉴설명</label>
            <input type="text"id="menu_explan" value="매뉴설명" style="width: 50%; float: right;"><br>
            <hr>
            <label for="menu_autho">권한설정</label>
            <select  id="menu_autho" style="width: 30%; float: right; margin-right:20%">
              <option selected>선택</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
            <br>
            <label for="com_auth">댓글 허용 <input type="checkbox" id="com_auth"checked /></label>
            <br>
            <label for="lik_aut">추천 허용 <input type="checkbox" id="lik_aut"checked /></label>

          </form>
          <div style="text-align: center">
            <button>저장</button>

          </div>
          <!--<div class="row">-->
            <!--<div class="col-4">-->
              <!--<div class="list-group" id="list-tab" role="tablist">-->
                <!--<a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>-->
                <!--<a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>-->
                <!--<a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>-->
                <!--<a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="col-8">-->
              <!--<div class="tab-content" id="nav-tabContent">-->
                <!--<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">-->
                  <!--ㅁㄴㅇ-->
                <!--</div>-->
                <!--<div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>-->
                <!--<div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>-->
                <!--<div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <div id="app-5">
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage">메시지 뒤집기</button>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ManagementBoard",

  }



</script>

<style scoped>
  div{
    /*border: 1px solid black;*/
  }
  #div_btn{
    text-align: center;
  }
  #add_board{
    height: 150px;
    width: 40px;
  }
  li{
    font-size: 12px;
  }
  .li_btn{
    /*float: left;*/
  }
  .color{
    color: green;
  }
  div{
    position: relative;
  }
  label{
    margin-right: 10px;
  }
  input{
    /*width: 50%; float: right;*/
  }
</style>
