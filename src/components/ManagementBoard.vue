<template>
  <div class="container">
    <h3 style="margin-top: 20px">게시판 관리</h3>
    <hr>
    <a href="#" id="createboard" class="btn btn-outline-dark float-right" data-toggle="modal" data-target="#newboard"><b><i class="fas fa-plus"></i></b>게시판 생성</a>

    <table style="width: 100%;" class="table  table-hover table-sm custab">
      <thead class="thead-light">
      <tr>
        <th scope="col" class="no" style="width: 5%;">#</th>
        <th scope="col" class="title" >게시판명</th>
        <th scope="col" class="id" style="width: 10%;">등록자</th>
        <th scope="col" class="date" style="width: 10%;">등록일</th>
        <th scope="col" class="mod_del" style="width: 15%;">수정 삭제</th>

      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row" class="no">#</th>
        <td class="title"><a href="#/board">게시판명</a></td>
        <td class="id"><a href="#">등록자</a></td>
        <td class="date">등록일</td>
        <td class="mod_del">

          <router-link v-bind:to="'/write_post'"><button class=" btn-outline-primary btn-sm" href="#/write_post">수정</button></router-link>

          <button class=" btn-outline-danger btn-sm" data-toggle="modal" data-target="#deleteproject">삭제</button>
        </td>
      </tr>
      <tr>
        <th scope="row" class="no">#</th>
        <td class="title">게시판명</td>
        <td class="id">등록자</td>
        <td class="date">등록일</td>
        <td class="mod_del">
          <button class=" btn-outline-primary btn-sm">수정</button>
          <button class=" btn-outline-danger btn-sm">삭제</button>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="row align-items-center justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#"> << </a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#"> >> </a></li>
        </ul>
      </nav>
    </div>

    <!--게시판 생성 모달-->
    <div class="modal fade" id="newboard" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">게시판 생성</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div class="input-group mb-3">
              <div class="input-group-prepend input-group-lg">
                <span class="input-group-text" id="basic-addon1">게시판 명</span>
              </div>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>

            <div>

            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">생성</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
          </div>
        </div>
      </div>
    </div>

    <!--수정-->

    <!--삭제-->
    <div class="modal fade" id="deleteproject" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">프로젝트 삭제</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            정말로 프로젝트를 삭제 하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger">삭제</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
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
  #createboard{
    margin-bottom: 10px;
  }
  .custab{
    /*border: 1px solid #ccc;*/
    padding: 5px;
    margin: 5% 0;
    box-shadow: 3px 3px 2px #ccc;
    transition: 0.5s;
  }
  .custab:hover{
    box-shadow: 3px 3px 0px transparent;
    transition: 0.5s;
  }
  a{
    color: #000;
  }
  .dropdown-toggle::after {
    display:none;
  }


</style>
