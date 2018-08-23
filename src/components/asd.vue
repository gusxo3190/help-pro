<template>
  <div class="container-fluid">


    <div class="row">
      <div id="wrapper" style="width: 100%">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">

          <ul id="menu-content" class="sidebar-nav out">
            <li class="navbar-brand active"><h2><a href="#/">ProjectHelper</a></h2></li>

            <li  data-toggle="collapse" data-target="#C0" class="navbar-brand collapsed active">
              <a href="#/newproject"><i class="fas fa-project-diagram"></i> 프로젝트</a>
            </li><br>

            <li  data-toggle="collapse" data-target="#C1" class="navbar-brand collapsed active">
              <a href="#"><i class="fas fa-calendar-alt"></i> 일정</a>
            </li><br>
            <ul class="sub-menu collapse" id="C1">
              <li class="active"><a href="#">켈린더</a></li><br>
              <li class="active"><a href="#">간트차트</a></li><br>
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




        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper" >
          <div >
            <nav class="col navbar navbar-expand-lg navbar-dark bg-dark" >
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <a class="navbar-nav mr-auto"></a>
                <form class="form-inline" id="icon">


                  <a class="btn" href="#/profile" >
                    <img src="../assets/logo.png" class="rounded-circle" style="height: 25px;width: 25px; background-color: azure">
                    <a style="font-size: 15px; color: azure ;">프로필</a>
                  </a>

                  <li class="dropdown" >
                    <a class="navbar-brand nav-link dropdown-toggle" href="#" id="alarm" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: azure;">
                      <!--<img src="../assets/img/alarm.png" width="30" height="30" alt="">  --><i class="far fa-bell" style="font-size: 30px;"></i>  <span class="badge" style="background: azure; color: black; ">4</span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="alarm">
                      <a class="dropdown-item" href="#">aa님이 좋아요!</a>
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

          <div class="container-fluid">
            <div class="row">
              <router-view/>

              <!--<div class="col-lg-12">-->
                <!--<h1>Simple Sidebar</h1>-->
                <!--&lt;!&ndash;<p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>&ndash;&gt;-->
                <!--<p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>-->
                <!--<a href="#menu-toggle" class="btn btn-default menu-toggle">Toggle Menu</a>-->
              <!--</div>-->
            </div>
          </div>
        </div>
        <!-- /#page-content-wrapper -->

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
  li {
    display: inline-block;
    margin: 0 10px;
    list-style:none;

  }
  h1, h2 {
    font-weight: normal;
  }
  .navbar-toggler {
    border-color: azure;
  }
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='azure' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }

  /*!
   * Start Bootstrap - Simple Sidebar HTML Template (https://startbootstrap.com)
   * Code licensed under the Apache License v2.0.
   * For details, see http://www.apache.org/licenses/LICENSE-2.0.
   */

  /* Toggle Styles */

  #wrapper {
    padding-left: 0;
     -webkit-transition: all 0.5s ease;
     -moz-transition: all 0.5s ease;
     -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  #wrapper.toggled {
    padding-left: 250px;
  }

  #sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 0;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #000;
     -webkit-transition: all 0.5s ease;
     -moz-transition: all 0.5s ease;
     -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 250px;
  }

  #page-content-wrapper {
    width: 100%;
    position: absolute;
    /*padding: 15px;*/
  }

  #wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-right: -250px;
  }

  /* Sidebar Styles */

  .sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
  }

  .sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999999;
  }

  .sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255,255,255,0.2);
  }

  .sidebar-nav li a:active,
  .sidebar-nav li a:focus {
    text-decoration: none;
  }

  .sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
  }

  .sidebar-nav > .sidebar-brand a {
    color: #999999;
  }

  .sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
  }
/*이게 줄어드는 거임.*/
  @media(min-width:1100px) {
    #wrapper {
      padding-left: 250px;
    }

    #wrapper.toggled {
      padding-left: 0;
    }

    #sidebar-wrapper {
      width: 250px;
    }

    #wrapper.toggled #sidebar-wrapper {
      width: 0;
    }

    #page-content-wrapper {
      /*padding: 20px;*/
      position: static;
    }

    #wrapper.toggled #page-content-wrapper {
      position: static;
      margin-right: 0;
    }
  }

</style>
