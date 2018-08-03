<template>
  <div class="container-fluid">


    <div class="row">
      <!--사이드바매뉴-->
      <div class="menu col-2 <!--bg-dark-->" style="color: azure;min-height: calc(100vh);" >
        <div class="container" style="padding: 15px"><h2 id="p1"><a href="#/">Project</a></h2></div>
        <ul id="menu-content" class="menu-content out">
          <li  data-toggle="collapse" data-target="#C0" class="navbar-brand collapsed active">
            <a href="#"><i class="fas fa-project-diagram"></i> <a href="#/newproject">프로젝트</a></a>
          </li><br>
          <!--<ul class="sub-menu collapse" id="C0">-->
            <!--<li class="active"><a href="#/newproject"> 새 프로젝트</a></li>-->
          <!--</ul>-->

          <li  data-toggle="collapse" data-target="#C1" class="navbar-brand collapsed active">
            <a href="#"><i class="fas fa-calendar-alt"></i> 일정</a>
          </li><br>
          <ul class="sub-menu collapse" id="C1">
            <li class="active"><a href="#">켈린더</a></li><br>
            <li><a href="#">간트차트</a></li><br>
          </ul>

          <li  data-toggle="collapse" class="navbar-brand collapsed active">
            <a href="#"><i class="fab fa-git"></i> 형상관리</a>
          </li><br>

          <li  data-toggle="collapse" data-target="#C3" class="navbar-brand collapsed active">
            <a href="#"><i class="fas fa-clipboard"></i> 게시판</a>
          </li><br>
          <ul class="sub-menu collapse" id="C3">
            <li class="active"><a href="#/ManagementBoard">게시판 관리</a></li>
            <li><a href="#/board">게시판 예제</a></li>
          </ul>

          <!--<li  data-toggle="collapse" data-target="#C4" class="navbar-brand collapsed active">-->
            <!--<a href="#"><i class="fas fa-info-circle"></i> 가이드라인</a>-->
          <!--</li><br>-->

          <li  data-toggle="collapse" data-target="#C5" class="navbar-brand collapsed active">
            <a href="#"><i class="fab fa-servicestack"></i> 서비스 지원</a>
          </li><br>
          <ul class="sub-menu collapse" id="C5">
            <li class="active"><a href="#/notice">공지 사항</a></li><br>
            <li><a href="#/suggestions">건의사항</a></li><br>
            <li><a href="#/qna">자주하는 질문</a></li><br>

          </ul>
        </ul>
      </div>

      <!--위쪽매뉴-->
      <div class="col-10">
        <div class="menu row <!--bg-dark-->" >
          <nav class="col navbar navbar-expand-lg navbar-light " style="position:static;">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <a class="navbar-nav mr-auto"></a>
              <form class="form-inline" id="icon">


                <a class="btn btn-outline-light" href="#/profile" >
                  <img src="../assets/logo.png" class="rounded-circle" style="height: 40px;width: 40px; background-color: azure">
                  <a style="font-size: 25px">프로필</a>
                </a>

                <li class="dropdown" >
                  <a class="navbar-brand nav-link dropdown-toggle" href="#" id="alarm" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: azure;">
                    <!--<img src="../assets/img/alarm.png" width="30" height="30" alt="">  --><i class="far fa-bell" style="font-size: 30px;"></i>  <span class="badge" style="background: azure; color: black; ">4</span>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="alarm">
                    <a class="dropdown-item" href="#">a님이 좋아요!</a>
                    <a class="dropdown-item" href="#">a님이 좋아요!</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">친구추가 허락</a>
                  </div>
                </li>

                <!--<li class="nav-item dropdown ">-->
                  <!--<a class="navbar-brand nav-link dropdown-toggle" href="#" id="chat" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: azure;">-->
                    <!--<img src="../assets/img/chat.png" width="30" height="30" alt="">  Message  <span class="badge" style="background: azure; color: black;">4</span>-->
                  <!--</a>-->
                  <!--<div class="dropdown-menu" aria-labelledby="alarm">-->
                    <!--<a class="dropdown-item" href="#"></a>-->
                    <!--<a class="dropdown-item" href="#"></a>-->
                    <!--<a class="dropdown-item" href="#"></a>-->
                  <!--</div>-->
                <!--</li>-->
                <button class="btn btn-outline-light " type="submit"><i class="fas fa-door-open"></i>Logout</button>
              </form>
            </div>
          </nav>

        </div>
        <div class="row">
          <router-view/>
        </div>
        <beautiful-chat
          :agentProfile="agentProfile"
          :onMessageWasSent="onMessageWasSent"
          :messageList="messageList"
          :newMessagesCount="newMessagesCount"
          :isOpen="isChatOpen"
          :close="closeChat"
          :open="openChat"
          :showEmoji="true"
          :showFile="true" />
        <!--<a href="#" @click.prevent="openChat()">Open the chat window</a>-->

      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "asd",
      data() {
        return {
          agentProfile: {
            teamName: 'Vue Beautiful Chat',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          },
          messageList: [],
          newMessagesCount: 0,
          isChatOpen: false
        }
      },
      methods: {
        sendMessage (msg) {
          if (text.length > 0) {
            this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
            this.messageList.push(msg)
          }
        },
        onMessageWasSent (msg) {
          this.messageList.push(msg)
        },
        openChat () {
          this.isChatOpen = true
          this.newMessagesCount = 0
        },
        closeChat () {
          this.isChatOpen = false
        }
      }
    }
</script>

<style scoped>

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0 20px
  }
  li {
    display: inline-block;
    margin: 0 10px;
    list-style:none;

  }
  a {
    color: aliceblue;
  }
  .dropdown-item{
    color: #000;
  }
  .menu{
    background-color: black;
  }
</style>
