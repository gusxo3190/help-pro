<template>

<div class="container-fluid">
  <form>
    <div class="row">
      <div class="col-1">
        <label for="title">제목</label>
      </div>
      <div class="col-11">
        <input class="form-control" type="text" id="title" placeholder="제목을 입력하세요." v-model="title">
      </div>
    </div>
    <div class="container-fluid">
      <textarea class="form-control" rows="20" id="content" v-model="content"></textarea>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <button class="btn-outline-dark" v-on:click="post"><i class="fas fa-play"></i> 보내기</button>
          <button data-toggle="modal" data-target="#preview" class="btn-outline-dark">미리보기</button>
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
    </div>
  </form>



  <!--모달-->
  <div class="container modal fade" id="preview" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document" style="padding: 5px">
      <div class="modal-content" >
        <div class="modal-header">
          <h5 class="modal-title">미리보기</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body" >
          <div class="container-fluid" >
            <div class="row">
              <div class="col-2">보낸사람  </div>
              <div class="col-10"><a>임현태</a></div>
            </div>
            <div class="row">
              <div class="col-2">제목</div>
              <div class="col-10">
                <div class="container-fluid"><a>{{ title }}</a></div>
              </div>
            </div>
            <hr>
            <div class="container-fluid">
              <p style="white-space: pre-line">{{content}}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-outline-secondary" data-dismiss="modal">수정하기</button>
          <button type="button" class="btn-outline-secondary"><i class="fas fa-play"></i> 보내기</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
    export default {
        name: "suggestions",
      data(){
        return{
          title:null,
          content:null,
          form:{
            title:'',
            content:''
          },
          show: true,
        }
      },
      methods:{
        post:function(){
          if(this.title < 1){
            alert('이름 적어주세요')
          }
          if(this.content < 1){
            alert('내용을 적어주세요')
          }
        }
      }
    }
</script>

<style scoped>
a{
  color: black;
}
div{
  /*border: red solid 1px;*/
}
  .row{
    margin-top: 20px;
    padding: 15px;

  }
button{
  margin-right: 10px;
  padding: 5px;
}
  button:hover{
    /*background-color: #c6c8ca;*/
  }

</style>
