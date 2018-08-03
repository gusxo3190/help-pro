<template>
  <div class="container">
    <div class="box" style="border: 1px solid black;">
      <div id="title"  style="margin-right: 55%"> 제목</div>  <a style="display: inline; font-size: 20px">|</a>

      <div class="inbox"> 게시판 이름</div>
      <a id="time">여기 시간</a>

      <hr>
      <div>

        <a><img src="../assets/logo.png" class="rounded-circle" style="height: 40px;width: 40px; background-color: azure">
          <a id="nickname" style="padding: 10px">임현태</a>
        </a>
        <a></a>
      </div>

      <!--여기서부터 내용-->
      <div id="content">
        <h1 >asd</h1>
      </div>

      <!--파일첨부-->
      <div id="fileinput">ㅁㄴㅇ</div>
      <hr>
      <!--댓글-->
      <div id="comment" class="jumbotron jumbotron-fluid">
        <!--이부분은 먼저댓글을 달고 보이게 해야함-->
        <div style="padding: 10px;">
          <a class="" style="margin-right: 10px;">
            <img src="../assets/logo.png" class="rounded-circle" style="height: 40px;width: 40px; background-color: azure">
          </a>
          <div style="display: inline;">
            <strong>임현태</strong><a style="font-size: 10px; padding: 5px;">여기에 입력 시간 </a>
            <div class="comment_button">
              <a  href="#" data-toggle="modal" data-target="#deletecomment">삭제</a>
              <a>|</a>
              <a href="#">수정</a>
            </div>
          </div>
          <p style="margin-left: 7%">야기에 내용</p>
        </div>

        <hr>
        <!--댓글 입력-->
        <form class="form-inline">
          <div  class="form-inline" style="width: 100%;">
            <textarea ></textarea>
            <button class="btn-outline-dark" style=" padding: 13px; width: 10%">등록</button>
          </div>
        </form>
      </div>
    </div>
    <div style="margin-left: 20px">
      <router-link v-bind:to="'/board'"><button type="button" class="btn btn-outline-dark"><i class="fas fa-list-ul"></i>목록</button></router-link>

      <router-link v-bind:to="'/write_post'"><button type="button" class="btn btn-outline-dark"><i class="fas fa-eraser"></i>수정</button></router-link>

      <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#deletepost"><i class="fas fa-trash-alt"></i>삭제</button>
      <router-link v-bind:to="'/write_post'"><button type="button" class="btn btn-outline-dark"><i class="fas fa-pencil-alt"></i>글쓰기</button></router-link>
    </div>

    <div class="modal fade" id="deletepost" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">삭제</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            정말로 삭제 하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">확인</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade" id="deletecomment" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">삭제</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            정말로 삭제 하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">확인</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
    export default {
        name: "read_post"
    };

</script>

<style scoped>
  .box{
    border:1px solid; padding:10px; margin: 20px;
  }
  #title{
    padding: 5px;
    display: inline;
  }
  .inbox{
    /*background-color: azure;*/
    padding: 5px;
    display: inline;
  }
#time{
  padding: 5px;
  float: right; color: #adb5bd;
  font-size: 13px;
}
  #content{
    padding: 10px;
  }
  #fileinput{
    padding: 10px;
  }
  #nickname{
    font-size: 20px;
  }
  textarea{
    width: 89%;
    resize: none;
    margin-right: 10px;
  }
  #comment{
    width: 100%;
    padding: 20px;
    /*background-color: aliceblue;*/
  }
  .comment_button{
    float: right;
    margin-right: 10px;
    font-size: 10px;
  }

</style>
