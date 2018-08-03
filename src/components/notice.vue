<template>
  <div class="container" style="margin-top: 20px">
    <div class="row">
      <div class="col-sm">
        <h1>공지사항</h1>
      </div>
      <div class="col-sm">

      </div>
      <div class="col-sm">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="검색...">
          <div class="input-group-append">
            <button class="btn btn-outline-info" type="button"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="margin: 0px; padding: 0px;">

      <table style="width: 100%;" class="table table-hover table-sm custab">
        <thead class="thead-light">
        <tr>
          <th scope="col" class="no" style="width: 5%;">#</th>
          <th scope="col" class="title" >제목</th>
          <th scope="col" class="id" style="width: 18%;">작성자</th>
          <th scope="col" class="date" style="width: 10%;">작성일</th>
          <th scope="col" class="view" style="width: 10%;">조회수</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row" class="no">#</th>
          <td class="title"><a href="#/read_post"><strong>제목</strong></a></td>
          <td class="">
            <a id="btnGroupDrop1" class="dropdown-toggle" data-toggle="dropdown" href="#">
              <img src="../assets/logo.png" class="rounded-circle" style="height: 22px;width: 22px; background-color: azure">
              여기 작성자</a>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">메시지 보내기</a>
              <a class="dropdown-item" href="#">프로필 보기</a>
            </div>
          </td>
          <td class="date">여기 작성일</td>
          <td class="view">여기 조회수</td>
        </tr>
        </tbody>
      </table>

    </div>
    <hr>
    <a href="#/write_post" class="btn btn-outline-dark float-right"><b><i class="fas fa-plus"></i></b>글쓰기</a>

  </div>
</template>

<script>
    export default {
        name: "notice"
    }
</script>

<style scoped>
  .custab{
    border: 1px solid #ccc;
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
    color: black;
  }
  .dropdown-toggle::after {
    display:none;
  }
</style>
