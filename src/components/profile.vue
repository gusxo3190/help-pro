<template>
    <div class="container">
      <div>

        <div style="display:inline;min-width:1200px">
          <div class="rec">
            <h1>프로필</h1><hr>
            <!--<img src="../assets/logo.png" style="width: 250px;">-->
            <!--<v-image v-bind:img-style="style" ></v-image>-->
            <div>
              <div class="filebox" style="display:inline; margin-left: auto; margin-right: auto">
                <label for="ex_file">사진 변경</label> <input type="file" id="ex_file">
              </div>
              <img src="../assets/asd.png" class="rounded-circle" style="margin-top: 20px; width: 200px; height: 200px" >

              <br><br><br>
              <div style="display:inline; margin-left: auto; margin-right: auto">
                <button type="button" class="btn btn-outline-primary" style="">사진 저장</button>
                <button type="button" class="btn btn-outline-danger" style="">사진 삭제</button>
              </div>
            </div>
          </div>

          <div class="rec">
            <h1>정보</h1><hr>
            <h3>닉네임 <a class="sm"> 임현태</a> <a><i class="fas fa-angle-down" data-toggle="collapse" href="#nickname"></i></a></h3>

            <div class="collapse" id="nickname">
              <div class="input-group" >
                <input type="text" class="form-control" placeholder="Nickname">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">수정</button>
                </div>
              </div>
            </div>
            <br>

            <h3>이메일 <a class="sm"> taesea@5241naver,com</a>
              <a><i class="fas fa-angle-down" data-toggle="collapse"  href="#email"></i></a>
            </h3>
            <div class="collapse" id="email">
              <div class="input-group" >
                <input type="text" class="form-control" placeholder="Email">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">수정</button>
                </div>
              </div>
            </div>
            <br>

            <!--<h3>휴대폰 <a class="sm"> 1003311950</a>-->
              <!--<a><i class="fas fa-angle-down" data-toggle="collapse" href="#phone"></i></a></h3>-->
            <!--<div class="collapse" id="phone">-->
              <!--<div class="input-group" >-->
                <!--<input type="text" class="form-control" placeholder="Phone">-->
                <!--<div class="input-group-append">-->
                  <!--<button class="btn btn-outline-secondary" type="button">수정</button>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <br>
            <hr>
            <h1>회원 탈퇴</h1>
            <div class="container">
              <br>
              <a >정말로 회원 탈퇴를 하시겠습니까?</a>
              <br>
              <button class="btn btn-danger">탈퇴</button>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  import vImage from 'v-image';

  // export default {
  //       name: "profile",
  //   }
  export default {
    components: { vImage },
    data() {
      return {
        image: '',
        add: 'Select a dopeass Image',
        remove: 'Remove this dopeass image',
        style: {
          height: '250px',
          width: '250px',
        },
      };
    },
  };

</script>

<style scoped>
  .rec{
    display:inline;float:left;  padding:10px; margin: 20px; width: 500px; height: 400px;
    /*border:1px solid;*/
    text-align: center;
  }
  h1{
    text-align: center;
  }
  h3{
    margin-top: 15px;
  }
  .sm{
    font-size: 20px;
  }
  /*.filebox label { display: inline-block;*/
    /*padding: .5em .75em;*/
    /*color: white; font-size: inherit;*/
    /*line-height: normal; vertical-align: middle;*/
    /*background-color: blue; cursor: pointer;*/
    /*border-radius: .25em;*/
    /*margin-top: 8px;}*/
  /*.filebox input[type="file"] { !* 파일 필드 숨기기 *!*/
    /*position: absolute; width: 1px;*/
    /*height: 1px; padding: 0; margin: -1px;*/
    /*overflow: hidden; clip:rect(0,0,0,0);*/
    /*border: 0; }*/
i{
  float: right;
}
</style>
